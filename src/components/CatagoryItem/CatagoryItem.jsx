import styled from 'styled-components'
import React from 'react';

const Container = styled.div`
flex:1;
margin: 3px;
position: relative;

`
const Image = styled.img`
width:100%;
height:70vh;
object-fit:cover;
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
top: 0;
left: 0;
`
const Title = styled.h1`
    margin-bottom: 20px;
    color: white;
    `
const Button = styled.button`
 padding: 10px;
 background-color: white;
 color: gray;
 border: none;
 font-weight:600;
`

const CatagoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CatagoryItem;