/*When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

Write a function: simplify, that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), 
and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):

All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
"cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"


All monomials appears in order of increasing number of variables, e.g.:
"-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"


If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
"a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"


There is no leading + sign if the first coefficient is positive, e.g.:
"-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"

N.B. to keep it simplest, the string in input is restricted to represent only multilinear non-constant polynomials, so you won't find something like `-3+yx^2'. Multilinear means in this context: of degree 1 on each variable.

Warning: the string in input can contain arbitrary variables represented by lowercase characters in the english alphabet.

Good Work :)*/





/*JS*/



function simplify(poly) {
  const regex = /[+-]?\d*[a-z]+/g;
  const matches = poly.match(regex) || [];
  const map = {};

  for (let term of matches) {
    let sign = 1;
    if (term[0] === '-') {
      sign = -1;
      term = term.slice(1);
    } else if (term[0] === '+') {
      term = term.slice(1);
    }

    let coeff = term.match(/^\d+/);
    coeff = coeff ? parseInt(coeff[0]) : 1;
    const vars = term.replace(/^\d+/, '').split('').sort().join('');
    const key = vars;

    if (!map[key]) map[key] = 0;
    map[key] += sign * coeff;
  }

  const sorted = Object.entries(map)
    .filter(([_, coeff]) => coeff !== 0)
    .sort((a, b) => {
      if (a[0].length !== b[0].length)
        return a[0].length - b[0].length;
      return a[0] < b[0] ? -1 : 1;
    });

  let result = '';
  for (const [vars, coeff] of sorted) {
    const sign = coeff > 0 ? '+' : '';
    const absCoeff = Math.abs(coeff);
    result +=
      (result === '' && coeff > 0 ? '' : sign) +
      (absCoeff === 1 ? (vars === '' ? '1' : (coeff < 0 ? '-' : '') + vars) : coeff + vars);
  }

  return result;
}
