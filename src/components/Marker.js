import React from 'react';


const Marker = ({position, map}) => {

const marker = new window.google.maps.Marker({position, map})

    return (
        <div>
            
        </div>
    );
};

export default Marker;