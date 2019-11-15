import React from 'react';
import data from './Data';
import SelectCurrency from './SelectCurrency';
import { Input, Card, FormControl, InputLabel, Typography } from '@material-ui/core';

class App extends React.Component {

  constructor(props){
    super(props);

    // state of currencies in conversion
    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate
    }

    this.onSelectCurrency = this.onSelectCurrency.bind(this);

  }

  onSelectCurrency(code){
    //selecting currency
    const {currencies, currencyAval} = this.state;
    const currency = currencies.filter(currency => currency.code === code);
    this.setState({
      currencyB: currency[0], // this is an array with one item
      currencyBval: currencyAval * currency[0].sellRate
    })
  }

  onChangeHandler(e, currency){

    const { /*currencyA,*/ currencyB} = this.state;

    if(currency === 'A'){
      
      const newValueA = e.target.value;
      this.setState({
        currencyAval: newValueA,
        currencyBval: newValueA * currencyB.sellRate
      })

    } else if(currency === 'B'){
      
      const newValueB = e.target.value;
      this.setState({
        currencyAval: newValueB / currencyB.sellRate,
        currencyBval: newValueB
      })

    }

  }

  render(){
    const {currencies, currencyA, currencyB, currencyAval, currencyBval} = this.state;
    return (
        <Card className="convertorCard">
      <div >
       
        <header>
        <Typography variant="h4" color="textPrimary" component="p">
          Currency Convertor
        </Typography>
        </header>
        <div>
          <div >
            <div>
              <p>
                {
                  //Selecting currency
                }
                <FormControl variant="outlined"  >
                <InputLabel >
          Select Currency
        </InputLabel>
                <SelectCurrency currencies={currencies} onSelectCurrency={this.onSelectCurrency} />
                </FormControl>
              </p>
            </div>
          </div>
          
          <div>
            <div >
              <h3 className={`currency-flag ${currencyA.code}`}>{currencyA.name}</h3>
              {
                  //Currency input A
              }
              <div>
                <span>{currencyA.sign}</span>
                <Input type="number" value={currencyAval} aria-describedby="basic-addon2" step="1" pattern="\d\.\d{2}" onChange={(e) => {
                  this.onChangeHandler(e, 'A');
                }} />
                <span  id="basic-addon2">{currencyA.code}</span>
              </div>

            </div>
            <div >
              <h3 className={`currency-flag ${currencyB.code}`}>{currencyB.name}</h3>
              {
                  //Currency input B
              }
              <div >
                <span >{currencyB.sign}</span>
                <Input type="number" value={currencyBval} aria-describedby="basic-addon3" step="1" pattern="\d\.\d{2}"  onChange={(e) => {
                  this.onChangeHandler(e, 'B');
                }}/>
                <span  id="basic-addon3">{currencyB.code}</span>
              </div>

            </div>
          </div>
          <div >
            <div >
              {
                  //Update to currently selected currency
              }
              <p>
                Exchange Rate {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code}`} = {`${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}
              </p>
            </div>
          </div>
        </div>
        
      </div>
      </Card>
    )
  }
}

export default App;