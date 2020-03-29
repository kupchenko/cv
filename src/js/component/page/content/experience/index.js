import React from 'react';
import {List} from 'antd';
import ExperienceRow from '@/js/component/page/content/experience/row';
import {connect} from 'react-redux';

class Experience extends React.Component {

    render() {
        const {projects} = this.props;
        return (
            <List
                style={{padding: '0 25px 24px'}}
                itemLayout='vertical'
                size='large'
                pagination={{
                    pageSize: 3,
                }}
                dataSource={projects}
                renderItem={project => (
                    <ExperienceRow project={project}/>
                )}
            />
        )

    }
}

const mapStateToProps = (state) => ({
    projects: state.cvData.data.projects
});

export default connect(mapStateToProps)(Experience);
