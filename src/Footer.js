import { withThemeCreator } from "@material-ui/styles";
import React from "react";

function Footer() {
  const styles = {
    backgroundColor: "#131921",
    padding: "5px",
    color: "white",
    textAlign: "center",
   
  };

  return <footer style={styles}> Made with ❤️ by Andrea Briceño </footer>;
}

export default Footer;
