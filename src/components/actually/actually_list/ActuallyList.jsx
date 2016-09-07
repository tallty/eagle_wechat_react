import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Table } from 'antd'
import classnames from 'classnames';
import styles from './ActuallyList.less';
// import './Actually.less'


const columns = [{
  title: '地点',
  dataIndex: 'site',
}, {
  title: '温度',
  dataIndex: 'temperature',
}, {
  title: '风速',
  dataIndex: 'wind',
}, {
  title: '湿度',
  dataIndex: 'humidity',
}, {
  title: '雨量',
  dataIndex: 'rainfall',
}, {
  title: '气压',
  dataIndex: 'pressure',
}, {
  title: '能见度',
  dataIndex: 'visibility',
}]

const data = [{
  key: '1',
  site: '青浦',
  temperature: 32,
  wind: 23,
  humidity: 34,
  rainfall: 23,
  pressure: 12,
  visibility: 90,
}, {
  key: '2',
  site: '金山',
  temperature: 32,
  wind: 23,
  humidity: 34,
  rainfall: 23,
  pressure: 12,
  visibility: 90,
}, {
  key: '3',
  site: '嘉定',
  temperature: 32,
  wind: 23,
  humidity: 34,
  rainfall: 23,
  pressure: 12,
  visibility: 90,
}, {
  key: '4',
  site: '徐家汇',
  temperature: 32,
  wind: 23,
  humidity: 34,
  rainfall: 23,
  pressure: 12,
  visibility: 90,
}, {
  key: '5',
  site: '奉贤',
  temperature: 32,
  wind: 23,
  humidity: 34,
  rainfall: 23,
  pressure: 12,
  visibility: 90,
}]

export class ActuallyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
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