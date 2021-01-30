import { GET_DATA, CHOOSE_MATERIAL, SORT_PRICE, REQUEST_DATA } from '../constants/constants';

export interface Item {
  id: number,
  name: string,
  species: string,
  description: string,
  image: string,
  audio: string
}
export interface stateType {
  material: String,
  breed: String
  price: String
  size: String
  description: String,
  img: String,
  rate: Number
}



const initialState: any = [
  //   {
  //   material : "",
  //   breed: "",
  //   price: "",
  //   size: "",
  //   description: "",
  //   img: "",
  //   rate: 1
  // }
]

const reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case GET_DATA:
      return state = action.payload
    case CHOOSE_MATERIAL:
      return state.filter((elem: { material: string; }) => elem.material.toUpperCase() === action.payload)
    case SORT_PRICE:
      return [...state].sort((a: any, b: any) => Number.parseInt(a.fields.price.content[0].content[0].value) - Number.parseInt(b.fields.price.content[0].content[0].value))
    case REQUEST_DATA:
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer;