import React, {PureComponent} from 'react';
import {Divider, Layout} from "antd";
import PageSider from "./sider";
import Experience from "@/js/component/page/content/experience";
import Summary from "@/js/component/page/content/summary";

const {Content} = Layout;

class PageContent extends PureComponent {

    render() {
        return (
            <Content style={{padding: '0 200px'}}>
                <Layout style={{padding: '24px 0'}}>
                    <PageSider/>
                    <Content className="site-layout-background" style={{marginLeft: '10px', minHeight: 1000}}>

                        <h1 className="employee-name">Dmitrii Kupchenko</h1>
                        <h1 className="employee-title">Senior Software Engineer</h1>

                        <Divider orientation="left">Summary</Divider>
                        <Summary/>

                        <Divider orientation="left">Experience</Divider>
                        <Experience/>

                    </Content>
                </Layout>
            </Content>
        )
    }
}

export default PageContent;