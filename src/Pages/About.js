import './Pages.css';
import team from "../images/team.jpeg"
import Footer from '../components/Footer';


export default function About(){
  return(
    <>
    <div className="completeAbout">
      <div className='titleTextAbout'>
        <h1 className='titleAbout'>Our mission as a team is to connect <span className='blueText'>you</span> with your next <span className='blueText'>big opportunity</span></h1>
        </div>
      <div className='imageDivAbout'>
      <img className='imageAbout' src={team}></img>
      </div>
     <div className='aboutLinks'> 
      <div className='aboutContent1'>        
        <a className='checkGit' href='https://github.com/Topgramming/GlobalJobsList' target="_blank">Check our GitHub repo!</a>
        <span className='githubIcon'>
          <a href='https://github.com/' target="_blank"><i className="fab fa-github"></i></a>
        </span>        
      </div>
      <div className='aboutContent2'>
        <a className='madeWith' href='https://reactjs.org/' target="_blank">Made with HTML, CSS, JAVASCRIPT AND REACT (ReactRouter, MUI)</a>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

// Will show if commited