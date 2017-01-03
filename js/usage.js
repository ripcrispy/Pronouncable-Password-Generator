function addRow(rowStr) 
{
	var table = document.getElementById("pwdTable");
		
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	
	var strSize = document.getElementById("size").value;
	var firstHalf = rowStr.substring(0, strSize / 2);
	var secondHalf = rowStr.substring(strSize / 2, strSize);
	
	row.insertCell(0).innerHTML = rowStr;
	row.insertCell(1).innerHTML = firstHalf;
	row.insertCell(2).innerHTML = secondHalf;
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function run() 
{
	// Purely for generating 5x passwords on load..
	generate('text');
	generate('text');
	generate('text');
	generate('text');
	generate('text');
}

function generate(idname) 
{
	var x = "";
	var s;
	s = "";

	var g = document.getElementById("size").value - 2;		// Size Value
	var a = 0;
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
	
		if (document.getElementById('symEnable').checked) { // If Symbol and Number Enabled
			
			if (document.getElementById('symPosEnd').checked) {
				x += s + k;
				} else if (document.getElementById('symPosSta').checked) { // Symbol Position Start Requested
					x += k + s;
				}
		} else if (document.getElementById('symDisable').checked) { // If Symbol and Number Disabled
			
			x += s;
		} else if (document.getElementById('symJust').checked) {
			if (document.getElementById('symPosEnd').checked) {
				x += s + sym;
			} else if (document.getElementById('symPosSta').checked) { // Symbol Position Start Requested
					x += sym + s;
			}
			} else if (document.getElementById('numJust').checked) {
				if (document.getElementById('symPosEnd').checked) {
					x += s + num;
				} else if (document.getElementById('symPosSta').checked) { // Symbol Position Start Requested
					x += num + s;
				}
			}
		var v = document.getElementById(idname);
		addRow(v.innerHTML = x);
	}
	return false;
}