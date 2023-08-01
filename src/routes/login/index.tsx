import { component$, useStore,$, useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead, Link, useNavigate } from "@builder.io/qwik-city";
import { toast } from "react-toastify";
import { login_user } from "~/call_apis";
import ImgCar from '~/media/images/car.png?jsx';

export default component$(()=>{
      const navigate = useNavigate()
      const state = useStore({
         email:'',
         password:''
      })

   const validate =$(()=>{
         if(state.email.length<1){
            alert("Please enter a valid email")
            return false
         }
   
         if(state.password.length<5){
            alert("Password must be at least 5 characters")
            return false
         }
   
       
   
         return true
   })

  const login =$(async()=>{
      const is_validate = await validate()
   
      console.log(is_validate)
      if(is_validate){
         await login_user(state.email,state.password)
         .then(res=>{
            if(res.data.is_loggedin == true){
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
                    <h2>Login</h2>
                 </div>
              </div>
              <div class="col-md-8" >
              
              </div>
              <div class="col-md-6">

               
                 <div class="main_form">
                    <div class="row">
                     
                       <div class="col-md-12">
                          <input class="contactus" onChange$={(val)=>state.email = val.target.value} placeholder="Email" type="email"  /> 
                       </div>
                       <div class="col-md-12 ">
                          <input class="contactus" placeholder="Password" onChange$={(val)=>state.password = val.target.value} type="password" /> 
                       </div>

                     


                      
                       <div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <button onClick$={login} class="send_btn">Login</button>
                       </div>
                       <br />
                      

                      <Link href="/register" style={{color:'white'}}>Dont Have Any Account Want to? Register</Link>
  
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
    title: "Login",
    meta: [
      {
        name: "Login",
        content: "",
      },
    ],
  };
  