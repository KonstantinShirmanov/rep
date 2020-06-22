
function calculate (){
	alert("yeyyy!");
	
	var a = +document.getElementById("first").text;
	var b = +document.getElementById("second").text;
	var c = +document.getElementById("third").text;
	var ops1 = document.getElementById("opList1").options[document.getElementById("opList1").options.selectedIndex].text;
	var ops2 = document.getElementById("opList2").options[document.getElementById("opList2").options.selectedIndex].text;
	var ops3 = document.getElementById("opList3").options[document.getElementById("opList3").options.selectedIndex].text;

	var res = 0;

	if (ops1 == "+") a = +document.getElementById("first").text;
	else if (ops1=="-") a = -document.getElementById("first").text;
	if (ops2 =="+"){
	
	res += (a+b);
}
	else if (ops2 =="-"){
	b = +document.getElementById("second").text;
	res += (a-b);
}


	else if (ops2 =="/"){
	if (b!=0)
	res += (a/b);
	else {alert ("Нельзя делить на 0");}
	}

	else if (ops2 =="*"){
	b = +document.getElementById("second").text;
	res += (a*b);
	}

	if (ops3 =="+"){
	res += (res+c);
}
	else if (ops3 =="-"){
	res += (res-c);
}


	else if (ops3 =="/"){
	if (c!=0)
	res += (res/c);
	else {alert ("Нельзя делить на 0");}
	}

	else if (ops3 =="*"){
	
	res += (res*c);
	}

	document.getElementById("result").text = res+"";
	console.log(res);
	
}
function clear (){
	document.getElementById("result").text = null;
	document.getElementById("first").text = null;
	document.getElementById("second").text = null;
	document.getElementById("third").text = null;
}