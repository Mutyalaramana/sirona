import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    
    <Container style={{padding:"30px",marginTop:"5%"}}>
      <div style={{textAlign:"center",marginBottom:"5%"}}><span className='seller'  style={{textAlign:"center" ,margin:"auto", backgroundColor:"#eeaeca", marginBottom:"5%",fontSize:"20px",fontWeight:"700"}}>SHOP BY CATEGORIES</span></div>

     {/* <h5 className='heading'style={{marginBottom:"5%" ,margin:"auto",borderBottom:"10px solid pink ",width:"210px"}}> SHOP BY CATEGORIES</h5> */}
      <Row className='d-flex justify text-center'style={{marginTop:"5%" }} >
        <Col className='imagesize'>
          <Image src="https://files.thesirona.com/site-images/original/01-Period-Care_2.png" roundedCircle />
          <div className='card-text  mx-3' style={{ fontWeight: 600 }}>Period care</div>
        </Col>
        <Col className='imagesize'>
          <Image src="https://files.thesirona.com/site-images/original/02-Intimate-Care_2.png" roundedCircle />
          <div className='card-text mx-3'style={{ fontWeight: 600 }}>Intimate Care</div>
        </Col>
        <Col className='imagesize'>
          <Image src="https://files.thesirona.com/site-images/original/04-Toilet-Care_1.png" roundedCircle />
          <div className='card-text mx-3 'style={{ fontWeight: 600 }}>Toliet Hygiene</div>
         
        </Col>
        <Col className='imagesize'>
          <Image src="https://files.thesirona.com/site-images/original/04-Toilet-Care_1.png" roundedCircle />
          <div className='card-text mx-3 'style={{ fontWeight: 600 }}>Hair Removal</div>
        
        </Col>
        <Col className='imagesize'>
       
          <Image src="https://files.thesirona.com/site-images/original/02-Intimate-Care_2.png" roundedCircle />
          <div className='card-text  mx-3 '  style={{ fontWeight: 600 }}>Kits&Combos</div>
       
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;