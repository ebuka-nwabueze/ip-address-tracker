import axios from "axios"
import { GetIpResponse } from "../types/types"

// const API_KEY = process.env.NODE_ENV === "development" ? process.env.REACT_APP_MAP_API_KEY as string : process.env.MAP_API_KEY

const API_KEY = "testingthekey"

const API_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&`




export async function getIp(ipAdd: string){
  try {
    const res = await axios.get<GetIpResponse>(`${API_URL}ipAddress=${ipAdd}`)
    // console.log(res.data)
    return res.data

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred during API call';
    }
  }
}