import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade style={{marginTop:"5%"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/Mobikwik-3360x279.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/simpl-3360x279.png"
          alt="Second slide"
        />

       
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFadeExample;