import { product } from '../product.jsx';

export default function Price({ price }) {
    return <p className="price">${price || product.price}</p>;
}
