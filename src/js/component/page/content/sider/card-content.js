import React, {PureComponent} from 'react';
import {Divider} from 'antd';
import ContactInfo from '@/js/component/page/content/sider/contact-info';
import Certificates from '@/js/component/page/content/sider/certificates';
import Education from '@/js/component/page/content/sider/educations';
import Activities from '@/js/component/page/content/sider/activities';
import CoreCompetencies from '@/js/component/page/content/sider/сore-competencies';

class CardContent extends PureComponent {

    render() {
        return (
            <>
                <Divider orientation='center'>Core competencies</Divider>
                <CoreCompetencies/>

                <Divider orientation='center'>Contact info</Divider>
                <ContactInfo/>

                <Divider orientation='center'>Certificates</Divider>
                <Certificates/>

                <Divider orientation='center'>Education</Divider>
                <Education/>

                <Divider orientation='center'>Other activities</Divider>
                <Activities/>
            </>
        )
    }
}

export default CardContent;