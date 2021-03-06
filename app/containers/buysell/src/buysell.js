import React, { Component } from 'react';
import { bindActionCreators }       from 'redux';
import { connect } from 'react-redux';

import { History }      from '../../history';
import { Balance }      from '../../balance';
import './buysell.scss';


import { upData, fetchPosts, Buy, Sell, BuyForTable, SellForTable} from '../../../actions';


import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import SVGInline from "react-svg-inline";
import ArrowsIcon from '../../../assets/resize-length.svg';


const styles = {
  customWidth: {
    width: 250,
  },
};


  export class BuysellCont extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0,
        cryptoName: '',
        priceUSD: '',
        usdName: '',
        input_first: '',
        input_second: '',
        name1: '', name2: '', name3: '', name4: '', name5: '', name6: '',
        name7: '', name8: '', name9: '', name10: '',
        short1: '',
        short2: '',
        button1name: 'SELL',
        button2name: 'BUY',
        inputStatus: true

      };

      this.handleChange = this.handleChange.bind(this)
      this.ChangeFirst = this.ChangeFirst.bind(this)
      this.ChangeSecond = this.ChangeSecond.bind(this)
      this.clickBuy = this.clickBuy.bind(this)
      this.clickSell = this.clickSell.bind(this)
      this.getName = this.getName.bind(this)
    }

    handleChange(event, index, value) {
      this.setState({value});
      this.props.upData(value)

      if (value <=0 ) {
        this.setState({
          inputStatus: true,
          input_first: '',
          input_second: ''
        })
      }

            this.setState({

              cryptoName: 1 + ' ' + this.props.data[value-1].symbol + " "+ '=',
              usdName: '1 USD = ' + (1/this.props.data[value-1].price_usd).toFixed(5)+' '+this.props.data[value-1].symbol,
              priceUSD: this.props.data[value-1].price_usd,
              priceWUSD: this.props.data[value-1].price_usd +' USD',
              input_first: '',
              input_second: '',
              short2: this.props.data[value-1].symbol,
              short1: this.props.data[value-1].name,
              button1name: 'SELL ' + this.props.data[value-1].symbol,
              button2name: 'BUY ' + this.props.data[value-1].symbol,
              inputStatus: false
            })
      }

    ChangeFirst(event, index, value) {
      this.setState({
        input_second: event.target.value,
        input_first: Number.parseFloat((Number(event.target.value)/Number(this.state.priceUSD)).toFixed(5)  )

      })
    }

    ChangeSecond(event,index,value) {
      this.setState({
        input_first: event.target.value,
        input_second: Number.parseFloat((Number(event.target.value)*Number(this.state.priceUSD)).toFixed(5) )

    })
}
    clickBuy() {
      this.props.Buy(
        this.props.data[this.state.value-1].name,
        this.state.input_first,
        this.state.input_second
      )

      if (this.state.input_second<=this.props.total.USD) {
        this.props.BuyForTable(
          this.state.input_first,
          this.state.input_second,
          this.state.short2
        )
    }
  }

    clickSell() {

      this.props.Sell(
        this.props.data[this.state.value-1].name,
        this.state.input_first,
        this.state.input_second,
        this.state.short2
      )

      if (this.state.input_first<=this.props.total[this.state.short1]) {
        this.props.SellForTable(
          this.state.input_first,
          this.state.input_second,
          this.state.short2
        )

    }
  }


    getName() {

      this.setState({
        name1: this.props.data[0].name,
        name2: this.props.data[1].name,
        name3: this.props.data[2].name,
        name4: this.props.data[3].name,
        name5: this.props.data[4].name,
        name6: this.props.data[5].name,
        name7: this.props.data[6].name,
        name8: this.props.data[7].name,
        name9: this.props.data[8].name,
        name10: this.props.data[9].name

      })
    }

    render() {

      return (
        <div className="buysell__cont" >
          <div className="buysell__head">
          <h1> Купить / Продать</h1>
            <div>

              <DropDownMenu
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.customWidth}
                autoWidth={false}
                onClick={this.getName}

              >
                <MenuItem value={0} primaryText="Выберите валюту" />
                <MenuItem value={1} primaryText={this.state.name1} />
                <MenuItem value={2} primaryText={this.state.name2} />
                <MenuItem value={3} primaryText={this.state.name3} />
                <MenuItem value={4} primaryText={this.state.name4} />
                <MenuItem value={5} primaryText={this.state.name5} />
                <MenuItem value={6} primaryText={this.state.name6} />
                <MenuItem value={7} primaryText={this.state.name7} />
                <MenuItem value={8} primaryText={this.state.name8} />
                <MenuItem value={9} primaryText={this.state.name9} />
                <MenuItem value={10} primaryText={this.state.name10} />
              </DropDownMenu>
            </div>
            </div>


          <div className ="inputs">

            <div className ="first__input">
                <p><b>{this.state.usdName}</b></p>
                <p><b>{this.state.cryptoName} {this.state.priceWUSD} </b></p>
          </div>

              <div className="second__input">
                <input  onChange={this.ChangeFirst} type="text" disabled={this.state.inputStatus} size="20"  value={this.state.input_second} />
                <SVGInline svg={ArrowsIcon} />
              <input   onChange={this.ChangeSecond} type="text" disabled={this.state.inputStatus} size="20"   value={this.state.input_first} />
            </div>
            </div>

            <div className="buttons">
                    <button style={{
                      margin: 12,
                      width: 150,
                      height: 30,
                      background: 'red'
                    }} onClick={this.clickSell}>{this.state.button1name}</button>
                  <button style={{
                      margin: 12,
                      width: 150,
                      height: 30,
                      background: 'green'
                    }} onClick={this.clickBuy}>{this.state.button2name}</button>

            </div>
      </div>

      )
    }
  }


  const mapStateToProps = state => (
      {
        data: Object.values(state.data)[0],
        total: state.total
      }
  );

  const matchDispatchToProps = dispatch => bindActionCreators(
      {
          upData,
          fetchPosts,
          Buy,
          Sell,
          BuyForTable,
          SellForTable
      },
      dispatch
  );

  export const Buysell = connect(mapStateToProps,matchDispatchToProps)(BuysellCont);
