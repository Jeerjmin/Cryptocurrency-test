import React            from 'react';
import { Buysell }      from '../../buysell';
import { History }      from '../../history';
import { Balance }      from '../../balance';



export class App extends React.Component {


    render() {
        return (
          <main>
            <div className="left__cont">
                  <Balance/>
                  <Buysell/>
            </div>
                      <div className="History">

                                    <History/>
                      </div>
          </main>
        );
    }
}
