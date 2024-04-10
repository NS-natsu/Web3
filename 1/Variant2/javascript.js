// ページの読み込みを待つ
window.addEventListener('DOMContentLoaded', init);

function init(){
	let n = 12;
	
	const target = document.getElementById("multiplication-chart");

	target.style.gridTemplateColumns = 
	target.style.gridTemplateRows = 'repeat(' + (n + 1) + ', 1fr)';

	target.innerHTML = '<div id="head">X</div>';

	for(let c = 1; c <= n; c++){
		target.innerHTML += '<div id="head">' + c +'</div>'
	}

	for(let r = 1; r <= n; r++){
		target.innerHTML += '<div id="head">' + r +'</div>'

		for(let c=1; c <= n; c++){
			target.innerHTML += '<div>' + (c * r) +'</div>'
		}
	}
}