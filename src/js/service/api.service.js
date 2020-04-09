import React from "react";

const data = {
    name: "Dmitrii Kupchenko",
    title: "Senior Software Engineer",
    skills: [],
    competencies: [
        {
            id: 1,
            values: ["Java Software Engineering"]
        },
        {
            id: 2,
            key: "Technologies",
            values: ["Java", "Spring", "ReactJS"]
        },
        {
            id: 3,
            key: "Cloud",
            values: ["GCP", "Docker", "Kubernetes"]
        },
        {
            id: 4,
            key: "Queues",
            values: ["AWS SQS", "Kafka"]
        }
    ],
    contacts: {
        name: "Dmitrii Kupchenko",
        phone: "+38(095)499-32-32",
        email: "kupchenko.work@gmail.com",
        github: "https://github.com/kupchenko",
        location: "Kiev/kharkiv, Ukraine",
        linkedin: "https://www.linkedin.com/in/dmitrii-kupchenko/"
    },
    certificates: [
        {
            id: 0,
            name: "Java SE 8 Programmer I (1Z0-808) – Oracle",
            issueDate: "21.05.2019"
        }
    ],
    education: [
        {
            id: 0,
            university: "NURE",
            specialization: "Computer science",
            degree: "Bachelor’s Degree in “Information Technology”",
            startYear: "2013",
            endYear: "2017"
        }, {
            id: 1,
            university: "NURE",
            specialization: "Computer science",
            degree: "Master’s Degree in “System Engineering”",
            startYear: "2017",
            endYear: "2019"
        }
    ],
    activities: [
        {
            id: 0,
            name: "Lecturer in Hillel IT School, 2019(March) – 2020(February), Course: “Java Enterprise”"
        }
    ],
    summaryText: "",
    summary: [
        'Over 5 years of experience of software development.',
        'About 4 years of overall production Java experience.',
        'During that time, I participated in more than 10 projects of various size and complexity.',
        'I have strong understanding of the object-oriented concepts, design patterns and different SDLC processes.',
        'I have been involved in several major long-term projects, which gave me strong experience in various areas of software design and development.',
        'Most of project I took part in were handled with Scrum.',
        'Interested in micro-services approach. Hands on experience in Docker, Kubernetes on GCP.',
        'Experienced with Agile software development methodology.',
        'Experienced in working in distributed team.',
        'I am always open to new and accepting the challenges with interest and enthusiasm.',
    ],
    projects: [
        {
            startDate: '21.03.2112',
            endDate: '21.07.2112',
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
        }, {
            startDate: '21.03.2112',
            endDate: '21.07.2112',
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
        }
    ]
};

export default class ApiService {
    static fetch(url, payload = {}) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(data);
            }, 500);
        });
    }
}
