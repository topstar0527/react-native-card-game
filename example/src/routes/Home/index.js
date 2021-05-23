import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {Row, Col} from 'antd'
import {PokerCard} from '../../../../index'
import styled from 'styled-components'

const Info = styled.div`
  text-align: center;
  color: green;
  p:nth-child(1) {
    color: deeppink;
  }
  p {
    margin-bottom: 2px;
  }
`

function Home({home}) {
  const {data} = home
  return (
    <div>
      <Row gutter={24}>
        {
          data.map((item,i) =>
            <Col key={i} lg={4} md={6} sm={6} xs={12}>
              <Link to={item.path}>
                <PokerCard title={item.index} img={item.img} borderColor={item.borderColor}>
                  <Info>
                    <p>{item.name}</p>
                    <p>{item.modifyTime}</p>
                    <p>by {item.author}</p>
                  </Info>
                </PokerCard>
              </Link>
            </Col>
          )
        }
      </Row>
    </div>
  );
}

export default connect(({home}) => ({home}))(Home);
