import React from 'react';

const Comment = (props) => {
    const { name, email } = props.comment;
    return (
        <div>
            <p>name: {name}</p>
            <p>e-mail: {email}</p>
        </div>
    );
};

export default Comment;