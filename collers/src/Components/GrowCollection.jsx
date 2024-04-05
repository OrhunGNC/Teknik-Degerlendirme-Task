import React from 'react';
import Table from 'react-bootstrap/Table';
import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { PiMonitor } from "react-icons/pi";
import { IoMdWifi } from "react-icons/io";
import { RxMixerVertical } from "react-icons/rx";
const GrowCollection = () => {
  return (
    <div className='row background' style={{ overflow: 'hidden',paddingBottom:'10%' ,maxHeight:'900px',backgroundImage:'url(/img/backgroundd.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'100% 145%'}}>
      <h1 style={{ fontWeight: 'bold', marginLeft: '10%' }}>Grow your collection</h1>
      <div className='col-10' style={{ marginLeft: '8%', overflow: 'hidden', whiteSpace: 'normal' }}>
        <p style={{ overflowWrap: 'break-word' }}>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed.
          Eu non turpis risus odio sapien, fames sist rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus
        </p>
      </div>

      <div className='col-12 col-sm-12 col-md-4 col-lg-3'>
        <Table className='tabble' style={{backgroundColor: 'transparent' ,fontWeight:'bold',marginLeft:'30%',marginTop:'10%'}} bordered={false} size="lg" >
            <thead>
                <tr>
                    <th style={{border:'none',backgroundColor: 'transparent' }} >
                        <button style={{boxShadow:'0px 5px 15px grey',backgroundColor:'transparent',borderRadius:'5px',width:'50%',border:'1px',height:'80px',fontWeight:'bold',fontSize:'large'}}><FaSearch  /> Bibendum tellus <FaArrowRightLong /></button>
                    </th>
                </tr>
            </thead>
            <tbody >
                <tr >
                    <td style={{border:'none',backgroundColor: 'transparent' }}>
                    <button style={{backgroundColor:'transparent',borderRadius:'5px',width:'50%',border:'1px',height:'40px',textAlign:'left',fontWeight:'bold',fontSize:'large'}}><IoShieldCheckmarkOutline /> Cras eget </button>
                       
                    </td>
                    </tr>
                    <tr>
                        
                    <td style={{border:'none',backgroundColor: 'transparent' }}>
                    <button style={{backgroundColor:'transparent',borderRadius:'5px',width:'50%',border:'1px',height:'40px',textAlign:'left',fontWeight:'bold',fontSize:'large'}}><IoRocketOutline /> Dolor pharetra </button></td></tr>
                    <tr>
                    <td style={{border:'none',backgroundColor: 'transparent' }}> 
                    <button style={{backgroundColor:'transparent',borderRadius:'5px',width:'50%',border:'1px',height:'40px',textAlign:'left',fontWeight:'bold',fontSize:'large'}}><PiMonitor />Amet, fringilla </button>
                       </td></tr>
                    <tr>
                    <td style={{border:'none',backgroundColor: 'transparent' }}>
                    <button style={{backgroundColor:'transparent',borderRadius:'5px',width:'50%',border:'1px',height:'40px',textAlign:'left',fontWeight:'bold',fontSize:'large'}}><IoMdWifi />Amet nibh </button>
                        </td></tr>
                    <tr>
                    <td style={{border:'none',backgroundColor: 'transparent' }}>
                    <button style={{backgroundColor:'transparent',borderRadius:'5px',width:'50%',border:'1px',height:'40px',textAlign:'left',fontWeight:'bold',fontSize:'large'}}><RxMixerVertical />Sed velit </button>
                        </td></tr>
            </tbody>
        </Table>
      </div>
      <div className='col-12 col-sm-12 col-md-8 col-lg-8 quarter-circle'>
        <img style={{width:'70%',marginLeft:'10%'}} className='firstphoto' src='/img/thirdcard.PNG'>

        </img>
        <img style={{width:'70%',marginLeft:'13%'}} className='secondphoto' src='/img/secondcard.png'></img>
        <img style={{width:'30%'}} className='thirdphoto' src='/img/firstcard.png'></img>
      </div>
    </div>
  );
};

export default GrowCollection;
