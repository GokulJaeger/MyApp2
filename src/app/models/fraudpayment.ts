export default class fraudpayment {
  map(arg0: (d: fraudpayment) => fraudpayment | undefined) {
    throw new Error('Method not implemented.');
  }
  id?: number;
  name!: string;
  cid!: number;
  pAmount!: number;
  currency!: string;
  fAccount!: number;
  tAccount!: number;
  balance!: number;
}
