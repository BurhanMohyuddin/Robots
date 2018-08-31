import React from 'react';

const Card = ({name,email,id}) => {
    return (
        <div className = 'tc bg-purple dib br3 pa2 ma1 grow bw2 shadow-5'>
            <img alt = 'robots' src = {`https://robohash.org/${id}?size=150x150`}/> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;