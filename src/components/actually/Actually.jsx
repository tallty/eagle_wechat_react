import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Button } from 'antd'
import classnames from 'classnames';
import styles from './Actually.less';
import { ActuallyList } from './actually_list/ActuallyList';
// import './Actually.less'

export class Actually extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className={styles.Actually_content}>
        <p className={styles.actually_title}>实况数据</p>
        <Row>
          <Col span={24} className={styles.actually_list}>
            <ActuallyList />
          </Col>
        </Row>
      </div>
    );
  }
}

Actually.defaultProps = {
}

Actually.propTypes = {
}