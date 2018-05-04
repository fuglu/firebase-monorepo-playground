import {
  AppBar as MaterialAppBar,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from "material-ui";
import * as React from "react";
import { connect } from "react-redux";
import { login, logout } from "./auth";
import { IUser } from "./types/user";

interface IProps extends WithStyles<"flex"> {
  user: IUser;
}

export class AppBarImpl extends React.Component<IProps> {
  public state = {
    anchorEl: undefined
  };

  public render(): JSX.Element {
    const { isAuthenticated, photoURL } = this.props.user;
    const { anchorEl } = this.state;

    return (
      <MaterialAppBar position="static">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={this.props.classes.flex}
          >
            Firebase Playground
          </Typography>
          {isAuthenticated ? (
            <>
              <IconButton
                aria-owns={anchorEl ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Avatar src={photoURL || undefined} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  horizontal: "right",
                  vertical: "top"
                }}
                transformOrigin={{
                  horizontal: "right",
                  vertical: "top"
                }}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" onClick={login}>
              Login
            </Button>
          )}
        </Toolbar>
      </MaterialAppBar>
    );
  }
  private handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  private handleClose = () => {
    this.setState({ anchorEl: null });
  };
}

const styles = {
  flex: {
    flex: 1
  }
};

const mapStateToProps = ({ user }: { user: IUser }) => ({ user });

export const AppBar = withStyles(styles)(connect(mapStateToProps)(AppBarImpl));
