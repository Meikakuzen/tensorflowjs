import {Link} from 'react-router-dom'

const OverlayedModel = () => {

const ready=String.raw`

const petImage= document.getElementById("pet")
const myTensor= tf.browser.fromPixels(petImage)
const readyfied = tf.image
                        .resizeNearestNeighbor(myTensor,[256,256], true)
                        .div(255)
                        .reshape([1,256,256,3])
const result = model.predict(readyfied)
result.print()
`



  return (
    <div className="container-xl">
        <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Loading Models</h1>
            <Link to="/"> Back Home</Link>
        </div>

    <p>Normally, the bounding box output of a model is fairly complex because it handles a variety of classes and overlapping boxes</p>
    <p> Usually, the model leaves you to use some math to properly clean up the results</p>
    <p>Rather than dealing with that, let's just focus on drawing a single rectangle on predict output in Tensorflow.js</p>
    <p>Thi is sometimes called object localization</p>
    <p>The model for this exercise will be a pet face detector </p>
    <p>The model will do its best to give us a bounding set of coordinates for where it thinks the pet's face is located</p>
    <p>Once you have the location of a pet's face, you could use that data to train additional models</p>

    <h3>The Localization Model</h3>

    <p>This model was trained on a public data set called the Oxford-IIIT Pet Dataset</p>
    <p>Expects a 256x256 Float32 input RGB image of a pet and outputs four numbers to identify a bounding box around the pet's face</p>
    <p>The four numbers in the ID tensor are the top -left point and the bottom-right point</p>

    <hr />
    <h4>Screen Coordinates</h4>
    
        <p>Just like in a normal Cartesian coordinate system, points are identified as X and Y</p>
        <p>Unlike a normal Cartesian coordinate system, the origin is the top-left and points only exist in the positive domain</p>
        <p>This points are represented as values between 0 and 1</p>
        <p>Top-left = result[0], result[1]</p>
        <p>Right-bottom = result[2], result[3]</p>
    <hr />

    <p>You'll start off by converting the image to a tensor and running it through the model</p>
    <pre className="mb-3">{ready}</pre>



        <Link to="/labelingdetection" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default OverlayedModel