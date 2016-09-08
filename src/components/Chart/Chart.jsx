import React, { Component, PropTypes } from 'react'
import echarts from 'echarts'

export class Chart extends Component {
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

		if (this.props.option) {
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

Chart.proTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	option: PropTypes.object,
	event: PropTypes.func
};

Chart.defaultProps = {
	height: 300
}