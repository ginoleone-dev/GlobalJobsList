import './Pages.css';
import team from "../images/team.jpeg"
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
      <div className='aboutContent1'>        
        <h3 className='checkGit'>Check our GitHub repo!</h3>
        <span className='githubIcon'>
          <a href='https://github.com/' target="_blank"><i class="fab fa-github"></i></a>
        </span>        
      </div>
      <div className='aboutContent2'>
        <h3 className='madeWith'>Made with React Js</h3>
        <span className='reactIcon'>
          <a href='https://reactjs.org/' target="_blank"><i class="fab fa-react"></i></a>
        </span>
      </div>
    </div>
    <Footer/>
    </>
  )
}

// Will show if commited