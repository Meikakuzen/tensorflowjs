




const Toxicity = () => {
    const treshold= 0.5
    
    //load the model
 toxicity.load(treshold).then((model)=>{
    const sentences=[
        "You are a poppy head!",
        "I like turtles",
        "Shut your fucking mouth!"
    ]
 })

 //Ask the model
 model.classify(sentences).then((predictions)=>{
    console.log(JSON.stringify(predictions, null, 2))
 })

  return (
    <div>Toxicity</div>
  )
}

export default Toxicity