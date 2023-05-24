import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (<div className='container'style={{marginTop:"5%"}}>
      <div style={{textAlign:"center",marginBottom:"5%"}}><span style={{textAlign:"center" ,margin:"auto", backgroundColor:"#eeaeca", marginBottom:"5%",fontSize:"20px",fontWeight:"700"}}>IN THE SPOTLIGHT</span></div>
      
      {/* <h5  style={{textAlign:"center ",margin:"auto",   marginBottom:"5%",borderBottom:"10px solid pink ",width:"200px"}}>IN THE SPOTLIGHT</h5> */}
      <Slider {...settings}>
      <div >
        <div class="card m-2">
        <img  src="https://files.thesirona.com/site-images/400x400/mini-travel-razor-1.jpg" alt="kitten" /> 
  <div class="card-body product">
    <div class="card-title"style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>
    <div class="rating ">
    <div class="card-text mx-4">&#8377; 289 <del>&#8377;389</del> </div> 
    </div>
  </div>
</div>
</div>
        <div>
        <div class="card m-2">
        <img  src="https://files.thesirona.com/site-images/400x400/toilet-spray-vanilla-1.jpg" alt="kitten" />
  <div class="card-body product ">
    <div class="card-title"style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>
    <div class="rating ">
    <div class="card-text mx-4 ">&#8377;289 <del>&#8377;389</del></div> 
    </div>
  </div>
</div>

        </div>
        <div>
        <div class="card m-2">
        <img  src="https://files.thesirona.com/site-images/400x400/Intimate-Serum.jpg" alt="kitten" />
      <div class="card-body product">
    <div class="card-title"style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>
    <div class="rating ">
    <div class="card-text mx-4">&#8377;289 <del>&#8377;389</del></div> 
    </div>
  </div>
</div>
        </div>
        <div>

        <div class="card m-2">
        <img  src="https://files.thesirona.com/site-images/400x400/Flowtime-Duo-Pack-Medium.jpg" alt="kitten" />
  <div class="card-body product">
    <div class="card-title "style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>
    <div class="rating ">
    <div class="card-text mx-4 ">&#8377;289 <del>&#8377;389</del></div> 

    </div>
  </div>
</div>
</div>
        <div>
        <div class="card m-2">
        <img  src="https://files.thesirona.com/site-images/400x400/mini-travel-razor-1.jpg" alt="kitten" />
  <div class="card-body product">
    <div class="card-title"style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>
    <div class="rating ">
    <div class="card-text mx-4 ">&#8377;289 <del>&#8377;389</del></div> 

    </div>
  </div>
</div>
</div>
      
      </Slider></div>
    );
  }
  
  export default App;
  