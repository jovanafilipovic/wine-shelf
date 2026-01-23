import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  addressNumber: string;
  postNumber: string;
  password: string;
}

interface UserState {
  users: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        alert("Invalid email or password");
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
