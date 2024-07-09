export interface Response<T>{
  dados: T;
  mensagem: string;
  sucesso: boolean;
  item: any
}
