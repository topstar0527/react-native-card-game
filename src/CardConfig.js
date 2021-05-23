/**
 * Created by liekkas on 2017/1/17.
 */
import MDColor from './colors'
import _ from 'lodash'

//basic option
let _option = {
  color: MDColor.mdGrey800,
  bgColor: MDColor.mdWhite,
  borderColor: MDColor.mdGrey200,
  borderWidth: 1,
  borderRadius: 8,
  borderStyle: 'solid',
  colors: [MDColor.mdBlue400, MDColor.mdGreen400, MDColor.mdOrange400, MDColor.mdRed400],
}

let optionDict = {
  Card: {..._option},
  PokerCard: {..._option}
}

const types = ['Heart','Spade','Diamond','Club']
const series = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']

types.forEach(type =>
  series.forEach(serie =>
    optionDict[type+serie] = {..._option}
  )
)

//specials
setOption({borderWidth: 2}, 'Heart2')

export function setOption(option, cardType = 'Card') {
  if(_.isEmpty(option)) {
    console.warn(`The option is empty!`)
    return
  }
  if(optionDict[cardType]) {
    if (cardType === 'Card') { //apply to all cards
      _.keys(optionDict).forEach(o => optionDict[o] = {...optionDict[o], ...option})
    } else {
      optionDict[cardType] = {...optionDict[cardType], ...option}
    }
  } else {
    console.warn(`The ${cardType} Card on the road!`)
  }
}

export function getOption(cartType = 'Card') {
  return optionDict[cartType]
}

export default {
  getOption: getOption,
  setOption: setOption
}
