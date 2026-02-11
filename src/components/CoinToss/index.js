import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    head: 0,
    tails: 0,
    currentImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossCoinClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        head: prevState.head + 1,
        currentImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        currentImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {head, tails, currentImage} = this.state
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="image" src={currentImage} alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onTossCoinClick}
          >
            Toss Coin
          </button>
          <div className="number-container">
            <p className="total">Total: {head + tails}</p>
            <p className="heads">Heads: {head}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
