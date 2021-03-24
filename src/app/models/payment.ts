import Basepay from './Basepay';

export default class Payment extends Basepay {
  [x: string]: any;
  constructor(
    name: string,
    cid: number,
    pAmount: number,
    currency: string,
    fAccount: number,
    tAccount: number,
    balance: number
  ) {
    super();
    this.name = name;
    this.cid = cid;
    this.pAmount = pAmount;
    this.currency = currency;
    this.fAccount = fAccount;
    this.tAccount = tAccount;
    this.balance = balance;
  }
  id?: number;
  name: string;
  cid: number;
  pAmount: number;
  currency: string;
  fAccount: number;
  tAccount: number;
  balance: number;
  charges?: number;
}
