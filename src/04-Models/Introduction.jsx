import {Link} from 'react-router-dom'

const Introduction = () => {
  return (
    <div className="container-xl">
    
          <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Introduction</h1>
            <Link to="/"> Back Home</Link>
        </div>
        <p>Models can seem like a black box</p>
        <p>Generally, they expect a specific tensor shape in, and a specific tensor shape comes out.</p>
        <p>
          For instance, let's say you've trained adog or cat classifier. The input might be a 32 x 32 3D RGB tensor, and the output might be a 
          single tensor value of zero to one to indicate the prediction.</p>
          <p>Even if you don't know the inner working of such a device, consuming and utilizing models with a defined structure should be simple</p>
          <p>We will</p>
          <ul>
            <li>Utilize trained models to predict a variety of answers</li>
            <li>Identify the benefits of our existing tensor manipulate skills</li>
            <li>Leaarn about Google's TFHub.dev hosting</li>
            <li>Learn about object localization</li>
            <li>Learn how to overlay a bounding box to identify some aspect of an image</li>
          </ul>
          <p>Armed with the skills in this chapter, you can start aplying machine learning models to any website</p>

<Link to="/loadingmodels" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>   
    )
}

export default Introduction