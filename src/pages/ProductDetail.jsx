import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();

    const productsList = useSelector(state => state.products)

    const productsDetail = productsList.find(products => products.id === Number(id))

    const relatedProducts = productsList.filter(
        products => products.category.id === productsDetail.category.id
    )

    return (
        <Row>
            <Col>
                <h1>{productsDetail?.title}</h1>
                <p>{productsDetail?.description} <b>{id}</b></p>
                <img className='img-fluid' src={productsDetail?.productImgs} alt="" height={"150px"}/>
            </Col>
            <Col lg={3}>
            <ListGroup variant="flush">
                {
                        relatedProducts.map(products => (
                            <ListGroupItem key={products.id}>
                                <Link to={`/product/${products.id}`}>
                                    <img src={products.productImgs}  className="img-fluid"></img>
                                    {products.title}
                                </Link>
                            </ListGroupItem>
                        ))
                    }
            </ListGroup>
            </Col>
        </Row>
    );
};

export default ProductDetail;
