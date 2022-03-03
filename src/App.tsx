import './App.css';
import {  Link, Outlet} from 'react-router-dom';


function App() {
  return (
    <div className='level'>
        <div className='navbar is-fixed-top'><Link to="gallery" >Gallery</Link></div>
        <div><Outlet /></div>
        <div className='footer'>Footer</div>
    </div>
    
  );
}

export default App;
