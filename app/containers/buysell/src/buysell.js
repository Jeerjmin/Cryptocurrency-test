import React, { Component } from 'react';
import { bindActionCreators }       from 'redux';
import { connect } from 'react-redux';

import { History }      from '../../history';
import { Balance }      from '../../balance';
import './buysell.scss';


import { upData, fetchPosts, Buy, Sell} from '../../../actions';


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

const styles2 = {
  customWidth: {
    width: 100,
  },
};


const style = {
  margin: 12,
  width: 100
};




const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Hint Text"
    />

  <TextField
    hintText="Hint Text"
  />
</div>

);






  export class BuysellCont extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
        value: 0,
        cryptoName: '',
        priceUSD: '',
        usdName: '',
        input_first: '',
        input_second: '',
        name1: '', name2: '', name3: '', name4: '', name5: '', name6: '',
        name7: '', name8: '', name9: '', name10: '',
        tableData : [],
        short1: '',
        short2: '',
        button1name: 'SELL',
        button2name: 'BUY'

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
        button2name: 'BUY ' + this.props.data[value-1].symbol


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
      var arrayvar = this.state.tableData.slice()
      arrayvar.push({type:"BUY", pair:this.state.short2+"/USD", spent:this.state.input_second+" USD", received:this.state.input_first+' '+ this.state.short2})
      this.setState({ tableData: arrayvar })
    }
    }

    clickSell() {

      this.props.Sell(
        this.props.data[this.state.value-1].name,
        this.state.input_first,
        this.state.input_second
      )

      if (this.state.input_first<=this.props.total[this.state.short1]) {
        var arrayvar = this.state.tableData.slice()
        arrayvar.push({type:"SELL", pair:"USD/"+this.state.short2, spent:this.state.input_first+' '+ this.state.short2, received:this.state.input_second+" USD"})
        this.setState({ tableData: arrayvar })


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

      console.log(this.props.total)



      return (

<main>
  <div className="left__cont">
        <Balance/>

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
                <input  onChange={this.ChangeFirst} type="text" size="20" value={this.state.input_second} />
                <SVGInline svg={ArrowsIcon} />
              <input   onChange={this.ChangeSecond} type="text" size="20"   value={this.state.input_first} />
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
      </div>
      <div className="History">

                    <History type={this.state.tableData}/>
      </div>
                  </main>

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
          Sell


      },
      dispatch
  );

  export const Buysell = connect(mapStateToProps,matchDispatchToProps)(BuysellCont);
