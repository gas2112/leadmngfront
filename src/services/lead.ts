import { api } from "./api";
import axios from 'axios';
import { setCookie, parseCookies } from 'nookies'
// export async function getAllLeads() {
//     let ret = null;
//   await api
//     .post("v1/Lead?PageNumber=1&PageSize=1")
//         .then(function (response) {
//             console.log(JSON.stringify(response));
//             ret = JSON.stringify(response.data)
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   return Promise.resolve(ret);
// }

export async function getAllLeads(){
    const { 'nextauth.token': token } = parseCookies()
    // console.log(token)
    let ret = null;
    var config = {
        method: 'get',
        url: 'https://localhost:9001/api/v1/Lead?PageNumber=1&PageSize=1&Authorization='+token,
        headers: { 
          'Authorization': token, 
        //   'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYXNpY3VzZXIiLCJqdGkiOiJmNGNiYTExMy02Y2I5LTQ2ZGEtODhiMS1iYWYzODE4NTljN2UiLCJlbWFpbCI6ImJhc2ljdXNlckBnbWFpbC5jb20iLCJ1aWQiOiJhZGNhMTkzYy05NGFkLTQ3MTAtYjY5Yy01NmQyZmIyYjA0NWYiLCJpcCI6IjE5Mi4xNjguMTAwLjE4NCIsInJvbGVzIjoiQmFzaWMiLCJleHAiOjE2NjY1NzUwNjcsImlzcyI6IkNvcmVJZGVudGl0eSIsImF1ZCI6IkNvcmVJZGVudGl0eVVzZXIifQ.P02zWULat2VkKTNVMGo57wQ-wj-Mcqq-0DSH1V-fhdg', 
        //   'Cookie': '.AspNetCore.Identity.Application=CfDJ8EW_WhBc2j5GgXWnzGQScpXwQjxgKj9gcwCGtUXV7HhNGkNjLCjY5fRd3nPLI_K1vwf1epm0LnqHSHcppWjtEmbSmVq_yLCzrZqAzOY3bQHX0TEi_WTvc24a6GfE_6S9G8I9hC8CVpx8YFU5xN3uCNUSOXhm7pOT--N1w1DRW5dNylW6ZhwoDBewuulLklrnogLnv_W4Y6yVwihiT6s-yt_MyGPSxno5Uo-w90XkqyE9Cpdd0IqTExKKAJiThqBRfDUcEB74oI-XLQU-mXwPBqmu4BrId6cewxNVY6TBE3-NVjKuuoZD_bjx8gLDdgQbCtWwiDOcsdVGVtjJTBJXUXKI0Z79fQGS5BGnk7Pe3WialzVnHUlUNpTHiUCNdYNFDEwxLAmGgYFZV5jpi8lGwQEp-ym9ddplOv9HUQAZ_96pfFjr35no-X5GpQENNMyrXgTo2M3fzzIhkqAUwzfp40OXR3MteHg3DDCydk-Ej2cBbfFXGkg048pxfzH-TYmNEHAvqNmPq7r5rZRpsiJ8VQOotN_t2Gqb6PubXREpVxM2E9piDc6dWjYzn3DUOiOl_E_mWSvq_T-qUH2j6bxT97cjvIcM0jOq8vt6V_-Mzr_8urBnFHkyaWa_GiYuRgv7j9QYoNmwAIZgX6CEB34ORxdfZpNoC93LVgEc_KWJXzWg8a6vhW7oIGlo_867-j0Qcz1wiY-0Oo4n9wXl_awjDB0'
        }
      };
      
      await axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        ret = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

return ret
}
