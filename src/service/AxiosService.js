const axios = require('axios').default;
class AxiosService {

  getService(url = '', tokenRequired = false, httpOptions = null) {
    console.log(localStorage.getItem('token'))
    return axios.get(url,{headers:{'authorization':`Bearer ${localStorage.getItem('token')}`,
      }});
  }
  post(url='', payload = null){
    return axios.post(url, payload,{headers:{'content-type':'application/json'}})
  }
  patch(url='',payload=null){
    return axios.patch(url,payload,{headers:{'authorization':`Bearer ${localStorage.getItem('token')}`,
      }})
  }
}
module.exports = new AxiosService();