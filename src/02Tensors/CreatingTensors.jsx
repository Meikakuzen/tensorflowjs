import {Link} from 'react-router-dom'

const Methods = String.raw`
console.log(guess.rank)
console.log(guess.size)
console.log(guess.dtype)
`
const Crosses= String.raw`
 |x|_|_|
 |_|O|_|
 |x|_|_|  
`


const CreatingTensors = () => {
  return (
    <div className="container-xl">
      <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Creating Tensors</h1>
            <Link to="/"> Back Home</Link>

        </div>
    <p>Will keep things simple</p>
    <code> const dataArray = [1,2,3,4,5]</code>
    <br />
    <code>const first= tf.tensor(dataArray)</code>
    <hr />

    <p>Does the same thing</p>
    <code>const first_again= tf.tensor1d(dataArray)</code>
    <hr/>
    <p>Determining the desrired dimensionality is useful when you're looking to ensure the number of dimensions in the data you're working with.</p>
    <p>Methods exist for verifying up to six dimensions with tf.tensor6d</p>
    <h4>The default  data type to store numbers is <span className= "fw-bold">Float 32</span></h4>
    <p>They  can usually handle more numbers you'll need and be ready for values between</p>
    <p>Unlike Javascript arrays, tensor's data type must be homogeneous (all the same type) </p>
    <p> The types can be only <span className="fs-3 fw-bold">Float32, Int32, bool, complex64, or string</span> </p>
    <p> Feel free to use the third parameter of tf.tensor function, which explicity defines the tensor's type structure</p>
    <hr/>
    <p>The tensor is created as a Float32 tensor</p>
    <code>const first = tf.tensor([1,2,3.5,4], null, 'float32')</code>
    <hr/>
    <p>The resulting tensor is a boolean tensor</p>
    <code>const the_truth = tf.tensor([true, false, true])</code>
    <hr/>
    <p>The resulting tensor is an Int32, with the boolean values cast to 0 for false and 1 for true</p>
    <code>const guess = tf.tensor([true, false, false], null, 'int32')</code>
    <hr/>
    <h3>Like Javascript arrays, tensors are equipped with methods to explain their properties</h3>
    <pre> 
      {Methods}
    </pre> 
    <p>The simply arrays is rank 1, so it will print 1.</p>
    <p>The size is 3, so it will print 3</p>
    <p>The data type is int32, so it will print int32</p>

    <Link to="/tensorsdata" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>


    </div>
  )
}

export default CreatingTensors