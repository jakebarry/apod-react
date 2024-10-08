import React from 'react'

const Sidebar = (props) => {
    const { data, handleToggleModal } = props
    return (
        <div className='sidebar'>
            <div onClick={handleToggleModal} className='bgOverlay'></div>
            <div className='sidebarContents'>
                <h2>{data?.title}</h2>
                <div className='descriptionContainer'>
                    <p className='descriptionTitle'>{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
                {/* <button onClick={handleToggleModal} class="arrow-button">
                    <span class="arrow"></span>
                </button> */}
            </div>
        </div>
    )
}

export default Sidebar