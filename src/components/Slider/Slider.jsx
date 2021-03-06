import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components'
import {sliderItems} from '../../data'



const Container = styled.div`
width:100%;
height:100vh;
display: flex;
position:relative;
overflow-y: hidden;
overflow-x:hidden
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#ffff;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
position:absolute;
top: 0;
bottom:0;
margin:auto;
left:${props => props.direction === 'left' && '10px'};
right:${props => props.direction === 'right' && '10px'};
opacity:0.5;
z-index:2
`
const Wrapper=styled.div`
 height:100%;
 display: flex;
 transition:all 1.1s ease;
 transform:translateX(${props => props.slideIndex* -100}vw)
`
const Slide =styled.div`
display: flex;
align-items: center;
width:100vw;
height:100vh;
background-color: #${props => props.bg};
`
const ImgConatainer=styled.div`
height:100%;
flex: 1;
`
const Image = styled.img`
height:80%;
`
const InfoContainer =styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`
font-size:70px;

`
const Desc = styled.p`
margin:50px 0px;
font-size: 20px;
font-weight:500;
letter-spacing:5px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color: transparent;
cursor: pointer;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] =useState(0)
    const handleClick=(direction)=>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex <2 ? slideIndex +1 : 0 )
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                    <Slide key={item.id} bg={item.bg}>
                    <ImgConatainer>
                        <Image src={item.img} />
                    </ImgConatainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
               
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;