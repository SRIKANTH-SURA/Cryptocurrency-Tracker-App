import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div className="cryptocurrency-list-container">
        <h1 className="app-title">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <ul className="cryptocurrency-list">
          <div className="currency-item-heading">
            <p className="coin-type">Coin Type</p>
            <div className="currency-details">
              <p className="currency-type">USD</p>
              <p className="currency-type">EURO</p>
            </div>
          </div>
          {isLoading ? (
            <div className="loser-spinner" data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            currencyData.map(eachCurrency => (
              <CryptocurrencyItem
                key={eachCurrency.id}
                currencyDetails={eachCurrency}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
