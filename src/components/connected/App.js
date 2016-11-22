import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connected } from 'react-redux';
import * as actions from '../../actions';

export default class App extends Component {
  render(){
    return (
      // <div className="App">
      //
      // </div>
      <div></div>
    );
  };
}

// const mapStateToProps = (state) => {
//   console.log('state.currentPage',state.currentPage);
//   console.log('state.pages',state.pages);
//   return {
//     currentPage: state.currentPage,
//     pages: state.pages
//   };
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({allActions}, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
