import React, { Component } from 'react'
import styles from './toolbar.less'
import { Row, Col } from 'antd'
import { Time } from '../Time/Time'

export class Toolbar extends Component {
	render() {
		return (
		  <Row className={styles.header}>
        <Col span={4} className={styles.logo_pic_content}>
          <img src="src/images/logo.png" alt="" className={styles.logo_pic} />智慧气象服务云平台
        </Col>
        <Col span={6} className={styles.amount} >59,235,594</Col>
        <Col span={5} className={styles.today_amount}><img src="src/images/up_icon.svg" alt="" className={styles.up_icon} />175,666</Col>
        <Col span={5} className={styles.upload_amount}><img src="src/images/down_icon.svg" alt="" className={styles.down_icon} />2,077,777</Col>
        <Col span={4} className={styles.time_component}>
          <Time />
        </Col>
      </Row>
		)
	}
}
