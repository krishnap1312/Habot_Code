import React from 'react'
import "./Ribbon.css"

function Ribbon() {
  return (
    <div className='RibbonDiv'>
        <div className='RibbonText'>
            <h1>Let Suppliers <span>Find You</span></h1>
        </div>

        <div>
            <button className='GetVerified'>
                Get Verified
            </button>
        </div>
    </div>
  )
}

export default Ribbon