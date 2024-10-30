import React from 'react'
import "./ImageContainer.css"

function ImageContainer() {
  return (
    <div className='ImageContainer'>
        <div className='ImageContainerText'>
            <div><h1>Are You a Supplier?</h1></div>
            <div><h3>Explore Matching Opportunities</h3></div>
            <div className='ImageContainerInput'>
                {/* <div><input type="text" placeholder='Search your required service here' /></div>
                <div><input type="text" placeholder='Search your desired location here' /></div>
                <div><button>Search</button></div> */}

<div className="search-container">
      <div className="input-group">
        <span className="icon">💼</span> {/* Icon for service input */}
        <input type="text" placeholder="Search your required service here" />
      </div>
      <div className="input-group">
        <span className="icon">📍</span> {/* Icon for location input */}
        <input type="text" placeholder="Search your desired location here" />
      </div>
      <button className="search-btn">Search</button>
    </div>


            </div>
            <div className='h5Container'><h5>Are you a buyer?<span> Click here if you are looking to post a requirements</span></h5></div>
        </div>
    </div>
  )
}

export default ImageContainer