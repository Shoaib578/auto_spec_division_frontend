import { component$ } from "@builder.io/qwik";
import ImgInterior from "../assets/images/interior.jpg"
import ImgLeatherInterior from "../assets/images/leather_interior_protection.jpg"
import { Link } from "@builder.io/qwik-city";


export const WhatweDo = component$(()=>{
    return(
        <div class="wedo ">
        <div class="container">
           <div class="row">
              <div class="col-md-12">
                 <div class="titlepage">
                    <h2>What We Do</h2>
                  
                    <p>It is a long established fact that a reader will be distracted by the </p>
                 </div>
              </div>
           </div>
           <div class="row">
              <div class="col-md-10 offset-md-1">
              <Link href="/book">

                 <div class="row">

                    <div class="col-md-6 margin_bottom">
                       <div class="work">
                          <figure><img src={ImgInterior} alt="#" /></figure>
                       </div>
                       <div class="work_text">
                          <h3>Quick repair<br/><span class="blu">Total Service</span></h3>
                       </div>
                    </div>

                    
                    <div class="col-md-6 margin_bottom">
                       <div class="work">
                          <figure><img src={ImgLeatherInterior} alt="#"/></figure>
                       </div>
                       <div class="work_text">
                          <h3>Quick repair<br/> <span class="blu">Total Service</span></h3>
                       </div>
                    </div>
                    
                 </div>
                 </Link>

                 <Link class="read_more" href="/services">See More</Link>
              </div>
           </div>
        </div>
     </div>
    )
})