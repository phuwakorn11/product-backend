import { Schema } from 'mongoose';

export class Order {
  products: {
    productId: string;
    name: string;
    price: number;
    quantity_in_stock: number;
    category: string;
  }[];
  totalAmount: number;
  status: string;
}

export const OrderSchema = new Schema<Order>({
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity_in_stock: { type: Number, required: true },
      category: { type: String, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true },
});
