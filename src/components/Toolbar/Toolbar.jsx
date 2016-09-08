import React, { Component } from 'react'
import styles from './toolbar.less'
import { Row, Col } from 'antd'
import { Time } from '../time/Time'
import { Statistics } from './Statistics'

export class Toolbar extends Component {
	render() {
		return (
		  <Row className={styles.header}>
        <Col span={4} className={styles.logo_pic_content}>
          <img src="src/images/logo.png" alt="" className={styles.logo_pic} />智慧气象服务云平台
        </Col>
        <Statistics />
        <Col span={4} className={styles.time_component}>
          <Time />
        </Col>
      </Row>
		)
	}
}
