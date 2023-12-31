// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  changeCount = () => {
    const num = Math.Floor(Math.random() * 2)

    if (num === 0) {
      this.setState(prevCount => ({
        total: prevCount.total + 1,
        heads: prevCount.heads + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevCount => ({
        total: prevCount.total + 1,
        tails: prevCount.tails + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {imageUrl, total, heads, tails} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} className="coin" alt="toss result" />
          <div className="button-align">
            <button type="button" onClick={this.changeCount}>
              Toss Coin
            </button>
          </div>
          <div className="count-container">
            <p className="result">{`Total: ${total}`}</p>
            <p className="result">{`Heads: ${heads}`}</p>
            <p className="result">{`Tails: ${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
