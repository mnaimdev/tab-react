
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import './App.css';

function App() {

  const url = 'https://course-api.com/react-tabs-project';

  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  if (loading) {
    return <p>Loading...</p>
  }

  const {id, title, dates, duties} = data[value];
  
  return (
    <>
      <h1>Experience</h1>
      <div className="underline"></div>


      <div className="container">
        <div className="btnContainer">
          {/* mapping data */}
          {
            data.map((item, index) => {
              return (
                // <button key={index} onClick={() => setValue(index)} className={index === value ? 'activeBtn': 'btn'}>{item.company}</button>

                <button key={index} onClick={() => setValue(index)} className={index === value ? 'activeBtn': 'btn'}>{item.company}</button>
              )
            })
          }
        </div>
        <div className="infoContainer">
        <p className="title">{title}</p>
        <span className="dates">{dates}</span>
        {duties.map((item, index) => {
            return (
              <div className='duties' key={index}>
               <FaAnglesRight className='icon' /> <p key={id}>{item}</p>
            </div>
            )
      })}
      </div>
    </div>
    </>
  )
}

export default App
