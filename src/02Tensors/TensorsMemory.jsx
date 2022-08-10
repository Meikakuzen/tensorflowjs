import {Link} from 'react-router-dom'

const numTensors= String.raw`
console.log(tf.memory().numTensors)
console.log(tf.memory().numBytes)
`

const tidy= String.raw`
 tf.tidy(()=>{
    keeper = tf.tensor([1,2,3])
    chaser= tf.tensor([1,2,3])
    seeker = tf.tensor([1,2,3])
    beater = tf.tensor([1,2,3])
 

 console.log("Tensors in tidy", tf.memory().numTensors)

 //protect a tensor

 tf.keep(keeper)

 //returned tensors survive

 return chaser

 })

 //Down to two

 console.log("after tidy", tf.memory().numTensors)

 keeper.dispose()
 chaser.dispose()

 //Back to zero

 console.log('end', tf.memory().numTensors)


`

const TensorsMemory = () => {
  return (
    <div className="container-xl">
          <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Tensors in Memory</h1>
            <Link to="/"> Back Home</Link>
        </div>
    <p>Tensor speed comes with an overhead cost</p>
    <p>Usually, when we're done with a variable, the memory is cleanly removed when all references to that variable are completed</p>
    <p>Thi is called automatic garbage detection and collection</p>
    <p>Tensors dont have that kind of automatic care. They persist long after the variable that uses them has been collected</p>

    <h3 className=" mb-3 mt-3">Deallocating Tensors</h3>
    <p>Because tensors survive garbage collection, , they have to be accounted for and dellocated manually</p>
    <p>Even if a variable is garbage-collected, the associated tensor is then orphaned in memory</p>
    <p>You can access the current count and size using <span className="fw-bold">tf.memory()</span></p>
    <p>This function returns an object with a report of active tensors</p>

    <pre>{numTensors}</pre>

    <p>Leaving these sizable chunks in memory is a problem</p>
    <p>Fortunately, all tensors and models have <span className="fw-bold">.dispose()</span> method that purges a tensor form memory </p>
    <p>When you call .dispose() on a tensor, the numTensors will go down by the number of tensors you just released</p>
    <p>Tensors has 4 possible states</p>
    <table className="default" style={{borderCollapse: 'separate', border: '1px solid black'}}>
        <tr>
            <th></th>
            <th className="me-5 text-center">Tensor Live</th>
            <th className="ms-5 text-center">Tensor disposed</th>
        </tr>
        <tbody>

        <tr>
            <td className="fw-bold">Javascript variable is live</td>
            <td>You can read the tensor</td>
            <td>An error will be raised if you attempt to use this tensor</td>

        </tr>
        <tr>
            <td className="fw-bold">Variable has no reference</td>
            <td>This is a memory leak</td>
            <td>This is a properly destroyed tensor</td>
        </tr>

        </tbody>
    </table>

    <p className="mt-3">To put it succinctly, keep your variables and your tensors alive to acces them, and when you're done, dispose the tensor and not attempt to access it</p>

    <h3>Automatic Tensor Cleanup</h3>

    <p>Tensors do have an auto-clean option called <span>tidy()</span> </p>
    <p>You can use tidy to create a functional encapsulation that will clean all tensors that aren't returned or flagged for being kept with <span>keep()</span></p>




    <pre>
        {tidy}
    </pre>
    <p>The tidy method takes a synchronus function and monitors the tensors created in this enclosure</p>
    <p>You can not use async or promise here. If you need anything async, you will have to call .dispose explicitly</p>
    <p>even you haven't called .dipose() explicitly, tidy() has properly destroyed two of the created tensors</p>
    <p>With <span>dispose()</span> explicitly destroy the tensor</p>
        
    <Link to="/tensorshome" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default TensorsMemory