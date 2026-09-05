/*
PALINDROME NUMBER FUN

I came up for the premise of this program in 2022. I could have sworn I coded it but it seems I never backed up the file.

The Premise:
- Take a positive integer (call it i)
- Until i is 0:
  - Find i's palindrome number (call it j)
  - Subtract i from j (take Absolute Value), call it k
  - If k is not zero:
    - Divide k by 9 (call it m)
    - Ensure m is an integer
    - Set i to m
- Return the number of iterations until i became 0

What does it mean? No one knows, it's provocative.

There are many number secrets with seemingly no application; this is just another.
*/

function getPal(input){
	let result = 0;

	while(input > 0){
		const mod = input % 10;
		result = (result * 10) + mod;
		input = Math.floor(input / 10);
	}
	return result;
}

function palfunrecursive(i, x){
	if(i == 0){
		return x;
	}else{
		const j = getPal(i);
		const k = Math.abs(i - j);
		const m = k / 9;
		if(Number.isInteger(m)){
			return palfunrecursive(m, x + 1);
		}else{
			return -1;
		}
	}
}

function palfunverbose(i){
	let output = "";
	x = 0;
	while(i != 0 && x < 10000){
		const j = getPal(i);
		const k = Math.abs(i - j);
		output = output + i.toString() + " - " + j.toString() + " = " + k.toString() + "\n";

		const m = k / 9;
		output = output + k.toString() + " / 9 = " + m.toString() + "\n";

		if(Number.isInteger(m)){
			i = m;
			output = output + "\n";
			x++;
		}else{
			return output + "\n" + "Failure, result is not an integer";
		}
	}
	
	if(i == 0){
		output = output + "\n" + "Result became 0 in " + x.toString() + " iterations.";
		return output;
	}

	return "Failure, 10000 iterations were attempted without solution being found";
}

function solveVerbose(){
	console.log("Made it to verbose solve");
	document.getElementById("output").innerText = "Solving...";
	const input = document.getElementById("input").value;
	const output = palfunverbose(input);
	document.getElementById("output").innerText = output;
}

// Helper to yield control to the main thread
const yieldToMain = () => {
  return new Promise(resolve => {
    // requestAnimationFrame ensures the DOM repaints before continuing
    requestAnimationFrame(() => setTimeout(resolve, 0));
  });
};

async function solveLong(){
	const min = document.getElementById("min").value;
	const max = document.getElementById("max").value;
	const outputObj = document.getElementById("output");
	let outstr = "";
	for(let i = min; i <= max; i++){
		const out = palfunrecursive(i, 0);
		outstr = i.toString() + ": " + out.toString() + " iterations\n" + outstr;
		outputObj.innerText = outstr;
		await yieldToMain();
	}
	return Promise.resolve(1);
}