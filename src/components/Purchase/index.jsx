import "./purchase.scss";

import imagemcard1 from "../../assets/imagemcard1.jpeg";
import imagemcard2 from "../../assets/imagemcard2.jpg";
import imagemcard3 from "../../assets/imagemcard3.jpg";


const products = [
  {
    id: 1,
    title: "Phantom Black",
    price: "U$ 456.299,00",
    image: imagemcard1,
  },
  {
    id: 2,
    title: "Golden Edition",
    price: "U$ 345.899,00",
    image: imagemcard2,
  },
  {
    id: 3,
    title: "Luxury Night",
    price: "U$ 266.499,99",
    image: imagemcard3,
  },
];

export default function Purchase() {
  return (
    <section className="purchase">
      <header className="purchase-header">
        <span className="eyebrow">Exclusive Collection</span>
        <h2>Choose your experience.</h2>
        <p>
          Products developed with premium design, selected materials and high-standard finish.
        </p>
      </header>

      <div className="purchase-grid">
        {products.map((product) => (
          <article className="purchase-card" key={product.id}>
            <div className="image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="card-content">
              <h3>{product.title}</h3>
              <span className="price">{product.price}</span>
              <button>Buy now</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
