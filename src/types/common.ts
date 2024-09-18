export interface ProductType {
    id: number;
    name: string;
    image: string;
    price: string;
    discount?: string;
    isNew?: boolean;
    fewLeft?: boolean;
    outOfStock?: boolean;
    longDesc: string;
  }
  