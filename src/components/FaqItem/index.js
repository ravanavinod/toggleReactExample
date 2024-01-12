import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {status: false}
    this.item = props.item
  }

  toggleStatus = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    const {questionText, answerText} = this.item
    console.log(this.props)
    console.log(questionText)
    const divContent = (
      <li>
        <div className="faq-item">
          <div className="faq-question">
            {questionText}
            {status && <div className="faq-answer">{answerText}</div>}
          </div>
          <div>
            {!status && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="Plus"
                onClick={this.toggleStatus}
              />
            )}
            {status && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                onClick={this.toggleStatus}
              />
            )}
          </div>
        </div>
      </li>
    )
    return divContent
  }
}

export default FaqItem
