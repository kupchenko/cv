import React, {PureComponent} from 'react';
import {Card, Layout, Menu} from 'antd';
import Meta from "antd/lib/card/Meta";

const {Header, Content, Footer, Sider} = Layout;

const Aux = props => props.children;

class Page extends PureComponent {

    render() {
        return (
            <Aux>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                        >
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 200px'}}>
                        <Layout style={{padding: '24px 0'}}>
                            <Sider className="site-layout-background" width={250}>
                                <Card
                                    hoverable
                                    style={{ width: 250 }}
                                    cover={<img src="/src/img/blank_avatar.png" alt="avatar" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Sider>
                            <Content className="site-layout-background" style={{padding: '0 24px', marginLeft: '10px', minHeight: 1000}}>
                                Content
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Aux>
        )
    }
}

export default Page;