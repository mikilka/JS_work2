var names = [''];
names.lenghts = 5;

for (var i = 0; i < 5; i++) {
	names[i] = prompt('enter name:', '');
	}

var userName = prompt('enter user name:', '');
var compare = 0;

for (var i = 0; i < 5; i++) {
	if (userName == names[i]) {
		compare++;
	}
}

if (compare == 1) {
 alert(userName + ', вы успешно вошли.');
} else {
	alert('wrong user name');
}
