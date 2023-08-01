import { component$, useVisibleTask$,$, useStore } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { get_all_booking } from "~/call_apis";

export default component$(()=>{
  const navigate = useNavigate()
  const state = useStore({
    bookings:[{}]
  })
  const GetAllBookings = $(async()=>{
      state.bookings = []
      await get_all_booking()
      .then(res=>{
        state.bookings = res.data.data
      })
      .catch(err=>{
        alert(err.message)
      })
  })
  useVisibleTask$(()=>{
    const user = localStorage.getItem('user')
    const admin = localStorage.getItem('admin')


    if(!admin){
       navigate('/login')
    }else{
      GetAllBookings()
    }
 })
    return(
        <>


        <h1>Bookings</h1>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Car Make</th>
      <th scope="col">Car Year</th>
      <th scope="col">Model</th>
      <th scope="col">Car</th>
      <th scope="col">Address</th>
      <th scope="col">Date</th>


      


    </tr>
  </thead>
  <tbody>
    {state.bookings?.map((data,index)=>{
      return  <tr>
      <th scope="row">{data?.customer_full_name}</th>
      <td>{data?.email}</td>
      <td>{data?.phone_no}</td>
      <td>{data?.car_make}</td>
      <td>{data?.car_year}</td>
      <td>{data?.car_model}</td>
      <td>{data?.car_name}</td>
      <td>{data?.customer_address}</td>
      
      <td>{data?.created_at}</td>


    </tr>
    })}
   
    
  </tbody>
</table>
        </>
    )
})


