import React, {PureComponent} from 'react';
import {Layout, Menu} from "antd";

class PageHeader extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {Header} = Layout;
        return (
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{
                        lineHeight: '64px',
                    }}
                    selectable={false}

                >

                </Menu>
            </Header>
        )
    }
}

export default PageHeader;