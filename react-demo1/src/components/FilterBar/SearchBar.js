import React  from 'react';
function SearchBar(props){
  return (
    <div>
      <input  type="text"  placeholder="..."   />
      <input  id="stock"  type="checkbox" /><label  htmlFor="stock" >Only show products in stock</label>
    </div>
  )
}

export  default SearchBar;