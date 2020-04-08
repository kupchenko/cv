import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Activities extends PureComponent {

    render() {
        const {activities} = this.props;
        const li = activities.map(item => <li key={item.id}>{item.name}</li>);
        return (
            <ul style={{padding: '0'}} className='no-mark-list'>
                {li}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    activities: state.cvData.data.activities
});

export default connect(mapStateToProps)(Activities);
