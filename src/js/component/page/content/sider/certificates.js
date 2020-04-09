import React, {PureComponent} from 'react';
import {connect} from "react-redux";

class Certificates extends PureComponent {

    render() {
        const {certificates} = this.props;
        const li = certificates.map(item => <li key={item.id}>{item.name}. Issued data: {item.issueDate}</li>);
        return (
            <>
                <ul style={{padding: "0"}} className="no-mark-list">
                    {li}
                </ul>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    certificates: state.cvData.data.certificates
});

export default connect(mapStateToProps)(Certificates);
