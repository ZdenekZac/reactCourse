import { useDispatch } from 'react-redux';
import Button from '../ui/button';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li key={pizza.id} alt={pizza.name} className="h-24 flex gap-4 py-2">
      <img
        src={pizza.imageUrl}
        alt={pizza.name}
        className={`h-24 ${pizza.soldOut ? 'opacity-70 grayscale' : ''} flex`}
      />
      <div className="mt-auto flex items-center justify-between">
        {!soldOut ? (
          <p className="text-sm mr-8">{pizza.unitPrice} €</p>
        ) : (
          <p className="text-sm font-medium uppercase text-stone-500 mr-8">
            Sold out
          </p>
        )}

        {!soldOut && (
          <Button
            type="small"
            className="button text-xs py-1.5 px-3 md:px-4 md:py-2"
          >
            Add to cart
          </Button>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
