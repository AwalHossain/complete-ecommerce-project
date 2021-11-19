import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocailIcon = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AWAL</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione
          quia possimus. Eos optio iste, voluptatem a tenetur eaque libero?
        </Desc>
        <SocialContainer>
          <SocailIcon>
            <Facebook />
          </SocailIcon>
          <SocailIcon>
            <Instagram />
          </SocailIcon>
          <SocailIcon>
            <Twitter />
          </SocailIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
