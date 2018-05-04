import { initializeApp } from "firebase";

import { CssBaseline } from "material-ui";
import * as React from "react";
import { Provider } from "react-redux";
import { AppBar } from "./AppBar";
import { initAuth } from "./auth";
import { store } from "./redux/store";

import "typeface-roboto";
import "./App.css";
import { getVotes, vote } from "./vote";

const config = {
  apiKey: "AIzaSyCMhMuwptpOPIeyHVG7CR-q-gfqzJJ3Lxs",
  authDomain: "fir-playground-e513c.firebaseapp.com",
  databaseURL: "https://fir-playground-e513c.firebaseio.com",
  messagingSenderId: "132298291013",
  projectId: "fir-playground-e513c",
  storageBucket: "fir-playground-e513c.appspot.com"
};
export const firebaseApp = initializeApp(config);

initAuth();


interface IState {
  votes: any[];
}

class App extends React.Component<{}, IState> {

  public state = {
    votes: []
  }

  public componentDidMount() {
    getVotes().then(res => {
      const votes: any[] = [];
      res.forEach((doc) => votes.push(doc.data()))
      this.setState({
        votes
      });
    })
  }
  public render() {
    return (
      <Provider store={store}>
        <>
          <CssBaseline />
          <AppBar />
          <div>Home sweet home</div>
          <button onClick={vote}>Vote</button>
          <div>
            {
              this.state.votes.map(dies => JSON.stringify(dies))
            }
          </div>
        </>
      </Provider>
    );
  }
}

export default App;
