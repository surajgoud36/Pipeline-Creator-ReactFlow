import { PipelineToolbar } from './flowUi/toolbar';
import { PipelineUI } from './flowUi/flowCanvas';


function App() {
  return (
    <div className='parent-container'>
      <PipelineToolbar />
      <PipelineUI />
     
    </div>
  );
}

export default App;
