import { component$,$, useStore, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { get_all_cars, insert_booking } from "~/call_apis";
import ImgCar from '~/media/images/car.png?jsx';

export default component$(()=>{
   const state = useStore({
      cars:[{
         car_name:'',
         _id:'2123asd'
      }],
      full_name:'',
      email:'',
      phone_no:'',
      car_make:'',
      car_year:'', 
      model:'',
      car_name:'',
      customer_address:''
   })
   const get_cars = $(async()=>{
      state.cars = []
      await get_all_cars()
      .then(res=>{
         state.cars = res.data.data
      })
   })

   const validate = $(()=>{
      if(state.full_name.length<1){
         alert("Full name required")
         return false
      }

      if(state.email.length<1){
         alert("Email required")
         return false
      }
      if(state.phone_no.length<1){
         alert("Phone number required")
         return false
      }

      if(state.car_make.length<1){
         alert("Car make required")
         return false
      }

      if(state.car_year.length<1){
         alert("Year required")
         return false
      }

      if(state.model.length<1){
         alert("Model required")
         return false
      }

      if(state.car_name.length<1){
         alert("Car name required")
         return false
      }
      if(state.customer_address.length<1){
         alert("Customer address required")
         return false
      }

      return true
   })


   const book = $(async()=>{
      const is_validated = await validate()
      if(is_validated){
         await insert_booking(state.full_name,state.car_name,state.model,state.customer_address,state.phone_no,state.car_year,state.car_make,state.email)
         .then(res=>{
            if(res.data.is_added){
               alert("You have booked your reservation")
            }
         })
         .catch(err=>{
            alert(err.message)
         })

      }
   })
   useVisibleTask$(()=>{
      get_cars()
   })
    return(
        <div class="footer">
        <div class="container">
           <div class="row">
              <div class="col-md-4">
                 <div class="titlepage">
                    <h2>Book Reservation</h2>
                 </div>
              </div>
              <div class="col-md-8" >
              
              </div>
              <div class="col-md-6">

               
                 <div id="request" class="main_form">
                    <div class="row">
                       <div class="col-md-12 ">
                          <input class="contactus" onChange$={(val)=>state.full_name = val.target.value} placeholder="Full Name" type="text" name="Full Name"/> 
                       </div>
                       <div class="col-md-12">
                          <input class="contactus" onChange$={(val)=>state.email = val.target.value} placeholder="Email" type="email" name="Email" /> 
                       </div>
                       <div class="col-md-12">
                          <input class="contactus" onChange$={(val)=>state.phone_no=val.target.value} placeholder="Phone Number" type="number" name="Phone Number" />                          
                       </div>

                       <div class="col-md-12">
                          <input class="contactus" placeholder="Car Make" onChange$={(val)=>state.car_make = val.target.value} type="text" name="Car Make" /> 
                       </div>


                       <div class="col-md-12">
                          <input class="contactus" id="year" placeholder="Car Years" onChange$={(val)=>state.car_year= val.target.value} type="number" name="Car Year"  min="1999" /> 
                       </div>


                       <div class="col-md-12">
                          <input class="contactus" placeholder="Model" onChange$={(val)=>state.model = val.target.value} type="text" /> 
                       </div>


                       <div class="col-md-12">
                          <select class="contactus" onChange$={(val)=>state.car_name=val.target.value}>
                            <option selected>Select Your Car</option>
                            {state.cars?.map((data,index)=>{
                              return <option key={index} value={data.car_name}>{data.car_name}</option>
                            })}

                            </select> 
                       </div>


                       <div class="col-md-12">
                          <input class="contactus" onChange$={(val)=>state.customer_address=val.target.value} placeholder="Customer Address" type="text" /> 
                       </div>

                      
                       <div class="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <button onClick$={book} class="send_btn">Submit</button>
                       </div>
                 

                    </div>
                    <br />
                      <br />
                 </div>
              </div>
              <div class="col-md-6">
                     <div class="map">
                        <figure><ImgCar /></figure>
                     </div>
                   
                  </div>
           </div>
        </div>
       
     </div>
    )
})

export const head: DocumentHead = {
    title: "Book Reservation",
    meta: [
      {
        name: "Book Reservation",
        content: "",
      },
    ],
  };
  