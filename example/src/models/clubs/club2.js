import _ from 'lodash'

const dates = _.range(1,31).map(i => '2017-01-'+ (i > 9 ? i : '0' + i))
const kpis = [
  {label:'仓库使用率', name: 'cargoUseRatio', unit: '%'},
  {label:'出库数', name: 'outCargo', unit: '件'},
  {label:'入库数', name: 'inCargo', unit: '件'},
]
let data = []

dates.forEach(date => {
  let item = {label: date, value: _.random(100, 500)}
  kpis.forEach(kpi => {
    item[kpi.label] = kpi.unit === '%' ? _.random(70,90, true).toFixed(2) : _.random(100, 500)
  })
  data.push(item)
})

const api = [
  {
    prop: 'title',
    desc: '',
    type: 'string',
    defaultValue: ''
  },{
    prop: 'data',
    desc: '',
    type: 'number',
    defaultValue: '2017'
  },{
    prop: 'unit',
    desc: '单位',
    type: 'string',
    defaultValue: ''
  },{
    prop: 'inverted',
    desc: '颜色反转,字体颜色使用背景颜色值,背景颜色使用字体颜色值。',
    type: 'bool',
    defaultValue: 'false'
  },{
    prop: 'color',
    desc: '字体颜色,背景颜色(inverted)',
    type: 'string',
    defaultValue: '#424242'
  },{
    prop: 'bgColor',
    desc: '背景颜色,字体颜色(inverted)',
    type: 'string',
    defaultValue: '#ffffff'
  },{
    prop: 'colors',
    desc: '颜色值列表,卡片通过cIndex(>-1时)来循环获取colors对应颜色值。',
    type: 'array',
    defaultValue: `['#42a5f5','#66bb6a','#ffa726','#ef5350']`
  }
]

export default {
  namespace: 'club2',
  state: {
    data,
    api,
  },
  reducers: {},
  effects: {},
  subscriptions: {},
}

