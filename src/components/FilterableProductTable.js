import React from 'react'; 
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { products } from '../constants/products';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    
    this.onHandleChange = this.onHandleChange.bind(this);

    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  onHandleChange(event) {
    const { type, name, value, checked } = event.target;

    this.setState({
      [name]: (type === 'checkbox') ? checked : value
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={ this.state.filterText }
          inStockOnly={ this.state.inStockOnly }
          onHandleChange={ this.onHandleChange }
        />
        <ProductTable 
          products={ products }
          filterText={ this.state.filterText }
          inStockOnly={ this.state.inStockOnly }
        />
      </div>
    );
  }
}

export default FilterableProductTable;