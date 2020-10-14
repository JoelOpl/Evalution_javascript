function computeNotes(a) {
  var b = a.length,
    c = 0,
    i;
  for (i = 0; i < b; i++) {
    c += Number(a[i]);
  }

  return c / b;
}

numAverage([5, 1, 1, 1, 5]);
