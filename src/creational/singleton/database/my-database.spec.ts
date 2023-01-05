import { MyDatabase } from "./my-database";

describe("Singleton Example", () => {
  it("Should return true if instance2 is equal to instance1", () => {
    const instance1 = MyDatabase.instance;
    const instance2 = MyDatabase.instance;
    expect(instance1).toStrictEqual(instance2);
  });
});
