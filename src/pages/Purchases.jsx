import React, { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

        const dispatch = useDispatch();
        const purchases = useSelector(state => state.purchases)
        useEffect(() => {
            dispatch(getPurchasesThunk())

        }, [])

    return (
        <div>
            <h1>Purchases</h1>
                {
                    purchases.map(purchase =>(
                        <ListGroup key={purchase.id}>
                            <ListGroup.Item as="li" active>
                                {purchase.createdAt}
                            </ListGroup.Item>
                            <ListGroup.Item >
                                {purchase.cart.products.map(product => (
                                    <ListGroup.Item key={product.id}>
                                        {product.title}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup.Item>
                        </ListGroup>
                        
                        
                    ))
                }

        </div>
    );
};

export default Purchases;