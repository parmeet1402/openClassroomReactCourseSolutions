import React, { Component } from 'react';
import ProductRow from './ProductRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class ProductTable extends Component {
  constructor(props){
    super(props);
    this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
    this.state ={
      sort:{
        column: 'name',
        direction: 'desc'
      }
    }
  }


  sortByColumnAndDirection(objA, objB){
    let isDesc = this.state.sort.direction === 'desc'?-1:1;
    let [a,b]= [objA[this.state.sort.column],objB[this.state.sort.column]];
    if(this.state.sort.column === 'price'){
      [a,b] = [a,b].map((val)=> parseFloat(val.replace(/[^\d.]/g,''),''),10);
    }
    if(a>b){
      return 1*isDesc;
    }
    if(a<b){
      return -1*isDesc;
    }
    return;
  }

  sortProducts(){
    let productsAsArray = Object.keys(this.props.products).map((pid)=> this.props.products[pid]);
    return productsAsArray.sort(this.sortByColumnAndDirection)
  }


  render() {
      let rows=[];
      this.sortProducts().forEach((product)=>{
        if(product.name.indexOf(this.props.filterText)===-1||(!product.stocked && this.props.inStockOnly)){
          return;
        }
   rows.push (
          <ProductRow product={product} key={product.id} />
      );
      });      
    return (
      <div>
        <table>
            <thead>
            <tr>
                <SortableColumnHeader
                  column="name"
                  currentSort = {this.state.sort}
                />
                <SortableColumnHeader
                  column="price"
                  currentSort={this.state.sort}
                />
            </tr>
            </thead>
            <tbody>
              {rows}        
            </tbody>
        </table>
      </div>
    )
  }
}
export default ProductTable;