import React, { Component } from 'react'
import css from './interface_invoke.less'
import { Row, Col } from 'antd'
import { LineChart } from './LineChart'
import { PieChart } from './PieChart'

export class InterfaceInvokeContainer extends Component {
	render() {
		return (
			<div className={css.container}>
				<div className={css.title}>接口调用</div>
				<Row>
					<Col span={12} className={css.border_content}>
					</Col>

					<Col span={12}>

					</Col>
				</Row>
			</div>
		)
	}
}
