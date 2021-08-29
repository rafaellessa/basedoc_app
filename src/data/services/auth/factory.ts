import {User} from '../../../redux/types/types.auth';
import {AuthResponseApi} from './types';

export const factoryUser = (data: AuthResponseApi): User => {
  return {
    administratorCode: data.administradora.codigo_adm,
    administratorName: data.administradora.nome_adm,
    entityCode: data.usuario.codigo_entidade,
    entityType: data.tipo.tipo_entidade_id,
    entityTypeName: data.tipo.tipo_entidade_nome,
    name: data.usuario.nome_usuario,
    internalCode: data.usuario.codigo_interno,
    token: data.token,
    urlPhoto: data.usuario.url_foto_usuario,
  };
};
