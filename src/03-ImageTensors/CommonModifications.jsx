import {Link} from 'react-router-dom'
import { lemonade, cake, resize, crop } from './commonhelper'

const CommonModifications = () => {
  return (
    <div className="container-xl">
      <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Common Image Modifications</h1>
            <Link to="/"> Back Home</Link>
        </div>

        <p>Import images into tensors for training is powerful but rarely direct. When images are used for ML , they generally have some common modifications</p>
        <p>Common modifications include:</p>
        <ul>
          <li>Being mirrored for data augmentation</li>
          <li>Resizing to the expected input size</li>
          <li>Cropping out faces or other desired portions</li>
        </ul>

        <h3>Mirror Image Tensors</h3>
        <p>If you're trying to train a model to identify cats, you can double your data set by mirroring your existing cat photos</p>
        <p>To flip tensor data for an image, you have two options. One is to modify the image tensor's data in a way that flips the image along the width axis</p>
        <p>The other way is to use <span>tf.image.flipLeftRight()</span>. Let's do both!</p>
        <p>To flip a single image you can use <span>tf.reverse()</span> and specify you want to flip only the axis that holds the pixels for the width of an image</p>
        <p>As you already know, this is the second axis in images, so you will pass the index of 1</p>

        <pre>{lemonade}</pre>
        <br />

        <p>The second method is <span>tf.image.flipLeftRight()</span> </p>
        <p>This method is geary toward handling batches of images, and batches of 3D tensors are basically 4D tensors</p>
        <p>To expand the dimensionality of a single 3D image you can use <span>tf.expandDims()</span> and then, when you are looking to reverse that, you can use 
        <span>tf.squeeze()</span> </p>

        <pre>{cake}</pre>
        <br />

        <h3>Resizing Image Tensors</h3>
        <p>Lots of AI models expect a specific input image size. resizing images is at the core of dealing with image input</p>
        <p>Tensorflow.js has two excellent methods , and both support batches of images</p>

        <ul>
          <li> <span>image.resizeNearestNeighbor()</span> </li>
          <li> <span>image.resizeBilinear()</span> </li>
        </ul>

        <p>The recomendation is to use Bilinear commonly, and NearestNeighbor when the specific pixel values of an image cannot be compromised or interpolated</p>
        <p>resizeNearestNeighbor is x10 faster but is stillmeasured in milliseconds per resize</p>
        <p>To put it bluntly,resizeBilinear blurs and resizeNearestNeighbor pixelates when they have to extrapolate for new data</p>
   
        <pre>{resize}</pre>
        <br />
        <hr />
        <p>Resizing with the NearestNeighbor can be maliciously manipulated. If someone knew the final image size, they could construct a wicked image that looks different only at that resize. It's called <span>adversarial processing</span> </p>
        <hr />
        <h3>Cropping Image Tensors</h3>
        <p>There is a batch-friendly version of cropping large groups of images called <span>image.cropAndresize()</span>  </p>
        <p>You canuse it for gathering and normalizing sections of images of training. For example grabbing all the faces detected in a photo and resizing them to the same input size for model</p>
   
      <pre>{crop}</pre>

       
   
    </div>
  )
}

export default CommonModifications