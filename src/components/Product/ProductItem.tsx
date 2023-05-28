import styled from 'styled-components';

import CartIcon from '../../assets/CartIcon';
import Image from '../Common/Image';
import AmountCounter from '../Common/AmountCounter';

import type { Product } from '../../types/product';

import useCartProducts from '../../hooks/useCartProducts';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { imageUrl, name, price } = product;
  const { target, addProduct, addCount, subtractCount } =
    useCartProducts(product);
  const productExistsInCart = target && target.quantity > 0;

  return (
    <ProductContainer>
      <Image src={imageUrl} alt={name} loading='lazy' size='medium' />
      <ProductInfoContainer>
        <dl>
          <ProductName>{name}</ProductName>
          <ProductPrice>{price.toLocaleString('ko-KR')} 원</ProductPrice>
        </dl>
        {!productExistsInCart ? (
          <ProductCartBtn
            type='button'
            data-testid='product-cart-btn'
            onClick={addProduct}
          >
            <CartIcon width={25} height={22} color='gray400' />
          </ProductCartBtn>
        ) : (
          <AmountCounter
            designType='main'
            count={target.quantity}
            addCount={addCount}
            subtractCount={subtractCount}
          />
        )}
      </ProductInfoContainer>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  width: 282px;
`;

const ProductInfoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  padding: 0 14px;
`;

const ProductName = styled.dt`
  line-height: 22px;
`;

const ProductPrice = styled.dd`
  font-size: 20px;
  line-height: 26.67px;
`;

const ProductCartBtn = styled.button`
  position: absolute;
  top: 0;
  right: 14px;
`;

export default ProductItem;
