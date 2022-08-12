import {Link} from 'react-router-dom'

const LoadingModels = () => {
  return (
    <div className="container-xl">
          <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Loading Models</h1>
            <Link to="/"> Back Home</Link>
        </div>
        <p>We know we need to get our models into memory and preferably into GPU-accelerated memory like tensors, but from where?</p>
        <p>Anywhere!</p>
        <p>Tensorflow.js supports two fifferent model formats</p>
        <p>You just need to know what kind of model you need and from where you'll be accessing it</p>
        <p>The simplest and most extensible model is called a <span>Layer model</span></p>  
        <p>This model format lets you inspect,modify, and even take a model apart for adjustment</p>
        <p>The other model is called <span>Graph model</span> </p>
        <p>Graph models are generally more optimized as well as computationally efficient</p>
        <p>The cost of using a Graph model is that the model is even more "black box", and due its optimizations, it's more difficult to inspect or modify</p>
        <p>Methods are simple</p>
        <ul>
            <li>For a Layer model: <span>.loadLayersModel()</span> </li>
            <li>For a Graph model: <span>.loadGraphModel()</span> </li>
        </ul>
        <p>The first parameter is the location of the mdoel data</p>

        <h3>Loading Models Via Public URL</h3>
        <p>This is done with a single URL to a single file</p>
        <p>The model file that was originally requested was a simple JavaScript Object Notation (JSON) file, and the subsequent files were weights for the neural network were identified from that JSON file</p>
        <p>You can use npm too</p>


        <Link to="/firstmodel" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default LoadingModels