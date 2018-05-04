import { initializeApp } from "firebase";

import { CssBaseline } from "material-ui";
import * as React from "react";
import { connect } from "react-redux";
import { AppBar } from "./AppBar";
import { initAuth } from "./auth";

import "typeface-roboto";
import "./App.css";
import { IUser } from "./types/user";
import { createUserDoc, loadUser } from "./vote";

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

interface IProps {
  user: IUser;
}
class AppImpl extends React.Component<IProps, IState> {

  public state = {
    votes: []
  }


  public render() {
    return (

        <>
          <CssBaseline />
          <AppBar />
          <div>Home sweet home</div>
          <button onClick={createUserDoc(this.props.user)}>createUserDoc</button>
          <button onClick={loadUser(this.props.user)}>loadUser</button>
          <div>
            {
              this.state.votes.map(dies => JSON.stringify(dies))
            }
          </div>
        </>
    );
  }
}

const mapStateToProps = ({ user }: { user: IUser }) => ({ user });

export default connect(mapStateToProps)(AppImpl)
