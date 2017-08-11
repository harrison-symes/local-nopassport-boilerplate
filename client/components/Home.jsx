import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'

// export class Home extends React.Component {
//
//   // componentWillMount () {
//   //   this.props.dispatch(getAllClothing())
//   // }
//
//   render() {
//     return (
//       <div className="container">
//
//        <h1>My Outbursts</h1>
//
//       <div className="row year-week">
//         <div className="nine columns offset-by-one">
//           <img className="sad-face-press" src="images/sad-face.png" alt=""/>
//         </div>
//         <div className="two columns">
//           Year 2017 Week 26
//         </div>
//       </div>
//
//       <div className="row week-container">
//         <div className="one column">
//           <img src="../images/arrow-backward.svg" alt=""/>
//         </div>
//         <div className="week ten columns">
//           <div className="three-days six columns">
//             <div className="weekday">
//               <h3 className="day-title">Monday</h3>
//               <div className="smiley-holder">
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//               </div>
//               <div className="smiley-holder">
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//               </div>
//             </div>
//             <div className="weekday">
//               <h3 className="day-title">Tuesday</h3>
//               <div className="smiley-holder">
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//               </div>
//               <div className="smiley-holder"></div>
//             </div>
//             <div className="weekday">
//               <h3 className="day-title">Wednesday</h3>
//               <div className="smiley-holder">
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//               </div>
//               <div className="smiley-holder"></div>
//             </div>
//           </div>
//
//           <div className="four-days six columns">
//             <div className="weekday">
//               <h3 className="day-title">Thursday</h3>
//               <div className="smiley-holder">
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//               </div>
//               <div className="smiley-holder"></div>
//             </div>
//             <div className="weekday">
//               <h3 className="day-title">Friday</h3>
//               <div className="smiley-holder">
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//               </div>
//               <div className="smiley-holder"></div>
//             </div>
//             <div className="weekday">
//               <h3 className="day-title">Saturday</h3>
//               <div className="smiley-holder">
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//               </div>
//               <div className="smiley-holder"></div>
//             </div>
//             <div className="weekday">
//               <h3 className="day-title">Sunday</h3>
//               <div className="smiley-holder">
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//                 <img className="sad-face" src="images/sad-face.png" alt=""/>
//               </div>
//               <div className="smiley-holder"></div>
//             </div>
//           </div>
//
//         </div>
//
//       </div>
//     </div>
//
//     )
//   }
// }
// export default connect()(Home)


const Home = (props) => {
    return (
      <div className="container">

       <h1>My Outbursts</h1>

      <div className="row year-week">
        <div className="nine columns offset-by-one">
          <img className="sad-face-press" src="images/sad-face.png" alt=""/>
        </div>
        <div className="two columns">
          Year 2017 Week 26
        </div>
      </div>

      <div className="row week-container">
        <div className="one column">
          <img src="../images/arrow-backward.svg" alt=""/>
        </div>
        <div className="week ten columns">
          <div className="three-days six columns">
            <div className="weekday">
              <h3 className="day-title">Monday</h3>
              <div className="smiley-holder">
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
              </div>
              <div className="smiley-holder">
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
              </div>
            </div>
            <div className="weekday">
              <h3 className="day-title">Tuesday</h3>
              <div className="smiley-holder">
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
              </div>
              <div className="smiley-holder"></div>
            </div>
            <div className="weekday">
              <h3 className="day-title">Wednesday</h3>
              <div className="smiley-holder">
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
              </div>
              <div className="smiley-holder"></div>
            </div>
          </div>

          <div className="four-days six columns">
            <div className="weekday">
              <h3 className="day-title">Thursday</h3>
              <div className="smiley-holder">
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
              </div>
              <div className="smiley-holder"></div>
            </div>
            <div className="weekday">
              <h3 className="day-title">Friday</h3>
              <div className="smiley-holder">
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
              </div>
              <div className="smiley-holder"></div>
            </div>
            <div className="weekday">
              <h3 className="day-title">Saturday</h3>
              <div className="smiley-holder">
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
              </div>
              <div className="smiley-holder"></div>
            </div>
            <div className="weekday">
              <h3 className="day-title">Sunday</h3>
              <div className="smiley-holder">
                <img className="sad-face" src="images/sad-face.png" alt=""/>
                <img className="sad-face" src="images/sad-face.png" alt=""/>
              </div>
              <div className="smiley-holder"></div>
            </div>
          </div>

        </div>

      </div>
    </div>

    )
}


const mapStateToProps = (state) => {
  return {user: state.auth.user}
}

export default connect(mapStateToProps)(Home)
