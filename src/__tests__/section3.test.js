import { filterData } from "../section3/section3.config";

describe("Filter Function", () => {
  describe("given an array of data and a value to filter with", () => {
    it("returns data only with that given value", () => {
      const value = "Teslarati";
      const input = [
        {
          id: 16603,
          newsSite: "SpaceNews",
        },
        {
          id: 16602,
          newsSite: "SpaceNews",
        },
        {
          id: 16601,
          newsSite: "SpaceNews",
        },
        {
          id: 16600,
          newsSite: "NASA",
        },
        {
          id: 16599,
          newsSite: "Teslarati",
        },
        {
          id: 16598,
          newsSite: "SpaceNews",
        },
        {
          id: 16597,
          newsSite: "SpaceNews",
        },
        {
          id: 16595,
          newsSite: "SpaceNews",
        },
        {
          id: 16591,
          newsSite: "SpaceNews",
        },
        {
          id: 16590,
          newsSite: "Teslarati",
        },
      ];

      const output = [
        {
          id: 16599,
          newsSite: "Teslarati",
        },
        {
          id: 16590,
          newsSite: "Teslarati",
        },
      ];

      const result = filterData(input, value);

      expect(result).toEqual(output);
    });
  });
});
