# binomial-proportion

[![Build Status](https://travis-ci.org/egusahiroaki/binomial-proportion.svg?branch=master)](https://travis-ci.org/egusahiroaki/binomial-proportion)

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Simple JavaScript implementation of Binomial Proportion Confidence Interval. You can use three types of their methods.

- Normal approximation interval (also known as Wald)
- Wilson score interval
- Agresti–Coull interval

For the detail of formula, please see [the Wikipedia page on Binomial proportion confidence interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval)

## install

```sh
npm install binomial-proportion
```

## Usage

```javascript
const BinomialProportion = require("binomial-proportion");

/*
    "normal" or "agresti_coull", "wilson"
*/

const result = BinomialProportion(50, 500, 0.05, "normal");
/*
    {
    lowerBound: 0.07370432378270254,
    value: 0.1,
    upperBound: 0.12629567621729745
    }
*/
```
