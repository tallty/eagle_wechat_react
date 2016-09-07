import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import classnames from 'classnames';
import styles from './App.less';
import { Time } from './time/Time';
import { Actually } from './actually/Actually';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let tab_height = document.body.clientHeight
    return (
      <div className={styles.App_content} style={{height: tab_height, overflow: "auto"}}>
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
        <Row className={styles.chart_component}>
          <Col span={18} className={styles.chart_component_left}>
            <Row className={styles.chart_component_left_header}>
              <Col span={24} className={styles.chart_component_port}>
                接口调用
              </Col>
            </Row>
            <Row>
              <Col span={12} className={styles.chart_component_data}>
                数据处理图
              </Col>
              <Col span={12} className={styles.chart_component_server}>
                服务器监控
              </Col>
            </Row>
          </Col>
          <Col span={6} className={styles.chart_component_real_time}>
            <Actually />
          </Col>
        </Row>
      </div>
    );
  }
}

App.defaultProps = {
}

App.propTypes = {
}