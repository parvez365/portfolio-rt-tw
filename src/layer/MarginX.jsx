import React from 'react';

const MarginX = ({children, className}) => {
  return (
    <div className={`xl:mx-10 lg:mx-6 mx-3 ${className}`}>
        {children}
    </div>
  )
}

export default MarginX