import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.faqsList = props
  }

  render() {
    const {faqsList} = this.faqsList

    const divContent = (
      <div className="main-class">
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
    return divContent
  }
}

export default Faqs
