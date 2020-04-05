import React from "react";
import {Empty} from "antd";
import SimpleList from "@/js/component/common/list";

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