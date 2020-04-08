import React, {PureComponent} from 'react';
import {Layout} from 'antd';
import PageHeader from '../common/header';
import PageFooter from '../common/footer';
import PageContent from './content';
import {connect} from 'react-redux';
import {actionDoFetchData} from '@/js/actions/fetch-data';

const Aux = props => props.children;

class Page extends PureComponent {

    constructor(props) {
        super(props);
        this.props.fetchData();
    }

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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (e) => dispatch(actionDoFetchData(e)),
    };
};

export default connect(null, mapDispatchToProps)(Page);
