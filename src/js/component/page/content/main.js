import React, {PureComponent} from 'react';
import {Divider} from "antd";
import Experience from "@/js/component/page/content/experience";
import Summary from "@/js/component/page/content/summary";

class MainContent extends PureComponent {

    render() {
        const {name, title, summary, projects} = this.props;
        return (
            <>
                <div className="employee-name">{name}</div>
                <div className="employee-title">{title}</div>

                <Divider orientation="left">Summary</Divider>
                <Summary summary={summary}/>

                <Divider orientation="left">Experience</Divider>
                <Experience projects={projects}/>
            </>
        )
    }
}

export default MainContent;