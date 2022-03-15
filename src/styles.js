import body_bg from "./public/img/body_bg.png";
import container_bg from "./public/img/container_bg.png";

export default {
  appContentContainer: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `url(${body_bg})`,
    backgroundColor: "black",
  },
  appRoutesContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1280,
    width: "100%",
    backgroundImage: `url(${container_bg})`,
    backgroundColor: "white",
  },
};
