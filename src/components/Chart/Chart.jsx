import React, { Component, PropTypes } from 'react'
import echarts from 'echarts'

export class Chart extends Component {
	// chart 主题色
	color = [
    "#ff7f50",
    "#87cefa",
    "#D274CE",
    "#32cd32",
    "#6495ed",
    "#ff69b4",
    "#ba55d3",
    "#cd5c5c",
    "#ffa500",
    "#40e0d0",
    "#1e90ff",
    "#ff6347",
    "#7b68ee",
    "#00fa9a",
    "#ffd700",
    "#6699FF",
    "#ff6666",
    "#3cb371",
    "#b8860b",
    "#30e0e0"
]

	componentDidMount() {
		const { event } = this.props
		this.drawChart()
		// 添加官方事件
		if (event) {
			event(this.chart)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { event } = this.props
		if (this.props.option) {
			this.drawChart()
			// 添加官方事件
			if (event) {
				event(this.chart)
			}
		}
	}

	componentWillUnmount() {
		this.chart.dispose()
	}

	drawChart() {
		const node = this.refs.chart
		let option = this.props.option
		if (option) {
			option.color = this.color
			this.chart = echarts.init(node)
			this.chart.setOption(option)
		}
	}

	render() {
		const { height, width } = this.props
		return (
			<div ref="chart" style={{height, width}}></div>
		)
	}
}

Chart.proTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	option: PropTypes.object,
	event: PropTypes.func
};

Chart.defaultProps = {
	height: 300
}