export enum STATUS {active = 'Activo', inactive = 'Inactivo'};

export interface movie {
  id: number;
  title: string;
  body: string; 
  status: STATUS;
  created: Date;
}