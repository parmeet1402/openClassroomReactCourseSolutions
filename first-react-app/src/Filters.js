import React, { Component } from 'react'

class Filters extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search...."/>
        <p>
            <label>
                <input type="checkbox"/>
                Only show products in stock
            </label>
        </p>
        
      </form>
    )
  }
}
export default Filters;