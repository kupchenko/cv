import React, {PureComponent} from 'react';
import {Layout, Spin} from "antd";
import PageSider from "./sider";
import {connect} from "react-redux";
import MainContent from "@/js/component/page/content/main";

const {Content} = Layout;

class PageContent extends PureComponent {

    render() {
        let content = (
            <div className="spinner">
                <Spin size="large"/>
            </div>
        );
        if (!this.props.isLoading) {
            content = <MainContent/>;
        }

        return (
            <Content style={{padding: '0 200px'}}>
                <Layout style={{padding: '24px 0'}}>
                    <PageSider/>
                    <Content className="site-layout-background" style={{marginLeft: '10px', minHeight: 1000}}>
                        {content}
                    </Content>
                </Layout>
            </Content>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.cvData.isLoading
});

export default connect(mapStateToProps)(PageContent);