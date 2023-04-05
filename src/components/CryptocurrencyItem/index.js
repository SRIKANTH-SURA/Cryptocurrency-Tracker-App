import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {id, currencyName, currencyLogo, euroValue, usdValue} = currencyDetails
  return (
    <li className="cryptocurrency-item">
      <div className="currency-name-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="currency-name">{usdValue}</p>
        <p className="currency-name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
