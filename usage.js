// Function to handle first letter in uppercase (19/02/2014)
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function generate(idname)
{
	var x = "";
  var s;
  s = "";

  // Would like to add the options for prefixes and suffixes.
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

    var sym = ["!","@","#","#","#","$","$","$","%"];
		sym = sym[Math.floor(Math.random() * sym.length)];

    var num = ["1","2","3","3","3","4","4","4","5"];
		num = num[Math.floor(Math.random() * num.length)];

    if (document.getElementById('symEnable').checked) {
      // If Symbol and Number Enabled
      if (document.getElementById('symPosEnd').checked) {
        x += s + k +"<br />";
      } else if (document.getElementById('symPosSta').checked) {
        // Symbol Position Start Requested
        x += k + s + "<br />";
      }

    } else if (document.getElementById('symDisable').checked) {
      // If Symbol and Number Disabled
      x += s + "<br />";


    } else if (document.getElementById('symJust').checked) {
      if (document.getElementById('symPosEnd').checked) {
        x += s + sym +"<br />";
      } else if (document.getElementById('symPosSta').checked) {
        // Symbol Position Start Requested
        x += sym + s + "<br />";
      }

    } else if (document.getElementById('numJust').checked) {
      if (document.getElementById('symPosEnd').checked) {
        x += s + num +"<br />";
      } else if (document.getElementById('symPosSta').checked) {
        // Symbol Position Start Requested
        x += num + s + "<br />";
      }
    }



  } // end while

	var v = document.getElementById(idname);
	v.innerHTML = x;

	return false;
} // generate
