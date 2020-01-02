import { Layout } from 'antd';
import React from 'react';
import Messageapp from '../MessageBoard/Messageapp';

class Header extends React.Component{
  render () {
    const { Header, Footer, Content } = Layout;
    return (
      <Layout>
        <Header>Header</Header>
        <Content>
          <Messageapp/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}

export default Header;