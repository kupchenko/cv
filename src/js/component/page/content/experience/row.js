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
        const {title, position, description, startDate, endDate, duration, company, contribution, tasks, technologies, benefits} = this.props.project;
        const contentList = {
            tasks: <p>
                <ul>{tasks.map(task => <li>{task}</li>)}</ul>
            </p>,
            tech: <p>{technologies.join(', ')}</p>,
            description: <p>{description}<br/>{benefits}</p>,
        };
        return (
            <Card
                style={{width: '100%'}}
                title={`${title}, ${company}, ${position}, ${startDate} - ${endDate} (${duration})`}
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={key => {
                    this.onTabChange(key, 'key');
                }}
            >
                {contentList[this.state.key]}
            </Card>
        )
            ;
    }
}

export default ExperienceRow;