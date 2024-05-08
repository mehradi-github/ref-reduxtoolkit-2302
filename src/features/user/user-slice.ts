import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import data from "../../api/data.json";
type UsersState = {
  entities: User[];
};
const initialState: UsersState = {
  entities: data.users,
};
type DraftUser = RequireOnly<User, "realName" | "alterEgo">;
const CreateUser = (draftUser: DraftUser) => {
  return { id: nanoid(), tasks: [], ...draftUser };
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const user = CreateUser(action.payload);
      state.entities.unshift(user);
    },
  },
});
