import React from 'react'
import {Link} from 'react-router-dom'
import { visual } from './visualHelper'

const VisualTensors = () => {

const tensor=String.raw`
const checky= tf.tensor([
  [
    [1,1,1],
    [0,0,0],
    [1,1,1],
    [0,0,0]
  ],
  [
    [1,1,1],
    [0,0,0],
    [1,1,1],
    [0,0,0]
  ],
  [
    [1,1,1],
    [0,0,0],
    [1,1,1],
    [0,0,0]
  ]
])
`

  return (
    <div className="container-xl">
        <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Visual Tensors</h1>
            <Link to="/"> Back Home</Link>
        </div>
        <p>You might assume that when ina image is converted into a tensor, that resulting tensor will be rank two</p>
        <p>A rank-two tensor works only with grayscale</p>
        <p>The most common practice for a colored pixel  is to represent it as a three separate values</p>
        <p>RGB (red, green and blue) system</p>
        <br />
        <p>A pixel is commonly colored by the order amounts of red, green and blue within the confines of a singular byte</p>
        <p> This 0-255 array values looks like [255,255,255] for integers and like #FFFFFF as an hexadecimal version</p>
        <p> When our tensor is data type int 32 this is teh interpretation</p>
        <p>When our tensor is float32 the values are asumed to be in the range 0-1</p>
        <p>So, an integer [255,255,255] represents pure white, but in float form the equivalent would be [1,1,1]</p>
        <p>In float32 [1,1,1] would be #FFFFFF (pure white) and in int32[1,1,1] would be #010101 (black)</p>

        <p>This means to store images you'll need a 3D tensor. You'll need each three-value-pixel stored at given width and height</p>
        <p>Its also customary to store the values across height, width and then color dimension</p>
        <p>This might seem odd for images, but referencing rows and then columns is the classical organizational reference order of matrices</p>

      <p>So if you wanted to make a 4x3 checkerboard of pixels, you could create that image by hand with a 3D array with shape[3,4,3]</p>

        <pre>{tensor}</pre>
        <p>A 4x3 pixel image would be pretty small, but if we zoomed in a few hundred times, we would be able to see the pixels we just created</p>

        <p>Our next way to create large tensors not only lets you fill with tensors, but it also enables you to fill with patterns</p>

    <pre>{visual}</pre>

    <p>The checker pattern is 2D black-and-white tensor. This could be any elegant pattern or color</p>
    <p>The tile size is 100 x 100 because the repetead patterns are 2 x 2, which results in a 200 x 200 image tensor </p>
    <p>The picture you will se with a zoom is a square with litte squares black and white side by side</p>
    <h4>But there is another method!</h4>
    <p>While Javascript has no built-in-method to generate arrays of random values, Tensorflowjs has a wide variety of methods</p>
    <p> <span>.randomUniform()</span> is an example </p>
    <p>This tensor method takes a shape, and also a min, max, and data type</p>
    <code>tf.randomUniform([200,200,1], 0, 255, int32)</code>
    <br />
        <Link to="/jpgsandmore" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>

    </div>
  )
}

export default VisualTensors