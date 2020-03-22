
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
      return [];
    }

    return matrix.reduce((prev, next, index) => (index % 2 !== 0)
        ? prev.concat(next.reverse())
        : prev.concat(next)
        , []);
}
