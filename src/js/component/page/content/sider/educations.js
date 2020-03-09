import React, {PureComponent} from 'react';
import {connect} from "react-redux";

class Education extends PureComponent {

    render() {
        const {education} = this.props;
        const li = education.map(item => {
            return <li key={item.id}>
                <b>{item.university}</b>, {item.specialization}, {item.degree} ({item.startYear}-{item.endYear})
            </li>
        });
        return (

            <ul style={{padding: "0"}} className="no-mark-list">
                {li}
            </ul>

        )
    }
}

const mapStateToProps = (state) => ({
    education: state.cvData.data.education
});

export default connect(mapStateToProps)(Education);
