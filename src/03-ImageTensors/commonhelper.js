import { fromPixels } from "@tensorflow/tfjs-core/dist/ops/browser"


export const lemonade = String.raw`

const lemonadeImage = document.getElementById("lemonade")
const lemonadeCanvas = document.getElementById("lemonadeCanvas")
const lemonadeTensor = tf.browser.fromPixels(lemonadeImage)
const flippedLemonadeTensor = tf.reverse(lemonadeTensor, 1)

tf.browser.toPixels(flippedLemonadeTensor, lemonadeCanvas).then(()=>{
    lemonadeTensor.dispose()
    flippedLemonadeTensor.dispose()
})
`
//Batch tensor flip

export const cake = String.raw`
const cakeImage = document.getElementById("cake")
const cakeCanvas = document.getElementById("cakeCanvas")
const flipCake = tf.tidy(()=>{
    const cakeTensor = tf.expandDims(
        tf
            .browser-fromPixels(cakeImage)
            .asType("float32")
    )
    return tf
            .squeeze(tf.image.flipLeftRight(cakeTensor))
            .asType("int32")
})
    tf.browser.toPixels(flipCake, cakeCanvas).then(()=>{
        flipCake.dispose()
    })

`

export const resize= String.raw`
const newSize = [768,560]
const littleGantImage= document.getElementById("littleGant")
const nnCanvas= document.getElementById('nnCanvas')
const blCanvas = document.getElementById('blCanvas')

const gantTensor = tf.browser.fromPixels(littleGantImage)

const nnResizeTensor = tf.image.resizeNearestNeighbor(gantTensor, newSize, true)
//The third parameter is alignCorners, just always set this to true!

tf.borwser.toPixels(nnResizeTensor, nnCanvas).then(()=>{
    nnResizeTensor.dispose()
})

const blResizeTensor = tf.image.resizeBilinear(gantTensor, newSize, true)
//always in true!

const blResizeTensorInt= blResizeTensor.asType('int32')

tf.browser.toPixels(blResizeTensorInt, blCanvas).then(()=>{
    blResizeTensor.dispose()
    blResizeTensorInt.dispose()
})

`
export const crop = String.raw`

const startingPoint= [0,40,0];
const newSize= [265,245,3]
const lemonadeImage= document.getElementById("lemonade")
const lemonadeCanvas= document.getElementById("lemonadeCanvas")

const lemonadeTensor = tf.browser.fromPixels(lemonadeImage);

const cropped = tf.slice(lemonadeTensor, startingPoint, newSize)

tf.browser.toPixels(cropped, lemonadeCanvas).then(()=>{
    cropped.dispose()
})

lemonadeTensor.dispose()

`