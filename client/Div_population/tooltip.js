let arrowSize = 7;

class Tooltip{
	constructor(){
		this.ttVisible = []; // La variable this.ttVisible nous dit si l'infobulle d'indice i est visible ou non
	}
	
	addTooltip(){
		this.ttVisible.push(false);
		return this.ttVisible.length - 1;
	}
	 
	pos(id) {
		if(this.ttVisible[id]) {  // Si la bulle est visible, on calcul en temps reel sa position ideale
			var tt = document.getElementById("tooltip" + id);
			var arw = document.getElementById("arrow" + id);
			var area = document.getElementById("overarea" + id);
			var elem = document.getElementById("charElem" + id);
			tt.style.left = elem.getBoundingClientRect().left + (elem.clientWidth/2 - tt.clientWidth/2) + "px";
			tt.style.top = elem.getBoundingClientRect().top - tt.offsetHeight - arrowSize + "px";
			arw.style.top = tt.getBoundingClientRect().bottom + "px";
			arw.style.left = tt.getBoundingClientRect().left + 10 + "px";
			area.style.height = arrowSize + 4 + "px";
			area.style.width = tt.offsetWidth + "px";					
			area.style.top = tt.getBoundingClientRect().bottom - 2  + "px";
			area.style.left = tt.getBoundingClientRect().left + "px";
		}
	}
	 
	montre(id) {
		if(this.ttVisible[id] == false) { // Si elle est cachée 
			this.affiche(id);
			this.pos(id);//on la positionne
		}
	}
	cache(id) {
		if(this.ttVisible[id]==true) {
			document.getElementById("tooltip" + id).style.visibility="hidden";
			document.getElementById("arrow" + id).style.visibility="hidden";
			document.getElementById("overarea" + id).style.visibility="hidden";
			this.ttVisible[id] = false;
		}
	}
	
	affiche(id){
		document.getElementById("tooltip" + id).style.visibility="visible"; //on rend la bulle visible.
		document.getElementById("arrow" + id).style.visibility="visible"; //flèche qui orriente l'infobulle
		document.getElementById("overarea" + id).style.visibility="visible"; //area qui prend le relais quand la souris est dans le vide entre l'infobulle et l'élément lié
		this.ttVisible[id] = true;
	}
}
