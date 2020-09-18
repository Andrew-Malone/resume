import React from 'react';
import './App.css';

function App() {
  return (

 <div id="page-wrap">
    
        <img src="./Matt - Basecamp.jpg" alt="pic" id="pic" />
    
        <div id="contact-info" className="vcard">
        
        
            <h1 className="fn">Andrew Malone</h1>
        
            <p>
                Cell: <span className="tel">092-614-5203</span><br />
                Email: <a className="email" href="mailto:drewandmalone@gmail.com">drewandmalone@gmail.com</a>
            </p>
        </div>
                
        <div id="objective">
            <p>
              I am an 18 year old programmer already with some quality, 
              real-life work experience in technological environments. 
              I am currently working a paid IT internship at the <a href="https://www.gesthailand.com/">Global English School </a> 
              in Bangkok. In the future, I plan to attend an American university and study Computer Science.
            </p>
        </div>
        
        <div className="clear"></div>
        
        <dl>
            <dd className="clear"></dd>
            
            <dt className="ed">Education</dt>
            <dd>
                <h2>Honor Graduate from ICS Bangkok</h2>

                <p><strong>Programming:</strong> Codecademy, Udemy, TeamTreehouse, AP Java</p> 
               
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
                <h2>Programming Internship <span>Lynchburg, 2018</span></h2>
                <ul>
                    <li>I gained work experience as an intern at a Lynchburg based tech commpany</li>
                    <li>I expanded my knowledge of Javascript, including the Angular.js framework</li>
                </ul>
                
                <h2>Various Projects and Courses<span>Over the years</span></h2>
                <ul>
                    <li>Scratch</li>
                    <li>Codecademy</li>
                    <li>Treehouse</li>
                    <li>Udemy</li>
                    <li>AP Java</li>
                    <li>Vocabulary Builder Program</li>
                </ul> 
            

                <h2>ICS Programming Competition <span>Bangkok, 2020</span></h2>
                <ul>
                    <li>Designed a quizlet-style program with Java</li>
                    <li>Won second place</li>
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
            <dd>
                Mr. Mark Cooprider <br/>
                Literature Teacher at ICS Bangkok<br/>
                <a className="email" href="mailto:mark_c@ics.ac.th">mark_c@ics.ac.th</a><br/><br/>

                Mr. Daniel Pun<br/>
                Computer Science Teacher at ICS Bangkok<br/>
                <a className="email" href="mailto:daniel_p@ics.ac.th">daniel_p@ics.ac.th</a>


            </dd>
            
            <dd className="clear"></dd>
        </dl>
        
        <div className="clear"></div>
    
    </div>


  );
}

export default App;
