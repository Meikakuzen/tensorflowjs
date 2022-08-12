import {Link} from 'react-router-dom'
import { first } from './firstConsumed'

const FirstConsumedModel = () => {

const illustrated = String.raw`
   A. Empty
   |_|_|_|
   |_|_|_|
   |_|_|_|

   B. Block
   |X|_|_|
   |O|O|X|
   |_|_|X|

   C. Win
   |X|_|X|
   |_|O|O|
   |O|_|X|
`



  return (
    <div className="container-xl">
          <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Loading Models</h1>
            <Link to="/"> Back Home</Link>
        </div>
        <p>Let's build from the foundation of your existing knowledge and not only encode a tic-tac-toe match, but also pass the information
            into a trained model for analysis
        </p>
        <p>The trained model will then predict and return an answer for the best next move</p>
        <p>Your goal for this section will be to ask the AI model what moves it recommends for the three board states illustrated</p>

    <pre>{illustrated}</pre>
    <p>Scenario A: This is blank and allows AI to make the forst move</p>
    <p>Scenario B: This is O's turn, and we expect the AI to block the potential loss by playing in the top-right square</p>
    <p>Scenario C: This is X's move, and we expect the AI to move in the top-middle and claim victory!</p>

    <h3>Loading, Encoding, and Asking a Model</h3>

    <p>You'll be using the simple URL to loading the model</p>
    <p>This model will be a Layers model</p>

    <table className="default">
        <tr>
            <th className="text-center">
                <td>Board Value</td>
                <td>Tensor Value</td>
            </th>
        </tr>
        <tr>
            <td>AI</td>
            <td> 1</td>
        </tr>
        <tr>
            <td>Oponent</td>
            <td> -1</td>
        </tr>
        <tr>
            <td>Empty</td>
            <td>0</td>
        </tr>
    </table>

    <p className="mt-5">All three games need to be encoded and then stacked into a single tensor to pass to the AI model. The model then supplies three answers, 
        one for each situation
    </p>
    <p>This is the full process:</p>
    <ul>
        <li>Load the model</li>
        <li>Encode the three separate game states</li>
        <li>Stack the states into a single tensor</li>
        <li>Ask the model to print the results</li>
    </ul>
    <p>Stacking input to a model is a common practice and allows your model to handle any number of predictions in acceletrated memory</p>

    <p>Stacking increases the dimensionality of teh result</p>
    <p>Performing this action on 1D tensor creates a 2D tensor, and so on</p>
    <p>In this instance you have three board states represented in 1D tensor, so stacking them will create a [3,9] tensor</p>
    <pre>{first}</pre>

    <p>Use <span>tf.ready()</span>  which resolves when Tensorflow.js is ready</p>
    <p>Use <span>tf.stack()</span> to combine three 1D tensors into a single 2D tensor</p>
    <p>Use <span>.predict()</span> to ask the model to identify the best next moves</p>
    <p>The original output was going to shaped as [3,9]. Print the result in three 3x3 grids so we can read them like game boards</p>
    <hr />
    <p>When using loadLayersModel, even loadGraphModel, the TensorFlow.js library is depending on the presence of the fetch web API.</p>
    <p>If you are using node, you'll need to polyfill fetch with a package like node-fetch</p>

    <hr />
    <h3>Interpreting the results</h3>
    <p>The resulting answers are again in probabilities of the next best moves. The highest number wins</p>
    <p>Layers models have properties that you can acces if you need help</p>
    <p> The expected input shape can be seen at <span>model.input.shape</span> and the output in <span>model.outputShape</span> </p>

    <h3>Cleaning the Board After</h3>

    <p>The tensorflow model in this example is wrapped in a <span>tidy</span> and will automatically free memory after the code has completed</p>
    <p>Its important to note that you must call <span>.dispose()</span> on models, just like you do tensors</p>
        <Link to="/tensorflowhub" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default FirstConsumedModel