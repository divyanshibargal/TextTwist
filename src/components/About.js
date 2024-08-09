import React from 'react'

export default function About(props) {
    // const [mystyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
   let mystyle ={
    color: props.mode === 'dark'?'white': 'black',
    backgroundColor : props.mode === 'dark' ? 'black' : 'white'
   }
  
    return (
        <div className="container" style={mystyle} >
            <h1 className='my-3' style={mystyle}>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne" >
                        <button className='accordion-button' type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or Minutes of read. It helps you to convert your text in Uppercase, Lowercase and also allows you to reverse or copy your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo" >
                        <button className="accordion-button collapsed" type="button" style={mystyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle} >
                            TextUtils is a free character count tool that provides instant character count & word count statatics for a given text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree" >
                        <button className="accordion-button collapsed" type="button" style={mystyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                           <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                          This word count Software works in any web Browser such as Chrome , Brave , Microsoft edge , Safari , Opera, Mozilla Firefox.
                        </div>
                    </div>
                </div>

            </div>
         {/* <div className='container my-2'>
         <button className='btn btn-primary mx-1 my-1' onClick={toggleState}>{btntext}</button>
         </div> */}
        </div>
    )
}
