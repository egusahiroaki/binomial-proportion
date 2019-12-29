import test from "ava";
import BinomialProportion from "../index";

test("normal: Binominal(10, 500, 0.05, 'normal')", t => {
  const result = BinomialProportion(50, 500, 0.05, "normal");
  t.is(result.lowerBound, 0.07370432378270254);
  t.is(result.value, 0.1);
  t.is(result.upperBound, 0.12629567621729745);
});

test("normal: Binominal(10, 500, 0.05, 'agresti_coull')", t => {
  const result = BinomialProportion(50, 500, 0.05, "agresti_coull");
  t.is(result.lowerBound, 0.07650314487851813);
  t.is(result.value, 0.1);
  t.is(result.upperBound, 0.12959632749072367);
});

test("normal: Binominal(10, 500, 0.05, 'wilson')", t => {
  const result = BinomialProportion(50, 500, 0.05, "wilson");
  t.is(result.lowerBound, 0.07667756273730171);
  t.is(result.value, 0.1);
  t.is(result.upperBound, 0.1294219096319401);
});
