import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewsLettet from "../../components/NewsLetter.jsx/NewsLettet";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Desc = styled.p``;
const Title = styled.h1``;
const Price = styled.span`
  margin-top: 10px;
  font-size: 40px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const AddContainer = styled.div``;

const AmoutContainer = styled.div``;
const Amount = styled.div``;
const Button = styled.button``;

const Prouduct = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            omnis blanditiis obcaecati labore earum nihil nesciunt eos. Repellat
            veniam, neque vero totam dolore doloribus exercitationem
            perspiciatis, natus quos rerum odit.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmoutContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmoutContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLettet></NewsLettet>
      <Footer></Footer>
    </Container>
  );
};

export default Prouduct;
