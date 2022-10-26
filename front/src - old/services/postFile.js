import {adress} from "./backendAddress";

const Service= (url, DTO) =>{
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token 

  return fetch(adress+url,{
      method: "POST",  
      body: DTO,
      headers: {
        'Authorization': bearer
      }
    })
    .then(async (response)=>{
      let res = await response.json();
  
      if(!response.ok){ //response je ok ako je status izmedju 200 i 299
        throw new Error(res.message)
      }
  
      return res
    })
    .catch(err => {
      console.log(err+": "+url)
      throw err;
    })

}

export default Service;