import Head from "next/head";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import About from "./components/About";
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
        <About />
        <Services />
        <Reviews />
        <Footer />
      </main>
    </div>
  );
}
