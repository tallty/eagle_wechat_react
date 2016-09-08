import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Button } from 'antd'
import classnames from 'classnames'
import styles from './ServerList.less'
// import './Server.less'

export class ServerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    console.log(this.props.machines)
  }

  showList(){
    let List = []
    let key = 0

    this.props.machines.forEach((machine, index, machines) => {
      List.push(
        <Row key={key} gutter={20} className={styles.server_list_body}>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_one}>
              {machine.name}
            </Col>
          </Col>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_two}>
            {machine.cpu_percent}
            </Col>
          </Col>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_three}>
            {machine.memory_percent}
            </Col>
          </Col>
          <Col span={6}>
            <Col span={24} className={styles.server_list_body_col_four}>
            {machine.disk_percent}
            </Col>
          </Col>
        </Row>
      )
      key++
    })
    return List
  }

  render() {
    const list = this.showList()
    return (
      <div className={styles.serverList_content}>
        <Row className={styles.server_list_header} >
          <Col span={6}>
            服务器名称
          </Col>
          <Col span={6}>
            CPU
          </Col>
          <Col span={6}>
            内存
          </Col>
          <Col span={6}>
            硬盘
          </Col>
        </Row>
        <Row className={styles.scroll_server}>
          {list}
        </Row>
      </div>
    );
  }
}

ServerList.defaultProps = {
}

ServerList.propTypes = {
}