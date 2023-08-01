import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(()=>{
    return(
        <div class="footer">
        <div class="container">
           <div class="row">
              <div class="col-md-4">
                 <div class="titlepage">
                    <h2>Contact Us</h2>
                 </div>
              </div>
              <div class="col-md-8" >
              
              </div>
              <div class="col-md-6">
                 <form id="request" class="main_form">
                    <div class="row">
                       <div class="col-md-12 ">
                          <input class="contactus" placeholder="Full Name" type="text" name="Full Name"/> 
                       </div>
                       <div class="col-md-12">
                          <input class="contactus" placeholder="Email" type="email" name="Email" /> 
                       </div>
                    
                       <div class="col-md-12">
                          <textarea class="textarea" placeholder="Message" ></textarea>
                       </div>
                       <div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <button class="send_btn">Send</button>
                       </div>
                      
                    </div>
                 </form>
              </div>
          

           </div>
           <br />
            <br />
        </div>
       
     </div>
    )
})

export const head:DocumentHead = {
    title: "Contact Us",
    meta: [
      {
        name: "Contact Us",
        content: "",
      },
    ],
  };
  