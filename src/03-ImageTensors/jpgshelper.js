
export const node1= String.raw`
const bigMess = tf.randomUniform([400,400,3], 0, 255)
tf.node.encodeJpeg(bigMess).then((f)=>{
    fs.writeFileSync("simple.jpg",f)    
})

`

export const jpgConfig = String.raw`
const bigMess = tf.randomUniform([400,400,3], 0, 255)

tf.node
.encodeJpeg(
    bigMess,
    "rgb",  // format
    90,     // quality
    true,   //progresive: JPG have the ability to load from the top down, or slowly become clear as a progressive load 
    true,   // optimizeSize
    true,   // chromaDownsampling: when light is more importan than colors
    "cm",   // densityUnit: choose either pixels for inch or cm
    250,    //xDensity: set the pixels-per-density unit on x
    250,    //yDensity: set the pixels-per-density unit on y
    "Generated bt TFJS Node!"
    )
    .then((f)=>{
        
        fs.writeFileSync("simple.jpg",f)    
    })

`


export const node2 = String.raw`
const FILE_PATH = 'files'

const cakeImagePath= path.join(FILE_PATH, 'cake.jpg')

const cakeImage = fs.readFileSync(cakeImagePath)

tf.tidy(()=>{
    const cakeTensor= tf.node.decodeImage(cakeImage)

    const cakeBWTensor = tf.node.decodeImage(cakeImage, 1) // You decode this image into a grayscale tensor
})

` 
