export interface Wine {
  id: number;
  title: string;
  description: string;
  img: string;
  category: string;
  price: number;
  region: string;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
  quantity: number;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  addressNumber: string;
  postNumber: string;
  password: string;
}

export type SortOrder = "asc" | "desc" | null;

interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  userEmail: string;
  items: OrderItem[];
  totalPrice: number;
  createdAt: string;
}
