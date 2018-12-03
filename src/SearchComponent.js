import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput'
import  TableListing  from './TableListing'
import data from './constant'

class SearchComponent extends Component {
	constructor(props){
		super(props)
		this.state={
			text:'', 
			data:data
		}
	}
	filterData = (value)=> {
		console.log(data,"data")
		let filteredData = data.find(function(item){
			return item.name == value
			//return 
		})
		console.log(filteredData,"result")
		if(value == ''){
			filteredData = data
		}
		this.setState({
			text: value,
			data: filteredData
		})
	}
  render() {
    return (
      <div className="search-component">
        <SearchInput 
        	searchText={this.state.text}
        	onChange={(value)=>{
        		this.filterData(value)
        	}}
        />
        <TableListing />
      </div>
    );
  }
}

export default SearchComponent;
