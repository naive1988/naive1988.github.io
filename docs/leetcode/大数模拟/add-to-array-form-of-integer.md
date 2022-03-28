```js
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const res = []
    let i
    for (i = num.length - 1; i > -1 && k; i -= 1) {
        const v = k % 10 + Number(num[i])
        k = ~~(k / 10)
        if (v >= 10) {
            k += 1
            res.unshift(v - 10)
        } else {
            res.unshift(v)
        }
    }

    while (k) {
        res.unshift(k % 10)
        k = ~~(k / 10)
    }
    for (; i > -1; i -= 1) {
        res.unshift(num[i])
    }

    return res
};
```
