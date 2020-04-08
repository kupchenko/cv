import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class CoreCompetencies extends PureComponent {

    render() {
        const {competencies} = this.props;
        const li = competencies.map(item => {
            return <li key={item.id}><b>{item.key}{item.key ? ':' : ''}</b> {item.values.join(', ')}</li>
        });
        return (
            <ul className='no-mark-list' style={{padding: '0 0 0'}}>
                {li}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    competencies: state.cvData.data.competencies
});

export default connect(mapStateToProps)(CoreCompetencies);
