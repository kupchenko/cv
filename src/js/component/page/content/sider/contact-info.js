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
        const {contacts} = this.props;
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
                    <li>{contacts['phone']}</li>
                    <li>{contacts['email']}</li>
                    <li>{contacts['name']}</li>
                    <li>{contacts['location']}</li>
                    <li><a href={contacts['github']}>GitHub</a></li>
                    <li><a href={contacts['linkedin']}>LinkedIn Profile</a></li>
                </ul>
            </>
        )
    }
}

export default ContactInfo;