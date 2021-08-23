import AxiosService from './AxiosService.js';
import config from '../config/config';

export default class BookStoreService{
    baseUrl = config.baseUrl;
    
    getAllBooks() {
        return AxiosService.getService(`${this.baseUrl}/component/book`);
    }
    getUser(){
        return AxiosService.getService(`${this.baseUrl}/component`)
    }

    addNewUser(userData){
        return AxiosService.post(`${this.baseUrl}/register`, userData)
    }
    login(userData){
        return AxiosService.post(`${this.baseUrl}/authenticate`,userData)
    }
    patchAddress(address){
        return AxiosService.patch(`${this.baseUrl}/component`,address)
    }
}