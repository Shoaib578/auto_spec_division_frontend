import Axios from 'axios'
import apis_base_url from './apis_base_url'


//Authentication Apis Start
export async function login_user(email,password){
    const response = await Axios.post(`${apis_base_url}/apis/user/login_user`,{
        email:email,
        password:password
    })

    return response
}

export async function register_user(email,password,username){
    const response = await Axios.post(`${apis_base_url}/apis/user/register_user`,{
        email: email,
        password: password,
        username: username
    })
    return response
}

//Authentication Apis End


//Booking Apis Start

export async function insert_booking(customer_full_name,car_name,car_model,customer_address,phone_no,car_year,car_make,email){
    const response = await Axios.post(`${apis_base_url}/apis/booking/insert_booking`,{
        customer_full_name:customer_full_name,
        customer_address:customer_address,
        phone_no:phone_no,
        car_make:car_make,
        car_year:car_year,
        car_model:car_model,
        car_name:car_name,
        email:email
    })
    return response
}

export async function get_all_booking(){
    const response = await Axios.get(`${apis_base_url}/apis/booking/get_all_booking`)
    return response
}

//Car Apis Start
export async function insert_car(car_name){
    
    
    const response = await Axios.post(`${apis_base_url}/apis/car/insert_car`,{
        car_name:car_name
    })
   
    return response
}

export async function get_all_cars(){
    const response = await Axios.get(`${apis_base_url}/apis/car/get_cars`)
    return response
}

export async function delete_car(car_id){
    const response = await Axios.delete(`${apis_base_url}/apis/car/delete_car?car_id=${car_id}`)
    return response
}

//Car Apis End

export async function send_mail(subject,message,from,full_name){
    const response = await Axios.post(`${apis_base_url}/send_mail`,{
        full_name:full_name,
        subject:subject,
        message:message,
        from:from

    })

    return response
}