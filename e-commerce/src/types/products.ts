export interface ProductProps {
  id: number;
  images: string[];
  price: number;
  slug: string;
  title: string;
  quantity: number;
  description: string;
  category: {
    id: number;
    image: string;
    name: string;
    slug: string;
  };
}
