import React, { Component, ProTypes } from 'react'
import echarts from 'echarts'

export class Chart extends Component {
	static proTypes = {
		height: ProTypes.number,
		width: ProTypes.number,
		option: ProTypes.object,
		event: ProTypes.func
	};

	static defaultProps = {
		height: 300
	}

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

		if (this.props.options) {
			this.chart = echarts.init(node)
			this.chart.setOption(this.props.option)
		}
	}


	render() {
		const { height, width } = this.props
		return (
			<div ref="chart" style={{height, width}}></div>
		)
	}
}
