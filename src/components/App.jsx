import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import classnames from 'classnames';
import styles from './App.less';
import { Toolbar } from './Toolbar/Toolbar'

export class App extends Component {
  state = {}

  render() {
    let tab_height = document.body.clientHeight
    return (
      <div className={styles.app_content}>
        <Toolbar/>

        <Row className={styles.content}>
          <Col span={16} style={{height: "100%"}}>
            {/*接口调用*/}
            <Col span={24} className={styles.interface_container} >
              <div className={styles.bg_border}>接口调用</div>
            </Col>
            {/*数据处理*/}
            <Col span={12} className={styles.data_container}>
              <div className={styles.bg_border}>数据处理图</div>
            </Col>
            {/*服务器监控*/}
            <Col span={12} className={styles.service_container}>
              <div className={styles.bg_border}>服务器监控</div>
            </Col>
          </Col>
          {/*实况数据*/}
          <Col span={8} className={styles.real_time_container}>
            <div className={styles.bg_border}>实况数据</div>
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