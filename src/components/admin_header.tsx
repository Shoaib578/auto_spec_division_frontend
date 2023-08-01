
import ImgLogo from '~/assets/images/logo.png?jsx';
import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import LogoImage from "../assets/images/logo.png"


export const AdminHeader =  component$(() => {
    const navigate = useNavigate()
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
                              <a href="/admin/">Admin</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item ">
                                 <Link class="nav-link" href="/admin/"> Bookings  </Link>
                              </li>
                              <li class="nav-item">
                                 <Link class="nav-link" href="/admin/cars">Cars</Link>
                              </li>
                            
                            
                              <li class="nav-item d_none">
                                 <h3 class="nav-link" onClick$={()=>{
                                    localStorage.removeItem('admin')
                                    navigate('/login')
                                 }}  style={{color:'white',cursor:'pointer'}}><i class="fa fa-user-circle padd_right" style={{color:'white',cursor:'pointer'}} aria-hidden="true"></i>Logout</h3>
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