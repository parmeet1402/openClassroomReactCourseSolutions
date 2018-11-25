import React, { Component } from 'react';

import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';

var PRODUCTS = {
    '1':{id: 1, category: 'Furniture', price: '$2000.00', stocked: true, name: 'WhiteBoard'},
    '2':{id: 2, category: 'Furniture', price: '$17000.98', stocked: true, name: 'Desk'},
    '3':{id: 3, category: 'Musics', price: '$690000.00', stocked: false, name: 'Piaono'},
    '4':{id: 4, category: 'Musics', price: '$96000.00', stocked: true, name: 'Drum'},
    '5':{id: 5, category: 'Musics', price: '$326000.00', stocked: true, name: 'Flute'}
};

class Products extends Component {
  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      products: PRODUCTS,
      filterText: '',
      inStockOnly: false,
    }
  }

  handleFilter(filterInput){this.setState(filterInput)}


  render() {
    return (
      <div>
        <Filters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilter = {this.handleFilter}
        />
        <ProductTable 
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          />
        <ProductForm/>
      </div>
    )
  }
}
export default Products;