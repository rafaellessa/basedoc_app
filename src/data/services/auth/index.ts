import {BasedocRequestLoginParams} from './../../../redux/types/types.auth';
import Api from '../../datasource/api';
import action from './actions';
import {factoryUser} from './factory';

const AuthService = {
  async login({login, password, partner}: BasedocRequestLoginParams) {
    const instance = Api.getApiInstance(action.login);
    const response = await instance.request({
      method: 'POST',
      data: {
        login,
        senha: password,
        parceiro: partner,
      },
    });

    return factoryUser(response.data);
  },
};
export default AuthService;
