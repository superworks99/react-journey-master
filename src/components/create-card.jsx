import React from 'react'
import { AppContext } from './context'

export default class CreateCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionValue: '',
      answerValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(callback, callbackTwo) {
    event.preventDefault();
    const flashcardObj = {
      question: this.state.questionValue,
      answer: this.state.answerValue
    }
    callback(flashcardObj)
    this.handleReset(callbackTwo)
  }

  handleReset(callback) {
    event.preventDefault()
    this.setState({
      questionValue: '',
      answerValue: ''
    })
    callback('view-cards')
  }

  handleQuestionChange() {
    this.setState({ questionValue: event.target.value })
  }

  handleAnswerChange() {
    this.setState({ answerValue: event.target.value })
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => (
        <div className="container">
            <h1 className="text-center">Create New Card</h1>
            <form onSubmit={() => this.handleSubmit(value.addCard, value.setView)}>
              <div className="form-group">
                <label htmlFor="question">Question</label>
                <textarea className="form-control" id="question" rows="3" value={this.state.questionValue} onChange={this.handleQuestionChange}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="answer">Answer</label>
                <textarea className="form-control" id="answer" rows="3" value={this.state.answerValue} onChange={this.handleAnswerChange}></textarea>
              </div>
              <div className="justify-content-end">
                <button type="reset" className="btn btn-outline-danger" onClick={() => this.handleReset(value.setView)}>Cancel</button>
                <button type="submit" className="btn btn-outline-primary ml-2">Save Card</button>
              </div>
            </form>
        </div>
        )}
      </AppContext.Consumer>
    )
  }
}
