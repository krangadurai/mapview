import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    Users: [
      {
        name: "admin",
        picture: "assets/images/users/avatar-1.jpg",
        email: "admin@gmail.com",
        password: "admin@123",
      },
      {
        name: "admin1",
        picture: "assets/images/users/avatar-1.jpg",
        email: "admin1@gmail.com",
        password: "admin1@123",
      },
    ],
    LoginUser:{

    },
    LoginDetails: {
      login: false,
      timestamp: "",
    },
    appdata: {
      listLocation: [
        {
          latitude: "10.365646",
          longitude: "77.9693256",
          Location: "Dindigul",
        },
        {
          latitude: "10.9094334",
          longitude: "78.3665347",
          Location: "Tamil Nadu",
        },
      ],
    },
  },
  reducers: {
    setLoginData: (state, action) => {
      state.LoginDetails.login = true;
      state.LoginDetails.timestamp = new Date().toISOString();
    },
    setLogout: (state, action) => {
      state.LoginDetails.login = false;
      state.LoginDetails.timestamp = new Date().toISOString();
    },
    setUsersData: (state, action) => {
      state.Users.push(action.payload);
    },
    setLoginUsersData: (state, action) => {
        state.LoginUser = action.payload;
      },
    setLocationData: (state, action) => {
      state.appdata.listLocation.push(action.payload);
    },
  },
});
export const { setLoginData, setLocationData, setUsersData, setLogout,setLoginUsersData } =
  appSlice.actions;
export default appSlice.reducer;
