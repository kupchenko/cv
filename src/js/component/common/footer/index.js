import React, {PureComponent} from 'react';
import {Layout} from 'antd';

class PageFooter extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {Footer} = Layout;
        return (
            <Footer style={{textAlign: 'center'}}>
                Dmitrii Kupchenko CV © 2018 Created by Dmitrii Kupchenko
            </Footer>
        )
    }
}

export default PageFooter;