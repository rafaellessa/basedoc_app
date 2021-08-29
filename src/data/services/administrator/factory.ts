import {Administrator} from './../../../redux/types/types.administrators';
import {IAdministratorReturnApi} from './types';

export const factoryAdministrators = (
  data: IAdministratorReturnApi[],
): Administrator[] => {
  const result: Administrator[] = [];

  data.forEach(adm => {
    const administrator: Administrator = {
      name: adm.Nome_Entidade,
      entityCode: adm.Codigo_Entidade,
      uuid: adm.UID,
    };

    result.push(administrator);
  });

  return result;
};
