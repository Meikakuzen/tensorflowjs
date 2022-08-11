import Tensors from './02Tensors/Tensors';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageTensors from './03-ImageTensors/ImageTensors';
import CreatingTensors from './02Tensors/CreatingTensors';
import TensorsData from './02Tensors/TensorsData';
import TensorsTour from './02Tensors/TensorsTour';
import TensorsMemory from './02Tensors/TensorsMemory';
import TensorsHome from './02Tensors/TensorsHome';
import TensorManipulation from './02Tensors/TensorManipulation';
import VisualTensors from './03-ImageTensors/VisualTensors';
import JpgsAndMore from './03-ImageTensors/JpgsAndMore';
import CommonModifications from './03-ImageTensors/CommonModifications';
import ResizingImageTensors from './03-ImageTensors/ResizingImageTensors';
import Introduction from './04-Models/Introduction';


function App() {
  
  return(
    <>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tensors" element={<Tensors />} />
              <Route path="/creatingtensors" element={<CreatingTensors />} />
              <Route path="/tensorsdata" element={<TensorsData />} />
              <Route path="/tensorstour" element={<TensorsTour />} />
              <Route path="/tensorsmemory" element={<TensorsMemory />} />
              <Route path="/tensorshome" element={<TensorsHome />} />
              <Route path="/tensormanipulation" element={<TensorManipulation />} />
              
              {/*Image Tensors*/}
              <Route path="/imagetensors" element={<ImageTensors />} />
              <Route path="/visualtensors" element={<VisualTensors />} />
              <Route path="/jpgsandmore" element={<JpgsAndMore />} />
              <Route path="/commonmodifications" element={<CommonModifications />} />
              <Route path="/resizingtensors" element={<ResizingImageTensors />} />

              {/*Models*/ }
              <Route path="/introductionmodels" element={<Introduction />} />

            </Routes>
    </BrowserRouter>
    
    </>
  )

  
}

export default App
