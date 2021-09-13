import React from 'react'
import { AppContext } from './context'

export default class ViewCards extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => (
          <div className="container">
            <h1 className="text-center mb-4">My Cards</h1>
            <div className="row row-cols-md-3">
              {
                value.map((card, i) => {
                  return (
                    <div key={i} className="card h-100">
                      <div className="card-body bg-dark">
                        <h5 className="card-title text-light">Question</h5>
                        <p className="text-white">{card.question}</p>
                      </div>
                      <div className="card-body bg-secondary">
                        <h5 className="card-title text-light">Answer</h5>
                        <p className="text-white">{card.answer}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}
