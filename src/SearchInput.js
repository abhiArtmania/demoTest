import React, { Component } from 'react';
import './App.css';

class SearchInput extends Component {
  render() {
  	const {onChange} = this.props
    return (
      <div className="search-Input">
        <input 
        	type='text' 
        	value={this.props.searchText}
        	onChange={(e)=>{
        		onChange(e.target.value)
        	}}
        />
        <button onClick={()=>{this.props.clickButton()}}/> 
      </div>
    );
  }
}

export default SearchInput;
