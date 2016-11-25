var getRandom = require('./random');
var deadPres = require('./currency');


var print = {
	balance: function () {
		return "Account balance: \n";
	},
	money: function () {
		var green = deadPres(getRandom(100, 1000000));
		return green;
	},
};

module.exports = print;
