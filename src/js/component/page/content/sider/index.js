import React, {PureComponent} from 'react';
import {Card, Divider, Layout} from "antd";
import {
    GithubOutlined,
    HomeOutlined,
    LinkedinOutlined,
    MailOutlined,
    PhoneOutlined,
    SkypeOutlined
} from '@ant-design/icons';

class PageSider extends PureComponent {

    render() {
        const {Sider} = Layout;
        return (
            <Sider className="default-layout-background" width={300}>
                <Card
                    hoverable
                    style={{width: 300}}
                    cover={<img src="/src/img/profile.jpg" alt="avatar"/>}
                >
                    <Divider orientation="center">Contact info</Divider>

                    <ul className="list-titles contacts-list" style={{padding: "0"}}>
                        <li><PhoneOutlined/></li>
                        <li><MailOutlined/></li>
                        <li><SkypeOutlined/></li>
                        <li><HomeOutlined/></li>
                        <li><GithubOutlined/></li>
                        <li><LinkedinOutlined/></li>
                    </ul>
                    <ul className="list-content contacts-list" style={{padding: "0"}}>
                        <li>+38(095)499-32-32</li>
                        <li>kupchenko.work@gmail.com</li>
                        <li>Dmitrii Kupchenko</li>
                        <li>Kiev, Ukraine</li>
                        <li><a href="https://github.com/kupchenko">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/dmitrii-kupchenko/">LinkedIn Profile</a></li>
                    </ul>

                    <Divider orientation="center">Certificates</Divider>
                    <ul style={{padding: "0"}}>
                        <li>Java SE 8 Programmer I (1Z0-808) – Oracle. Issued date: 21.05.2019;</li>
                    </ul>

                    <Divider orientation="center">Education</Divider>
                    <ul style={{padding: "0"}}>
                        <li>NURE, Computer science, Bachelor’s Degree in “Information Technology” (2013-2017);
                        </li>
                        <li>NURE, Computer science, Master’s Degree in “System Engineering” (2017-2019);
                        </li>
                    </ul>

                    <Divider orientation="center">Other activities</Divider>
                    <ul style={{padding: "0"}}>
                        <li>Lecturer in Hillel IT School, 2019(March) – 2020(February), Course: “Java Enterprise”</li>
                    </ul>

                </Card>
            </Sider>
        )
    }
}

export default PageSider;