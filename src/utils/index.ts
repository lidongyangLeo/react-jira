export const isFalsy = (value: any) => (value === 0 ? false : !value);

// 在一个函数里， 改变传入的对象本身是不好的
export const cleanObject = (object: any) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    // 0
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
