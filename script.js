
function calculate (){
	
	

	var astr = document.getElementById("first").text;
	var bstr = document.getElementById("second").text;
	var cstr = document.getElementById("third").text;

	var ops1 = document.getElementById("opList1").options[document.getElementById("opList1").options.selectedIndex].text;
	var ops2 = document.getElementById("opList2").options[document.getElementById("opList2").options.selectedIndex].text;
	var ops3 = document.getElementById("opList3").options[document.getElementById("opList3").options.selectedIndex].text;

	var a = +astr;
	var b = +bstr;
	var c = +cstr;

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

	document.getElementById("result").text = res;
	console.log(res);
	
}
function clear (){
	document.getElementById("result").text = "";
	document.getElementById("first").text = "";
	document.getElementById("second").text = "";
	document.getElementById("third").text = "";
}