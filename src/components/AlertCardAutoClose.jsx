import React from 'react'

const AlertCardAutoClose = ({ message }) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-4 left-1/2 transform -translate-x-1/2 z-50 shadow-lg max-w-md w-full text-center">
            <strong className="font-bold">Alert: </strong>
            <span className="block sm:inline">{message}</span>
        </div>
    )
}

export default AlertCardAutoClose