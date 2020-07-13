import React, {useState,useMemo,useCallback} from 'react';
import { useEffect } from 'react';

function Demo() {
    const [inputVal,setVal] = useState('');
    const [list,setList] = useState([]);
    const handleChange = (event) => {
        setVal(event.target.value);
        // console.log(inputVal);
    }
    // const val = useMemo(() => [1,2]);
    useEffect(() => {
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
        .then(res => res.json())
        .then(res => {
            setList(res.result.songs);
            console.log(res.result.songs);
        })
    } , [])
    return (
        <div>
            <input type="text" value={inputVal} onChange={handleChange}/>
        </div>
    )
}

export default Demo;