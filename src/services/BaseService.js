import axios from 'axios'

class BaseService {
    constructor() {
        this.http = axios.create({
            baseURL: 'http://localhost:8000/api'
        });

        //

    }
}

export default BaseService;