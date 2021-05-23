/**
 * Created by liekkas on 2017/1/19.
 */
import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Marker = styled.div`
  margin-bottom: 4px;
  p {
    font-size: 1.5rem;
    margin-left: 2px;
  }
  
  img {
    width: 20px;
    height: 20px;
  }
`
const InvertedMarker = styled(Marker)`
  transform: rotateZ(180deg);
  margin-top: 4px;
  margin-bottom: 0;
`

const PokerCard = ({children, title, icon, img, borderColor}) => {
  const _cardProps = {
    $type: "PokerCard",
    headerText: '',
    headerIcon: '',
    headerImg: '',
    borderColor
  }

  return (
    <Card {..._cardProps}>
      <Marker>
        <p>{title}</p>
        {icon ? <span className={icon}/> : null}
        {img ? <img src={img}/> : null}
      </Marker>
      {children}
      <InvertedMarker>
        <p>{title}</p>
        {icon ? <span className={icon}/> : null}
        {img ? <img src={img}/> : null}
      </InvertedMarker>
    </Card>
  )
}

PokerCard.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  img: React.PropTypes.string,
  borderColor: React.PropTypes.string,
}

export default PokerCard
