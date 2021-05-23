/**
 * Created by liekkas on 2017/1/15.
 */
import React from 'react'
import styled from 'styled-components'
import CC from './CardConfig'

let option

const borderFunc = (props) =>
  props.borderColor ? `${props.borderWidth || option.borderWidth}px ${props.borderStyle || option.borderStyle} ${props.borderColor}`
    : props.showBorder ? `${props.borderWidth || option.borderWidth}px ${props.borderStyle || option.borderStyle} ${option.borderColor}`
      : 'none'

const borderTypeFunc = (props, color, isShow) =>
  props[color] ? `${props.borderWidth || option.borderWidth}px ${props.borderStyle || option.borderStyle} ${props[color]}`
    : props[isShow] ? `${props.borderWidth || option.borderWidth}px ${props.borderStyle || option.borderStyle} ${option.colors[props.cIndex%option.colors.length]}`
      : borderFunc(props)

const bgColorFunc = (props) =>
  props.bgColor ? props.bgColor
    : props.inverted ? (props.cIndex > -1 ? option.colors[props.cIndex%option.colors.length] : option.color)
      : option.bgColor

const colorFunc = (props) =>
  props.color ? props.color
    : !props.inverted ? (props.cIndex > -1 ? option.colors[props.cIndex%option.colors.length] : option.color)
      : option.bgColor

const Root = styled.div`
  border: ${props => borderFunc(props)};
  border-top: ${props => borderTypeFunc(props, 'borderTopColor', 'showBorderTop')};
  border-bottom: ${props => borderTypeFunc(props, 'borderBottomColor', 'showBorderBottom')};
  border-left: ${props => borderTypeFunc(props, 'borderLeftColor', 'showBorderLeft')};
  border-right: ${props => borderTypeFunc(props, 'borderRightColor', 'showBorderRight')};
  box-sizing: border-box;
  border-radius: ${props => (props.borderRadius || option.borderRadius)+'px'};
  color: ${props => colorFunc(props)};
  background-color: ${props => bgColorFunc(props)};
  margin-bottom: 16px;
  padding: 12px;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  &:hover {
    box-shadow: ${props => props.hoverShowShadow ? '0 1px 3px rgba(0,0,0,0.2)' : '0'};
  }
`

const Header = styled.div`
  display: flex;
  font-size: 1rem;
  margin-bottom: 12px;
  align-items: center;
  font-weight: 500;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const Card = (props) => {
  option = CC.getOption(props.$type)
  return (
    <Root {...props}>
      {
        props.headerText || props.headerIcon || props.headerImg
          ? <Header>
              {props.headerIcon ? <span className={props.headerIcon}/> : null}
              {props.headerImg ? <img src={props.headerImg} /> : null}
              <p>&nbsp;{props.headerText}</p>
            </Header>
          : null
      }
      {props.children}
    </Root>
  )
}

Card.propTypes = {
  cIndex: React.PropTypes.number,

  color: React.PropTypes.string,
  bgColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,

  hoverShowShadow: React.PropTypes.bool,
  inverted: React.PropTypes.bool,

  borderWidth: React.PropTypes.number,
  borderRadius: React.PropTypes.number,
  borderStyle: React.PropTypes.string,

  showBorder: React.PropTypes.bool,
  showBorderTop: React.PropTypes.bool,
  showBorderBottom: React.PropTypes.bool,
  showBorderLeft: React.PropTypes.bool,
  showBorderRight: React.PropTypes.bool,

  borderTopColor: React.PropTypes.string,
  borderBottomColor: React.PropTypes.string,
  borderLeftColor: React.PropTypes.string,
  borderRightColor: React.PropTypes.string,

  headerText: React.PropTypes.string,
  headerIcon: React.PropTypes.string,
  headerImg: React.PropTypes.string,

  onClick: React.PropTypes.func,
}

Card.defaultProps = {
  $type: 'Card',
  showBorder: true,
  inverted: false,
  hoverShowShadow: true,
  cIndex: -1,
  headerText: '',
  headerIcon: '',
  headerImg: ''
}

export default Card
