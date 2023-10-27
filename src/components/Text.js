import React, {useState} from 'react'

export default function Text(props){
    const handleUpClick= () =>{
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    const handleOnchange=(event)=>{
        settext(event.target.value)
    }
    
    const [text, settext] = useState('Enter text here');
    return(
        <>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control"  value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="9"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert_to_uppercase</button>
        </>
    )
}
