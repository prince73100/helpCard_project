import axios from 'axios';
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { helpcardActions } from '../store';
function Homepage() {
  const { datas } = useSelector(store => store.helpCard)
  const dispatch = useDispatch()

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchData = []
  datas.forEach(element => {
    searchData.push(element.title)
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filteredSuggestions = searchData.filter((language) =>
        language.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleFinditem = (value) => {
    setQuery(value)
    setSuggestions([])
  }

  const fetchsingleData = async () => {
    if(query=== ""){
      alert("Select one suggession")
      return
    }
    const res = await axios.get(`http://localhost:3000/api/v1/helpcard/gethelpcard/${query}`)
    console.log(res);
    
    const firstnum = res.data.status
    if (Math.floor(firstnum / 100) !== 2) {
        alert(res.data.message)
        return;
    }
    const arr = []
    arr.push(res.data.helpCard)
    dispatch(helpcardActions.addHelpcard(arr))
    setQuery('')
  }
  return (
    <div className='homepage bg-slate-200 h-80 w-full'>
      <div className=' w-fit' style={{
        position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'
      }}>
        <h1 className='text-6xl font-normals '>How can we help?</h1>
        <div className='bg-white h-14 border-2 border-slate-500 mt-10 flex items-center rounded'>
          <input type="text" placeholder='search' style={{ width: "95%", height: "100%", outline: "none", border: "none", padding: "5px" }} value={query} onChange={handleChange} />
          <div className='cursor-pointer' onClick={fetchsingleData}>
            <FaArrowRightLong />
          </div>
        </div>
        {suggestions.length > 0 && (
          <ul className='absolute bg-white p-4  right-86 mt-5 pb-5'>
            {suggestions.map((suggestion, index) => (
              <li className='border-b  w-44 hover:cursor-pointer hover:bg-rose-100' key={index} onClick={() => handleFinditem(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Homepage
