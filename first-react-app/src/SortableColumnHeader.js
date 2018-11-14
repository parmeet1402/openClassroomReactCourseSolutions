import React, { Component } from 'react';
import './SortableColumnHeader.css';
class SortableColumnHeader extends Component {
  render() {
    return (
        <th>
            {this.props.column}
            <button className="SortableColumnHeader-current">&uarr;</button>
            <button>&darr;</button>
        </th>
    )
  }
}

export default SortableColumnHeader;