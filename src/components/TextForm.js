import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked.")
        const newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoClick = () => {
        const newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () => {
        const newText='';
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }

    const handleCopy = (event) => {
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = (event) => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success")
    }

    const [text, setText]=useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark' ? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* {props.heading} */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey': 'white', color: props.mode==='dark' ? 'white': 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark' ? 'white': 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter some text in the textbox above to preview here."}</p>
        </div>
        </>
    )
}
