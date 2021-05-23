/**
 * Created by liekkas on 2017/1/16.
 */
import React from 'react'
import styled from 'styled-components'
import {connect} from 'dva'
import {Heart3, PokerCard, Card} from '../../../../index'
import {Row, Col, Switch} from 'antd'
import heart from '../../assets/heart.png'
import API from '../../components/API'
import Code from '../../components/Code'

const Controller = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

const ControllerItem = styled.div`
  padding: 0 8px;
  margin-bottom: 2px;
`

class Heart3Demo extends React.Component {
  state = {
    showBorder: true,
    showBorderTop: false,
    showBorderBottom: false,
    showBorderLeft: false,
    showBorderRight: false,
    inverted: false,
    hoverShowShadow: true,
  }

  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable });
    }
  }

  render() {
    const { heart3 } = this.props
    const state = this.state
    const boolProps = ['showBorder','inverted','hoverShowShadow','showBorderTop','showBorderBottom','showBorderLeft','showBorderRight']
    return (
      <div>
        <Card headerText={'Basic'} headerIcon={'fa fa-id-badge'}>
          <Row gutter={16}>
            <Col md={8} lg={7} sm={12}>
              <PokerCard title='3' img={heart}>
                <Heart3 title='Heart3' value={2017} icon='fa fa-heart' detail={[
                {label: 'Jet001', value: 20},
                {label: 'F35', value: 12},
                {label: 'F42', value: 32},
                ]}/>
              </PokerCard>
            </Col>
            <Col md={16} lg={17} sm={24}>
              <div>
                <Code title='Code'
                      detailUrl='https://github.com/liekkas/many-cards/blob/master/example/src/routes/Hearts/Heart3Demo.js'
                      codeStr={
`
<PokerCard title='3' img={heart}>
  <Heart3 title='Heart3' value={2017} icon='fa fa-heart' detail={[
  {label: 'Jet001', value: 20},
  {label: 'F35', value: 12},
  {label: 'F42', value: 32},
  ]}/>
</PokerCard>
`} />
              </div>
            </Col>
          </Row>
        </Card>

        <Card headerText={'Tuning'} headerIcon={'fa fa-wrench'}>
          <Controller>
            {
              boolProps.map(bp =>
                <ControllerItem key={bp}>
                  <label>{bp}:&nbsp;</label>
                  <Switch checked={state[bp]} onChange={this.handleToggle(bp)} />
                </ControllerItem>
              )
            }
          </Controller>
          <Row gutter={16}>
            {
              heart3.data.map((item, index) =>
                <Col key={index} md={8} lg={6} sm={12}>
                  <Heart3 {...item} cIndex={index}
                          showBorder={state.showBorder}
                          showBorderTop={state.showBorderTop}
                          showBorderBottom={state.showBorderBottom}
                          showBorderLeft={state.showBorderLeft}
                          showBorderRight={state.showBorderRight}
                          hoverShowShadow={state.hoverShowShadow}
                          inverted={state.inverted}
                  />
                </Col>
              )
            }
          </Row>
        </Card>
        <API data={heart3.api} />
      </div>
    )
  }
}

export default connect(({heart3}) => ({heart3}))(Heart3Demo);

