
import axios from 'axios';
const endPoint = "https://movie-booking-application.onrender.com" ;


export const login = async (user)=>{
    console.log(endPoint)

    const response = await axios.post(`${endPoint}/mba/api/v1/auth/signin`, user);
    
    return response;

}



// export const getAllMovies = async ()=>{

//     const response = await axios.get("https://movie-booking-application.onrender.com/mba/api/v1/movies");
    
//     return response;

// }


// export const getMovieById = async (id)=>{

//     const response = await axios.get(`https://movie-booking-application.onrender.com/mba/api/v1/movies/${id}`);
    
//     return response;

// }

