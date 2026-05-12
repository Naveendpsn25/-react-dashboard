import "./ProductCard.scss";

import type { Product } from "../ProductGrid/ProduvtType";

import "./ProductCard.scss";

import { Box, Typography, Chip } from "@mui/material";


type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Box className="product-card">

      <Box className="product-image">
        <img src={product.image} alt={product.name}/>
        <Chip label={product.tag} size="small" className={`badge ${product.tag.toLowerCase()}`}/>
      </Box>

      <Box className="product-content">

        <Typography className="title-prod">{product.name}</Typography>      
        <Box className="price-colors">
          <Box className="colors">
            {product.colors.map((color, index) => (
              <Box key={index} className="dot" sx={{ backgroundColor: color }}/>
            ))}
          </Box>

          <Typography className="price">${product.price}</Typography>

          

        </Box>

      </Box>

    </Box>
  );
}