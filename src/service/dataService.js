export async function getUser(){
    const Token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

const requestOption = {
    method:"GET",
    headers: {"content-type":"application/json",Authorization:`Bearer ${Token}`}}
  const response= await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`,requestOption);
  if(!response.ok){
    throw {message:response.statusText }  // eslint-disable-next-line
  }
  const data = await response.json();
   return data
}

export async function getUserOrders(){
    const Token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    
    const response= await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`,{
       method:"GET",
       headers: {"content-type":"application/json",Authorization:`Bearer ${Token}`},
     })
     if(!response.ok){
      throw {message:response.statusText , status:response.status }  // eslint-disable-next-line
    }
     const data = await response.json()
     return data
}

export async function createOrder(CardList,total,user){
    const Token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

        const order={
          CardList:CardList,
          amount_paid:total,
          quantity:CardList.length,
          user:{
            name:user.name,
            email:user.email,
            id:cbid
          },
         
      
        }
    
        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,{
        method:"POST",
        headers: {"content-type":"application/json",Authorization:`Bearer ${Token}`},
        body:JSON.stringify(order)
      })
      if(!response.ok){
        throw {message:response.statusText , status:response.status }  // eslint-disable-next-line
      }
      const data = await response.json()
      return data
}