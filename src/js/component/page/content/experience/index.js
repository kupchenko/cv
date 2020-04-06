import React from "react";
import {Empty, List} from "antd";
import ExperienceRow from "@/js/component/page/content/experience/row";

const projects = [];
for (let i = 0; i < 23; i++) {
    projects.push({
        startDate: '21.03.2112',
        endDate: '21.07.2112',
        duration: '2 years',
        company: 'Luxoft',
        position: 'Senior Software Engineer',
        title: 'Data Warehouse',
        description: 'The system aims to store data about different events, participants. The system acts as a golden source of data. Data can be provided to different customers.',
        benefits: 'The system from one side collects information received from vendors and from the other side' +
            'system managers correct data and these vendors can then fetch data with corrections. System' +
            'provides deduplication mechanism which helps to merge similar records received from' +
            'different vendors and by merging these records collect as much data as possible.',
        tasks: [
            'Designed security model;',
            'Analyzing and creating technical debt tasks;',
            'Setting up Zipkin and Jaeger;',
            'Configuring Sonar, Checkstyler;',
            'Refactoring services and improving stability;',
            'Setting up logging environment for services, configuring Kibana.',
            'Designed and implemented custom Сassandra versioning (tables, indexes);',
            'Configuring Solr indexes;',
            'Implementing Spark processing jobs;',
            'Implemented Kafka listeners and publishers;',
            'Creating REST endpoints;'
        ],
        technologies: ["Java 8", "Spring Boot", "Spring MVC", "Spring Data", "Docker", "Kubernetes", "Kafka",
            "JUnit", "Mockito", "Gradle", "Git", "Kafka", "Hadoop", "Spark", "Cassandra", "MySQL"]
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
                style={{padding: '0 25px 24px'}}
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={projects}
                renderItem={project => (
                    <List.Item key={project.title}>
                        {/*<List.Item.Meta*/}
                        {/*    title={`${item.title}, ${item.position}, ${item.startDate} - ${item.endDate} (${item.duration})`}*/}
                        {/*    description={item.description}*/}
                        {/*/>*/}
                        {/*{item.benefits}*/}
                        <ExperienceRow project={project}/>
                    </List.Item>
                )}
            />
        )

    }
}


export default Experience;