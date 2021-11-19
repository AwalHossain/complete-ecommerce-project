import React from 'react';
import styled from 'styled-components'
import {popularProducts} from '../../data'
import Product from '../Product/Product';
const Container =styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;

`

const Products = () => {
    return (
        <Container>
            {
                popularProducts.map(item => <Product
                key={item.id}
                item={item}
                ></Product> )
            }
        </Container>
    );
};

export default Products;