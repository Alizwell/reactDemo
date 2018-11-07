import React, { Component } from 'react';
import ProductTable  from './ProductTable';
import SearchBar from './SearchBar';
class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputText: '123',
      checkStatus: true
     };
  }
  render() {
    return (
      <div>
        <SearchBar 
          inputText={this.state.inputText} 
          checkStatus={this.state.checkStatus}  
          onChangeInput={this.changeInput} 
          onChangeCheck={this.changeCheck}
        />
        <ProductTable  
          category={this.state.category}    
        />
      </div>
    );
  }
}

export default FilterableProductTable;
