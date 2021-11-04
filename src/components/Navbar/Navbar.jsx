import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Container=styled.div`
height:60px;

`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const SearchContainer =styled.div`
    border:1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
border: none;
outline: none;
`
const Logo = styled.h1`
font-weight: bold;
text-align: center;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content:flex-end;
`
const MenuItem = styled.div`
font-size: 14px;
font-weight:bold;
margin-left: 25px;
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:'gray', fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                    Awals
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                    Register
                    </MenuItem>
                    <MenuItem>
                    Login
                    </MenuItem>
                    <MenuItem>
                    <Badge badgeContent={1} color="secondary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;