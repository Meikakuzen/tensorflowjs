import {Link} from 'react-router-dom'

const TensorsTour = () => {
  return (
    <div className="container-xl">
          <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Tensors on Tour</h1>
            <Link to="/"> Back Home</Link>
        </div>

    <h3 className=" mb-3">Tensors provides speed</h3>
    <p>When you convert Javascript arrays to tensors, you can perfom matrix operations at speed of light</p>
    <p>Computers are excellent to doing a single calculations, and there are benefits to performing  mass grouping of calculations</p>

    <h3 className="mt-3 mb-3">Tensors Provides Direct Access</h3>
    <p>Without ML you can still use tensors to make 3D graphics, and more.</p>
    <p>There are plenty of libraries out there for images, 3dmodels, video, etc</p>
    <hr />
    <h4 className="fw-bold">Tensors are like that raw, unrolled data-format, and with that acces you can build, read or predict anything you like</h4>
    <hr />
    <h3 className="mt-3 mb-3">Tensors Batch Data</h3>
    <p>Tensors are optimized for batch processing at high speeds
    <p>We've identified that tensors are impressive structures that brings a lot of acceleration and mathematical power to Javascript</p>
    <p>So it makes sense that you'll commonly use this beneficial structure in batches</p>
    </p>
    <Link to="/tensorsmemory" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>
  )
}

export default TensorsTour