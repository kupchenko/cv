import React, {PureComponent} from 'react';
import {
    GithubOutlined,
    HomeOutlined,
    LinkedinOutlined,
    MailOutlined,
    PhoneOutlined,
    SkypeOutlined
} from '@ant-design/icons';

class ContactInfo extends PureComponent {

    render() {
        return (
            <>
                <ul className="list-titles no-mark-list" style={{padding: "0"}}>
                    <li><PhoneOutlined/></li>
                    <li><MailOutlined/></li>
                    <li><SkypeOutlined/></li>
                    <li><HomeOutlined/></li>
                    <li><GithubOutlined/></li>
                    <li><LinkedinOutlined/></li>
                </ul>
                <ul className="list-content no-mark-list" style={{padding: "0"}}>
                    <li>+38(095)499-32-32</li>
                    <li>kupchenko.work@gmail.com</li>
                    <li>Dmitrii Kupchenko</li>
                    <li>Kiev, Ukraine</li>
                    <li><a href="https://github.com/kupchenko">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/dmitrii-kupchenko/">LinkedIn Profile</a></li>
                </ul>
            </>
        )
    }
}

export default ContactInfo;