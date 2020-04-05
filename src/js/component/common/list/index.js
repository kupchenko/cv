import React from "react";

class SimpleList extends React.Component {

    render() {
        const {data} = this.props;
        return (
            <ul>
                {data.map(item => <li key={item}>{item}</li>)}
            </ul>

        )

    }
}


export default SimpleList;