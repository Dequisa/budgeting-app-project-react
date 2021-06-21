const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "insertURLAfterDeployed";
  };

  export default apiURL;