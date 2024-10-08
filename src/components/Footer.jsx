import React from 'react'

const Footer = (props) => {

    const { data, handleToggleModal } = props

    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h1>APOD Project</h1>
                <h2><a href="https://apod.nasa.gov/apod/">{data?.title}</a></h2>
                {/* <h2>{data?.title}</h2> */}
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer