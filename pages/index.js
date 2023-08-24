import Head from "next/head";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Estofados 10/10</title>
        <meta
          name="description"
          content="Limpeza de estofados"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Features />
        <Statistics />
        <Testimonials /> 
        <Footer />
      </main>
    </div>
  );
}
