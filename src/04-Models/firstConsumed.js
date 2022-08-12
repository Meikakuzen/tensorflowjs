
export const first = String.raw`

tf.ready().then(()=>{
    const modelPath= "model/ttt_model.json"
    tf.tidy(()=>{
        tf.loadLayesrModel(modelPath).then(model=>{

            //three board states

            const emptyBoard = tf.zeros([9])
            const betterBlockMe= tf.tensor([-1,0,0,1,1,-1,0,0,-1])
            const goForThekill= tf.tensor([1,0,1,0,-1,-1,-1,0,1])

            //stack states into a shape[3,9]
            const matches= tf.stack([emptyBoard, betterBlockMe, goForTheKill])
            const result= model.predict(matches)

            //log the results
            result.reshape([3,3,3]).print()

        })
    })
})
`
