import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AboutContainer } from "~/components/about_container";

export default component$(()=>{
    return(
       <>
       <div  class="about">
        <div class="container">
           <div class="row">
              <div class="col-md-12">
                 <div class="titlepage">
                    <h2>About Our Car Service </h2>
                 </div>
              </div>
           </div>
           <div class="container">
              <div class="row">
                 <div class="col-md-10 offset-md-1">
                    <div class="about_img">
                       <div class="about_box">
                          <h3>Dolor sit amet, consectetur adipiscing elit,  </h3>
                          <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                         
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
       </>
    )
})

export const head: DocumentHead = {
    title: "About",
    meta: [
      {
        name: "About",
        content: "",
      },
    ],
  };
  