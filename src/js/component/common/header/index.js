import React, {PureComponent} from 'react';
import {Layout, Menu} from 'antd';

class PageHeader extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {Header} = Layout;
        return (
            <Header className='header'>
                <div className='logo'/>
                <Menu
                    theme='dark'
                    mode='horizontal'
                >
                </Menu>
            </Header>
        )
    }
}

export default PageHeader;