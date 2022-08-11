import {Link} from 'react-router-dom'

const Introduction = () => {
  return (
    <div className="container-xl">
    
          <div className="d-flex d-block justify-content-between">
            <h1 className= "text-center text-decoration-underline mb-3">Introduction</h1>
            <Link to="/"> Back Home</Link>
        </div>



<Link to="/introductionmodels" className="text-warning text-decoration-none mx-auto fs-3">Go to <span className= "text-black">next</span></Link>
    </div>   
    )
}

export default Introduction