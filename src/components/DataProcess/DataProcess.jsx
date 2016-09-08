import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import css from './data_process.less'
import SuperAgent from 'superagent'
import { Chart } from '../Chart/Chart'

export class DataProcess extends Component {
	timer = null
	state = {
		height: 100,
		width: 100,
		option: {
      tooltip: {
        trigger: 'axis',
        axisPointer:{
          show: true, type: 'cross', lineStyle: {type: 'dashed', width: 1}
        }
      },
      legend: {data: [], textStyle: {color: '#fff'}},
      grid: {show: false, left: 2,bottom: 10, right: 10, containLabel: true},
      xAxis : [
        {
          type: 'time', data: [], splitLine: {show: false},
          axisLabel: { textStyle: {color: '#fff'} }
        }
      ],
      yAxis : [{type : 'value', splitNumber: 3, axisLabel: {textStyle: {color: '#fff'}}}],
      animation: false,
      series : []
	  }
	}

	componentDidMount() {
		let row = document.getElementById("chart_div")
		let width = row.clientWidth
		let height = row.clientHeight

		this.setState({
			height: height,
			width: width
		})
		
		this.processData()
		this.timer = setInterval(this.processData.bind(this), 10000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	processData() {
		SuperAgent
		.get('http://mcu.buoyantec.com/monitor/task_logs.json')
		.set('Accept', 'application/json')
		.end((error, response) => {
			let legend_data = []
			let xData = []
			let series = []

			response.body.task_logs.forEach((item, y, body) => {
				legend_data.push(item.name)

				let _data = []
				item.logs.forEach((log, x, logs) => {
					if (y === 0) {
						xData.push(log.time)
					}
					_data.push([log.time, log.period, log.spent])
				})

				series.push({
          name: item.name,
          type:'scatter',
          tooltip : {
            trigger: 'item',
            formatter : function (params) {
                let date = new Date(params.value[0])
                return params.seriesName + '<br/>'
                       + '开始时间:'
                       + date.getFullYear() + '-'
                       + (date.getMonth() + 1) + '-'
                       + date.getDate() + ' '
                       + date.getHours() + ':'
                       + date.getMinutes()
                       + '<br/>'
                       + '耗时:' + params.value[2];
            },
            axisPointer:{type: 'cross', show: true}
          },
          symbol: 'circle',
          symbolSize: function (value){
            let v = Math.round(value[2]);
            if (v < 5) {
              return 5;
            } else if (v > 5 && v < 10){
              return 10;
            } else if (v > 10 && v < 20){
              return 14;
            } else if (v > 20 && v < 30){
              return 17;
            } else if (v > 30 && v < 70){
              return 20;
            } else {
              return 25;
            }
          },
          data: _data
	      })
			})

			console.log(legend_data)
			console.log(xData)
			console.log(series)

			let option = this.state.option
			option.legend.data = legend_data
			option.xAxis.data = xData
			option.series = series

			this.setState({ option: option })
		})
	}

	render() {
		return (
			<div className={css.container}>
				<div className={css.title}>数据处理情况</div>
				<div id="chart_div" className={css.chart_div}>
					<Chart {...this.state}/>
				</div>
			</div>
		)
	}
}
