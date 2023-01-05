export class MyDatabase {
  private static _instance: MyDatabase | null;

  private constructor() {}

  public static get instance(): MyDatabase | null {
    if (this._instance === null) {
      MyDatabase._instance = new MyDatabase();
    }
    return MyDatabase._instance;
  }
}
