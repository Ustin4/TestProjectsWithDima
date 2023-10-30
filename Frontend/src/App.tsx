import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [data, setDate] = useState('')
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/womenlist").then((res) => {
            setDate(res.data.title)
        })
    }, []);
    return (
        <div className="App">
                         ||
            DIMA PIDOR  0||0: {data}

        </div>
    );
}

export default App;
