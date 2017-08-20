import React from 'react'
import { connect } from 'react-redux'

import {fetchSecretQuote } from '../actions/quote'

const Quote = (props) => {
  const {onSecretQuoteClick, quote } = props

  return (
    <div>
      <div>
        <button onClick={onSecretQuoteClick}>
          Get Private Quote
        </button>
      </div>

      <div>
        {quote &&
          <p>{quote}</p>
        }

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote.quote,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQuoteClick: () => dispatch(fetchQuote()),
    onSecretQuoteClick: () => dispatch(fetchSecretQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
