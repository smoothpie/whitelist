import React, { useState } from "react";
import ArrowDownIcon from "../../assets/images/svg/arrow-down.svg";
import { CategoryTitle } from "./styled";
import WhiteListBrand from "./WhiteListBrand";

type Props = {
  category: any;
};

const WhiteListCategory: React.FC<Props> = props => {
  const { category } = props;

  const [showBrands, setShowBrands] = useState<boolean>(false);

  return (
    <div>
      <CategoryTitle
        active={showBrands}
        onClick={() => setShowBrands(!showBrands)}
      >
        {category.name}
        <ArrowDownIcon />
      </CategoryTitle>
      {showBrands &&
        category.brand.map((brand: any, i: number) => (
          <WhiteListBrand key={i} brand={brand} categoryName={category.name} />
        ))}
    </div>
  );
};

export default WhiteListCategory;
