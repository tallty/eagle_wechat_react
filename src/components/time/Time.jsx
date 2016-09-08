import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Button } from 'antd'
import classnames from 'classnames';
import styles from './Time.less';
// import './Time.less'

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now_time: new Date()
    }
  }

  componentDidMount() {
    setInterval(this.timerCallback.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval()
  }

  // 定时器执行函数
  timerCallback() {
    var now_time = new Date()
    this.setState({now_time:now_time})
  }

  timeStamp2String(datetime){
      let list = []
      let key = 0

      var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
      var year = datetime.getFullYear();
      var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
      var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
      var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();

      list.push(
        <Row key={key}>
          <Col span={12} className={styles.time_data}>{year}.{month}.{date}</Col>
          <Col span={12} className={styles.time_week} >{today[datetime.getDay()]}</Col>
          <Col span={24} className={styles.time_clock}>{hour}:{minute}:{second}</Col>
        </Row>
      )
      return list;
    }

  render() {
    var time_comment = this.timeStamp2String(this.state.now_time)
    return (
      <div className={styles.Time_content}>
        {time_comment}
      </div>
    );
  }
}

Time.defaultProps = {
}

Time.propTypes = {
}