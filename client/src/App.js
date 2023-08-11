
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SignupForm  from './components/SignupForm';//link từ components > SignInForm


function App() {

  async function callAPI() {
    await axios.get('http://localhost:3000/')
      .then(response => {
        setData({...response.data});
        // Xử lý dữ liệu từ API response
      })
      .catch(error => {
        console.error('Error:', error);
        // Xử lý lỗi
      });
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    // Gọi API khi component được mount
    
    callAPI();

  }, [])

  return (
    <div>
      {/* {data} */}
  
      <SignupForm />
      {/* hiển thị Form */}

    </div>
  );
  
  
}

export default App;
