const axios = require('axios').default;
class AxiosService {

  getService(url = '', tokenRequired = false, httpOptions = null) {
    return axios.get(url,{headers:{'authorization':`Bearer ${localStorage.getItem("token")}`}});
  }
  post(url='', payload = null){
    return axios.post(url, payload,{headers:{'content-type':'application/json'}})
  }
}
module.exports = new AxiosService();