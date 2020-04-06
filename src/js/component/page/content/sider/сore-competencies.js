import React, {PureComponent} from 'react';

class CoreCompetencies extends PureComponent {

    render() {
        return (
            <ul className="no-mark-list" style={{padding: '0 0 0'}}>
                <li>Java Software Engineering</li>
                <li><b>Technologies:</b> Java, Spring, ReactJS</li>
                <li><b>Cloud:</b> GCP, Docker, Kubernetes</li>
                <li><b>Queues:</b> AWS SQS, Kafka</li>
            </ul>

        )
    }
}

export default CoreCompetencies;