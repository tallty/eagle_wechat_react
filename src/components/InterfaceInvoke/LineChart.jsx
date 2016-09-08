import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import css from './interface_invoke.less'
import SuperAgent from 'superagent'
import echarts from 'echarts'
import { Chart } from '../Chart/Chart'

export class LineChart extends Component {
	state = {
		option: {}
	}

	componentDidMount() {
		SuperAgent.get('http://mcu.buoyantec.com/monitor/interfaces.json')
							.set('Accept', 'application/json')
							.end((error, response) => {
								let legend_data = []
								let xData = []
								let seriesData = []

								response.linechart.forEach((item, index, array) => {
									let name = item.name
									legend_data.push( name )
									for ( let info of item.infos ) {
										xData.length === 0 ? xData.push(info.time) : null
										seriesData.push({
											name: name,
					            type:'line',
					            stack: '总量',
					            itemStyle: {normal: {areaStyle: {type: 'default'}}},
					            data: info.count
										})
									}

									let option = {
							      tooltip : { trigger: 'axis' },
							      legend: {
							        x: 'left', y: 'top',
							        textStyle: {color: '#fff'},
							        data: legend_data
							      },
							      grid: {
							        show: false, borderWidth: 0, x: 50, x2: 15, y2: 35,
							        containLabel: true
							      },
							      xAxis : [{
							        type: 'category',
							        boundaryGap: false,
							        splitLine: {show: false},
							        axisLabel: {textStyle: {color: '#fff'}},
							        data : xData
							      }],
							      yAxis : [
							        {type: 'value', splitLine: {show: false},
							        axisLabel: {textStyle: {color: '#fff'}}}
							      ],
							      series : seriesData
							    }

								})
								
								const node = this.refs.chart
								let myChart = echarts.init(node)
								myChart.setOption(option)
							})
	}

	render() {
		return (
			<div style={{width: this.props.width, height: this.props.height}} ref="chart"></div>
		)
	}
}