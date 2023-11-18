
// import { useSelector } from 'react-redux';
import './App.css';
// import Homepage from './Components/Homepage'; 
// import Navbar from './Components/navbar';
// import { selectSignedIn } from './features/userSlice';
// import Blogs from './Components/Blogs';
// import Navbarblog from './Components/navbarblog';
import Navbarblog from './Components/navbartesting';
import Homepagetesting from './Components/Homepagetesting';
import Blogstesting from './Components/blogstesting';
import Editor from './Components/Editor';

function App() {
  // const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      {/* <Navbarblog />
      <Homepagetesting />
      <Blogstesting /> */}

      <Editor />
      {/* <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />} */}
    </div>
  );
}

export default App;
