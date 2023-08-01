import { component$, useStore,$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import emailjs from '@emailjs/browser'
import { send_mail } from "~/call_apis";
export const Footer = component$(()=>{
    const navigate = useNavigate()
    const state = useStore({
      from:'',
      subject:'',
      message:'',
      full_name:''
    })
    const SendMail = $(async()=>{
      await send_mail(state.subject, state.message,state.from,state.full_name)
      .then(res=>{
         if(res.data.is_sent){
            alert("Application Has Been Submited")
         }else{
            alert(res.data.status)
         }
      })
      .catch(err=>{
         alert(err.message)
      })
    })
    return(
        <footer id="contact">
        <div class="footer">
           <div class="container">
              <div class="row">
                 <div class="col-md-4">
                    <div class="titlepage">
                       <h2>Contact Us</h2>
                    </div>
                 </div>
                 <div class="col-md-8">
                    <ul class="location_icon">
                       <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i></a> Locatins</li>
                       <li><a href="#"><i class="fa fa-volume-control-phone" aria-hidden="true"></i></a> +71 9087654321</li>
                       <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>demo@gmail.com</li>
                    </ul>
                 </div>
                 <div class="col-md-6">
                    <div  id="request" class="main_form">
                       <div class="row">
                          
                          <div class="col-md-12 ">
                             <input class="contactus" placeholder="Full Name" onChange$={(val)=>state.full_name=val.target.value} type="text" name="from_name"/> 
                          </div>
                          <div class="col-md-12">
                             <input class="contactus" placeholder="Email" onChange$={(val)=>state.from = val.target.value} type="email" name="email" /> 
                          </div>
                          <div class="col-md-12 ">
                             <input class="contactus" placeholder="Subject" onChange$={(val)=>state.subject=val.target.value} type="text" name="subject"/> 
                          </div>
                          <div class="col-md-12">
                             <textarea class="textarea" onChange$={(val)=>state.message = val.target.value} placeholder="Message" name="message"></textarea>
                          </div>
                          <div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                             <button type="submit" onClick$={SendMail} class="send_btn">Send</button>
                          </div>
                          <div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                             <ul class="social_icon">
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>
              
              </div>
           </div>
           <div class="copyright">
              <div class="container">
                 <div class="row">
                    <div class="col-md-12">
                       <p>Copyright 2023 All Right Reserved By <Link href="/">Auto Spec Division</Link></p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </footer> 
    )
})