import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiShoppingCartLine } from "react-icons/ri";
const Products = () => {
  return (
    <div className='row' style={{justifyContent:'center',textAlign:'center',alignItems:'center'}}>
        <div className='col-md-8 col-12 col-sm-12'style={{marginTop:'5%',fontWeight:'bold',paddingRight:'23%',marginBottom:'5%'}}>
            <h1 style={{color:'white'}}>The best of the best</h1>
        </div>
        <div className='col-md-4 col-12 col-sm-12'style={{marginTop:'5%'}}>
        <Button variant="outline-success" style={{color:'white',borderColor:'white',fontWeight:'bold',marginBottom:'5%'}}>Sign up now</Button> 
        </div>
        <div className='col-md-3 col-12 col-sm-12 cardds' style={{ fontWeight: 'bold', maxWidth: '300px', margin: '0 auto', marginBottom: '5%' }}>
        <Card style={{ width: '18rem',margin:'auto',backgroundColor:'#0f172a',color:'white',boxShadow:'0px 5px 15px rgba(255,255,255,0.8)'  }}>
      <Card.Img variant="top" src="/img/firstcard.png" />
      <Card.Body>
        <Card.Title style={{textAlign:'left'}}>Title</Card.Title>
        <Card.Text>
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'#0f172a',border:'solid 2px white',width:'100%'}}><RiShoppingCartLine />  Buy Now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-3 col-12 col-sm-12 cardds' style={{  fontWeight: 'bold', maxWidth: '300px', margin: '0 auto', marginBottom: '5%' }}>
        <Card style={{ width: '18rem',margin:'auto',backgroundColor:'#0f172a',color:'white',boxShadow:'0px 5px 15px rgba(255,255,255,0.8)' }}>
      <Card.Img variant="top" src="/img/secondcard.png" />
      <Card.Body>
        <Card.Title style={{textAlign:'left'}}>Title</Card.Title>
        <Card.Text>
        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'#0f172a',border:'solid 2px white',width:'100%'}}><RiShoppingCartLine />  Buy Now</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-3 col-12 col-sm-12 cardds' style={{ fontWeight: 'bold', maxWidth: '300px', margin: '0 auto', marginBottom: '5%' }}>
        <Card style={{ width: '18rem',margin:'auto',backgroundColor:'#0f172a',color:'white',boxShadow:'0px 5px 15px rgba(255,255,255,0.8)'  }}>
      <Card.Img variant="top" src="/img/thirdcard.PNG" />
      <Card.Body>
        <Card.Title style={{textAlign:'left'}}>Title</Card.Title>
        <Card.Text>
        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'#0f172a',border:'solid 2px white',width:'100%'}}><RiShoppingCartLine />  Buy Now</Button>
      </Card.Body>
    </Card>
        </div>
    </div>
    
  )
}

export default Products