import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
//mport { useProductsContext } from '../context/products_context'
//import { single_product_url as url } from "../utils/constants";
//import { formatPrice } from '../utils/helpers'
import { Loading } from "./../components/loading/Loading";
import { Error } from "./../components/error/Error";
import { single_product_url as url } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductsImages } from "../components/productsimages/ProductsImages";
import styled from "styled-components";
// import { Link } from 'react-router-dom'
import { useProductsContext } from "./../../src/context/products-context";
import { PageHero } from "../components/PageHero.js/PageHero";
import AddToCart from "./../components/addtocart/AddToCart"
const SingleProductPage = () => {
  let Navigate = useNavigate();

  const { id } = useParams();
  console.log("hey id from single products", id);
  const {
    single_products_error,
    isLoadingSingle,
    singleProducts,
    fetchSingleProduct
  } = useProductsContext();
  console.log("hello from simgle products erro", singleProducts);
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (single_products_error) {
      setTimeout(() => {
        Navigate("/");
      }, 3000);
    }
  }, []);

  if (isLoadingSingle) {
    return <Loading />;
  }
  if (single_products_error) {
    return <Error />;
  }
  const {
    status,
    description,
    stocks,
    star,
    name,
    price,
    reviews,
    id: sku,
    company,
    images
  } = singleProducts;
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <PageHero title={name} singleProducts />
        </div>
        <div className="row">
          <div className="col-4">
            <Link to="/products">Back to product</Link>
            <ProductsImages images={images}/>
          </div>
          <div className="col-6">
            <section>
            Hey from Right hand side
            <h5>{name}</h5>
            <p>{status}</p>
            <p>{description}</p>
            <p>{stocks}</p>
            <p>{star}</p>
            <p>{name}</p>
            <p>{price}</p>
            <p>{reviews}</p>
            <p>
              <span>Available:-</span>
              {stocks > 0 ?"In the Stock":"Out of Stock"}
            </p>
          <AddToCart singleProducts={singleProducts} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

// const Wrapper = styled.main`
//   .product-center {
//     display: grid;
//     gap: 4rem;
//     margin-top: 2rem;
//   }
//   .price {
//     color: var(--clr-primary-5);
//   }
//   .desc {
//     line-height: 2;
//     max-width: 45em;
//   }
//   .info {
//     text-transform: capitalize;
//     width: 300px;
//     display: grid;
//     grid-template-columns: 125px 1fr;
//     span {
//       font-weight: 700;
//     }
//   }

//   @media (min-width: 992px) {
//     .product-center {
//       grid-template-columns: 1fr 1fr;
//       align-items: center;
//     }
//     .price {
//       font-size: 1.25rem;
//     }
//   }
// `

export default SingleProductPage;
