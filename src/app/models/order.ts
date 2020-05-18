export class Order {
  constructor(public PK: string, public SK: string, public orderid: string,
  public paymethod: string, public email: string, public orderdate: string,
  public products: Array<any>, public totalsale: number, public tax: number,
  public couponcode?: string) {}
}
