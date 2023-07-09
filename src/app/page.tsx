import Header from "./components/Header";
import Showcase from "./components/Showcase";
import HomeRec from "./components/HomeRec";
import Cards from "./components/Cards";
import Links from "./components/Links";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Showcase />
      <HomeRec />
      <Cards />
      <Links />
      <Footer />
    </main>
  );
}
