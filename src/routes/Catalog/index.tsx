import "./styles.css";
import CardCar from "../../Components/CardCar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Catalog() {
  return (
    <>
      <Header />
      <main />
      <section id="dsct-catalog-section" className="ct-container">
        <h2>Venha nos visitar</h2>
        <CardCar />
        <CardCar />
      </section>

      <section>
        <div>Card comentario</div>
      </section>
      <Footer/>
    </>
  );
}
