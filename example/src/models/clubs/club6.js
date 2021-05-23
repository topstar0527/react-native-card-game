import _ from 'lodash'

const api = [
  {
    prop: 'title',
    desc: '',
    type: 'string',
    defaultValue: ''
  },{
    prop: 'value',
    desc: '',
    type: 'number',
    defaultValue: '0'
  },{
    prop: 'unit',
    desc: '单位',
    type: 'string',
    defaultValue: ''
  },{
    prop: 'height',
    desc: '高度',
    type: 'string',
    defaultValue: '150px'
  },{
    prop: 'color',
    desc: '主颜色',
    type: 'string',
    defaultValue: 'lightBlue'
  }
]

export default {
  namespace: 'club6',
  state: {
    data: 0.57,
    api,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

