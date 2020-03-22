import React, {PureComponent} from 'react';
import Exception from 'ant-design-pro/lib/Exception';

class NotFound extends PureComponent {
    render() {
        return (<Exception type='404' desc='Page not found' backText='Go Home'/>)
    }
}

export default NotFound;