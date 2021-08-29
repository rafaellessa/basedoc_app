import {factoryAdministrators} from './factory';
import Api from '../../datasource/api';
import action from './actions';

const AdministratorService = {
  async getAdministrators() {
    const instance = Api.getApiInstance(action.getAdministrators);
    const response = await instance.request({
      method: 'GET',
    });

    return factoryAdministrators(response.data);
  },
};
export default AdministratorService;
