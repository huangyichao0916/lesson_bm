import React, {useState} from 'react';
import { useEffect } from 'react';

function Demo() {
    const [inputVal,setVal] = useState('');
    const [list,setList] = useState('');
    const handleChange = (event) => {
        setVal(event.target.value);
    }
    const handleChange2 = (event) => {
        setList(event.target.value);
    }
    useEffect(() => {
        console.log('副作用函数执行')
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
        .then(res => res.json())
        .then(res => {
            // setList(res.result.songs);
            console.log(res.result.songs);
        })
    },[])
    return (
        <div>
            <input type="text" value={inputVal} onChange={handleChange}/>
            <input type="text" value={list} onChange={handleChange2}/>
        </div>
    )
}

export default Demo;