import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// CLASS Based Component ***
class App extends React.Component {
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

   renderContent() {
      if (this.state.errorMessage && !this.state.lat) {
         return <div>Error: {this.state.errorMessage}</div>;
      } else if (this.state.lat && !this.state.errorMessage) {
         return <SeasonDisplay lat={this.state.lat} />;
      } else {
         return <Spinner message="Please accept location request" />;
      }
   }

   // React says we have to define render!!
   render() {
      return <div>{this.renderContent()}</div>;
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));
