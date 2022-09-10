import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Section from "../components/Section";
import About from "../components/About";
import Project1 from "../components/Project1";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar1";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
          <Section /> 
          <About id="about" />
          <Project1 id="project" />
          <Slider />
          <Footer />
        </>
      )}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  } 
}

