/**
 * Created by liekkas on 2017/2/8.
 */
import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Card from '../Card'
import ECharts from 're-echarts'

const getOption = (props) => {
  const {data, title, unit, labelField} = props
  const labels = data.map(item => item.label)
  const values = data.map(item => item.value)
  return {
    title: {
      text: title
    },
    tooltip : {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: labels
    }],
    yAxis: [{
      type: 'value',
      name: unit ? '单位('+unit+')' : ''
    }],
    series: [
      {
        name:'访问来源',
        type:'line',
        data: values
      }
    ]
  }
}

const Club2 = (props) => {
  return (
    <Card>
      <ECharts option={getOption(props)} style={{width: '100%', height: '100%', minHeight: '200px'}}/>
    </Card>
  )
}

Club2.propTypes = {
  data: PropTypes.array,
  labelField: PropTypes.string,
  title: PropTypes.string,
  unit: PropTypes.string,
}

Club2.defaultProps = {
  labelField: 'label',
  title: '',
  unit: ''
}

export default Club2
