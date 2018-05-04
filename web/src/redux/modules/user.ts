import { IUser } from "../../types/user";

enum UserActions {
  UPDATE = "UPDATE"
}

interface IUpdateUserAction {
  type: UserActions.UPDATE;
  user: {
    id: string;
    email: string;
    name: string;
    photoURL: string;
  };
}

export const updateUser = (user: IUser) => ({
  type: UserActions.UPDATE,
  user
});

export const resetUser = () => ({
  type: UserActions.UPDATE,
  user: initialUser
});

const initialUser: IUser = {
  email: null,
  id: null,
  isAuthenticated: false,
  name: null,
  photoURL: null
};

export const userReducer = (state = initialUser, action: IUpdateUserAction) => {
  switch (action.type) {
    case UserActions.UPDATE:
      return action.user;
    default:
      return state;
  }
};
