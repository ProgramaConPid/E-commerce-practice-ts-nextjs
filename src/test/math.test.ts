import { getIVA } from "../helpers/utils";

describe("utils/math", () => {
  test("Get IVA from the value", () => {
    expect(getIVA(1000)).toBe(190)
  })
})