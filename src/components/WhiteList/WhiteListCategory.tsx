import React, { useState } from "react";
import { CategoryTitle } from "./styled";
import WhiteListBrand from "./WhiteListBrand";

type Props = {
  category: any;
};

const WhiteListCategory: React.FC<Props> = props => {
  const { category } = props;

  const [showBrands, setShowBrands] = useState<boolean>(false);

  return (
    <div onClick={() => setShowBrands(!showBrands)}>
      <CategoryTitle active={showBrands}>{category.title}</CategoryTitle>
      {showBrands &&
        category.items.map((item: any, i: number) => (
          <WhiteListBrand key={i} brand={item} />
        ))}
    </div>
  );
};

export default WhiteListCategory;
