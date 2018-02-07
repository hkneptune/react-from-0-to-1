//静态变量
export var firstName = "jainqiang";
export var lastName = "bao";
export var year = "1982";

var firstName2 = "jainqiang2";
var lastName2 = "bao2";
var year2 = "1982 2";

export {firstName2, lastName2, year2};

//动态变量
export var foo = 'bar';
setTimeout(()=>foo='baz', 10000);

//---------------------------------------------

//函数
export function multiply(x, y) {
  return x * y;
};

function add(x, y) {
  return x + y;
}

export {
  add as add2,
  add as add3
};

//---------------------------------------------
export {devide as devide2} from './anthoerprofile'



