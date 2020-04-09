import React from "react";
import {Card} from "antd";

const tabList = [
    {
        key: 'description',
        tab: 'Description',
    },
    {
        key: 'tasks',
        tab: 'Tasks',
    },
    {
        key: 'tech',
        tab: 'Tech stack',
    },
];

class ExperienceRow extends React.Component {

    state = {
        key: 'description',
        noTitleKey: 'app',
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({[type]: key});
    };

    render() {
        const {title, position, description, startDate, endDate, company, tasks, technologies, benefits} = this.props.project;
        const contentList = {
            tasks: <ul className="circle-list">{tasks.map(task => <li key={task}>{task}</li>)}</ul>,
            tech: technologies.join(', '),
            description: <div>{description}<br/>{benefits}</div>,
        };
        return (
            <Card
                style={{width: '100%'}}
                title={<div><em>{title}</em> in <em>{company}</em> as <em>{position}</em></div>}
                extra={`${startDate} - ${endDate}`}
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={key => {
                    this.onTabChange(key, 'key');
                }}
            >
                <div style={{padding: '10px 0px'}}>
                    {contentList[this.state.key]}
                </div>
            </Card>
        )
    }
}

export default ExperienceRow;