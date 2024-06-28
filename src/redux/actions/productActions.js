import axios from "axios";
import * as action from '../constants/productConstant'
const url = 'https://localhost:8000';


export function getProducts(){

return{
type:"Productall",
}

}


export function getProductsTop(){

    return{
    type:"Top_Selection",
    }
    
    }