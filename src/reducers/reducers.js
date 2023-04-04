
const initialState = {
 

    products: [],
    eta: ''

    
}


const reducer =(state = initialState, action) =>{
    switch(action.type){
      case'ADD': 
      return {
        products: [...state.products, action.payload]}
  
    
      case'ADDETA':
      return {

        ...state, eta: action.payload

      }  


      case 'RESET': 
      return {
        ...state, products:[]
      }

      case 'REMOVEITEM':
        return {
          products: state.products.filter(elem => elem !== action.payload)
        }



      default:
      return state
    }
  }


export default reducer;






