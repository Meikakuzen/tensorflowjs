import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1 className= "text-center">Learning <span className="text-warning">Tensorflow.js</span></h1>
    <ol>
        <label className="fs-4 text-warning">Chapter 3 - <span className="text-black">Tensors</span></label>
        <ul>
            <Link className="text-decoration-none text-black d-block " to="/tensors">Tensors </Link>
            <Link className="text-decoration-none text-black d-block" to="/creatingtensors">Creating Tensors</Link>
            <Link className="text-decoration-none text-black" to="/tensorsdata">Tensors for Data Exercise</Link>
            <Link className="text-decoration-none text-black d-block" to="/tensorstour">Tensors on Tour</Link>
            <Link className="text-decoration-none text-black d-block" to="/tensorsmemory">Tensors in Memory</Link>
            <Link className="text-decoration-none text-black d-block" to="/tensorshome">Tensors Come Home</Link>
            <Link className="text-decoration-none text-black d-block" to="/tensormanipulation">Tensor Manipulation</Link>
        </ul>

        <label className="fs-4 text-warning">Chapter 4 - <span className="text-black">Image Tensors</span> </label>
        <ul>

        <Link className="text-decoration-none text-black d-block" to="/imagetensors">Image Tensors </Link>
        <Link className="text-decoration-none text-black d-block" to="/visualtensors">Visual Tensors </Link>
        <Link className="text-decoration-none text-black d-block" to="/jpgsandmore">JPGs and PNGs and GIFs, Oh My! </Link>
        <Link className="text-decoration-none text-black d-block" to="/commonmodifications">Common Image Modifications </Link>
        <Link className="text-decoration-none text-black d-block" to="/resizingtensors">Resizing Image Tensors </Link>
        </ul>

        <label className="fs-4 text-warning">Chapter 5 - <span className="text-black">Models</span></label>
          <ul>

          <Link className="text-decoration-none text-black d-block" to="/introductionmodels">Introduction </Link>
          </ul>
    </ol>
    </>
  )
}

export default Home