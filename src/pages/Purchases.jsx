import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
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
            <ListGroup>
                {
                    purchases.map(purchase =>(
                        <ListGroup.Item key={purchase.id}>
                            {purchase.createdAt}
                            <br />
                            
                            <br/>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default Purchases;