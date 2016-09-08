import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import { Actually } from './actually/Actually'
import { Time } from './time/Time'
import { Server } from './server/Server'
import classnames from 'classnames';
import styles from './App.less';
import { Toolbar } from './Toolbar/Toolbar'
import { InterfaceInvoke } from './InterfaceInvoke/InterfaceInvoke'
import { DataProcess } from './DataProcess/DataProcess'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let tab_height = document.body.clientHeight
    return (

      <div className={styles.app_content}>
        <Toolbar/>
        <Row className={styles.content}>
          <Col span={17} style={{height: "100%"}}>
            {/*接口调用*/}
            <Col span={24} className={styles.interface_container} >
              <div className={styles.bg_border}>
                <InterfaceInvoke/>
              </div>
            </Col>
            {/*数据处理*/}
            <Col span={12} className={styles.data_container}>
              <div className={styles.bg_border}>
                <DataProcess/>
              </div>
            </Col>
            {/*服务器监控*/}
            <Col span={12} className={styles.service_container}>
              <div className={styles.bg_border}>
                <Server />
              </div>
            </Col>
          </Col>
          {/*实况数据*/}
          <Col span={7} className={styles.real_time_container}>
            <div className={styles.bg_border}>
              <Actually />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

App.defaultProps = {
}

App.propTypes = {
}