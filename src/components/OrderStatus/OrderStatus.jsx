import React from 'react'






function OrderStatus(props) {


    console.log(props);

  return (
    <div>{props.title} {props.price}</div>
  )
}

export default OrderStatus