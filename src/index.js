import React from "react";
import ReactDOM from "react-dom";

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
   constructor(props) {
      super(props);

      // This is the only time we do direct assignment
      this.state = { lat: null };

      window.navigator.geolocation.getCurrentPosition(
         (position) => {
            //  we called setState!!!
            this.setState({ lat: position.coords.latitude });

            // we did not!!!
            // this.state.lat = position.coords.latitude;
         },
         (err) => console.log(err)
      );
   }

   // React says we have to define render!!
   render() {
      return <div>Latitude: {this.state.lat}</div>;
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));
