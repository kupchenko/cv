import React from 'react';
import {List} from 'antd';
import {connect} from 'react-redux';
import ExperienceRow from "@/js/component/page/content/experience/row";

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
                    <div>
                        <ExperienceRow key={project.id} project={project}/>
                    </div>
                )}
            />
        )

    }
}

const mapStateToProps = (state) => ({
    projects: state.cvData.data.projects
});

export default connect(mapStateToProps)(Experience);
