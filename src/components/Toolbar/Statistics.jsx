import React, { Component } from 'react'
import styles from './toolbar.less'
import SuperAgent from 'superagent'
import { Row, Col } from 'antd'

export class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_interface_count: "0",
      today_interface_count: "0",
      upload_count: "0"
    }
  }

  componentWillMount() {
    this.getList()
  }

  componentDidMount() {
    setInterval(this.getList.bind(this), 10000)
  }

  componentWillUnmount() {
    clearInterval()
  }

  getList(){
    var time = (this.state.count)+1
    SuperAgent.get('http://mcu.buoyantec.com/monitor/counts.json')
                .set('Accept', 'application/json')
                .end( (err, res) => {
                  let result = res.body
                  this.setState({
                    all_interface_count: result.all_interface_count, today_interface_count: result.today_interface_count, upload_count: result.upload_count
                  })
                })
  }

  render() {
    return (
      <Col span={11} offset={2} className={styles.statistics}>
        <Col span={8} className={styles.amount} ><span>{this.state.all_interface_count}</span><span>总浏览</span></Col>
        <Col span={8} className={styles.today_amount}><span><img src="src/images/up_icon.svg" alt="" className={styles.up_icon} />{this.state.today_interface_count}</span><span>徽章上传数</span></Col>
        <Col span={8} className={styles.upload_amount}><span><img src="src/images/down_icon.svg" alt="" className={styles.down_icon} />{this.state.upload_count}</span><span>今日访问</span></Col>
      </Col>
    )
  }
}
