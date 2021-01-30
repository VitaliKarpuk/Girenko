import { REQUEST_DATA } from '../constants/constants';
import Client from '../contentful';


const getData = (data:any) => ({
  type: REQUEST_DATA,
  payload: data
})

const requesData = () => {
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const response = await Client.getEntries() 
    dispatch(getData(response.items))
  }
}

export default requesData;