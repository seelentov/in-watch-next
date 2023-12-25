export const clearEmptyAttrs = (obj: any) => {
  let result: any = {};
  for (let prop in obj) {
    for (let value in obj[prop]) {
      if (obj[prop][value].length != 0) {
        result[prop] = obj[prop];
      }
    }
  }

  return result
}