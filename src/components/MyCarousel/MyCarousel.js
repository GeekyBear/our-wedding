import Carousel from "react-bootstrap/Carousel";
import foto1 from "../../assets/images/foto1.jpeg";
import foto2 from "../../assets/images/foto2.jpeg";
import foto3 from "../../assets/images/foto3.jpeg";
import styles from "./style.module.css";

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={styles.image} src={foto1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.image} src={foto2} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.image} src={foto3} alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
