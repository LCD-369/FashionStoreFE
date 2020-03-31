export class Order {
  pk: string;
  sk: string;
  orderid: string;
  username: string;
  orderdate: string;
  products: Array<any>;
  totalsale: number;
  tax: number;
  couponcode: string;
}
