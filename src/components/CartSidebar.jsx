import React, { useEffect } from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTunk } from '../store/slices/cart.slice';

const CartSidebar = ({show, handleClose}) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartTunk())
  },[])

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup>
               {
                cart.map(car =>(
                  <ListGroup.Item key={car.id}>{car.title}</ListGroup.Item>
                ))
               }
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartSidebar;