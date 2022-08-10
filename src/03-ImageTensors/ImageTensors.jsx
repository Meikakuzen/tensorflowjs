import React from 'react'
import {Link} from 'react-router-dom'

const ImageTensors = () => {
  return (
    <div className="container-xl">
          <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Image Tensors</h1>
            <Link to="/"> Back Home</Link>
        </div>

        <p>You are going to need how to deal with large tensors, which are more common</p>
        <p>This is true, of course, in the world of images</p>
        <p>We'll need to identify some common practices and tricks of the trade, so you don't have to reinvent the wheel  every time</p>
        <p>We will:</p>
        <ul>
          <li>Identify what makes a tensor an image tensor</li>
          <li>Build some images by hand</li>
          <li>Use fill methods to create large tensors</li>
          <li>Convert existing images to tensors and back</li>
          <li>Manipulate image tensors in useful ways</li>
        </ul>

        <Link to="/visualtensors" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default ImageTensors