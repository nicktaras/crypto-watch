import React, { Component } from 'react';
import Header from './Header/Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-body">
          <div className="App-intro">
            <p>This is an experimental application created to provide the status and statistics of your crypto currencies.</p>
          </div>
          <button>Get Started</button>
          <div className="App-coins">
            <div className="App-coin">
              <i className="cf cf-btc"></i>
            </div>
            <div className="App-coin">
              <i className="cf cf-eth"></i>
            </div>
            <div className="App-coin">
              <i className="cf cf-ltc"></i>
            </div>
            {/*<p>Current Bitcoin (BTC) price: 2613.3588 USD</p>*/}
            {/*<p>You have currently invested: 129.145957 USD</p>*/}
            {/*<p>Bitcoin (BTC) current Percentage of -74.62611761425723 %</p>*/}
            {/*<p>Bitcoin (BTC) current -96.37661376487807 USD</p>*/}
            {/*<p>Bitcoin (BTC) current -74.62611790420873 GBP</p>*/}
            {/*<p>Third return: -24.87537263473624 GBP</p>*/}
            {/*<p>Third return: -32.12553792162603 USD</p>*/}
          </div>
          <div>
            <small><b>Please note:</b> The information provided may not be 100% accurate. So please check the currency rates before making a purchase or sale.
              <br/>This website takes no responsibility from your decisions, where trading cryptocurrencies should be done with the risk of losing all you have invested.</small>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// class ProductCategoryRow extends React.Component {
//   render() {
//     return (<tr><th colSpan="2">{this.props.category}</th></tr>);
//   }
// }
//
// class ProductRow extends React.Component {
//   render() {
//     var name = this.props.product.stocked ?
//       this.props.product.name :
//       <span style={{color: 'red'}}>
//         {this.props.product.name}
//       </span>;
//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{this.props.product.price}</td>
//       </tr>
//     );
//   }
// }
//
// class ProductTable extends React.Component {
//   render() {
//     var rows = [];
//     var lastCategory = null;
//     console.log(this.props.inStockOnly)
//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
//       }
//       rows.push(<ProductRow product={product} key={product.name} />);
//       lastCategory = product.category;
//     });
//     return (
//       <table>
//         <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }
//
// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
//     this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
//   }
//
//   handleFilterTextInputChange(e) {
//     this.props.onFilterTextInput(e.target.value);
//   }
//
//   handleInStockInputChange(e) {
//     this.props.onInStockInput(e.target.checked);
//   }
//
//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleFilterTextInputChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockInputChange}
//           />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }
//
// class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: '',
//       inStockOnly: false
//     };
//
//     this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
//     this.handleInStockInput = this.handleInStockInput.bind(this);
//   }
//
//   handleFilterTextInput(filterText) {
//     this.setState({
//       filterText: filterText
//     });
//   }
//
//   handleInStockInput(inStockOnly) {
//     this.setState({
//       inStockOnly: inStockOnly
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           onFilterTextInput={this.handleFilterTextInput}
//           onInStockInput={this.handleInStockInput}
//         />
//         <ProductTable
//           products={this.props.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }
//
//
// var PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
//
// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('container')
// );
