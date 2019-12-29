const jStat = require("jstat");

const BinomialProportion = (count, nobs, alpha = 0.05, method = "normal") => {
  const z = -1 * jStat.normal.inv(alpha / 2, 0, 1);
  const p = count / nobs;
  let sd;
  switch (method) {
    case "normal":
      sd = z * Math.sqrt((p * (1 - p)) / nobs);
      return { lowerBound: p - sd, upperBound: p + sd };
    case "agresti_coull":
      p = (count + z ** 2 / 2) / (nobs + z ** 2);
      sd = z * Math.sqrt((p * (1 - p)) / (nobs + z ** 2));
      return { lowerBound: p - sd, upperBound: p + sd };
    case "wilson":
      const denominator = 1 + z ** 2 / nobs;
      const centre_adjusted_probability = p + (z * z) / (2 * nobs);
      adjusted_standard_deviation = Math.sqrt(
        (p * (1 - p) + z ** 2 / (4 * nobs)) / nobs
      );

      const lowerBound =
        (centre_adjusted_probability - z * adjusted_standard_deviation) /
        denominator;
      const upperBound =
        (centre_adjusted_probability + z * adjusted_standard_deviation) /
        denominator;

      return { lowerBound, upperBound };
  }
};

module.exports = BinomialProportion;
