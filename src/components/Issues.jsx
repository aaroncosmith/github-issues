import React from 'react';

const Issues = props => {
    let { issue } = props;
    return (
        <div>
            <p>
                Issue: {issue.title} {" "}
            </p>
        </div>
    )
}


export default Issues; 