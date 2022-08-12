import {Link} from 'react-router-dom'
import { rectangle } from './labeling'

const LabelingDetection = () => {
  return (
    <div className="container-xl">
         
        <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Labeling the Detection</h1>
            <Link to="/"> Back Home</Link>
        </div>

        <p>Now you can draw the result coordinates as a rectangle over the image</p>
        <p>The basics of drawing a tensor result over an image require you to place the image ina acontainer and then position an absolute-canvas over that image</p>
        <p>For a simple rectangle, you can use the canvas context's <span>strokeRect</span> method </p>
        <p>It takes a starting pointand then a width and height</p>
        <p>To convert the model points to width and height, you can just subtract each vertex to get distance</p>
        <p>Armed with the starting point, the width and height of the overlaid rectangle, you can draw to scale on the canvas</p>
        <p>Remember the tensor output is a percentage and will need to be scaled in each dimension</p>
        <pre>{rectangle}</pre>



  )
    </div>
  )
}

export default LabelingDetection