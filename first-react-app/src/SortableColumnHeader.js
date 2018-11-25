import React, { Component } from 'react';
import './SortableColumnHeader.css';
class SortableColumnHeader extends Component {
  render() {
    let currentSort = this.props.currentSort.column === this.props.column?this.props.currentSort.direction: false;
    return (
        <th>
            {this.props.column}
            <button className={currentSort==='asc' ? "SortableColumnHeader-current" : ""}>&uarr;</button>
            <button className={currentSort==='desc' ? "SortableColumnHeader-current" : ""}> &darr;</button>
        </th>
    )
  }
}

export default SortableColumnHeader;