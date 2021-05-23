/**
 * Created by liekkas on 2017/2/10.
 */
import React, {PropTypes} from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import Card from '../Card'
import CC from '../CardConfig'
import ECharts from 're-echarts'
import _ from 'lodash'

const option = CC.getOption('Heart3')

const Root = styled(Card)`
  padding: 12px;
  width: 100%;
`

const Icon = styled.span`
  font-size: 3rem;
`

const colorFunc = (props) =>
  props.color ? props.color
    : props.inverted ? option.bgColor
      : (props.cIndex > -1 ? option.colors[props.cIndex%option.colors.length] : option.color)

const Header = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding: 0 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.color};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }
`

const Right = styled.div`
`

const Title = styled.p`
  
`

const Number = styled.p`
  font-size: 2.5rem;
  font-family: monospace;
`

const detailOption = (v, color) => {
  const data = v ? _.cloneDeep(v).reverse() : []
  return {
    silent: true,
    grid: {
      left: '35%',
      right: '20%',
      bottom: '3%',
      top: '14%',
    },
    xAxis: [{
      type: 'value',
      show: false,
    }],
    yAxis: [{
      type: 'category',
      data: _.map(data, 'label'),
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {show: true, interval: 0, textStyle: {color}},
      splitLine: {show: false}
    }],
    series: [{
      type: 'bar',
      data: _.map(data, 'value'),
      label: {
        normal: {
          show: true,
          position: 'right',
          textStyle: {
            color
          }
        }
      },
      itemStyle: {
        normal: {
          color,
          barBorderRadius: 5,
        }
      },
      barCategoryGap: '50%',
      barWidth: 10
    }]
  }
}

const Heart3 = (props) => {
  const {cIndex, title, value, startValue, detail, icon, img, unit, decimal, inverted, hoverShowShadow, color, bgColor, borderColor,
    showBorder,showBorderTop,showBorderBottom,showBorderLeft,showBorderRight,
    borderTopColor, borderBottomColor, borderLeftColor, borderRightColor,
    borderRadius, borderWidth, borderStyle} = props

  const _cardProps = {
    $type: "Heart3",
    headerText: '',
    headerIcon: '',
    headerImg: '',
    cIndex,
    color,
    bgColor,
    borderColor,
    hoverShowShadow,
    inverted,
    showBorder,
    showBorderTop,
    showBorderBottom,
    showBorderLeft,
    showBorderRight,
    borderTopColor,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderRadius,
    borderWidth,
    borderStyle,
  }

  const _color = colorFunc(props)

  return (
    <Root {..._cardProps}>
      <Header color={_color}>
        {icon ? <Icon className={icon} /> : null}
        {img ? <img src={img} /> : null}
        <Right>
          <Title>{title}</Title>
          <Number>
            <CountUp
              start={startValue}
              end={value}
              duration={2}
              useEasing
              decimals={decimal}
              useGrouping
              separator=','
              suffix={unit}
            />
          </Number>
        </Right>
      </Header>
      <ECharts option={detailOption(detail, _color)} style={{height: '80px'}}/>
    </Root>
  )
}

Heart3.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  startValue: PropTypes.number,

  icon: PropTypes.string,
  img: PropTypes.string,
  cIndex: PropTypes.number,
  detail: PropTypes.array,

  color: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,

  inverted: PropTypes.bool,
  hoverShowShadow: PropTypes.bool,

  showBorder: PropTypes.bool,
  showBorderTop: PropTypes.bool,
  showBorderBottom: PropTypes.bool,
  showBorderLeft: PropTypes.bool,
  showBorderRight: PropTypes.bool,

  borderTopColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  borderLeftColor: PropTypes.string,
  borderRightColor: PropTypes.string,
}

Heart3.defaultProps = {
  value: 2017,
  startValue: 0,
}


export default Heart3
