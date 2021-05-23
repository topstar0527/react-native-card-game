import heart from '../assets/heart.png'
import club from '../assets/club.png'
import colors from '../../../dist/colors'

const data = [
  {
    name: 'Heart2',
    index: '2',
    img: heart,
    path: 'heart/heart2',
    author: 'liekkas',
    modifyTime: '2017-01-18',
    borderColor: colors.mdRed400
  },{
    name: 'Heart3',
    index: '3',
    img: heart,
    path: 'heart/heart3',
    author: 'liekkas',
    modifyTime: '2017-02-10',
    borderColor: colors.mdRed400
  },{
    name: 'Club2',
    index: '2',
    img: club,
    path: 'club/club2',
    author: 'liekkas',
    modifyTime: '2017-02-08',
    borderColor: colors.mdGrey800
  },{
    name: 'Club6',
    index: '6',
    img: club,
    path: 'club/club6',
    author: 'liekkas',
    modifyTime: '2017-02-13',
    borderColor: colors.mdGrey800
  },{
    name: 'Club7',
    index: '7',
    img: club,
    path: 'club/club7',
    author: 'liekkas',
    modifyTime: '2017-03-07',
    borderColor: colors.mdGrey800
  },
]

export default {
  namespace: 'home',
  state: {
    data,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

