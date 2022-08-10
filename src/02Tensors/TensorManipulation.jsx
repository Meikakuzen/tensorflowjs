import {Link} from 'react-router-dom'
import * as tf from '@tensorflow/tfjs'
import { userVotes, band_feats, Exercise, features, users} from './tensormanipulationhelper'

const TensorManipulation = () => {

const Multiply= String.raw`
const mat = [
    [91,82,13],
    [15,23,62],
    [25,66,63]
]
const mat2 =[
    [1,23,83],
    [33,12,5],
    [7,23,61]
]
tf.matMul(mat,mat2).print()
`








  return (
    <div className= "container-xl">
        <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Tensor Manipulation</h1>
            <Link to="/"> Back Home</Link>
        </div>
       <p>ML models are driven by math</p>
       <p>Any mathematical process that relies on linear algebra is going to benefit from tensors</p>

       <h3>Tensors and Mathematics</h3>
      <p>Multiply matrices is easy with <span>tensorflowjs</span></p>
        <pre>{Multiply}</pre>
        <h3>Recommending Tensors</h3>
        <p>Lets build a simple exemple in a real-world scenario</p>
        <p>A recomendation engine, like in Youtube, Amazon, etc</p>
        <p>Thats what you will do, at a high level</p>
        <ul>
            <li>Ask users to rank bands from 1 to 10</li>
            <li>Any unknown band gets a 0</li>
            <li>Bands and music styles will de our "features"</li>
            <li>Use the matrix dot product to identify what styles each user likes!</li>
        </ul>
        <hr />
        <h4>Dot product</h4>
            <p>The dot product its just a way to identify similarity between tensors represented as vectors. The more two tensors are similar, 
                the higher dot product will be. 
            </p>
            <p>When two vectors  are close together, their dot product (mathMul in tfjs)  is a larger number</p>
            <p>When tey are in opposite directions the dot product is a negative number</p>
            <p>Two negative vectors that are similar has a positive dot product</p>
        <hr />
        <h4>Let's get started!</h4>

        <p>You can use a method called <span>.topk() </span> to help us identify the top values for each user with size k </p>
        <pre>{Exercise}</pre>
        
    </div>
  )
}

export default TensorManipulation