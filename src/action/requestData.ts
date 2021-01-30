import { REQUEST_DATA } from '../constants/constants';
import Client from '../contentful';


const getData = (data) => ({
  type: REQUEST_DATA,
  payload: data
})

const requesData = () => {
  return async dispatch => {
    const response = await Client.getEntries() 
    dispatch(getData(response.items))
  }
}

export default requesData;