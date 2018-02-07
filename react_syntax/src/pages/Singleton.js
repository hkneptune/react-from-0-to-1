let __instance = (function () {
	let instance;
	return (newInstance) => {
		if (newInstance) instance = newInstance;
		return instance;
	}
}());

class Singleton {
	
	constructor() {
		if (__instance())
			return __instance();
		
		//按自己需求实例化
		this.foo = 'bar';
		__instance(this);
	}
}
export default Singleton;