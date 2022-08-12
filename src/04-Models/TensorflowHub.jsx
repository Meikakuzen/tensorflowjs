import {Link} from 'react-router-dom'

const TensorflowHub = () => {

const code = String.raw`
tf.ready().then(() => {
  const modelPath =
    'https://tfhub.dev/google/tfjs-model/imagenet/inception_v3/classification/3/default/1'
  tf.tidy(() => {
    tf.loadGraphModel(modelPath, { fromTFHub: true }).then((model) => {
      const mysteryImage = document.getElementById('mystery')
      const myTensor = tf.browser.fromPixels(mysteryImage)
      // Inception v3 expects an image resized to 299x299
      const readyfied = tf.image
        .resizeBilinear(myTensor, [299, 299], true)
        .div(255)
        .reshape([1, 299, 299, 3])

      const result = model.predict(readyfied)
      result.print() // useless

      const { values, indices } = tf.topk(result, 1)
      indices.print()

      // Let's hear those winners
      const winners = indices.dataSync()
      console.log(First place $ {INCEPTION_CLASSES[winners[0]]}) //*NOTE
    })
  })
})
`


  return (
    <div className="container-xl">

<div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Our First Tensor Hub Model</h1>
            <Link to="/"> Back Home</Link>
        </div>

    <p>The model you'll be loading will be one of the biggest and most impressive models out there, Inception v3</p>
    <p>This model can classify 1,001 different objects</p>

    <h3>Exploring TFHub</h3>
    <p>Google has begun hosting models for free on its own</p>
    <p>You can acces hundreds of trained and ready-to-go models for TensorFlow.js</p>
    <p>TensorFlow.js has a special way to identify when your model is hosted on TFHub; we just add <span>formTFHub: true</span> to our
    configuration afet we've identified our model URL </p>
    <p>Each model has critical insights for using them</p>
    <p>In this case, first the expected input image should be 299x299, have values 0-1 and be batched just like in the tic tac toe example</p>
    <p>Second, the result is a single-dimensional tensor with 1,001 values with the larguest being the mos likely</p>
    <p>Returning a numeric is useful, but as always, we have tomap this back to a useful label</p>
    <p>Im this case we map the index of a vlaue to the corresponding label that follows the same index. The TFHub page shares a TXT file of all the necessary
      labelsin the correct order, which you will use to create an array to interpret the predicted results
    </p>

    <h3>Wiring Up Inception v3</h3>
    <p>For instance, printing 1,001 numbers won't be helpful. You'll need to use topk to parse the giant tensor back into a useful context</p>

    <pre>{code}</pre>
    <hr />
      <p>NOTE*: the result goes into back-ticks and the $ has a space that is not. I can't write it in code because the print method</p>
    <hr />




        <Link to="/overlayedmodel" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default TensorflowHub