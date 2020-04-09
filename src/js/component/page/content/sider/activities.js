import React, {PureComponent} from 'react';

class Activities extends PureComponent {

    render() {
        const {activities} = this.props;
        const li = activities.map(item => <li key={item.id}>{item.name}</li>);
        return (
            <ul style={{padding: "0"}} className="no-mark-list">
                {li}
            </ul>
        )
    }
}

export default Activities;