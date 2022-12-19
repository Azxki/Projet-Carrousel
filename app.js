//Reset CSS
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";

// Mes divs
div = document.createElement('div');
div2 = document.createElement('div');
document.body.appendChild(div);
document.body.appendChild(div2);
div.id = "img1";
div2.id = "img2";

//Récupération des divs
monDiv = document.getElementById('img1');
monDiv2 = document.getElementById('img2');

//Mes images
img1 = document.createElement('img');
img2 = document.createElement('img');
monDiv.appendChild(img1);
monDiv2.appendChild(img2);

//Affichage des images
img1.src = "01.jfif";
img2.src = "02.jfif";

//Placement de mes images
//img1
img1.style.position = "absolute";
img1.style.width = "50%";
img1.style.marginLeft = "25%";
img1.style.marginTop = "12%";
//img2
img2.style.position = "absolute";
img2.style.width = "50%";
img2.style.marginLeft = "110%";
img2.style.marginTop = "12%";

//Les transitions
//img1
img1.style.transition
//img2
