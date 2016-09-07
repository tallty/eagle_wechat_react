import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import classnames from 'classnames'
import styles from './App.less'
import { Time } from './time/Time'
import { InterfaceInvokeContainer } from './InterfaceInvoke/InterfaceInvokeContainer'
import { DataProcessContainer } from './DataProcess/DataProcessContainer'

export class App extends Component {
  state = {}

  render() {
    let tab_height = document.body.clientHeight
    return (
      <div className={styles.app_content} style={{height: tab_height, overflow: "auto"}}>
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

        <div className="hbox">
          <div className="flex3">
            <div className="vbox">
              {/* 接口调用 */}
              <div className="flex1">
                <InterfaceInvokeContainer/>
              </div>
              <div className="hbox">
                <div className="flex1">
                  <DataProcessContainer/>
                </div>
                <div className="flex1">服务器监控</div>
              </div>
            </div>
          </div>
          <div className="flex1">实况数据</div>
        </div>

      </div>
    )
  }
}

App.defaultProps = {
}

App.propTypes = {
}