import React from "react";
import {Empty} from "antd";
import SimpleList from "@/js/component/common/list";

const summaryItems = [
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
];

class Summary extends React.Component {

    render() {
        // const {projects} = this.props;
        if (!summaryItems) {
            return <Empty/>;
        }
        return (<SimpleList data={summaryItems}/>)

    }
}


export default Summary;