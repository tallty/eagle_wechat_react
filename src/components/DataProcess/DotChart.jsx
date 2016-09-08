import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import css from './data_process.less'
import SuperAgent from 'superagent'
import echarts from 'echarts'

export class DotChart extends Component {
	render() {
		return (
			<div style={{width: this.props.width, height: this.props.height}}></div>
		)
	}
}
