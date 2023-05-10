import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/donekart-banner2.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/desktop-banner-1920x527.gif"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://files.thesirona.com/site-images/original/Web-banner-1920x527-old.gif"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;