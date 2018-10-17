export const loadAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const saveAuthToken = authToken => {
  try {
    console.log("saving auth");
    localStorage.setItem("authToken", authToken);
  } catch (error) {
    console.log("theres a snake in my boot!");
  }
};
