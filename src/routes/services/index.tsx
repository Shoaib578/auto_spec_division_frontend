import { component$ } from "@builder.io/qwik";
import ImgInterior from "../../assets/images/interior.jpg"
import ImgLeatherInterior from "../../assets/images/leather_interior_protection.jpg"
import ImgMilageCorrection from "../../assets/images/milage_correction.jfif"
import ImgVehicleRemap from "../../assets/images/vehicle_remap.jpg"
import ImgCarObdError from "../../assets/images/car_obd_error.jpg"

import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(()=>{
    return(
       
           <div class="wedo">
        <div class="container">
           <div class="row">
              <div class="col-md-12">
                 <div class="titlepage">
                    <h2>Services</h2>
                  
                  
                 </div>
              </div>
           </div>
           <div class="row">
              <div class="col-md-10 offset-md-1">
              <Link href="/book">
                 <div class="row">
                  
                 <div class="col-md-6 margin_bottom">
                       <div class="work" style={{height:150}}>
                          <figure><img src={ImgInterior} style={{height:150}}/></figure>
                       </div>
                       <div class="work_text">
                          <h3>Prestige leather and luxury interior repair</h3>
                       </div>
                    </div>


                    <div class="col-md-6 margin_bottom">
                       <div class="work" style={{height:150}}>
                          <figure><img src={ImgLeatherInterior} style={{height:150}}/></figure>
                       </div>
                       <div class="work_text">
                          <h3>Leather and interior protection</h3>
                       </div>
                    </div>
                    <div class="col-md-6 margin_bottom">
                       <div class="work">
                          <figure><img src={ImgCarObdError} /></figure>
                       </div>
                       <div class="work_text">
                          <h3>OBD2 error clearing</h3>
                       </div>
                    </div>
                    <div class="col-md-6 margin_bottom">
                       <div class="work">
                          <figure><img src={ImgMilageCorrection} /></figure>
                       </div>
                       <div class="work_text">
                          <h3>Mileage correction</h3>
                       </div>
                    </div>


                    <div class="col-md-6 margin_bottom">
                       <div class="work">
                          <figure><img src={ImgVehicleRemap} /></figure>
                       </div>
                       <div class="work_text">
                          <h3>Vehicle remaps and tuning</h3>
                       </div>
                    </div>


                 </div>
                 </Link>
              
              </div>
           </div>
        </div>
     </div>
     
    )
})

export const head: DocumentHead = {
    title: "Services",
    meta: [
      {
        name: "Services",
        content: "",
      },
    ],
  };
  