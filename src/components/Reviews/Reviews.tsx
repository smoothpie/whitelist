import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ReviewsSection } from "./styled";

const Reviews: React.FC = () => {
  const {
    reviews: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      reviews: markdownRemark(frontmatter: { type: { eq: "reviews" } }) {
        frontmatter {
          person1
          desc1
          review1
          person2
          desc2
          review2
          person3
          desc3
          review3
          button
        }
      }
    }
  `);

  const {
    person1,
    desc1,
    review1,
    person2,
    desc2,
    review2,
    person3,
    desc3,
    review3,
    button
  } = frontmatter;
  return (
    <ReviewsSection>
      <div>
        <p>{review1}</p>
        <h3>{person1}</h3>
        <p>{desc1}</p>
        <button>{button}</button>
      </div>
      <div>
        <p>{review2}</p>
        <h3>{person2}</h3>
        <p>{desc2}</p>
        <button>{button}</button>
      </div>
      <div>
        <p>{review3}</p>
        <h3>{person3}</h3>
        <p>{desc3}</p>
        <button>{button}</button>
      </div>
    </ReviewsSection>
  );
};

export default Reviews;
