import styled from 'styled-components';

const VanRow = styled.div``;
const Img = styled.img``;
const Van = styled.div``;
const Price = styled.div``;
const Discount = styled.div``;

function VanRow({ van }) {
  const {
    id: vanId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    features,
  } = van;

  return (
    <VanRow>
      <Img src={image} />
      <Van>{image}</Van>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{regularPrice}</Price>
    </VanRow>
  );
}

export default VanRow;
