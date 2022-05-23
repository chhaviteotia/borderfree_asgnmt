import React, { useState, useEffect } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import item1 from "../images/item1.jpg";
import item2 from "../images/item2.jpg";
import item3 from "../images/item3.jpg";
import item4 from "../images/item4.jpg";
import item5 from "../images/item5.jpg";
import item6 from "../images/item6.jpg";
import item7 from "../images/item7.jpg";
import item8 from "../images/item8.jpg";
import item9 from "../images/item9.jpg";
import Modal from 'react-modal';
import "./Products.css";
import Navbar2 from '../navbar/Navbar2';

const Products = () => {
  const [summaryModal, setSummaryModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);

  const [count, setCount] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0,
    17: 0, 18: 0, 19: 0, 20: 0
  })

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const showSummary = (e) => {
    console.log(e.target.id)
    var prev = count[e.target.id]
    setCount({ ...count, [e.target.id]: Number(prev) + 1 })
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDetails(data)
        console.log(data)
      })
    console.log(!summaryModal)
    setSummaryModal(true);

  }
  const toggleSummaryModal = () => {
    setSummaryModal(!summaryModal);

  }
  return (
    <>
      <Navbar2 />
      <div className='products-page'>
        <div className='products-div'>
          <p>WELCOME</p>
        </div>
        <div id="demo" className="carousel slide" data-ride="carousel">

          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          {/* The slideshow  */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className='slider-img1' src={item1} alt="item1" width="31%" height="500" />
              <img src={item2} alt="item2" width="31%" height="500" />
              <img src={item3} alt="item3" width="33%" height="500" />

            </div>
            <div className="carousel-item">
              <img className='slider-img1' src={item4} alt="item4" width="31%" height="500" />
              <img src={item5} alt="item5" width="31%" height="500" />
              <img src={item6} alt="item6" width="33%" height="500" />

            </div>
            <div className="carousel-item">
              <img className='slider-img1' src={item7} alt="item7" width="31%" height="500" />
              <img src={item8} alt="item8" width="31%" height="500" />
              <img src={item9} alt="item9" width="33%" height="500" />


            </div>
          </div>

          {/* Left and right controls  */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      <div className='image-card-heading'><h1><strong>Available Products</strong></h1></div>

      <div className='image-card'>
        <div>
          {products.length > 0 && (
            <ul>
              {products.map(product => (
                <>
                  <img id={product.id} src={product.image} onClick={showSummary} />
                </>
              ))}
              <Modal isOpen={summaryModal}>
                <div className="summary-modal">

                  <button onClick={toggleSummaryModal}>CLOSE</button>
                  <h3> {details.category}</h3>
                  <div className='summary-container'>
                    <div className='summary-img'><img src={details.image} /></div>
                    <div className='summary-details'><p><strong>Description:</strong>{details.description}</p>
                      <p><strong>Price:</strong> {details.price}</p>
                      <p><strong>Title:</strong>{details.title}</p>
                      <p><strong>Clicked Count:</strong>{count[details.id]}</p>
                    </div>
                  </div>

                </div>
              </Modal>
            </ul>

          )}
        </div>
      </div>
    </>
  );
}

export default Products;
