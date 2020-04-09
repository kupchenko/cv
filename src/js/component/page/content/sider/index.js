import React, {PureComponent} from 'react';
import {Card, Layout} from "antd";
import CardContent from "@/js/component/page/content/sider/card-content";

class PageSider extends PureComponent {

    render() {
        const {Sider} = Layout;
        let cardContent;
        if (this.props.data) {
            cardContent = <CardContent data={this.props.data}/>;
        }
        return (
            <Sider className="default-layout-background" width={300}>
                <Card
                    hoverable
                    style={{width: 300, padding: '0 0 15px 0'}}
                    cover={<img src="/src/img/profile.jpg" alt="avatar"/>}
                >
                    {cardContent}
                </Card>
            </Sider>
        )
    }
}

export default PageSider;