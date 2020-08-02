import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// FUNCTION Based Component ***
// const App = () => {
//    window.navigator.geolocation.getCurrentPosition(
//       (position) => console.log(position),
//       (err) => console.log(err)
//    );

//    return (
//       <div>
//          <h4>Latitude: </h4>
//       </div>
//    );
// };

// CLASS Based Component ***
class App extends React.Component {
   // constructor(props) {
   // super(props);

   // This is the only time we do direct assignment to this.state
   // this.state = { lat: null, errorMessage: "" };

   // window.navigator.geolocation.getCurrentPosition(
   //    (position) => {
   //  we called setState!!!
   //       this.setState({ lat: position.coords.latitude });

   // we did not!!!
   // this.state.lat = position.coords.latitude;
   //    },
   //    (err) => {
   //       this.setState({ errorMessage: err.message });
   //    }
   // );
   // }

   state = { lat: null, errorMessage: "" };

   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         (position) => {
            //  we called setState!!!
            this.setState({ lat: position.coords.latitude });

            // we did not!!!
            // this.state.lat = position.coords.latitude;
         },
         (err) => {
            this.setState({ errorMessage: err.message });
         }
      );
   }

   // React says we have to define render!!
   render() {
      if (this.state.errorMessage && !this.state.lat) {
         return <div>Error: {this.state.errorMessage}</div>;
      } else if (this.state.lat && !this.state.errorMessage) {
         return <SeasonDisplay lat={this.state.lat} />;
      } else {
         return <Spinner />;
      }
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));
