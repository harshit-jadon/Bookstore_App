import AxiosService from './AxiosService.js';
import config from '../config/config';

export default class BookStoreService{
    baseUrl = config.baseUrl;
    
    getAllBooks() {
        return AxiosService.getService(`${this.baseUrl}/component/book`);
    }

    addNewUser(userData){
        return AxiosService.post(`${this.baseUrl}/register`, userData)
    }
    login(userData){
        return AxiosService.post(`${this.baseUrl}/authenticate`,userData)
    }
}