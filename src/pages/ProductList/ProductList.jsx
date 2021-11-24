import React from "react";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewsLettet from "../../components/NewsLetter.jsx/NewsLettet";
import Products from "../../components/Products/Products";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;
const FilterText = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 8px;
  margin-left: 10px;
  display: flex;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <option disabled selected>
              {" "}
              Color
            </option>
            <Option>Red</Option>
            <Option>White</Option>
            <Option>White</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <option disabled selected>
              {" "}
              Size
            </option>
            <Option>Xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <option disabled selected>
              Products{" "}
            </option>
            <Option>Newest</Option>
            <Option>Popular</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLettet />
      <Footer />
    </Container>
  );
};

export default ProductList;
