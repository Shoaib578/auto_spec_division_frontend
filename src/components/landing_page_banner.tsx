
import ImgCar from '~/media/images/car.png?jsx';

import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
export const LandingPageBanner = component$(()=>{
    return(
        <section class="banner_main">
        <div id="banner1" class="carousel slide" data-ride="carousel">
           <ol class="carousel-indicators">
              <li data-target="#banner1" data-slide-to="0" class="active"></li>
              <li data-target="#banner1" data-slide-to="1"></li>
              <li data-target="#banner1" data-slide-to="2"></li>
           </ol>
           <div class="carousel-inner">
              <div class="carousel-item active">
                 <div class="container-fluid">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                <h1>Welcome</h1>
                                <span>car repair services</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                <Link href="/book">Book  </Link> <Link href="/contact">Contact Us</Link>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><ImgCar alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="carousel-item">
                 <div class="container-fluid">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                <h1>Welcome</h1>
                                <span>car repair services</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                <Link href="/book">Book  </Link> <Link href="/contact">Contact Us</Link>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><ImgCar alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="carousel-item">
                 <div class="container-fluid">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                <h1>Welcome</h1>
                                <span>car repair services</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                <Link href="/book">Book  </Link> <Link href="/contact">Contact Us</Link>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><ImgCar alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
           <i class="fa fa-chevron-left" aria-hidden="true"></i>
           </a>
           <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
           <i class="fa fa-chevron-right" aria-hidden="true"></i>
           </a>
        </div>
     </section>
    )
})