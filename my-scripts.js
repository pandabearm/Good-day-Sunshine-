//set count

if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
	if (Number(localStorage.getItem("count"))==1) {
		alert ("Great job!") }
	if (Number(localStorage.getItem("count"))==2) {alert ("Wow, you did it again!")}

}

//reset count
function reset() {
	if (confirm("Are you sure you want to reset? Don't be too hard on yourself.")) {
    	localStorage.setItem("count",0);
		update();
	}

}
