import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';

import { bindActionCreators }       from 'redux';

import { FindStyle } from '../../../actions';


import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';



const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

var styleType = {
  color: 'red'
}





export class HistoryCont extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        multiSelectable: false,
        enableSelectAll: false,
        height: '100vh',
      };


this.handleToggle = this.handleToggle.bind(this)
this.handleChange = this.handleChange.bind(this)

  };



  handleToggle(event, toggled)  {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange(event)  {
    this.setState({height: event.target.value});
  };



  render() {






    var TableD = this.props.type;

    return (
<div className="History">
      <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
        <TableHeader


          >

            <TableRow>
              <TableHeaderColumn tooltip="The ID">Тип</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Пара</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Потрачено</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Получено</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {TableD.map(function(row, index) {


                if(row.type=='BUY') {
                  return (
                    <TableRow key={index}>
                      <TableRowColumn style={{color: 'green'}}>{row.type}</TableRowColumn>
                      <TableRowColumn>{row.pair}</TableRowColumn>
                      <TableRowColumn>{row.spent}</TableRowColumn>
                      <TableRowColumn>{row.received}</TableRowColumn>
                    </TableRow>
                  )
                }

                else {
                  return (
                    <TableRow key={index}>
                      <TableRowColumn style={{color: 'red'}}>{row.type}</TableRowColumn>
                      <TableRowColumn>{row.pair}</TableRowColumn>
                      <TableRowColumn>{row.spent}</TableRowColumn>
                      <TableRowColumn>{row.received}</TableRowColumn>
                    </TableRow>
                  )

                }
            })}
          </TableBody>

        </Table>


</div>
    );
  }
}



const mapStateToProps = state => (
    {
        products: state.products

    }
);

const matchDispatchToProps = dispatch => bindActionCreators(
    {
        FindStyle
    },
    dispatch
);


export const History = connect(mapStateToProps, matchDispatchToProps)(HistoryCont);
