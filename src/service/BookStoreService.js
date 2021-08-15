import AxiosService from './AxiosService.js';
import config from '../config/config';

export default class BookStoreService{
    baseUrl = config.baseUrl;
    
    getAllBooks() {
        return AxiosService.getService(`${this.baseUrl}/component/book`);
    }
}