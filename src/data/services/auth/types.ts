export interface AuthResponseApi {
  usuario: {
    codigo_entidade: string;
    nome_usuario: string;
    url_foto_usuario?: string;
    codigo_interno?: string;
  };
  tipo: {
    tipo_entidade_id: string;
    tipo_entidade_nome: string;
  };
  administradora: {
    codigo_adm: string;
    nome_adm: string;
  };
  token: string;
}
