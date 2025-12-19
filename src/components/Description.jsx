import { product } from '../product.jsx';

export default function Description({ description }) {
    return <p className="description">{description || product.description}</p>;
}
