import React from 'react';
import { Component } from 'react';

class IssueDetail extends Component {
    state = {
        issueDetails: []
    };

    async componentDidMount() {
        const { issue_number } = this.props.match.params;
        fetch(`https://api.github.com/repos/snes9xgit/snes9x/issues/${issue_number}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    issueDetails: result
                });
            console.log(result);
            });
    }

    render() {
        const { issueDetails } = this.state;
        return (
            <div>
                <h1>{issueDetails.title}</h1>
                <p>{issueDetails.body}</p>
            </div>
        )
    }
}

export default IssueDetail; 