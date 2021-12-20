import { Hidden, useMediaQuery, useTheme } from "@mui/material";
import HomeCarousel from "../components/carousel/HomeCarousel";
import TruckingVideo from "../assets/videos/TruckingSite.mp4";
import TruckingVideoMobile from "../assets/videos/TruckingSiteMobile.mp4";
import Footer from "../components/appbar/Footer";
import About from "./About";

const Home = () => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
    ? TruckingVideoMobile
    : TruckingVideo;

  return (
    <>
      {/* Main container, sets default width/height and margin top to get away from the navbar */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          marginTop: "-70px",
        }}
      >
        {/* Secondary Container, hosts a relative container to hide the background video overflow. */}
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Blue Tinted Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(8, 64, 129, .7)",
              zIndex: 3,
            }}
          ></div>

          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              zIndex: 2,
            }}
          >
            <source src={isMatch} type="video/mp4" />
          </video>

          {/* Carousel */}
          <div
            style={{
              position: "relative",
              zIndex: 4,
              top: "45%",
              textAlign: "center",
              marginTop: "-50px",
              width: "90%",
              marginLeft: "5%",
            }}
          >
            <HomeCarousel />
          </div>
        </div>

        <div style={{ zIndex: 3 }}>
          {/* About Page */}
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
