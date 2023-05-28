export async function getProductList(searchTerm){
    const response =await fetch( `${process.env.REACT_APP_HOST}/444/products?q=${searchTerm ? searchTerm : ""}`);  // hadi condition ta search ti3na ki n3oudou katbina haja ymdhelna ki y3oud mkn welou dirha empty string
  if(!response.ok){
    throw {message:response.statusText , status:response.status}
  }
    const data = await response.json();
    return data
}

export async function getProduct(params){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${params.id}`);
    if(!response.ok){
        throw {message:response.statusText , status:response.status}
      }
    const JSON= await response.json();
    return JSON
}

export async function getFeatures(){
    const response =await fetch(`${process.env.REACT_APP_HOST}/444/Features_products`);
    if(!response.ok){
        throw {message:response.statusText , status:response.status}
      }
    const data = await response.json();
    return data
}