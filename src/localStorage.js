export const loadAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem("authToken", authToken);
    console.log("saving auth", localStorage.authToken);
  } catch (error) {
    console.log("theres a snake in my boot!");
  }
};
