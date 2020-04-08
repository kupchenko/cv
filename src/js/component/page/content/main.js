import React, {PureComponent} from 'react';
import {Divider} from 'antd';
import Experience from '@/js/component/page/content/experience';
import Summary from '@/js/component/page/content/summary';
import {connect} from 'react-redux';

class MainContent extends PureComponent {

    render() {
        const {name, title} = this.props;
        return (
            <>
                <div className='employee-name'>{name}</div>
                <div className='employee-title'>{title}</div>

                <Divider orientation='left'>Summary</Divider>
                <Summary/>

                <Divider orientation='left'>Experience</Divider>
                <Experience/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.cvData.data.name,
    title: state.cvData.data.title
});

export default connect(mapStateToProps)(MainContent);
