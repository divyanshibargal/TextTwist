import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    // text ='abcdefg';// Wrong way to change the state
    // setText('New Text'); // Correct way to change the state


    const handleUpclick = () => {
        //   console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Text Converted to Uppercase" , "success");
    }
    
    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleLoclick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Text Converted to Lowercase" , "success");
    }
    const handlerclick = () =>{
        let newtext = text.split(" ").reverse().join(" ");
        setText(newtext);
       props.showAlert("Text is Reversed" , "success");
    }
    const handlecopy = () =>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        // alert("Text copied to clipboard");
        props.showAlert("Text Copied to Clipboard" , "success");
    }
    const handleExtraspaces = ()=>{
      let newtext = text.split(/[ ] +/);
      setText(newtext.join(" "));
      props.showAlert("Extra Spaces removed!" , "success");
    }
    

    return (
        <>
        <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="my-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8" placeholder='Enter text here' style={{ backgroundColor : props.mode === "dark"?"black" :'white' , color : props.mode === 'dark' ? 'white' : 'black'} } ></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlerclick}>Reverse</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlecopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraspaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3 ' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your Text Summary here</h1>
             {/* Logic for counting words and characters of the text written */}
            <p>{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p> 
            {/* Logic for analyzing the time to read the words of the text */}
            <p> {0.008 *text.split(/\s+/).filter((word) => word !== "").length} Minutes Read </p>
            <h2>Preview</h2>
            <p> {text.length>0 ? text:'Nothing to Preview' }</p>
        </div>
        </>
    )
}
