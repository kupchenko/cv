import React, {PureComponent} from 'react';
import {Empty, Layout} from "antd";
import PageSider from "./sider";
import {connect} from "react-redux";
import MainContent from "@/js/component/page/content/main";

const {Content} = Layout;

class PageContent extends PureComponent {

    render() {
        let content = <Empty/>;
        if (this.props.cvData.data) {
            const {name, title, summary, projects} = this.props.cvData.data;
            content = <MainContent name={name} title={title} summary={summary} projects={projects}/>;
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
    cvData: state.cvData
});

export default connect(mapStateToProps)(PageContent);