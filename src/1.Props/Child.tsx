import React from 'react';

type ChildProps = {
    text: string;
};

const Child: React.FC<ChildProps> = (props) => {
    return (
        <div>
            <button>{props.text}</button>
        </div>
    );
};

export default Child;