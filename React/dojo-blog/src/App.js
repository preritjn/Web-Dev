import Navbar from './Navbar'
import Home from './Home'
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path='/create' Component={Create}/>
            <Route exact path='/blogs/:id' Component={BlogDetails}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}