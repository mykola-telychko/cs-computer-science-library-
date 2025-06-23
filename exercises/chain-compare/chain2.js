function expect(first) {
  return {
    toBe(second) {
      if (first === second) {
        return {value: true};
      } else {
        return {"error": "Not Equal"};
      }
    },
    toEqual(second) {
      if (JSON.stringify(first) === JSON.stringify(second)) {
        return {value: true};
      } else {
        return {"error": "Not Equal"};
      }
    },
    notToBe(second) {
        if (first !== second) {
          return {value: true};
        } else {
          return {"error": "Not Equal"};
        }
    }
  };
}

  console.log('expect(5).toBe(5)', expect(5).toBe(5));
  console.log( expect("hello").toBe("hello"));
  console.log( expect([1, 2]).toEqual([1, 2]));
  console.log( expect({ a: 1 }).toEqual({ a: 1 }));
  console.log( expect({ a: 1 }).toEqual({ a: 2 }));
  console.log('expect(5).notToBe(10)', expect(5).notToBe(10) );
