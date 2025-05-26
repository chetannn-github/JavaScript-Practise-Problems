// let deepCloneObjects = (obj) => {
//     return {...obj};  // yh sirf ek level tk hii deep clone kregaa
// }
// let og = {a:2, c: {b: 32}};
// let cloned = deepCloneObjects(og)

// console.log(cloned);
// cloned.a = 3;
// cloned.c.b = 2112;
// console.log(og);


// isme dikkt hain jb object me method hoge tb wo value lost ho jaaegiii

// let deepCloneObjects = (obj) => {
//     return JSON.parse(JSON.stringify(obj));  
// }
// let og = {a:2, c: {b: 32}, d: ()=>{}}
// let cloned = deepCloneObjects(og)

// console.log(cloned);
// cloned.a = 3;
// cloned.c.b = 2112;
// console.log(og);



// manually function likhnaa 


export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
  
    if (Array.isArray(obj)) {
      return obj.map(val => deepClone(val));
    }
  
    const cloned = {};
    for (let key in obj) {
      cloned[key] = deepClone(obj[key]);
    }
    return cloned;
  }
  
  const original = {
    name: "Chetan",
    scores: undefined,

  };
  
  const copy = deepClone(original);

  console.log(copy)
  