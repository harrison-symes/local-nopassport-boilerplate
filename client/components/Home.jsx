import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'

export class Home extends React.Component {

  // componentWillMount() {
  //   this.props.dispatch(getOutbursts())
  // }

  render() {
    return (
      <div>
        <div className="heading row">
          <h3>{`year ${year}`}</h3>
          <h3>{`week ${currentWeekNumber}`}</h3>
        </div>
        <div className="row">
          <div className="one column"> {"<<"} </div>
          <div className="ten columns">
              <div className="five columns">Monday</div>
              <div className="five columns">Tuesday</div>
              <div className="five columns">Wednesday</div>
              <div className="five columns">Thursday</div>
              <div className="five columns">Friday</div>
              <div className="five columns">Saturday</div>
              <div className="five columns">Sunday</div>
          </div>
        <div className="one column"> {">>"} </div>
        </div>

      </div>
    )
  }
}

let currentWeekNumber = moment().isoWeek();
let year = moment().year()

export default connect()(Home)
