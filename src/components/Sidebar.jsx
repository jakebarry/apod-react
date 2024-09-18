import React from 'react'

const Sidebar = (props) => {
    const { handleToggleModal } = props
    return (
        <div className='sidebar'>
            <div onClick={handleToggleModal} className='bgOverlay'></div>
            <div className='sidebarContents'>
                <h2>The Brutal Moon Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>Test test test test test.</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Sidebar