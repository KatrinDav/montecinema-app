import { setLength } from "@/helpers";

  describe('setLength', () => {
      it('returns values in hours and minutes', () => {
          const itemInMinutes = 125;
          const output = '2h 5min'
          expect(setLength(itemInMinutes)).toBe(output)
      })
  })
