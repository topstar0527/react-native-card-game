/**
 * Created by liekkas on 2017/1/16.
 */
import React from 'react'
import styled from 'styled-components'
import {connect} from 'dva'
import {Heart2, PokerCard, Card} from '../../../../index'
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

const Heart2s = ({data}) => <Row gutter={16}>
  {(data.map((item, index) => <Col key={index} md={8} lg={6} sm={12}>
    <Heart2  {...item} cIndex={index}/>
  </Col>))}
  </Row>

class Heart2Demo extends React.Component {
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
    const { heart2 } = this.props
    const state = this.state
    const boolProps = ['showBorder','inverted','hoverShowShadow','showBorderTop','showBorderBottom','showBorderLeft','showBorderRight']
    return (
      <div>
        <Card headerText={'Basic'} headerIcon={'fa fa-id-badge'}>
          <Heart2s data={heart2.data}></Heart2s>
          <Row gutter={16}>
            <Col md={8} lg={7} sm={12}>
              <PokerCard title='2' img={heart}>
                <Heart2 title='Heart2' value={2017} icon='fa fa-heart' hoverShowShadow={false} onClick={(v) => console.log('>>> Heart2 clicked',v)}/>
                <Heart2 title='Inverted' value={2017} hoverShowShadow={false} img='https://avatars1.githubusercontent.com/u/778747?v=3&s=460' inverted />
              </PokerCard>
            </Col>
            <Col md={16} lg={17} sm={24}>
              <div>
                <Code title='Code'
                      detailUrl='https://github.com/liekkas/many-cards/blob/master/example/src/routes/Hearts/Heart2Demo.js'
                      codeStr={
`const data = [
   {title: 'Jets', icon: 'fa fa-fighter-jet', value: 2301, unit: 'u'},
   {title: 'Trucks', icon: 'fa fa-truck', value: 2039},
   {title: 'Growth', icon: 'fa fa-line-chart', value: 10.23, decimal: 2, unit: '%'},
   {title: 'Ships', icon: 'fa fa-ship', value: 109}
 ]

const Heart2s = ({data}) => (<Row gutter={16}>
  {(data.map((item, index) => <Col key={index} md={8} lg={6} sm={12}>
    <Heart2  {...item} cIndex={index}/>
  </Col>))}
</Row>)
...
<PokerCard title='2' img={heart}>
   <Heart2 title='Heart2' value={2017} icon='fa fa-heart' hoverShowShadow={false}/>
   <Heart2 title='Inverted' value={2017} hoverShowShadow={false}
           img='https://avatars1.githubusercontent.com/u/778747?v=3&s=460'
           inverted />
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
              heart2.data.map((item, index) =>
                <Col key={index} md={8} lg={6} sm={12}>
                  <Heart2 {...item} cIndex={index}
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
        <API data={heart2.api} />
      </div>
    )
  }
}

export default connect(({heart2}) => ({heart2}))(Heart2Demo);

