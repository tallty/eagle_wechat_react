import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Button } from 'antd'
import classnames from 'classnames';
import styles from './Time.less';
// import './Time.less'

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className={styles.Time_content}>
        <Row>
          <Col span={12} className={styles.time_data}>
            2016.09.07
          </Col>
          <Col span={12} className={styles.time_week} >
            星期三
          </Col>
          <Col span={24} className={styles.time_clock}>
            10:50:38
          </Col>
        </Row>
      </div>
    );
  }
}

Time.defaultProps = {
}

Time.propTypes = {
}