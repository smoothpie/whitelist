import React from "react";
import {
  TeamSection,
  TeamDescription,
  TeamContainer,
  TeamItem,
  EmployeePhoto,
  EmployeeName,
  EmployeePosition,
  EmployeeInfo
} from "./styled";
import { useStaticQuery, graphql } from "gatsby";
import { H3 } from "../Typography";

const Team: React.FC = () => {
  const {
    team: { frontmatter },
    emloyeePhoto1: {
      childImageSharp: { fluid: emloyeePhoto1 }
    },
    emloyeePhoto2: {
      childImageSharp: { fluid: emloyeePhoto2 }
    },
    emloyeePhoto3: {
      childImageSharp: { fluid: emloyeePhoto3 }
    }
  } = useStaticQuery(graphql`
    query {
      team: markdownRemark(frontmatter: { type: { eq: "team" } }) {
        frontmatter {
          title
          description
          employee1
          position1
          info1
          employee2
          position2
          info2
          employee3
          position3
          info3
        }
      }
      emloyeePhoto1: file(relativePath: { eq: "employee1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emloyeePhoto2: file(relativePath: { eq: "employee2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emloyeePhoto3: file(relativePath: { eq: "employee3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const {
    title,
    description,
    employee1,
    position1,
    info1,
    employee2,
    position2,
    info2,
    employee3,
    position3,
    info3
  } = frontmatter;

  return (
    <TeamSection>
      <H3>{title}</H3>
      <TeamDescription>{description}</TeamDescription>
      <TeamContainer>
        <TeamItem>
          <EmployeePhoto fluid={emloyeePhoto1} />
          <EmployeeName
            href="https://n247635.yclients.com/company:242564/master-info:704631?o=m704631&companyId=242564#reviews"
            target="blank_"
          >
            {employee1}
          </EmployeeName>
          <EmployeePosition>{position1}</EmployeePosition>
          <EmployeeInfo>{info1}</EmployeeInfo>
        </TeamItem>
        <TeamItem>
          <EmployeePhoto fluid={emloyeePhoto2} />
          <EmployeeName
            href="https://n247635.yclients.com/company:242564/master-info:713378?o=m704631&companyId=242564#reviews"
            target="blank_"
          >
            {employee2}
          </EmployeeName>
          <EmployeePosition>{position2}</EmployeePosition>
          <EmployeeInfo>{info2}</EmployeeInfo>
        </TeamItem>
        <TeamItem>
          <EmployeePhoto fluid={emloyeePhoto3} />
          <EmployeeName
            href="https://n247635.yclients.com/company:242564/master-info:704629?o=m704631&companyId=242564#reviews"
            target="blank_"
          >
            {employee3}
          </EmployeeName>
          <EmployeePosition>{position3}</EmployeePosition>
          <EmployeeInfo>{info3}</EmployeeInfo>
        </TeamItem>
      </TeamContainer>
    </TeamSection>
  );
};

export default Team;
