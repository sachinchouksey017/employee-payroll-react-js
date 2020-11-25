import config from '../config/config';
import AxiosService from './axios-service'
export default class EmployeeService {
    baseUrl = config.baseUrl;
    getAllEmployee() {
        return AxiosService.getService(`${this.baseUrl}employee`);
    }
    getEmployee(id) {
        return AxiosService.getService(`${this.baseUrl}employee/${id}`);
    }
    deleteEmployee(id) {
        return AxiosService.deleteService(`${this.baseUrl}employee/${id}`)
    }
    addEmployee(data) {
        return AxiosService.postService(`${this.baseUrl}employee`, data);
    }
    updateEmployee(data) {
        return AxiosService.putService(`${this.baseUrl}employee/${data.id}`, data)
    }
   

}
