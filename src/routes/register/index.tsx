import { component$, useStore,$, useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead, Link, useNavigate } from "@builder.io/qwik-city";
import ImgCar from '~/media/images/car.png?jsx';
import { toast } from 'react-toastify';
import { register_user } from "~/call_apis";

export default component$(()=>{
   const navigate = useNavigate()
    const state = useStore({
      email:'',
      password:'',
      username:''
    })

   const validate = $(()=>{
      if(state.email.length<1){
         alert("Please enter a valid email")
         return false
      }

      if(state.password.length<5){
         alert("Password must be at least 5 characters")
         return false
      }

      if(state.username.length<5){
         alert("Username must be at least 5 characters")
         return false
      }

      return true
    })

    const register = $(async()=>{
      const is_validate =await validate()

      if(is_validate) {
         await register_user(state.email,state.password,state.username)
         .then(res=>{
            if(res.data.is_registered){
               alert("Registered Successfully")
               if(res.data.user.is_admin){

               localStorage.setItem('admin',JSON.stringify(res.data.user))
               navigate('/admin')


               }else{
                  localStorage.setItem('user',JSON.stringify(res.data.user))
                  navigate('/')

               }
            }else{
               alert(res.data.status)
            }
         })
         .catch(err=>{
            alert(err.message)
         })

      }
    })

    useVisibleTask$(()=>{
      const user = localStorage.getItem('user')
      const admin = localStorage.getItem('admin')

      if(user){
         navigate('/')
      }

      if(admin){
         navigate('/admin')
      }
   })
    return(
        <div class="footer">
        <div class="container">
           <div class="row">
              <div class="col-md-4">
                 <div class="titlepage">
                    <h2>Register</h2>
                 </div>
              </div>
              <div class="col-md-8" >
              
              </div>
              <div class="col-md-6">

               
                 <div id="request" class="main_form">
                    <div class="row">
                    <div class="col-md-12">
                          <input class="contactus" placeholder="User Name" onChange$={(val)=>{
                           state.username = val.target.value
                          }} type="text"  /> 
                       </div>


                       <div class="col-md-12">
                          <input class="contactus" placeholder="Email" type="email" onChange$={(val)=>{
                           state.email = val.target.value
                          }} /> 
                       </div>
                       <div class="col-md-12 ">
                          <input class="contactus" placeholder="Password" type="password" onChange$={(val)=>{
                           state.password = val.target.value
                          }}/> 
                       </div>

                     


                      
                       <div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <button onClick$={register} class="send_btn">Register</button>
                       </div>
                      <Link href="/login" style={{color:'white'}}>Already Have An Account Want to? Login</Link>


                    </div>
                    <br />
                      <br />
                 </div>
              </div>
             
           </div>
        </div>
       
     </div>
    )
})

export const head: DocumentHead = {
    title: "Register",
    meta: [
      {
        name: "Register",
        content: "",
      },
    ],
  };
  