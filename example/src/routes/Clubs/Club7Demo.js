/**
 * Created by liekkas on 2017/2/8.
 */

import React from 'react'
import styled from 'styled-components'
import {connect} from 'dva'
import {Club7, PokerCard, Card} from '../../../../index'
import {Row, Col, Switch} from 'antd'
import club from '../../assets/club.png'
import API from '../../components/API'
import Code from '../../components/Code'

class Club7Demo extends React.Component {
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
    const { club7 } = this.props
    const state = this.state
    return (
      <div>
        <Card headerText={'Basic'} headerIcon={'fa fa-id-badge'}>
          <Row gutter={16}>
            <Col md={8} lg={7} sm={12}>
              <PokerCard title='7' img={club}>
                <Club7 value={club7.data} title='title' height="200" unit="%" color='orange'/>
              </PokerCard>
            </Col>
            <Col md={16} lg={17} sm={24}>
              <div>
                <Code title='Code'
                      detailUrl='https://github.com/liekkas/many-cards/blob/master/example/src/routes/Clubs/Club7Demo.js'
                      codeStr={
                        `const data=57
...
<Club7 value={data} title='title' unit="%" color='orange'/>
`} />
              </div>
            </Col>
          </Row>
        </Card>

        <API data={club7.api} />
      </div>
    )
  }
}

export default connect(({club7}) => ({club7}))(Club7Demo);

