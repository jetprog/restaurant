import React from "react"

const Dollars = ({ cents }) => {
  let dollars = (cents / 100).toFixed(2)
  return <span>{dollars}$</span>
}

export default Dollars
