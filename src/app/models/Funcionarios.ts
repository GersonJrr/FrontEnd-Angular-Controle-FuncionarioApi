export interface Funcionario{
  id?: number,
  nome: string,
  departamento: string,
  ativo: boolean,
  turno: string,
  dataDeCriacao?:string,
  dataDeAlteracao?: string,
}
