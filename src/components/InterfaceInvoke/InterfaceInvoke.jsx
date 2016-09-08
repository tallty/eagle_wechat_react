import React, { Component } from 'react'
import css from './interface_invoke.less'
import { Row, Col } from 'antd'
import { LineChart } from './LineChart'
import { PieChart } from './PieChart'
import { Chart } from '../Chart/Chart'

export class InterfaceInvoke extends Component {
	state = {
		height: 100,
		width: 100,
	}

	option = {
	  tooltip : { trigger: 'axis' },
	  legend: {
	    x: 'left', 
	    y: 'top',
	    textStyle: {color: '#fff'},
	    data: ['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
	  },
	  grid: {
	    show: false, 
	    borderWidth: 0, 
	    x: 50, 
	    x2: 15, 
	    y2: 35,
	    containLabel: true
	  },
	  xAxis : [{
	    type: 'category',
	    boundaryGap: false,
	    splitLine: {show: false},
	    axisLabel: {textStyle: {color: '#fff'}},
	    data : ['周一','周二','周三','周四','周五','周六','周日']
	  }],
	  yAxis : [
	    {
	    	type: 'value', 
	    	splitLine: {show: false},
	    	axisLabel: {textStyle: {color: '#fff'}}
	    }
	  ],
	  series : [
    	{
          name:'邮件营销',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
          name:'视频广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
          name:'直接访问',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
          name:'搜索引擎',
          type:'line',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {normal: {}},
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
	  ]
	}

	componentDidMount() {
		let row = document.getElementById("interface_row")
		let width = row.clientWidth / 2
		let height = row.clientHeight

		this.setState({
			height: height,
			width: width
		})
	}

	render() {
		return (
			<div className={css.container}>
				<div className={css.title}>接口调用</div>
				<Row id="interface_row">
					<Col span={12} className={css.left}>
						<LineChart {...this.state}/>
					</Col>
					<Col span={12} className={css.right}>
						<Chart {...this.state} option={this.option}/>
					</Col>
				</Row>
			</div>
		)
	}
}
