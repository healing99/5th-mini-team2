export const cut = (arr = [], size) =>
  arr.reduce((acc, cur, idx) => {
    const depth = Math.floor(idx / 4);
    if (idx % size === 0) acc.push([cur]);
    else acc[depth].push(cur);

    return acc;
  }, []);
