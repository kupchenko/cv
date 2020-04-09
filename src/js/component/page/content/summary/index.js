import React from "react";
import SimpleList from "@/js/component/common/list";

class Summary extends React.Component {

    render() {
        const {summary} = this.props;
        return (<SimpleList data={summary}/>)

    }
}
export default Summary;