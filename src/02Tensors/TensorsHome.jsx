import {Link} from 'react-router-dom'
import * as tf from '@tensorflow/tfjs'

const TensorsHome = () => {

    const tensor= String.raw`
    
    const arrayTensor = []

    for(let i = 0; i < 10; i++){
        arrayTensor.push(tf.tensor([i,i,i]))
        console.log(arrayTensor.rank())
    }
    `
  const retrieve = String.raw` 
  
  const pop = tf.tensor([[1,2,3],[4,5,6]])

  pop.print()

  console.log("welcome back array!", pop.arraySync())
  console.log("welcome back Typed!", pop.dataSync())
  
  `

  return (
    <div className="container-xl">
         <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Tensors Come Home</h1>
            <Link to="/"> Back Home</Link>
        </div>

    <p>Its worth noting that you can even mix tensors and javascript where applicable</p>
    <pre>{tensor}</pre>
    <p> The result is an array of 10 tensors form [0,0,0] to [9,9,9]</p>

    <h3>Retrieving Tensor Data</h3>

    <p>To print a tensor's data you can call the <span>.print()</span> method </p>
    <p>Ther are tow ways to retrieve tensors. Each of these methods has a synchronus and asynchronus way</p>
    <p>Firts , if you'd like your data to be delivered in teh same multidimensional array structure, you can use <span>.array()</span> for an asynchronus result, or 
    <span>.arrySync()</span> for a sync value </p>
    <p>Second, if you'd like to keep your values with extreme precision and flattened to a ID typed array, you can use the synchrouns <span> dataSync()</span> or 
    the asynchronus method <span>data()</span>  </p>
    <pre>{retrieve}</pre>
    <p>arraySync() give us the values of a 2D tensor  back as a 2D Javascript array</p>
    <p>dataSync() give us the values of the 2D tensor as a 1D Float32Array. Looks like an object with indices as properties</p>


    <Link to="/tensormanipulation" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default TensorsHome