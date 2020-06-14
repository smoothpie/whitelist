import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  FooterSectionStyle,
  Map,
  StyledIframe,
  IconContainer,
  FooterIcon,
  StyledTelegram,
  StyledYclients,
  StyledInstagram
} from "./styled";
import { SectionTitle, SectionDescription } from "../Typography";

const FooterSection: React.FC = () => {
  const {
    footerSection: { frontmatter: footerSection },
    contacts: { frontmatter: contacts }
  } = useStaticQuery(graphql`
    query {
      footerSection: markdownRemark(
        frontmatter: { type: { eq: "footerSection" } }
      ) {
        frontmatter {
          title
        }
      }
      contacts: markdownRemark(frontmatter: { type: { eq: "contacts" } }) {
        frontmatter {
          telFull
          addressFull
          place
          workingHoursFull
        }
      }
    }
  `);

  const { title } = footerSection;

  const { telFull, addressFull, place, workingHoursFull } = contacts;

  return (
    <FooterSectionStyle>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>
        <p>{addressFull}</p>
        <p>{place}</p>
        <p>{workingHoursFull}</p>
        <p>{telFull}</p>
      </SectionDescription>
      <Map>
        <StyledIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.484137113019!2d27.549843215992567!3d53.90537234039118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf7c4c837b87%3A0x6ad3cca0a5495849!2zwqs5MTHCuyDQodCw0LvQvtC9INCa0YDQsNGB0L7RgtGLINCYINCR0LDRgNCx0LXRgNGI0L7Qvw!5e0!3m2!1sru!2sby!4v1592125771228!5m2!1sru!2sby" />
      </Map>
      <IconContainer>
        <FooterIcon href="https://www.t.me/minsk911/" target="blank_">
          <StyledTelegram />
        </FooterIcon>
        <FooterIcon
          href="https://n247635.yclients.com/company:242564?o=m704631"
          target="blank_"
        >
          <StyledYclients />
        </FooterIcon>
        <FooterIcon
          href="https://www.instagram.com/911barber.by/"
          target="blank_"
        >
          <StyledInstagram />
        </FooterIcon>
        <FooterIcon
          href="https://www.instagram.com/911barbieshop/"
          target="blank_"
        >
          <StyledInstagram clr="#F783AC" />
        </FooterIcon>
      </IconContainer>
    </FooterSectionStyle>
  );
};

export default FooterSection;
