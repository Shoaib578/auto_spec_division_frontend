import { component$, useStore, useVisibleTask$,$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { delete_car, get_all_cars, insert_car } from "~/call_apis";

export default component$(()=>{
  const navigate = useNavigate()
  const state = useStore({
    cars:[],
    car_name:''
  })
 


   const AddCar = $(async()=>{
    console.log("Hello")
   
    await insert_car(state.car_name)
    .then(async(res)=>{
     
      await get_all_cars()
      .then(res=>{
        state.cars = res.data.data
      })
    })
    .catch(err=>{
      alert(err.message)
    })
   })

   const DeleteCar =$(async(car_id)=>{
    await delete_car(car_id)
    .then(async(res)=>{
      alert("Car successfully deleted")
      await get_all_cars()
      .then(res=>{
        state.cars = res.data.data
      })
    })
    .catch(err=>{
      alert(err.message)
    })
   })

   const GetAllCars = $(async()=>{
    
    await get_all_cars()
    .then(res=>{
      state.cars = res.data.data
    })
   
   })

   useVisibleTask$(()=>{
    const user = localStorage.getItem('user')
    const admin = localStorage.getItem('admin')


    if(!admin){
       navigate('/login')
    }else{
      GetAllCars()
    }
   })
    return(
        <>


        <h1>Cars</h1>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Car Name</th>
      

      <th scope="col">Delete</th>
      <th scope="col">
      <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add</button>

      </th>


    </tr>
  </thead>
  <tbody>
    {state.cars?.map((data,index)=>{
      return <tr>
      <th scope="row">{data?.car_name}</th>
     
      <td>
        <button class="btn btn-danger" onClick$={()=>DeleteCar(data._id)}>Delete</button>
      </td>


    </tr>
    })}
    
    
  </tbody>
</table>



<div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Car</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input placeholder="Car Name" class="form-control" onChange$={(val)=>state.car_name=val.target.value}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick$={AddCar} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
})