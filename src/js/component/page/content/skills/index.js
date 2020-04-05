import React from "react";
import {Empty} from "antd";
import SimpleList from "@/js/component/common/list";

// const summaryItems = [
//     'Over 5 years of experience of software development.',
//     'About 4 years of overall production Java experience.',
//     'During that time, I participated in more than 10 projects of various size and complexity.',
//     'I have strong understanding of the object-oriented concepts, design patterns and different SDLC processes.',
//     'I have been involved in several major long-term projects, which gave me strong experience in various areas of software design and development.',
//     'Most of project I took part in were handled with Scrum.',
//     'Interested in micro-services approach. Hands on experience in Docker, Kubernetes on GCP.',
//     'Experienced with Agile software development methodology.',
//     'Experienced in working in distributed team.',
//     'I am always open to new and accepting the challenges with interest and enthusiasm.',
// ];
const skills = [
    'Java: Java 7, Java 8;',
    'Spring: MVC, Boot, Data, Security, WebFlux, Cloud (Hystrix, Zipkin, Feign);',
    'JPA: Hibernate;',
    'Cloud: GCP services, Docker, Kubernetes, AWS S3, AWS SQS;',
    'BigData: Hadoop, Spark, DataStax Cassandra, Solr Indexes, Kafka;',
    'Metrics tools: Datadog, SignalFx;',
    'Version Control Systems: Git, SVN;',
    'Building Tools: Jenkins, Bamboo, Maven, Gradle;',
    'Internet Technologies: AJAX;',
    'SQL Databases: H2, MySQL, PostgreSQL, Oracle DB;',
    'Scripting Languages: JavaScript;',
    'JavaScript Components and Frameworks: JQuery;',
    'Agile: Kanban, Scrum;',
    'Project Management tools: JIRA;',
    'Software Quality (Code Audit Tools): Sonar, SourceClear, Jacoco, CodeCov, Checkstyle;',
    'Languages: Russian, Ukrainian - native, English (B1,);'
];

class Skills extends React.Component {

    render() {
        // const {projects} = this.props;
        if (!skills) {
            return <Empty/>;
        }
        return (<SimpleList data={skills}/>)

    }
}


export default Skills;