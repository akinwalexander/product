import { product } from '../product.jsx';

export default function Name({ name }) {
    return <h1>{name || product.name}</h1>;
}
