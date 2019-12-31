const jStat = require('jstat');

const BinomialProportion = (count, nobs, alpha = 0.05, method = 'normal') => {
  if (nobs === 0) {
    return {
      lowerBound: 0,
      value: 0,
      upperBound: 0,
    };
  }

  const z = -1 * jStat.normal.inv(alpha / 2, 0, 1);
  let p = count / nobs;
  let sd;
  switch (method) {
    case 'normal': {
      sd = z * Math.sqrt((p * (1 - p)) / nobs);
      return { lowerBound: p - sd, value: p, upperBound: p + sd };
    }
    case 'agresti_coull': {
      const pAc = (count + z ** 2 / 2) / (nobs + z ** 2);
      sd = z * Math.sqrt((pAc * (1 - pAc)) / (nobs + z ** 2));
      return { lowerBound: pAc - sd, value: p, upperBound: pAc + sd };
    }
    case 'wilson': {
      const denominator = 1 + z ** 2 / nobs;
      const centreAdjustedProbability = p + (z * z) / (2 * nobs);
      const adjustedStandardDeviation = Math.sqrt(
        (p * (1 - p) + z ** 2 / (4 * nobs)) / nobs
      );

      const lowerBound =
        (centreAdjustedProbability - z * adjustedStandardDeviation) /
        denominator;
      const upperBound =
        (centreAdjustedProbability + z * adjustedStandardDeviation) /
        denominator;
      return { lowerBound, value: p, upperBound };
    }
  }
};

module.exports = BinomialProportion;
