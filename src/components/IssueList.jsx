import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                    <li key={issue.id}>
                        {issue.title} { ": " }
                        <Link to={`/issue/${issue.number}`}>View Issue</Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default IssueList;