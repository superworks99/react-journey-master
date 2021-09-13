import React from 'react'
import { AppContext } from './context'

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { side: 'front', index: 0 }
    this.changeSide = this.changeSide.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
  }

  componentDidMount() {
    this.props.setActiveCard(0)
  }

  nextCard() {
    if (this.context.activeCard === this.context.cards[this.context.cards.length - 1]) {
      this.setState(state => ({
        side: 'front',
        index: 0
      }), () => this.props.setActiveCard(this.state.index))
    } else {
      this.setState(state => ({
        side: 'front',
        index: state.index + 1
      }), () => this.props.setActiveCard(this.state.index))
    }
  }

  previousCard() {
    if (this.state.index === 0) {
      this.setState(state => ({
        side: 'front',
        index: this.context.cards.length - 1
      }), () => this.props.setActiveCard(this.state.index))
    } else {
      this.setState(state => ({
        side: 'front',
        index: state.index - 1
      }), () => this.props.setActiveCard(this.state.index))
    }
  }

  changeSide() {
    if (this.state.side === 'front') {
      this.setState({
        side: 'back'
      })
    } else {
      this.setState({
        side: 'front'
      })
    }
  }

  render() {
    const frontVisibility = this.state.side === 'front' ? 'd-flex' : 'd-none'
    const backVisibility = this.state.side === 'back' ? 'd-flex' : 'd-none'
    return (
        <div className="container">
          <h1 className="text-center">Review Cards</h1>
          <div className={`front bg-dark justify-content-between align-items-center jumbotron ${frontVisibility}`}>
            <i className="fas fa-chevron-left fa-3x" onClick={this.previousCard}></i>
            <h1 className="text-white" onClick={this.changeSide}>{this.context.activeCard.question}</h1>
            <i className="fas fa-chevron-right fa-3x" onClick={this.nextCard}></i>
          </div>
          <div className={`back bg-secondary justify-content-between align-items-center jumbotron ${backVisibility}`}>
            <i className="fas fa-chevron-left fa-3x" onClick={this.previousCard}></i>
            <h1 className="text-white" onClick={this.changeSide}>{this.context.activeCard.answer}</h1>
            <i className="fas fa-chevron-right fa-3x" onClick={this.nextCard}></i>
          </div>
        </div>
    )
  }
}

ReviewCards.contextType = AppContext
