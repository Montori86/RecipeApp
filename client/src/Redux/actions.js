import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const FILTER_FOR_DIET = "FILTER_FOR_DIET";
export const GET_DETAIL = "GET_DETAIL"



export  function getRecipes(name) {
 if (name){
 
  return async (dispatch) => {
    const requestApi = await axios.get(`http://localhost:3001/recipe?name=${name}`); 
  
    dispatch({
      type: "GET_RECIPES",
      payload: requestApi.data,
    });
  };
 }else{

  return async (dispatch) => {
    const requestApi = await axios.get("http://localhost:3001/recipe");

    dispatch({
      type: "GET_RECIPES",
      payload: requestApi.data,
    });
  };
}
}

export  function getDiet(diet){
  
  if (diet){

  return async (dispatch) => {
    const requestApi = await axios.get(`http://localhost:3001/recipe/${diet}`);
 
    dispatch({
      type: "FILTER_FOR_DIET",
      payload: requestApi.data,
      
     
    });
  };

}else{

  return async (dispatch) => {
    const requestApi = await axios.get("http://localhost:3001/recipe");

    dispatch({
      type: "GET_RECIPES",
      payload: requestApi.data,
    });
  };
}
}

export  function getDetails(id){
  return async (dispatch) => {
    const requestApi = await axios.get(`http://localhost:3001/recipe/${id}`);
  
    
    dispatch({
      type: "GET_DETAIL",
      payload: requestApi.data,
     
    });
  };

}