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
      
      <h5 style={{textAlign:"center",marginBottom:"7%" ,margin:"auto",borderBottom:"10px solid pink ",width:"150px"}}>BEST SELLERRS</h5>
      <Slider {...settings}>
        <div >
        <div class="card m-2">
        <img className='hover' src="https://files.thesirona.com/site-images/400x400/medium-menstrual-cup-listing-00.jpg" alt="kitten" /> 
  <div class="card-body">
    <div class="card-title"style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>
    <div class="rating ">
      <span class="rating-text ">4.0</span> &nbsp;&nbsp;
      <span class="star" style={{color:"red"}}>&#9734;</span>| &nbsp;&nbsp;2671 rating

    <p class="card-text mx-4  ">&#8377;289 <del>&#8377;389</del></p> 
    </div>
  </div>
</div>

</div>
        <div>
        <div class="card m-2">
        <img className='hover' src="https://files.thesirona.com/site-images/400x400/bum-cream-1_1.png" alt="kitten" />
  <div class="card-body">
    <div class="card-title"style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>
    <div class="rating ">
      <span class="rating-text ">4.0</span> &nbsp;&nbsp;
      <span class="star" style={{color:"red"}}>&#9734;</span> |&nbsp;&nbsp;2671 rating

    <p class="card-text mx-4  ">&#8377;289 <del>&#8377;389</del></p> 
    </div>
  </div>
</div>

        </div>
        <div>
        <div class="card m-2">
        <img className='hover' src="https://files.thesirona.com/site-images/400x400/Exfoliating-Facewash_2.jpg" alt="kitten" />
      <div class="card-body">
    <div class="card-title"style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>
    <div class="rating ">
      <span class="rating-text ">4.0</span> &nbsp;&nbsp;
      <span class="star" style={{color:"red"}}>&#9734;</span> |&nbsp;&nbsp;2671 rating

    <p class="card-text mx-4  ">&#8377;289 <del>&#8377;389</del></p> 
    </div>
  </div>
</div>
        </div>
        <div>

        <div class="card m-2">
        <img className='hover' src="https://files.thesirona.com/site-images/400x400/Period-Stain-Remover-1.jpg" alt="kitten" />

  <div class="card-body">
    <div class="card-title "style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>


    <div class="rating ">
     
      <span class="rating-text ">4.0</span> &nbsp;&nbsp;
      <span class="star" style={{color:"red"}}>&#9734;</span> |&nbsp;&nbsp;2671 rating


    <p class="card-text mx-4  ">&#8377;289 <del>&#8377;389</del></p> 

    </div>
  </div>
</div>
        </div>
        <div>

        <div class="card m-2">
        <img className='hover' src="https://files.thesirona.com/site-images/400x400/FSp577_1.png" alt="kitten" />


  <div class="card-body">
    <div class="card-title"style={{ fontWeight: 600 }}>MENSTRUAL CUP WITH POUCH - MEDIUM</div>
    <div class="card-subtitle">FDA Approved | 100% medical grade silicone | Reusable </div>


    <div class="rating ">
     
      <span class="rating-text ">4.0</span> &nbsp;&nbsp;
      <span class="star" style={{color:"red"}}>&#9734;</span> |&nbsp;&nbsp;2671 rating
 
    <p class="card-text mx-4  ml-25 ">&#8377;289 <del>&#8377;389</del></p> 

    </div>
  </div>
</div>
        </div>
      </Slider></div>
    );
  }
  
  export default App;
  