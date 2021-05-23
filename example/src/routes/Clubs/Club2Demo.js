/**
 * Created by liekkas on 2017/2/8.
 */

import React from 'react'
import styled from 'styled-components'
import {connect} from 'dva'
import {Club2, PokerCard, Card} from '../../../../index'
import {Row, Col, Switch} from 'antd'
import club from '../../assets/club.png'
import API from '../../components/API'
import Code from '../../components/Code'

class Club2Demo extends React.Component {
  state = {
    showBorder: true,
    showBorderTop: false,
    showBorderBottom: false,
    showBorderLeft: false,
    showBorderRight: false,
    inverted: false,
  }

  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable });
    }
  }


  render() {
    const { club2 } = this.props
    const state = this.state
    return (
      <div>
        <Card headerText={'Basic'} headerIcon={'fa fa-id-badge'}>
          <Row gutter={16}>
            <Col md={12} lg={12} sm={24}>
              <PokerCard title='2' img={club}>
                <Club2 data={club2.data} title='指标1' unit="%"/>
              </PokerCard>
            </Col>
            <Col md={12} lg={12} sm={24}>
              <div>
                <Code title='Code'
                      detailUrl='https://github.com/liekkas/many-cards/blob/master/example/src/routes/Clubs/Club2Demo.js'
                      codeStr={
                        `const dates = _.range(1,31).map(i => '2017-01-'+ (i > 9 ? i : '0' + i))
let data = []

dates.forEach(date => {
  let item = {label: date, value: _.random(100, 500)}
  data.push(item)
})
...
<PokerCard title='2' img={club}>
  <Club2 data={data} title='指标1' unit="%"/>
</PokerCard>
`} />
              </div>
            </Col>
          </Row>
        </Card>

        <API data={club2.api} />
      </div>
    )
  }
}

export default connect(({club2}) => ({club2}))(Club2Demo);

