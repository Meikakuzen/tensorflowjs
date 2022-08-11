import React from 'react'
import {Link} from 'react-router-dom'
import { node1, jpgConfig, node2 } from './jpgshelper'

const JpgsAndMore = () => {

  const canv= String.raw`
  const canvasid = document.getElementById('canvasid')
  const bigMess = tf.randomUniform([400,400,3])
  tf.browser.toPixels(bigMess, canvasid).then(()=>{
  
    //It's not a bad practice to clean up and make sure we got everything
    bigMess.dispose()
    console.log("Make sure we cleaned up", tf.memory().numTensors())
  })
  `
  const external = String.raw`
  const cake = new Image()
  cake.crossOrigin='anonymous'
  cake.src= '/cake.jpg'
  cake.onLoad = ()=>{
    const cakeTensor = tf.browser.fromPixels(cake)
    console.log(
      Succesfull conversion from Image() to a tensor 
    )
  }
  `




  return (
    <div className="container-xl">
        <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Visual Tensors</h1>
            <Link to="/"> Back Home</Link>
        </div>

        <p>How does a tensor turn into an actual visible image?</p>
        <p>And how does an existing image turn into a tensor?</p>
        <p>The answer will vary according to where the Javascript is running</p>
        <p>To decode an image to a tensor and back on a brower, you'll be limited and empowered by the magic of the browser's built-in functionality for a sand-box</p>
        <p>Images on a server running Node.js will not be sandboxed but leack easy visual feedback</p>

        <h3>Brower: Tensor to Image</h3>
        <p>For visualizing, modifying and saving images, you will utilize HTML elements and a canvas.</p>
        <p>We'll render a tensor to canvas in a browser</p>
        <br />
        <p>First create a 400 x 400 tensor of random noise and then convert to an image in the browser</p>
        <p>You will use <span>tf.browser.toPixels()</span>. This method takes a tensor as the first parameter , and optionally a canvas to draw to for the second parameter</p>
        <p>It returns a promise that resolves when the render is complete</p>
        <p>To set up our first canvas render, you'll need to have a canvas in our HTML, with an ID that you can reference</p>
        <p>You'll need the canvas to exist before you attempt to acces it</p>

        <pre>{canv}</pre>
        <br />
        <p>In this code were run in an async function, you could have simply awaited the broser.toPixels call and then cleaned up</p>

        <h3>Image to Tensor</h3>
        <p>We have <span>browser.fromPixels()</span> </p>
        <p>You can pass a wide variety of elements, from Javascript ImageData to Image objects, to HTML elements like img video or canvas </p>
        <p>As a second parameter you can identify the number of channels you'd like for an image</p>
        <p>To set up our image to tensor conversor, you'll explore the two most common inputs</p>
        <p>You'll convert a DOM element, and you'll convert an in-memory element, too. The in-memory element will load an image via URL</p>
        <br />
        <p>So long as the server allows cross-origin loading, you'll be able to dinamically load and process external images</p>

        <pre>{external}</pre>
        <br />
        <h3>Node: Tensor to Image</h3>
        <p>In Node there is no canvas for rendering. You'll be saving a random 400 x 400 RGB with tfjs-node</p>
        <p>You will use the Node file-system-library (fs) to write the file out</p>
        <h4 className= "mb-3 mt-3">Writing JPGS</h4>
          <p>To encode  a tensor into a JPG, you'll use <span>node.encodeJpeg()</span>. This method takes an int32 representation of the image and some options and returns a promise
          with the resulting data. Must be an int32 encoding with values from 0-255 </p>
        <h4>Any Float32 tensor with values 0-1 can be transformed into a new tensor by multiplying by 255 and then converting to a int32 with code like:</h4>
        <code> myTensor.mul(255).asType('int32')</code>
        <br />

        <p>Writing a JPG from a tensor  can be as simple as this:</p>
        <pre>{node1}</pre>

        <p>Because the file you are writting is a JPG, teher's a wide variety of configuration</p>
        <pre>{jpgConfig}</pre>

        <h4>Writing PNGs</h4>
        <p>The features of writing PNGs are significantly more limited than JPG</p>
        <p>We have <span>node.encodePng()</span> </p>
        <p>This method expects an integer representation of our tensor with values ranging 0-255</p>
        <p>Is the same code just changing the method</p>
        <p>But you have only one new parameter. The second parameter to node.encodePng is a compression setting with values between -1 to 9 </p>
        <p>0 is no compression, so -1 and 9 are the same</p>
        <p>Since PNGs are terrible at compressing randomness, you can set it at 9</p>
        <h4>If your tensor utilizes an alpha channel, you cannot use formats like JPG. You'll have to save a PNG to preserve that data</h4>

        <h3 className="mt-5">Node: Image to Tensor</h3>

        <p>Node provides functions for decoding BMP, JPG, PNG and even GIF</p>
        <p>You have <span>node.decodeImage()</span> </p>

        <pre>{node2}</pre>
        
        <hr />
        <h5>Phisicist often argue about the fourth dimension being time or not.
          To represent animated GIFS in a tensor, you use a rank-four tensor
        </h5>
        <hr />

        <code>const gantCakeTensor = tf.node.decodeImage(gantCake, 3, 'int32, true)</code>
        <br />
        <p>You are providing the image data, followed by three chanels of color, as an int32 result tensor and true. 
          True lets the method know to unroll the animated GIF and return a 4D tensor, where fale would clip this down to 3D tensor</p>

        <Link to="/commonmodifications" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default JpgsAndMore