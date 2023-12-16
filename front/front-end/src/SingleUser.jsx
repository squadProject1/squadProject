import React from 'react'

import './SingleUser.css'
export default function SingleUser(props){
    console.log(props.userData)
    return (
        <div  className='singleUser-component' >
        <div className='infos-container'>
            <img className='single-rounded' alt="no-content" />
            <h2 className='single-h2'>userName here</h2>
            <h4 className='single-h4' >biographie:</h4>
            <span className='single-span' >biographie here tcftefczyitcvzcrzvckergcer</span>
            <h5 className='single-h5' >followers:0</h5>
        </div>
        <button className='single-button' >follow</button>
        
        </div>
    )
}