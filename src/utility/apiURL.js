const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "https://glacial-citadel-66150.herokuapp.com";
  };

  export default apiURL;