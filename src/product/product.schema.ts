// src/product/product.schema.ts

import { Schema } from 'mongoose';

export class Product {
  name: string;
  price: number;
  quantity_in_stock: number;
  category: string;
}

export const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity_in_stock: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
