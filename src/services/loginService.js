import { loading, login } from "../slices/loginSlice";

export const authenticate =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(loading(true));

    //const result = await fetch();
    setTimeout(() => {
      dispatch(
        login({
          user: "user",
        })
      );
      //
    }, 2000);
  };
