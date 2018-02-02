import React, { Component } from 'react';

import { bindActionCreators }       from 'redux';
import { connect } from 'react-redux';

import { upData, fetchPosts } from '../../../actions';





export class Article extends React.Component {


  render() {

    return (
      <div>
        <p>{this.props.name}: {this.props.sum}</p>
      </div>
    )
  }
}
  export  class BalanceCont extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};



    };

    render() {





    const tifOptions = Object.keys(this.props.total).filter(key =>
      this.props.total[key]!='0'
    ).map(key =>
      <div value={key}><b>{key}</b>: {parseFloat(this.props.total[key].toFixed(5))}</div> 
  )



    return(

      <div className="balance__cont">
        <h3>Мои балансы</h3>
        <div className="balance__list">
        {tifOptions}
        </div>
      </div>
    )


    }
  }



  const mapStateToProps = state => (
      {
        total: (state.total)
      }
  );

  const matchDispatchToProps = dispatch => bindActionCreators(
      {


      },
      dispatch
  );

  export const Balance = connect(mapStateToProps,matchDispatchToProps)(BalanceCont);
