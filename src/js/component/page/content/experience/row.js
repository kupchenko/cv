import React from "react";


class ExperienceRow extends React.Component {

    render() {
        const {name, description, begin, end, company, roles, contribution, tasks} = this.props.project;
        return (
            <div className="exp">
                <div className="hgroup">
                    <h4>{name} – {description} </h4>
                    <h6><i className="icon-calendar"/>
                        {begin} - {end}
                    </h6>
                    <h6>
                        Working with {company} as {roles.map(company => company.name).join(", ")}
                    </h6>
                </div>
                <p>
                    {contribution}
                    <br/>
                    {tasks.map(item => item.shortDescription)}
                </p>
            </div>
        );
    }
}