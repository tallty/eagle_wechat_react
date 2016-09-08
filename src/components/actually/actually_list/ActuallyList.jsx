import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Table } from 'antd'
import classnames from 'classnames';
import styles from './ActuallyList.less';
// import './Actually.less'


const columns = [{
  title: '地点',
  dataIndex: 'name',
}, {
  title: '温度',
  dataIndex: 'tempe',
}, {
  title: '风速',
  dataIndex: 'wind_speed',
}, {
  title: '湿度',
  dataIndex: 'humi',
}, {
  title: '雨量',
  dataIndex: 'rain',
}, {
  title: '气压',
  dataIndex: 'pressure',
}, {
  title: '能见度',
  dataIndex: 'visibility',
}]

export class ActuallyList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    // console.log(this.props.stations);
  }

  render() {
    const data = this.props.stations
    return (
      <div className={styles.ActuallyList_content}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}

ActuallyList.defaultProps = {
}

ActuallyList.propTypes = {
}