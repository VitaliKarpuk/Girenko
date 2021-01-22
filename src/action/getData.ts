import { GET_DATA } from '../constants/constants';

export const getData = (data:any) => ({
  type: GET_DATA,
  payload: data
})