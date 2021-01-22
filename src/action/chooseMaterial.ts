import { CHOOSE_MATERIAL } from '../constants/constants';

export const chooseMaterial = (material: any) => ({
  type:CHOOSE_MATERIAL,
  payload: material
})