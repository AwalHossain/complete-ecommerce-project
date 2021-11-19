import styled  from 'styled-components';
import React from 'react';
import {categories} from '../../data'
import CatagoryItem from '../CatagoryItem/CatagoryItem';
const Container = styled.div`
    display:flex;
`

const Catagory = () => {
    return (
        <Container>
            {
                categories.map(item=> <CatagoryItem
                key={item.id}
                item={item}
                ></CatagoryItem>)
            }
        </Container>
    );
};

export default Catagory;