import React from 'react'

const Footer = (props) => {

    const { handleToggleModal } = props

    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h2>The Moon</h2>
                <h1>APOD Project</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer