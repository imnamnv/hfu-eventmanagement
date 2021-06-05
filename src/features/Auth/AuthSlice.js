import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "../../api/userAPI";
import StorageKey from "../../constants/storage-key";

export const login = createAsyncThunk("user/login", async (payload) => {
  //create a action creator that help create aciton Object
  //THen, when dispath. this will call pending. then if success will run async function
  //async function will return promise. if success will dispatch fulfilled reducer. if not, run reject reducer

  //call api
  const data = await userAPI.login(payload);
  localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
  // localStorage.setItem(StorageKey.TOKEN, data);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    logout(state) {},
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;
export const { logout } = actions;
export default reducer;
