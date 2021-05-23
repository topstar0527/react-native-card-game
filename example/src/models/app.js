import home from '../assets/home.png'
import heart from '../assets/heart.png'
import spade from '../assets/spade.png'
import diamond from '../assets/diamond.png'
import club from '../assets/club.png'

const menus = [
  {
    key: 'home',
    name: 'Home',
    img: home,
  },
  {
    key: 'heart',
    name: 'Heart Cards',
    img: heart,
    children: [
      {
        key: 'heart2',
        name: 'Heart 2',
        img: heart,
      },{
        key: 'heart3',
        name: 'Heart 3',
        img: heart,
      }
    ]
  },
  {
    key: 'spade',
    name: 'Spade Cards',
    img: spade,
  },
  {
    key: 'diamond',
    name: 'Diamond Cards',
    img: diamond,
  },
  {
    key: 'club',
    name: 'Club Cards',
    img: club,
    children: [
      {
        key: 'club2',
        name: 'Club 2',
        img: club,
      },{
        key: 'club6',
        name: 'Club 6',
        img: club,
      },{
        key: 'club7',
        name: 'Club 7',
        img: club,
      },
    ]
  }
]

export default {
  namespace: 'app',
  state: {
    menus,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

