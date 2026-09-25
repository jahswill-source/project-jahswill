import React from 'react'
import bag from "./assets/bag.png"
import clothes from "./assets/clothes.png"
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"
import image3 from "./assets/image3.png"
import shoe from "./assets/shoe.png"
import jahswill from "./assets/jahswill.jpg"
import ronaldo from "./assets/ronaldo.png"

const App = () => {
  return (
    <div>
      <head>
        
        <title>MY SHOPPING STORE</title>
        <link rel="stylesheet" href="project.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </head>
    
    <section class="header">
            <nav>
                <a href="project.html"><img src=""/></a>
                <div class="nav-links" id="navLinks">
                    <i class="fa fa-times"></i>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">STORE</a></li>
                        <li><a href="">CONTACT</a></li>
                        
                    </ul>

                </div>
                <i class="fa fa-bars" ></i>
            </nav>
        <div class="text-box">
            <h1>JBOI'S SHOPPING STORE</h1>
            <p>Shopping in person is no more needed in this AI generation.<br/> Online stores like this are now available to end users like you. We offer and bring in the best quality goods for you.</p>
            <a href="" class="hero-btn">visit our website to know more</a>
        </div>    

    </section>

    {/* <!--CATALOG--> */}
    <section class="catalog">
        <h2>PRODUCTS IN THE STORE</h2>
        <p>Here we offer quality goods and services. <br/> we are the number 1 top best in quality items.</p>
        <div class="row">
<div class="catalog-col">
    <h3>EDIBLE PRODUCTS</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Omnis fugiat obcaecati itaque quidem repellat, at temporibus harum a natus, quisquam ut, earum praesentium? <br/> Praesentium exercitationem quis neque, sequi voluptatem cum.</p>

</div>
<div class="catalog-col">
    <h3>WEARABLE PRODUCTS</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Omnis fugiat obcaecati itaque quidem repellat, at temporibus harum a natus, quisquam ut, earum praesentium? <br/> Praesentium exercitationem quis neque, sequi voluptatem cum.</p>
    
</div><div class="catalog-col">
    <h3>SERVICE PRODUCTS</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Omnis fugiat obcaecati itaque quidem repellat, at temporibus harum a natus, quisquam ut, earum praesentium? <br/> Praesentium exercitationem quis neque, sequi voluptatem cum.</p>
    
</div>

        </div>




    </section>

    {/* <!--CART--> */}
    <section class="cart">
<h1>OUR CART</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dicta magnam nam eos suscipit sunt deserunt officiis accusantium commodi distinctio doloribus reprehenderit, minus, similique earum?</p>
<div class="row">
    <div class="cart-col">
        <img src={bag} alt='pix'/>
<div class="layer">
    <h3>BAGS</h3>
    </div>
    </div>
    <div class="cart-col">
        <img src={shoe} />
<div class="layer">
    <h3>SHOE</h3>
</div>
    </div>
    <div class="cart-col">
        <img src={clothes}  alt='pix'/>
<div class="layer">
    <h3>CLOTH</h3>
</div>
    </div>
</div>


    </section>

    {/* <!--FACILITIES--> */}
    <section class="facilities">
<h1>OUR FACILITIES</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Officiis quidem, dolor tempora sequi non id amet ipsam consequuntur molestiae optio voluptates, aspernatur autem saepe cum.</p>
<div class="row">
    <div class="facilities-col">
        <img src={image1} alt='pix'/>
        <h3>WORLD CLASS SHOP</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolore quasi voluptatem illo, nam alias unde dignissimos vitae officiis culpa ipsum? Inventore illo omnis tempora recusandae non harum in, veritatis, adipisci sed, blanditiis facilis eius quia quibusdam aperiam quos asperiores.</p>
    
    </div>
     <div class="facilities-col">
        <img src={image2}/>
        <h3>WORLD CLASS STORE</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolore quasi voluptatem illo, nam alias unde dignissimos vitae officiis culpa ipsum? Inventore illo omnis tempora recusandae non harum in, veritatis, adipisci sed, blanditiis facilis eius quia quibusdam aperiam quos asperiores.</p>
    
    </div>
     <div class="facilities-col">
        <img src={image3} />
        <h3>WORLD CLASS WAREHOUSE</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolore quasi voluptatem illo, nam alias unde dignissimos vitae officiis culpa ipsum? Inventore illo omnis tempora recusandae non harum in, veritatis, adipisci sed, blanditiis facilis eius quia quibusdam aperiam quos asperiores.</p>
    
    </div>
</div>


    </section>



    {/* <!--TESTIMONIALS--> */}
    <section class="testimonials">

        <h1>WHAT PEOPLE SAY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam ad, dignissimos esse modi repellendus error perferendis voluptatum tempora perspiciatis fugit sed ratione corporis illum!</p>
   <div class="testimonial-col">
<img src={jahswill} />
<div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum consequatur in illum repudiandae! Dicta voluptas fuga fugiat nesciunt aut alias est, minus dolor tempora, illum omnis amet quae veritatis.</p>
<h3>UKWUOMA MICHAEL</h3>
<i class="fa fa-star" ></i>
<i class="fa fa-star" ></i>
<i class="fa fa-star" ></i>
<i class="fa fa-star" ></i>
<i class="fa fa-star-o" ></i>
</div>
</div>
 <div class="testimonial-col">
<img src={ronaldo} />
<div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum consequatur in illum repudiandae! Dicta voluptas fuga fugiat nesciunt aut alias est, minus dolor tempora, illum omnis amet quae veritatis.</p>
<h3>AKPALOKE JAHSWILL</h3>
<i class="fa fa-star" ></i>
<i class="fa fa-star" ></i>
<i class="fa fa-star" ></i>
<i class="fa fa-star" ></i>
<i class="fa fa-star-half-o" ></i>

</div>
   </div>
    </section>


    {/* <!--CALL TO ACTION--> */}
    <section class="cta">
        <h1>ENROLL FOR OUR ONLINE JOBS <br/> FROM THE COMFORT OF YOUR HOME</h1>
        <a href="" class="hero-btn">CONTACT US</a>
    </section>
{/* <!--FOOTER--> */}
<section class="footer">
<h4>ABOUT US</h4>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Quibusdam quia consequuntur numquam tenetur rerum quae vel natus soluta distinctio atque?rhytjuyuku 4t4y6u7igbf r44ttgthjj dfnghjlkjj fewd dfbgng </p>
<div class="icons">
    <i class="fa fa-facebook"></i>
    <i class="fa fa-twitter"></i>
    <i class="fa fa-instagram"></i>
    <i class="fa fa-linkedin"></i>
    
</div>
</section>




    
    </div>
  )
}

export default App
