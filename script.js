
function clear(){

	var inputs = querySelectionAll('input[type="text]');

	for (var i = 0; i< inputs.length; i++) inputs[i].value = "";
}

function calculate (){
	var astr = document.getElementById("first").value;
	var bstr = document.getElementById("second").value;
	var cstr = document.getElementById("third").value;

	var ops1 = document.getElementById("opList1").options[document.getElementById("opList1").options.selectedIndex].value;
	var ops2 = document.getElementById("opList2").options[document.getElementById("opList2").options.selectedIndex].value;
	var ops3 = document.getElementById("opList3").options[document.getElementById("opList3").options.selectedIndex].value;


	console.log("calculate!");

	var a = Number.parseFloat(astr);
	var b = Number.parseFloat(bstr);
	var c = Number.parseFloat(cstr);

	console.log()
	var res = 0;

	if (ops1 == "+") a = a;
	else if (ops1=="-") a = -a;
	if (ops2 =="+"){
	
	res = a+b;
}
	else if (ops2 =="-"){
	res = a-b;
}


	else if (ops2 =="/"){
	if (b!=0)
	res = a/b;
	else {alert ("Нельзя делить на 0");}
	}

	else if (ops2 =="*"){
	res = a*b;
	}

	if (ops3 =="+"){
	res = res+c;
}
	else if (ops3 =="-"){
	res = res-c;
}


	else if (ops3 =="/"){
	if (c!=0)
	res = res/c;
	else {alert ("Нельзя делить на 0");}
	}

	else if (ops3 =="*"){
	
	res = res*c;
	}

	document.getElementById("result").value = res;
	
}
