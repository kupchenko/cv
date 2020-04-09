import React, {PureComponent} from 'react';

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

export default Certificates;