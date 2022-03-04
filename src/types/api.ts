export type Type = {
  id: number;
  icon: string;
  text: string;
}

export type Event = {
  id: string;
  tipoId: number;
  dataInicio: string;
  dataPublicacao: string;
  descricao: string;
  link: string;
  organizador: string;
  titulo: string;
}
