import {Link} from 'react-router-dom'

const TensorsData = () => {

    const Crosses= String.raw`
 |x|_|_|
 |_|O|_|
 |x|_|_|  
`
const Board = String.raw`
Where each value is 
X =  1
O = -1
Empty = 0
`
const code = String.raw`
const nope= tf.tensor([4], null, 'float32')
const yep = nope.asType('int32')
`


  return (
    <div className="container-xl">
          <div className="d-flex d-block justify-content-between">
            <h1 className= "text-decoration-underline mb-3">Tensors for data Exercise</h1>
            <Link to="/"> Back Home</Link>

        </div>
        <pre>{Crosses}</pre>
        <pre>{Board}</pre>
        <hr />
        <p>The board displayed here could be read and represented as one-dimensional tensor</p>
    <p>This would create a tensor like:</p>
    <code>[1,0,0,0,-1,0,1,0,0]</code>
    <hr />
    <p>Or a 2D tensor like:</p>
    <code>[[1,0,0],[0,-1,0],[1,0,0]]</code>
    <hr />
    <p>You can convert the 1D tensor into a 2D tensor</p>
    <code>tf.tensor([1,0,0,0,-1,0,1,0,0], [3,3])</code>
    <p>The second parameter of a tensor can identify the desired shape.</p>
    <p>3 rows and 3 columns in this case</p>
    <p>The third parameter the data type (int32, bool, float32,etc)</p>
    <hr />
    <p>The variable yep is a new int32 tensor with the value 4. Nope tensor will exists unaltered</p>
    <pre>{code}</pre>
    <Link to="/tensorstour" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default TensorsData