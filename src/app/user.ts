export class User {
  name: string;
  data: object;
  constructor(public userName: string, public dataReceived: object) {
    this.name = userName;
    this.data = dataReceived;
  }
}
