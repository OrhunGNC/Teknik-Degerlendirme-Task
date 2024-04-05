
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Products from './Components/Products'
import WhyJoinUs from './Components/WhyJoinUs'
import CardCarousel from './Components/CardCarousel'
import GrowCollection from './Components/GrowCollection'
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function App() {

  return (
    <div className='container-fluid'>
      
      <div className='toppage' style={{marginBottom:'5%'}}>
      <Header/>
      <About/>
      </div>
      <div className='wearethebest'>
        <Products/>
      </div>
      <div className='whyjoinus'>
        <WhyJoinUs/>
      </div>
      <div className="cardcarousel">
        <CardCarousel/>
      </div>
      <div className='growcollection'>
        <GrowCollection/>
      </div>
      <div className='worldmap'>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
    <h1 style={{ color: 'white', fontSize: '100px', marginBottom: '20px' }} className='onmap'>11,658,467</h1>
    <h2 style={{ color: 'white', fontSize: '50px' }} className='onmap'>Shoes Collected</h2>
    
  </div>
  <div className='photo'></div>
      </div>
      <footer className="py-5 foter" style={{backgroundColor:'#0f172a',color:'white'}}>
  <div className="row" style={{justifyContent:'center',textAlign:'center'}}>
    <div className="col-12 col-md-2 mb-3"  >
      <h5>Product</h5>
      <ul className="nav flex-column" >
        <li className="nav-item mb-2" style={{listStyle:'none'}}>
          <a href="#"  style={{color:'#e2e8f0',textDecoration:'none'}}>
            Pricing
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Overview
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Browse
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Accessibility
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
           Five
          </a>
        </li>
      </ul>
    </div>
    <div className="col-12 col-md-2 mb-3">
      <h5>Solutions</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Brainstorming
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Ideation
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Wireframing
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Research
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Design
          </a>
        </li>
      </ul>
    </div>
    <div className="col-12 col-md-2 mb-3">
      <h5>Support</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Contact Us
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Developers
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Documentation
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Integrations
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" style={{color:'#e2e8f0',textDecoration:'none'}}>
            Reports
          </a>
        </li>
      </ul>
    </div>
    <div className="col-md-3 offset-md-1 mb-3">

        <h5>Get the App</h5>
        <img style={{width:'32%'}} src='/img/pngwingg.png' alt='downloadtheapp'></img>
        <br/>
        <br/>
        <h5>Follow Us</h5>
        <p style={{fontSize:'xx-large'}}><AiOutlineYoutube  style={{marginRight:'2%'}}/><RiFacebookFill style={{marginRight:'2%'}}/><FaTwitter style={{marginRight:'2%'}}/><FaInstagram style={{marginRight:'2%'}}/><FaLinkedinIn/></p>
    </div>
  </div>
  <div className='borderr' style={{borderTop:'solid 0.5px grey',width:'95%',marginLeft:'2.5%',marginTop:'2%'}}></div>
  
  <div className="row">
            <div className="col-12 col-lg-5" style={{marginTop:'1%',marginLeft: '2.5%'}}>

                <p style={{  }}>Collers © 2023. All rights reserved.</p>
                
            </div>
            <div className='col-12 col-lg-5 last-part' style={{display:'flex',marginTop:'1%',marginLeft:'11.5%',justifyContent:'right',gap:'4%'}}>

                <p>About</p>
    <p>Privacy</p>
    <p>Contact</p>
    <p><TbWorld />EN</p>
                </div>
        </div>

    


</footer>

      
    </div>
  )
}

export default App
