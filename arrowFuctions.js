function Fn(){
    this.prop = 'propiedad';
    return 'Una funcion que retorna esto'

}
Fn.prototype.lala = function funcionDePrototipo(){}
const r =  new Fn()
console.log(r.__proto__) 
//Fat arrow fuction 

const fatFn = () => {  //no tienen contexto de this dentro de las arrowFuctions
   this.prop = 'lalas'
}
const r1 = fatFn()

console.log(r1);

//return implcito
const fnR = () => 2
console.log(fnR())