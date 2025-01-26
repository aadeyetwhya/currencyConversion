import React from 'react'

function Input({
    title,
    currencyType,
    disableInput = false,
    onAmountChange,
    onCurrencyChange,
    amount,
    currencyOptions
}) {
    return (

        <div className="textComponent">
            <div className="from">
                <span className="fromTitle">{title[0].toUpperCase() + title.slice(1)} </span>
                <input type="text" className="inputField" onChange={(e) => onAmountChange && onAmountChange(e.target.value)} disabled={disableInput} value={amount} />
            </div>

            <div className="currency">
                <span className="currencyTitle">Currency Type </span>

                <select className="selectCurrency" value={currencyType} onChange={(e)=>onCurrencyChange(e.target.value)}>
                    {
                        currencyOptions.map((element,index)=>{
                        
                            return <option value={element} key={index}>{element}</option>
                        })
                    }
                   

                </select>

            </div>
        </div>
    )
}

export default Input
