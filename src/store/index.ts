import { configureStore } from "@reduxjs/toolkit";
import printReducer from "./print.store";
import createToolReducer from "./createTool.store";

export const store = configureStore({
  reducer: {
    print: printReducer,
    createTool: createToolReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
