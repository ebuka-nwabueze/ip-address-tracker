import axios from "axios"
// import {MAP_API_KEY} from "../config/global"

const API_KEY: string = process.env.REACT_APP_API_KEY as string

const API_URL = "https://geo.ipify.org/api/v2/country?apiKey=YOUR_API_KEY&ipAddress=8.8.8.8"



export function getIp(){
  // console.log(MAP_API_KEY)
}