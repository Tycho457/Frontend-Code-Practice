// generator可以按需一个接一个返回（“yield”）多个值

// 创建generator函数
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  let generator1 = generateSequence();
  alert(generator1); // [object Generator]

// next方法
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
  let generator = generateSequence();
  
  let one = generator.next();
  alert(JSON.stringify(one)); // {value: 1, done: false}

  let two = generator.next();
  alert(JSON.stringify(two)); // {value: 2, done: false}

  let three = generator.next();
  alert(JSON.stringify(three)); // {value: 3, done: done}

// generator是可迭代的
let generator2 = generateSequence();

for(let value of generator) {
    alert(value); //1,然后2，但不会显示3
}


// generator组合
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  
  alert(str); // 0..9A..Za..z