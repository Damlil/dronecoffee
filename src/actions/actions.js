


function addToCart(value) {

    return{
        type:'ADD',
        payload:
        value
      }}
      


      
function addEta(nr) {

    return{
        type:'ADDETA',
        payload:
       {'eta':nr}
      }}


 function resetStore(value) {
  return {
    type: 'RESET',
    payload: 
    value
  }
 }     


 function deleteItem(value) {
  return {
    type: 'REMOVEITEM',
    payload:
    value
  }
 }

      


export {  addToCart, addEta, resetStore, deleteItem };





