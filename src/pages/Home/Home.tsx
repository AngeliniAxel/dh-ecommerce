import { useEffect, useState } from 'react';
import { Hero } from '../../components/ui/Hero';
import styles from './Home.module.css';
import { CardProduct } from '../../components/ui/CardProduct/CardProduct';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Hero />
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
