import React from "react";
import {Empty, List} from "antd";

const projects = [];
for (let i = 0; i < 23; i++) {
    projects.push({
        startDate: '21.03.2112',
        endDate: '21.07.2112',
        duration: '2 years',
        company: 'Luxoft',
        position: 'Senior Software Engineer',
        title: 'Sports Data Warehouse',
        description: 'The system aims to store data about different events, participants and process this data. The system acts as a golden source of data. Data can be provided to different customers.',
        benefits: 'The system from one side collects information received from vendors and from the other side\n' +
            'system managers correct data and these vendors can then fetch data with corrections. System\n' +
            'provides deduplication mechanism which helps to merge similar records received from\n' +
            'different vendors and by merging these records collect as much data as possible.',
        tasks: [
            'Implemented Kafka listeners and publishers;',
            'Configuring structure in Сassandra (keyspaces, tables, indexes);',
            'Dealing with different Solr issues (like indexing fields with type map, DynamicField etc);'
        ],

    });
}

class Experience extends React.Component {

    render() {
        // const {projects} = this.props;
        if (!projects) {
            return <Empty/>;
        }
        return (
            <List
                style={{padding: '0 24px'}}
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={projects}
                renderItem={item => (
                    <List.Item key={item.title}>
                        <List.Item.Meta
                            title={`${item.startDate} - ${item.endDate} (${item.duration}), ${item.title}`}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )

    }
}


export default Experience;