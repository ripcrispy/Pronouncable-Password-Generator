// Function to handle first letter in uppercase (19/02/2014)
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Doesn't work, I don't know jQuery yet.
$(document).ready(function(){ 
//Start Here 
});

function generate(idname) 
{
	var x = "";
	var s;
	s = "";

	var g = document.getElementById("size").value - 2;		// Size Value
	var a = document.getElementById("amount").value - 1;	// Amount Value
	var h = 0;												// Reset for Loop
	
	while (h <= a)
	{
		var k = ["1!","2@","3#","3#","3#","4$","4$","4$","5%"];
		h++;
		k = k[Math.floor(Math.random() * k.length)];
		s = GPW.pronounceable(g);
		s = toTitleCase(s);
		x += s + k +"\n";
	}
	
	var v = document.getElementById(idname);
	v.innerHTML = x;
	
	return false;
} // generate

