import React, {PureComponent} from 'react';
import {Layout} from 'antd';
import PageHeader from "../common/header";
import PageFooter from "../common/footer";
import PageContent from "./content";

const Aux = props => props.children;

class Page extends PureComponent {

    render() {
        return (
            <Aux>
                <Layout>
                    <PageHeader/>
                    <PageContent/>
                    <PageFooter/>
                </Layout>
            </Aux>
        )
    }
}

export default Page;