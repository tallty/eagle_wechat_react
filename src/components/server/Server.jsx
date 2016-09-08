import React, { Component, PropTypes } from 'react'
import { DatePicker,Row, Col, Icon, Button } from 'antd'
import classnames from 'classnames'
import styles from './Server.less'
import SuperAgent from 'superagent'
import { ServerList } from './server_list/ServerList'
// import './Server.less'

export class Server extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [],
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
    SuperAgent.get('http://mcu.buoyantec.com/monitor/machines.json')
                .set('Accept', 'application/json')
                .end( (err, res) => {
                  let result = res.body.machines
                  this.setState({
                    machines: result, count:time
                  })
                })
  }

  render() {
    return (
      <div className={styles.server_content}>
        <p className={styles.server_title}>服务器监控</p>
        <Row>
          <Col>
            <ServerList {...this.state} />
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