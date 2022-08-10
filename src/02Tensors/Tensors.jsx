import {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Tensors = () => {

    const tensor2D = String.raw`
    [
     [2,3], 
     [5,6], 
     [8,9]
    ]
    `
    const tensor3D = String.raw`
    [
        [
            [1,2,3],
            [4,5,6]
        ],
        [
            [6,5,4],
            [3,2,1]
        ]
    ]
    `


  return (
    <>
    <div className= "container-xl">
        <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Tensors</h1>
            <Link to="/"> Back Home</Link>

        </div>
    <p className="mt-3">They are like electrical signals from the physicall world  to our AI's brain</p>
    <p>While there's no specification of how your data should be structured, you do need to stay consistent to keep your signals organized,
        so our brain can see the same pattern over and over</p>
    <p>Tensorflowjs tensors are the embodiment of these mathematical structures 
        that hold the accelerated signals that feed data into and out of a machine learning model
    </p>
    <p>But, what's a tensor? As defined mathematically, is simply a structured set of values of any dimension.
        This resolves to an optimized grouping of data as numbers that are ready for calculation.
    </p>
    <pre>One dimensional array: [1,2,3] </pre>
    <p>A standard set of data. Are ideal  for capturing sets of related data and sequences</p>
    <br/>
    <pre>A 2D or rank-two array: {tensor2D}
    </pre>
    <p>Can store the x and the y coordinates for a graph</p>
    
    <pre>A 3D array, or rank three: {tensor3D}</pre>
    <h3 className="fs-5">To put it plainly, a 2D is an array of arrays, and a 3D is an array of arrays of arrays</h3>
    <p>Nesting arrays allows you to format data so taht correlated info can map to one another, and patterns can emerge</p>

    <Link to="/creatingtensors" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
    </>
  )
}

export default Tensors