import React, { Component } from 'react';

class ProductForm extends Component {
  render() {
    return (
<form >
<h3>Enter a new product</h3>
<p>
    <label>
        Name
        <br/>
        <input type="text" name="name"/>
    </label>
</p>
<p>
    <label>
        Category
        <br/>
        <input type="text" name="category"/>
    </label>
</p>
<p>
    <label>
        Price
        <br/>
        <input type="text" name="price"/>
    </label>
</p>
<p>
    <label>
       &nbsp;In stock?
        <br/>
        <input type="checkbox" name="stocked"/>
    </label>
</p>
<input type="submit" value="Save"/>
</form>
    )
  }
}

export default ProductForm;