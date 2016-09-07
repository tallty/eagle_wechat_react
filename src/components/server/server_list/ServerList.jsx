import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Button } from 'antd'
import classnames from 'classnames';
import styles from './ServerList.less';
// import './Server.less'

export class ServerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
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

        <Row gutter={20} className={styles.server_list_body}>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_one}>
              云平台接口服务
            </Col>
          </Col>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_two}>
            8%
            </Col>
          </Col>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_three}>
            8%
            </Col>
          </Col>
          <Col span={6}>
            <Col span={24} className={styles.server_list_body_col_four}>
            8%
            </Col>
          </Col>
        </Row>

        <Row gutter={20} className={styles.server_list_body}>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_one}>
              交通项目
            </Col>
          </Col>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_two}>
            8%
            </Col>
          </Col>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_three}>
            8%
            </Col>
          </Col>
          <Col span={6}>
            <Col span={24} className={styles.server_list_body_col_four}>
            8%
            </Col>
          </Col>
        </Row>

        <Row gutter={20} className={styles.server_list_body}>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_one}>
              数据处理
            </Col>
          </Col>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_two}>
            8%
            </Col>
          </Col>
          <Col span={6} >
            <Col span={24} className={styles.server_list_body_col_three}>
            8%
            </Col>
          </Col>
          <Col span={6}>
            <Col span={24} className={styles.server_list_body_col_four}>
            8%
            </Col>
          </Col>
        </Row>

      </div>
    );
  }
}

ServerList.defaultProps = {
}

ServerList.propTypes = {
}