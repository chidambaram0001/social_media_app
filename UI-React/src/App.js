import './App.css';
import Nav from './components/nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AddPost from './pages/addpost';
import About from './pages/about';
import { DataProvider } from './context/homecontext';
import { useState } from 'react';
import Post from './pages/post';
function App() {
 const [searchVal, setSearchVal] = useState(null);

  return (
   
    <div className="App">
     
      <header className="App-header">
        <div className='wrapheader'>
          <div className='logo'>Logo</div>
          <div className='Search'><input type='text' placeholder='Search' defaultValue={searchVal} onChange={(e)=>setSearchVal(e.target.value)}/></div>
          <div className='user'>User</div>
        </div>
       
       <div className='navigation'>
        <Nav />
       </div>
       
      </header>
      <section>
      <DataProvider>
        <Routes>
        
            <Route path='/' element={<Home searchVal={searchVal}/>  }/>
          
          
          <Route path='/addpost' element={<AddPost/>} />
          <Route path='/post/:id' element={<Post/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        </DataProvider>
      </section>
      <footer>
        Copy Rights @ {new Date().getFullYear()}
      </footer>
      
    </div>
  );
}

export default App;
