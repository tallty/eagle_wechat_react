import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Button } from 'antd'
import classnames from 'classnames'
import SuperAgent from 'superagent'
import styles from './Actually.less'
import { ActuallyList } from './actually_list/ActuallyList'
// import './Actually.less'

export class Actually extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      count: 0
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
    SuperAgent.get('http://mcu.buoyantec.com/monitor/stations.json')
                .set('Accept', 'application/json')
                .end( (err, res) => {
                  let result = res.body.stations
                  this.setState({
                    stations: result, count:time
                  })
                })
  }

  render() {
    return (
      <div className={styles.Actually_content}>
        <p className={styles.actually_title}>实况数据</p>
        <Row>
          <Col span={24} className={styles.actually_list}>
            <ActuallyList {...this.state} />
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