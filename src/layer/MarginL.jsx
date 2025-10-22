import React from 'react';

const MarginL = ({children, className}) => {
  return (
    <div className={`lg:ml-26 ${className}`}>
        {children}
    </div>
  )
}

export default MarginL