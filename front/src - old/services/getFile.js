import {adress} from "./backendAddress";

const Service= (url, DTO) =>{
  const bearer = 'Bearer ' + JSON.parse(localStorage.getItem('app')).token 

  return  fetch(adress+url + '?' + new URLSearchParams(DTO), {
            headers: {
              'Authorization': bearer
            }
          })
          .then(resp => resp.blob())
          .then(response => {

            const file = new File([response], "imeFajla"); 
            //imeFajla is not importrnat, because it will be calculated from path 
            //and changed in //frontend\src\pages\post\components\post\documents\index.jsx
           
            return file
          })
          .catch(err => {
            console.log(err+": "+url)
            throw err;
          })
}

export default Service;