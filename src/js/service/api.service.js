import React from 'react';

const data = {
    name: 'Dmitrii Kupchenko',
    title: 'Senior Software Engineer',
    avatar: '/avatars/avatar.jpg',
    competencies: [
        {
            id: 1,
            values: ['Java Software Engineering']
        },
        {
            id: 2,
            key: 'Technologies',
            values: ['Java', 'Spring', 'ReactJS']
        },
        {
            id: 3,
            key: 'Cloud',
            values: ['GCP', 'Docker', 'Kubernetes']
        },
        {
            id: 4,
            key: 'Queues',
            values: ['AWS SQS', 'Kafka']
        }
    ],
    contacts: {
        name: 'Dmitrii Kupchenko',
        phone: '+38(095)499-32-32',
        email: 'kupchenko.work@gmail.com',
        github: 'https://github.com/kupchenko',
        location: 'Kiev/kharkiv, Ukraine',
        linkedin: 'https://www.linkedin.com/in/dmitrii-kupchenko/'
    },
    certificates: [
        {
            id: 0,
            name: 'Java SE 8 Programmer I (1Z0-808) - Oracle',
            issueDate: '21.05.2019'
        }
    ],
    education: [
        {
            id: 0,
            university: 'NURE',
            specialization: 'Computer science',
            degree: `Bachelor's Degree in "Information Technology"`,
            startYear: '2013',
            endYear: '2017'
        }, {
            id: 1,
            university: 'NURE',
            specialization: 'Computer science',
            degree: `Master's Degree in "System Engineering"`,
            startYear: '2017',
            endYear: '2019'
        }
    ],
    activities: [
        {
            id: 0,
            name: 'Lecturer in Hillel IT School, 2019(March) - 2020(February), Course: "Java Enterprise"'
        }
    ],
    summaryText: '',
    summary: [
        'Over 6 years of experience of software development.',
        'About 5 years of overall production Java experience.',
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
            startDate: '09.2019',
            endDate: 'Now',
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
            technologies: ['Java 8', 'Spring Boot', 'Spring MVC', 'Spring Data', 'Docker', 'Kubernetes', 'Kafka',
                'JUnit', 'Mockito', 'Gradle', 'Git', 'Kafka', 'Hadoop', 'Spark', 'Cassandra', 'MySQL']
        },
        {
            startDate: '01.2019',
            endDate: '09.2019',
            company: 'SoftServe',
            position: 'Software Engineer',
            title: 'Consent check',
            description: `The service checks user's consent for viewing and using his personal information. The decision is made on the basis of analytics from various data sources.`,
            benefits: 'The service acts like a proxy between user and data. Service limits access to user information. So, there is no way to view customer data without explicit or implicit consent. This greatly improves security.',
            tasks: [
                'Implementing request processing mechanism using Spring WebFlux;',
                'Created Cucumber test suit to test application as a BB (blackbox);',
                'Setup integration with LauchDarkly (feature flag service);',
                'Added audit log for app event;',
                'Created Splunk dashboard to monitor application logs;',
                'Created Datadog and SignalFX dashboard panels to monitor application metrics;',
                'Config AWS SQS, DLQ and scheduler for manual DLQ reading;',
                'Configured Circuit Breaker (Hystrix) for outgoing requests;',
                'Configuring retry for external requests;'
            ],
            technologies: ['Java 8', 'Spring Boot', 'Spring WebFlux', 'LDAP (Active Directory)', 'Docker', 'JUnit', 'Mockito', 'Cucumber', 'Bamboo', 'LaunchDarkly', 'SignalFx', 'Maven', 'Git', 'SourceClear', 'AWS SQS']
        },
        {
            startDate: '09.2018',
            endDate: '12.2018',
            company: 'SoftServe',
            position: 'Software Engineer',
            title: 'Security Jira plugin',
            description: 'The project aims to manage authentication process for customers when logging into Jira, Confluence. It works with Active Directory where all the customer information is stored.',
            benefits: 'All products are working with one data storage and authentication is performed user using LDAP (Active Directory). There is no need to be registered in each product.',
            tasks: [
                'Integration with LDAP using java and using Spring LdapTemplate;',
                'Creating build configuration on Bamboo using Bamboo specs and Plan template;',
                'Selenium tests were created to cover main flows (smoke tests);',
                'Setup integration with LauchDarkly (feature flag service) to perform careful roll-out;',
                'Implemented integration with security service in Jira plugin;',
                'Configured and implemented RBAC;',
                'Created Splunk, Datadog and SignalFX dashboard panels to monitor application metrics/logs;'
            ],
            technologies: ['Java 8', 'LDAP (Active Directory)', 'Spring', 'JUnit', 'Mockito', 'Bamboo', 'LaunchDarkly', 'DataDog', 'Maven', 'Git', 'AWS SQS']
        },
        {
            startDate: '03.2018',
            endDate: '08.2018',
            company: 'EPAM',
            position: 'Software Engineer',
            title: 'Fraud detection',
            description: 'Fraud detection in enterprise projects is really important to protect the system. There are many FraudForce security service available on the market. The main goal for this project was to integrate with one of such services. Migration ATG implementation of application to Spring boot service.',
            benefits: 'For all fraud users the access to the system is forbidden.',
            tasks: [
                'Implemented integration with FraudForce service (REST requests);',
                'Developed JS script to collect browser information;',
                'Created REST endpoint to retrieve FraudForce service statistic;',
                'Migrating legacy ATG implementation to separate service built with Spring boot;',
                'Developed REST endpoints for customer profile;'
            ],
            technologies: ['Java 8', 'Spring Boot', 'Spring MVC', 'JUnit', 'Mockito', 'Liquibase', 'Oracle DB', 'AspectJ', 'Jenkins', 'Maven', 'SVN', 'Git']
        },
        {
            startDate: '06.2017',
            endDate: '02.2018',
            company: 'EPAM',
            position: 'Software Engineer',
            title: 'Price loading optimization',
            description: 'The main goal is to optimize performance of price loading mechanism, change price DB structure in order to decrease the number of cache invalidation events. Make price processing in parallel mode.',
            benefits: 'Time to process prices has halved.',
            tasks: [
                'Developed multithreading framework for importing prices to ATG Repositories;',
                'Dealing with multithreading issues when loading prices in parallel mode;',
                'Change DB structure (Updating Liquibase script);',
                'Created rollout plans for service deployment;',
                'Implemented integration with FraudForce service;',
                'Developed REST endpoints for customer profile;'
            ],
            technologies: ['Java 7', 'Java 8', 'ATG Oracle Ecommerce', 'JAX-RS', 'JUnit', 'Mockito', 'Liquibase', 'Oracle DB', 'AspectJ', 'Jenkins', 'Maven', 'SVN', 'Git.']
        },
        {
            startDate: '11.2016',
            endDate: '02.2018',
            company: 'EPAM',
            position: 'Software Engineer',
            title: 'Office Space Management Tool',
            description: `Office Space Management Tool is used for tracking workplace distribution between company offices, employee's allocation management. Storing Visio schemes with office plans.`,
            benefits: `Easy to track workplace distribution and employee's allocation.`,
            tasks: [
                'Developed service to keep both legacy Oracle DB and PostgreSQL synchronized, so that old services can work with the legacy DB;',
                'Covering synchronization functionality with Unit tests;',
                'Developed tool for dynamic DB dump creation;',
                'REST API development using Spring MVC;',
                'New releases deployment;',
                'Bug fixing;'
            ],
            technologies: ['Java 8', 'Spring Boot', 'Spring Data', 'Spring Security', 'JUnit', 'Mockito', 'Liquibase', 'Sonar', 'MySQL', 'PostgreSQL', 'Jenkins', 'Maven.']
        }
    ]
};

export default class ApiService {
    static fetch(url, payload = {}) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                //Returning stub data
                console.log(`Requesting '${url}' with payload '${payload}'`);
                console.log(`Don't be mad, returning hard-coded data`);
                console.log(`Backend part is coming soon`);
                resolve(data);
            }, 1000);
        });
    }
}
