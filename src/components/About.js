

export default function About(){
    return(<div className='about-container'>

        <div className='question-container'>
            <h2>Who are you?</h2>
            <p>My name is Rafael, I'm both an aspiring fullstack engineer and an aspiring photographer.
                At an early age my father helped me put a computer together that would go on to be my first gaming pc back in 2001 and my interest in both hardware and software would only grow over the next 20 years.</p>    
        </div>

        <div className='question-container'>
            <h2>What are some of your interest/hobbies?</h2>
            <div className='row'>
                <ul>
                    <li>Photography / Videography</li>
                    <li>E-Sports / Video Games</li>
                    <li>Art (Mainly Graphic Design)</li>

                </ul>
                <ul>
                    <li>Skateboarding</li>
                    <li>Camping / Outdoor Activities</li>
                </ul>   
            </div>

        </div>

        <div className='question-container'>
            <h2>What are your Front-End Skills?</h2>
            <div className='row'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul> 

                <ul>
                    <li>JavaScript</li>
                        <ul>
                            <li>React</li>
                            <li>Redux</li> 
                            <li>Axios</li> 
                        </ul>
                </ul>       
            </div>

        </div>
        
        <div className='question-container'>
            <h2>What are your Back-End Skills?</h2>
                <ul>
                    <li>n/a</li>
                </ul>
        </div>
       
        
    </div>)
}