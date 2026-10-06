export interface Product {
  id: string;
  number: string; // e.g. "01 / 12"
  name: string;
  price: number; // in INR (₹)
  originalPrice?: number;
  category: string;
  strap: string;
  dialColor: string;
  movement?: string;
  image: string;
  description: string;
  isFeatured?: boolean;
  tag?: string;
}
