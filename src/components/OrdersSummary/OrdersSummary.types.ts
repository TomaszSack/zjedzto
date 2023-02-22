export interface CartItemType {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
  quantity: number;
}

export interface OrderItemType {
  apartment_number: string;
  city: string;
  comment: string;
  email: string;
  first_name: string;
  floor: string;
  house_number: string;
  order: CartItemType[];
  phone_number: string;
  postcode: string;
  street: string;
  surname: string;
  id: number;
}
