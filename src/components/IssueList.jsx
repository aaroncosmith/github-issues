import React, { Component } from "react";
import Issues from "./Issues";

class IssueList extends Component {
    state = {
        issues: []
    };
    
    
    async componentDidMount() {
        fetch(`https://api.github.com/repos/snes9xgit/snes9x/issues`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    issues: result
                });
            });
    }

    render() {
        const { issues } = this.state;
        return (
            <ul>
                {issues.map(issue => (
                    <Issues key={issue.id} issue={issue} />
                ))}
            </ul>
        )
    }
}

export default IssueList;