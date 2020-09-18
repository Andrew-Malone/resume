import React from 'react';
import './App.css';

function App() {
  return (

 <div id="page-wrap">
    
        <img src="" alt="pic" id="pic" />
    
        <div id="contact-info" className="vcard">
        
        
            <h1 className="fn">Andrew Malone</h1>
        
            <p>
                Cell: <span className="tel">092-614-5203</span><br />
                Email: <a className="email" href="mailto:drewandmalone@gmail.com">drewandmalone@gmail.com</a>
            </p>
        </div>
                
        <div id="objective">
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        
        <div className="clear"></div>
        
        <dl>
            <dd className="clear"></dd>
            
            <dt className="ed">Education</dt>
            <dd>
                <h2>Honor Graduate from ICS Bangkok</h2>
               
            </dd>
            
            <dd className="clear"></dd>
            
            <dt>Skills</dt>
            <dd>
                <h2>Computer skills</h2>
                <p><strong>Programming:</strong> HTML, CSS, JavaScript, jQuery, React.js, Gatsby, Java<br />
                   <strong>Other:</strong> Adobe Suite (Illustrator, Premiere, etc.), Powerpoint, Hardware</p>
            </dd>
            
            <dd className="clear"></dd>
            
            <dt>Experience</dt>
            <dd>
                <h2>Programming Intern <span>Lynchburg, 2018</span></h2>
                <ul>
                    <li>I gained work experience as an intern at a Lynchburg based tech commpany</li>
                    <li>I expanded my knowledge of Javascript, including the Angular.js framework</li>
                </ul>
                
                



                <h2>Various Projects <span></span></h2>
                <ul>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul> 

                <h2>ICS Programming competition <span>Bangkok, 2020</span></h2>
                <ul>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul> 

            </dd>
            
            <dd className="clear"></dd>
            
            <dt>Hobbies</dt>
            <dd> 

              <ul>
                <li>Piano</li>
                <li>Table Tennis</li>
                <li>Chess</li>
                <li>Games</li>
              </ul> 


            </dd>
            
            <dd className="clear"></dd>
            
            <dt>References</dt>
            <dd>Available on request</dd>
            
            <dd className="clear"></dd>
        </dl>
        
        <div className="clear"></div>
    
    </div>


  );
}

export default App;
