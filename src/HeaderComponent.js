import React ,{ useState }from 'react'
export const HeaderComponent = (props) => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
     const handleChange = (event) => {
        setValue(event.target.value);
     };
    
    const handleSubmit = (event) => {
       alert("A name was submitted: " + value);
       event.preventDefault();
    };
    const isMarried = props.isMarried;
    if (!isMarried) {
       return <h1>Welcome back!</h1>;
    }
  return (
     <>
        <div>{props.name}</div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <form onSubmit={handleSubmit}>
           <label>
              Name:
              <input type="text" value={value} onChange={handleChange} />
           </label>
           <button type="submit">Submit</button>
        </form>
     </>
  );
}
