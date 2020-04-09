import React from "react";
import SimpleList from "@/js/component/common/list";
import {connect} from "react-redux";

class Summary extends React.Component {

    render() {
        const {summary} = this.props;
        return (<SimpleList data={summary}/>)

    }
}

const mapStateToProps = (state) => ({
    summary: state.cvData.data.summary
});

export default connect(mapStateToProps)(Summary);
