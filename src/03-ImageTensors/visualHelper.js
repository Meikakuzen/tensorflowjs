import * as tf from '@tensorflow/tfjs'



export const visual = String.raw`

//2x2 checker pattern

const lil = tf.tensor([
    [[1],[0]],
    [[0],[1]]
])

// tile it 

const big = lil.tile([100,100,1])

`