'use client'

import React from 'react'

export default function Selector({text,type,iconColor,handleToggle, toggleProp}) {
    const [selected, setSelected] = React.useState(true);
    
    const handleClick = () => {
        setSelected(!selected);
        if (handleToggle && toggleProp) {
            handleToggle(toggleProp);
        }
    };

    return (
        <div 
            className={selected ? "badge bg-gray-300" : "badge"}
            onClick={handleClick}
            style={{ cursor: 'pointer', fontSize: '0.7rem'}}
        >
            <div 
                style={{ 
                    width: type === 'line' ? '15px' : '10px', 
                    height: type === 'line' ? '5px' : '10px', 
                    borderRadius: type === 'node' ? '50%' : '0', 
                    backgroundColor: iconColor || '#000',
                    display: 'inline-block',
                    marginRight: '5px'
                }} 
            />
            {text}
        </div>
    )
}
