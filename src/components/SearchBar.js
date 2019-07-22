import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event);
  }

  render() {
    return (
      <form>
        <input type="text" name="filterText" placeholder="Search..." onChange={ this.handleChange }/>
        <p>
          <input type="checkbox" name="inStockOnly" onChange={ this.handleChange } />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;