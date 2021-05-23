/**
 * Created by liekkas on 2017/2/9.
 */
import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Card from '../Card'
import ECharts from 're-echarts'
import CC from '../CardConfig'
import './echarts-liquidfill'

const option = CC.getOption('Club7')

function genOption(value, title, unit, color=option.colors[0] || 'lightBlue') {
  return {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: color
      }
    },
    series: [
      {
        "center": [
          "50%",
          "50%"
        ],
        "radius": [
          "54%",
          "60%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "itemStyle": {
          "normal": {
            "label": {
              "show": true,
              "textStyle": {
                "fontSize": 15,
                "fontWeight": "bold"
              },
              "position": "center"
            },
            "labelLine": {
              "show": false
            },
            "color": color,
            "borderColor": color,
            "borderWidth": 10
          },
          "emphasis": {
            "label": {
              "textStyle": {
                "fontSize": 15,
                "fontWeight": "bold"
              }
            },
            "color": color,
            "borderColor": color,
            "borderWidth": 10
          }
        },
        "data": [
          {
            "value": value,
            "name": value + unit
          },
          {
            "name": " ",
            "value": 100-value,
            "itemStyle": {
              "normal": {
                "label": {
                  "show": false
                },
                "labelLine": {
                  "show": false
                },
                "color": color,
                "borderColor": color,
                "borderWidth": 0
              },
              "emphasis": {
                "color": color,
                "borderColor": color,
                "borderWidth": 0
              }
            }
          }
        ]
      }]
  }
}

const Club7 = ({value, title, unit, height, color}) => {
  return (
    <Card>
      <ECharts option={genOption(value, title, unit, color)} style={{width: '100%', height}}/>
    </Card>
  )
}

Club7.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
  title: PropTypes.string,
  unit: PropTypes.string,
  height: PropTypes.string,
}

Club7.defaultProps = {
  title: '',
  unit: '',
  height: '150px'
}

export default Club7
