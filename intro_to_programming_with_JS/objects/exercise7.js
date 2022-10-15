let myProtoObj = {
	foo: 1,
	bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Snippet 1

// This will log only myObj object's own keys, not inherited keys.

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
	console.log(key);
});

// Snippet 2

// This will log both myObj object's keys and keys inherited from myProtoObj - myObj's prototype

for (let key in myObj) {
	console.log(key);
}
