import React from 'react'

const Main = (props) => {
    const {data} = props
    return (
        <div className='imageContainer'>
            <img
                src={data?.hdurl}
                alt={data?.title || 'bg-image'}
                className='bgImage'
            >

            </img>
        </div>
    )
}

export default Main