/**
 * Created by liekkas on 2017/1/16.
 */
import React, {PropTypes} from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import Card from '../Card'

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }
`

const Icon = styled.span`
  font-size: 3rem;
`

const Header = styled.div`
  margin: 0 8px;
  text-align: center;
  font-size: 1.2rem;
`

const Title = styled.p`
  
`

const Number = styled.p`
  font-size: 2.5rem;
  font-family: monospace;
`

const Heart2 = (props) => {
  const {cIndex, title, value, startValue, icon, img, unit, decimal, inverted, hoverShowShadow, color, bgColor, borderColor,
    showBorder,showBorderTop,showBorderBottom,showBorderLeft,showBorderRight,
    borderTopColor, borderBottomColor, borderLeftColor, borderRightColor,
    borderRadius, borderWidth, borderStyle, onClick} = props

  const _cardProps = {
    $type: "Heart2",
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
    onClick
  }
  return (
    <Card {..._cardProps}>
      <Root>
        {icon ? <Icon className={icon} /> : null}
        {img ? <img src={img} /> : null}

        <Header>
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
        </Header>
      </Root>
    </Card>
  )
}

Heart2.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  startValue: PropTypes.number,
  icon: PropTypes.string,
  img: PropTypes.string,
  cIndex: PropTypes.number,

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

Heart2.defaultProps = {
  value: 2017,
  startValue: 0,
}


export default Heart2
