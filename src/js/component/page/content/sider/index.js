import React, {PureComponent} from 'react';
import {Card, Layout} from "antd";
import {GithubOutlined, LinkedinOutlined} from "@ant-design/icons";

class PageSider extends PureComponent {

    render() {
        const {Sider} = Layout;
        return (
            <Sider className="default-layout-background" width={250}>
                <Card
                    hoverable
                    style={{width: 250}}
                    cover={<img src="/src/img/profile.jpg" alt="avatar"/>}
                    actions={[
                        <LinkedinOutlined />,
                        <GithubOutlined />
                    ]}
                >

                </Card>
            </Sider>
        )
    }
}

export default PageSider;