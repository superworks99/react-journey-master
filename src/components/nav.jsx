import React from 'react'

export default class Nav extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills justify-content-end mb-4 mt-4 mr-4">
        <li className="nav-item">
          <a className="nav-link" onClick={() => this.props.setView("view-cards")} href="#">View Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => this.props.setView("review-cards")} href="#">Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => this.props.setView("create-card")} href="#">Create Card</a>
        </li>
      </ul>
    )
  }
}
