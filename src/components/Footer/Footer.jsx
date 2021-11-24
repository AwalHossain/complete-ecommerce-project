import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
`;
const Left = styled.div`
  flex: 1;
  padding-left: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding-left: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding-left: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocailIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

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
          <SocailIcon color="3B5999">
            <Facebook />
          </SocailIcon>
          <SocailIcon color="E4405f">
            <Instagram />
          </SocailIcon>
          <SocailIcon color="55ACEE">
            <Twitter />
          </SocailIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> 223 lama steet, south bono
        </ContactItem>
        <ContactItem>
          <Phone /> +124 3432 232
        </ContactItem>
        <ContactItem>
          <MailOutline /> lama@323.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
