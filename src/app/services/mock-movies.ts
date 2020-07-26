import { movie, STATUS } from '../model/movie';

export const movies: movie[] = [
  {
    id: 1,
    title: 'El hombre Araña',  
    body: 'Pelicula Aracnida', 
    status: STATUS.active,
    created: new Date()
  },
  {
    id: 2,
    title: 'La mujer maravilla',  
    body: 'Acción pura',
    status: STATUS.inactive,
    created: new Date()
  },
  {
    id: 3,
    title: 'La casa de Papel',  
    body: '.', 
    status: STATUS.active,
    created: new Date()
  },
  {
    id: 4,
    title: 'Batman',  
    body: '', 
    status: STATUS.inactive,
    created: new Date()
  },
  {
    id: 5,
    title: 'Los vengadores',  
    body: '',
    status: STATUS.active,
    created: new Date()
  },
  {
    id: 6,
    title: 'Todo Poderoso',  
    body: 'Last winter, ', 
    status: STATUS.active,
    created: new Date()
  },
  {
    id: 7,
    title: 'El ultimo Samurai',  
    body: 'Acción', 
    status: STATUS.inactive,
    created: new Date(2020,10,10)
  },
];