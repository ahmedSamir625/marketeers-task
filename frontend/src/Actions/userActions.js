export const signInUser = (user) => {
    return {
      type: 'SIGN_IN_USER',
      payload: user
    };
  };
  
  export const signOutUser = () => {
    return {
      type: 'SIGN_OUT_USER',
    };
  };
  
    