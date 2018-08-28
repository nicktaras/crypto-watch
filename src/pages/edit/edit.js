import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './edit.css';
import { connect } from 'react-redux'; 
import { editCoin } from './../../app/coins/coinActions';
import { bindActionCreators } from 'redux';

// TODO 
// Get the coin from Props / Url etc.
// Add functions to:
// Delete
// Update with more investment / reduction of investment

class Edit extends Component {
  render () {
    return (
      <div>Testing 123</div>
    )
  }
}

export default Edit;

// class Edit extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       // coin: {
//       //   id: this.props.location.state.coinData.id,
//       //   invested: this.props.location.state.coinData.invested[0],
//       //   amountRecieved: this.props.location.state.coinData.amountRecieved[0]
//       // },
//     };
//     this.disabled = true;
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.disabled = this.validate();
//   }
//   componentDidMount() {
//     debugger;
//   }
//   validate = function(){
//     return !(this.state.coin.id !== undefined && this.state.coin.invested && this.state.coin.amountRecieved);
//   };
//   handleInputChange(evt){
//     debugger
//     const _coin = this.state.coin;
//     _coin[evt.currentTarget.dataset.key] = evt.currentTarget.value;
//     this.setState({_coin});
//     this.disabled = this.validate();
//   }
//   handleSubmit(event){
//     mapDispatchToProps(editCoin(this.state.coin));
//   }
//   render(props) {
//     return (
//       <div className="edit-cryptocurrency">

//         <div className="App-nav">
//           <Link className="edit-link" to="/currencies/Main">Back</Link>
//         </div>

//         <div className="edit">
//           <form>
//             <p className="title">
//               Edit {supportedCoins[this.state.coin.id].label}:
//               <i className="icon fa fa-trash" aria-hidden="true"></i>
//             </p>
//             <p>Amount invested (USD)</p>
//             <input
//               name="invested"
//               type="number"
//               onChange={this.handleInputChange}
//               data-key="invested"
//               value={this.state.coin.invested}
//             />
//             <p>Coins recieved</p>
//             <input
//               name="amountRecieved"
//               type="number"
//               onChange={this.handleInputChange}
//               data-key="amountRecieved"
//               value={this.state.coin.amountRecieved}
//             />
//           </form>
//           <button onClick={this.handleSubmit} className="App-button" disabled={this.disabled}>Update</button>
//         </div>
//       </div>
//     );
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     editCoin
//   }, dispatch);
// }

// export default connect(mapDispatchToProps)(Edit);
