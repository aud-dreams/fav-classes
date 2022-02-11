import React, {useState} from 'react';
import Class from "../Class/Class";
import "./Home.css";

function Home(props) {

    const [value, setValue] = useState('');
    const [favClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favClasses.includes(value)) {
            setClasses(favClasses.concat(value));
            setValue('');
        }
        console.log(favClasses);
    }

    return (
        <div>
            <h1>Class Tracker!</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Favorite Class</label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add Class!</button>
            </form>
            
            <div className="base">
                {favClasses.map((favClass) =>
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
        </div>
    );
}

export default Home;