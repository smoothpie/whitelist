import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  ContactsSection,
  ContactsBlock,
  ContactsP,
  ContactsPlace,
  ContactsIcon,
  StyledСlock,
  StyledMapMarker,
  StyledMobilePhone
} from "./styled";

const Contacts: React.FC = () => {
  const {
    contacts: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      contacts: markdownRemark(frontmatter: { type: { eq: "contacts" } }) {
        frontmatter {
          tel
          address
          place
          workingHours
        }
      }
    }
  `);

  const { tel, address, place, workingHours } = frontmatter;

  return (
    <ContactsSection>
      <ContactsBlock href="tel:+375 336 619 911">
        <ContactsIcon>
          <StyledMobilePhone />
        </ContactsIcon>
        <ContactsP>{tel}</ContactsP>
      </ContactsBlock>
      <ContactsBlock href="/">
        <ContactsIcon>
          <StyledСlock />
        </ContactsIcon>
        <ContactsP>{workingHours}</ContactsP>
      </ContactsBlock>
      <ContactsBlock href="/">
        <ContactsIcon>
          <StyledMapMarker />
        </ContactsIcon>
        <ContactsPlace>{address}</ContactsPlace>
        <ContactsPlace>{place}</ContactsPlace>
      </ContactsBlock>
    </ContactsSection>
  );
};

export default Contacts;
