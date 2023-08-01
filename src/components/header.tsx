
import ImgLogo from '~/assets/images/logo.png?jsx';
import { component$, useSignal, useVisibleTask$ ,} from "@builder.io/qwik";
import { Link, type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import LogoImage from "../assets/images/logo.png"


export const Header =  component$(() => {
   var is_loggedin = useSignal(false)
   const navigate = useNavigate()

   useVisibleTask$(()=>{
      const user = localStorage.getItem('user')
      if(user){
         is_loggedin.value = true
      }
   })
  return (
    <>
    

    <header>
         <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                              <Link href="/"><ImgLogo alt="#" /></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars" style={{color:'white'}}></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item ">
                                 <Link class="nav-link" href="/"> Home  </Link>
                              </li>
                              <li class="nav-item">
                                 <Link class="nav-link" href="/services">Services</Link>
                              </li>
                            
                              <li class="nav-item">
                                 <Link href="/about" class="nav-link" >About</Link>
                              </li>

                             <li class="nav-item">
                                 <Link href="/contact" class="nav-link" >Contact Us</Link>
                              </li>
                           
                            
                              <li class="nav-item">
                                 <Link class="nav-link" href="/book">Book</Link>
                              </li>

                              <li class="nav-item d_none">
                                 
                                 {!is_loggedin.value?<Link class="nav-link" href="/login"><i class="fa fa-user-circle padd_right" aria-hidden="true"></i>Login/Register</Link>:<h3 style={{color:'white',cursor:'pointer'}} onClick$={()=>{
                                    localStorage.removeItem('user')
                                    navigate('/login')
                                 }}><i class="fa fa-user-circle padd_right" aria-hidden="true"></i>Logout</h3>}
                              </li>
                            
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
 
    </>
  );
});