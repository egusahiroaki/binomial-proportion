import test from "ava";
import BinomialProportion from "../index";

test("normal: Binominal(10, 500, 'normal')", t => {
  const result = BinomialProportion(50, 500, 0.05, "normal");
  t.is(result.lowerBound, 0.07370432378270254);
  t.is(result.upperBound, 0.12629567621729745);
});
