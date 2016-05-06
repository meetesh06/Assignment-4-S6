function checkBrackets(a) {
	var b = a.split(" ");
	var s_counter = 0;
	var e_counter = 0;
	console.log(b);
	for (var i = 0; i < b.length; i++) {
		if (b[i] == "(")
		{
			console.log('starting brace found');
			s_counter ++;
		} else if (b[i] == ")") {
			console.log('ending brace found');
			e_counter ++; 
		}
	}
	if (s_counter == 0 && e_counter == 0) {
		alert("Invalid Expression")
		console.log('invalid input mate')
	} else if (s_counter == e_counter) {
		alert("Correct Expression")
		console.log('correct');
	} else if(s_counter != e_counter){
		alert("Incorrect Expression")
		console.log('incorrect');
	}
}