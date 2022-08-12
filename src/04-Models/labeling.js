export const rectangle = String.raw`
const detection= document.getElementById("detection")

const imgWidth = petImage.width
const imgHeight = petImage.height

detection.width = imgWidth  //Make the detection canvas the same size as the image
detection.height = imgHeight

const box= result.dataSync() // Grab the bounding box result
const startX = box[0] * imgWidth  //scale the strating point X and Y back to the image
const startY = box[1] * imgHeight

const width = (box[2]- box[0]* imgWidth) // Find the width of the box by subtracting X, from X, and then scaling it by the image width
const height = (box[3]-box[1] * imgHeight)

const ctx= detection.getContext("2d")

ctx.strokeStyle= "0F0"
ctx.lineWidth= 4
ctx.strokeRect(startX, startY, width, height)
`