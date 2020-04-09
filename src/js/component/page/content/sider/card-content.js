import React, {PureComponent} from 'react';
import {Divider} from "antd";
import ContactInfo from "@/js/component/page/content/sider/contact-info";
import Certificates from "@/js/component/page/content/sider/certificates";
import Education from "@/js/component/page/content/sider/educations";
import Activities from "@/js/component/page/content/sider/activities";
import CoreCompetencies from "@/js/component/page/content/sider/сore-competencies";

class CardContent extends PureComponent {

    render() {
        const {competencies, contacts, activities, education, certificates} = this.props.data;
        return (
            <>
                <Divider orientation="center">Core competencies</Divider>
                <CoreCompetencies competencies={competencies}/>

                <Divider orientation="center">Contact info</Divider>
                <ContactInfo contacts={contacts}/>

                <Divider orientation="center">Certificates</Divider>
                <Certificates certificates={certificates}/>

                <Divider orientation="center">Education</Divider>
                <Education education={education}/>

                <Divider orientation="center">Other activities</Divider>
                <Activities activities={activities}/>
            </>
        )
    }
}

export default CardContent;