import React from 'react';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
const { Sider, Footer, Content } = Layout;
import { Link } from 'dva/router'
import logo from '../assets/logo.png'
import styled from 'styled-components'

const Icon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 4px;
`

const getMenus = function (menuArray, collapsed, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} title={<span>{item.img ? <Icon src={item.img} /> : ''}{item.name}</span>}>
          {getMenus(item.children, collapsed, parentPath + item.key + '/')}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={parentPath + item.key}>
            {item.img ? <Icon src={item.img} /> : ''}
            {collapsed ? '' : item.name}
          </Link>
        </Menu.Item>
      )
    }
  })
}

const LogoC = styled.div`
  height: 40px;
  border-radius: 6px;
  margin: 32px 16px 64px;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    cursor: pointer;
    color: #Fdb2FF;
    width: 100%;
    margin-top: 8px;
    text-align: center;
    font-size: 32px;
    &:hover {
      color: #eb90ed;
    }
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.initPosition(props)
  }

  initPosition(props) {
    const paths = _.split(props.location.pathname.substring(1), '/')
    const opend = paths[0] || 'home'
    const selected = paths[paths.length - 1] || 'home'

    this.state = {
      openKeys: [opend],
      current: selected,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location.pathname !== this.props.location.pathname) {
      this.initPosition(nextProps)
    }
  }

  onOpenChange(openKeys) {
    if (this.props.keepOneOpened) {
      const state = this.state
      const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1))
      const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1))

      let nextOpenKeys = []
      if (latestOpenKey) {
        nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey)
      }
      if (latestCloseKey) {
        nextOpenKeys = this.getAncestorKeys(latestCloseKey)
      }
      this.setState({openKeys: nextOpenKeys})
    } else {
      this.setState({openKeys})
    }
  }

  getAncestorKeys(key) {
    const map = {
//       sub3: ['sub2'],
    }
    return map[key] || []
  }


  render() {
    const {children, app} = this.props
    const menuItems = getMenus(app.menus, false)
    return (
      <Layout>
        <Sider
          collapsible={false}
          width={200}
          style={{minWidth: '50px'}}>
          <LogoC>
            <img src={logo} />
            <a target="_blank" href="//github.com/liekkas/many-cards">
              <span className="fa fa-github" />
            </a>
          </LogoC>

          <Menu theme="dark" mode={'inline'}
                openKeys={this.state.openKeys}
                onOpenChange={(v) => this.onOpenChange(v)}
                selectedKeys={[this.state.current]}>
            {menuItems}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '2vh' }}>
            <div style={{ padding: 24, minHeight: '91vh' }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', minHeight: '5vh' }}>
            Many Cards ©2017 by liekkas
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(({app}) => ({app}))(App);
