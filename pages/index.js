import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Example from "../components/Navbar";
import Section from "../components/Section";
import About from "../components/About";
// import Project from '../components/Project';
import Project1 from "../components/Project1";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar1";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Section /> <About id="about" />
          <Project1 id="project" />
          <Slider />
          <Footer />
        </>
      )}
    </>
  );
}
