import "./ProductGrid.scss";

import ProductCard from "../ProductCard/ProductCard";

import type { Product } from "./ProduvtType";

import { Box } from "@mui/material";

type ProductGridProps = {
  products: Product[];
}

export default function ProductGrid({products}: ProductGridProps) {
  return (
    <Box className="product-grid">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </Box>
  );
}