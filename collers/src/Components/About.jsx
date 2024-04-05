import React from 'react';
import Button from 'react-bootstrap/Button';
import { MdOutlinePlayCircle } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { PiTelevisionSimple } from "react-icons/pi";
import { TbAlertTriangleOff } from "react-icons/tb";

const About = () => {
  return (
    <div className='row' style={{justifyContent:'center'}}>
        <div className='col-md-8 col-sm-12 col-12' style={{marginTop:'3%'}}>
        <h1 style={{marginLeft:'5%',fontWeight:'bold',marginBottom:'2%'}}>Collectible Sneakers</h1>
        <p style={{overflow:'clip',marginLeft:'5%',marginBottom:'2%'}}>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
        <p className='buttons' style={{fontWeight:'bold'}}> <Button variant="outline-success" style={{color:'brown',borderColor:'brown',marginLeft:'5%',fontWeight:'bold'}}>Sign up now</Button>   
       <MdOutlinePlayCircle style={{marginLeft:'3%'}}/> Watch demo</p>
        </div>
        <div className='col-md-4 col-sm-12 col-12' style={{marginTop:'1%'}}>
            <img  className='sneakerpng' src='/img/sneaker.png' style={{width:'70%',height:'100%',transform:'scaleX(-1)'}}></img>
        </div>

        <div className='col-md-3 col-12 col-sm-12' style={{marginTop:'5%',marginLeft:'3%'}} >


        <GiTrophyCup style={{fontSize:'xx-large',marginBottom:'3%'}} />
        <h3>Nibh viverra</h3>
        <p style={{overflow:'-moz-initial'}}>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
        </p>
        </div>


        <div className='col-md-3 col-12 col-sm-12'  style={{marginTop:'5%',marginLeft:'3%'}}>
        <TbAlertTriangleOff style={{fontSize:'xx-large',marginBottom:'3%'}}/>
        <h3>Cursus amet</h3>
        <p style={{overflow:'-moz-initial'}}>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
        </p>
        </div>


        
        <div className='col-md-3 col-12 col-sm-12'  style={{marginTop:'5%',marginLeft:'3%'}}>
        <PiTelevisionSimple style={{fontSize:'xx-large',marginBottom:'3%'}}/>
        <h3>Ipsum fermentum</h3>
        <p style={{overflow:'-moz-initial'}}>
          Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
        </p>
        </div>
    </div>
  )
}

export default About