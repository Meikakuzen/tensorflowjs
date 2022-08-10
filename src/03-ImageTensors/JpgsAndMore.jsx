import React from 'react'
import {Link} from 'react-router-dom'

const JpgsAndMore = () => {
  return (
    <div className="container-xl">
        <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Visual Tensors</h1>
            <Link to="/"> Back Home</Link>
        </div>

        <p>How does a tensor turn into an actual visible image?</p>
        <p>And how does an existing image turn into a tensor?</p>
        <p>The answer will vary according to where the Javascript is running</p>
        <p>To decode an image to a tensor and back on a brower, you'll be limited and empowered by the magic of the browser's built-in functionality for a sand-box</p>
        <p>Images ona  server running NOde.js will not be sandboxed but leackeasy visual feedback</p>

        <h3>Brower: Tensor to Image</h3>




        <Link to="/commonmodifications" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default JpgsAndMore