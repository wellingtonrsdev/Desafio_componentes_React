import "./styles.css";
import CardCar from "../../Components/CardCar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CardComments from "../../Components/CardComments";

export default function Catalog() {
  return (
    <>
      <Header />
      <main />
      <section id="dsct-catalog-section">
        <h2>Venha nos visitar</h2>
        <CardCar />
        <CardCar />
      </section>

      <section id="dsct-catalog-second-section">
        <h3>O que estão dizendo</h3>
        <CardComments />
        <CardComments />
        <CardComments />
        <CardComments />
        <CardComments />
      </section>
      <Footer />
    </>
  );
}
