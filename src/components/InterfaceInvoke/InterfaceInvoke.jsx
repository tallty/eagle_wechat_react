import React, { Component } from 'react'
import css from './interface_invoke.less'
import { Row, Col } from 'antd'
import SuperAgent from 'superagent'
import { Chart } from '../Chart/Chart'

export class InterfaceInvoke extends Component {
	state = {
		height: 100,
		width: 100,
		line_option: {
		  tooltip : { trigger: 'axis' },
		  legend: {
		    x: 'left', 
		    y: 'top',
		    textStyle: {color: '#fff'},
		    data: []
		  },
		  grid: {
		    show: false, 
		    borderWidth: 0, 
		    x: 5, 
		    x2: 10, 
		    y2: 10,
		    containLabel: true
		  },
		  xAxis: [{
		    type: 'category',
		    boundaryGap: false,
		    splitLine: {show: false},
		    axisLabel: {textStyle: {color: '#fff'}},
		    data : []
		  }],
		  yAxis: [{
	    	type: 'value', 
	    	splitLine: {show: false},
	    	axisLabel: {textStyle: {color: '#fff'}}
	    }],
		  series: []
		},
		pie_option: {
	    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	    	show: false,
        x: 'left',
        data:[]
	    },
	    grid: {
		    show: false, 
		    borderWidth: 0, 
		    x: 5, 
		    x2: 5,
		    y2: 5,
		    containLabel: true
		  },
	    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '45%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '75%'],
            data:[]
        }
	    ]
		}
	}
	timer = null

	componentDidMount() {
		let row = document.getElementById("interface_row")
		let width = row.clientWidth / 2
		let height = row.clientHeight

		this.setState({
			height: height,
			width: width
		})

		this.processData()
		// 设置定时器
		this.timer = setInterval(this.processData.bind(this), 10000)
	}

	componentWillMount() {
		clearInterval(this.timer)
	}

	processData() {
		SuperAgent
			.get('http://mcu.buoyantec.com/monitor/interfaces.json')
			.set('Accept', 'application/json')
			.end((err, res) => {
				let result = res.body
				// 折线图
				let _line_option = this.getLineOption(result)
				// 饼图
				let _pie_option = this.getPieOption(result)

				this.setState({
		    	line_option: _line_option,
		    	pie_option: _pie_option
		    })
			})
	}

	getLineOption(result) {
		let legend_data = []
		let xData = []
		let seriesData = []

		result.linechart.forEach((item, index, array) => {
			let name = item.name
			legend_data.push( name )

			let data = []
			for ( let info of item.infos ) {
				if (index === 0) {
					xData.push(info.time)
				}
				data.push(info.count)

			}
			seriesData.push({
				name: name,
        type:'line',
        stack: '总量',
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data: data
			})
		})
		// 折线图
		let _line_option = this.state.line_option
		_line_option.legend.data = legend_data
		_line_option.xAxis[0].data = xData
		_line_option.series = seriesData

		return _line_option
	}

	getPieOption(result) {
		let legend_data = []
		let seriesDataOut = []
		let seriesDataIn = []
		// 外层
		for (let item of result.api_user_statisc) {
			legend_data.push(item.company)
			seriesDataOut.push({ value: item.count, name: item.company })
		}
		// 内层
		result.product_statics.forEach((item, index, obj) => {
			seriesDataIn.push({ value: item.all_count, name: item.name, selected: index === 1 })
		})
		// option
		let option = this.state.pie_option
		option.legend.data = legend_data
		option.series[0].data = seriesDataIn
		option.series[1].data = seriesDataOut

		return option
	}

	render() {
		const { height, width, line_option, pie_option } = this.state
		return (
			<div className={css.container}>
				<div className={css.title}>接口调用</div>
				<Row id="interface_row">
					<Col span={12} className={css.left}>
						<Chart height={height} width={width} option={line_option}/>
					</Col>
					<Col span={12} className={css.right}>
						<Chart height={height} width={width} option={pie_option}/>
					</Col>
				</Row>
			</div>
		)
	}
}
