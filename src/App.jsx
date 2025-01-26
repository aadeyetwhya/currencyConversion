import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import getData from  './props/data'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("NPR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const onAmountChange=(amd)=>{
    setAmount(amd);
  }

const convert=()=>{
  setConvertedAmount(amount*currencies[to]);
}

const swap=()=>{
  let temp=to;
  setTo(from)
  setFrom(temp)
}

const currencies=getData(from);
const currencyOptions=Object.keys(currencies);


  return (
    <>
    <div className="mainComponent">
    <h1 style={{color:'white',paddingBottom:'8px'}}>Currency Converter</h1>
      <Input title="from"  currencyType="npr" onAmountChange={onAmountChange} amount={amount} onCurrencyChange={(c)=>setFrom(c)} currencyOptions={currencyOptions}/>

      <div className="swap">
        <button className="swapBtn" onClick={swap}>
          Swap
        </button>
      </div>

      <Input title="To" currencyType={to}  amount={convertedAmount} onCurrencyChange={(c)=>setTo(c)}  disableInput  currencyOptions={currencyOptions}/>

      <button className="convertbtn" onClick={convert}>
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </div>
    </>
  );
}

export default App;
