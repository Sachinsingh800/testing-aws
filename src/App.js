import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
    testingBeckend()
    },[])
  
     const  testingBeckend = async () => {
    
      try {
        const response = await axios.get(`https://www.backend.lizmy.com`, {
        });
        const { status, message, data } = response.data;
             console.log(response,"https://www.backend.lizmy.com")
      } catch (error) {
        console.error('Error getting services:', error.message);
      }
    };
  return (
    <div className="App">
      <header className="App-header">
         <h1>TESTING AWS</h1>
      </header>
    </div>
  );
}

export default App;
