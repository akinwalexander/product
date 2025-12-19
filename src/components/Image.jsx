import { product } from '../product.jsx';

export default function Image({ src, alt }) {
    const imageSrc = src || product.image.src;
    const imageAlt = alt || product.image.alt;
    return <img src={imageSrc} alt={imageAlt} className="product-image" />;
}
