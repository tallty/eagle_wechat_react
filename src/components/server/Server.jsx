import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Button } from 'antd'
import classnames from 'classnames';
import styles from './Server.less';
import { ServerList } from './server_list/ServerList';
// import './Server.less'

export class Server extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className={styles.server_content}>
        <p className={styles.server_title}>服务器监控</p>
        <Row>
          <Col>
            <ServerList />
          </Col>
        </Row>
      </div>
    );
  }
}

Server.defaultProps = {
}

Server.propTypes = {
}