let areaX = 200, areaY = 200;
let middleDiameter = 150, smallDiameter = 90;
let bigDiameter = 250 - smallDiameter / 3;

function setup() {
  createCanvas(400, 400);

}

function determineCathetus(bigHypothenuse, smallHypothenuse) {
	let bigCathetus1 = abs(areaX - mouseX);
	let bigCathetus2 = abs(mouseY - areaY);

	let proportion1 = bigCathetus1 / bigHypothenuse;
	let proportion2 = bigCathetus2 / bigHypothenuse;

	let smallCathetus1 = smallHypothenuse * proportion1;
	let smallCathetus2 = smallHypothenuse * proportion2;

	return [smallCathetus1, smallCathetus2];
}

function draw() {
    background(255);

	stroke(0);
	strokeWeight(2);
	fill(235, 45, 170)
	fill(255);
	circle(areaX, areaY, bigDiameter + smallDiameter / 3);

	stroke(0);
	strokeWeight(0);
	fill(235, 45, 170)
	fill(255);
	circle(areaX, areaY, bigDiameter);

	if (mouseIsPressed) {
		let bigHypothenuse = abs(dist(mouseX, mouseY, areaX, areaY));
		let smallHypothenuse = bigHypothenuse - bigDiameter / 2;
		
		if(bigHypothenuse > bigDiameter / 2) {
			let catethus = determineCathetus(bigHypothenuse, smallHypothenuse);
			let showX, showY;

			if (mouseX >= 200 && mouseY >= 200) {
				showX = mouseX - catethus[0];
				showY = mouseY - catethus[1];
			}
			else if (mouseX <= 200 && mouseY >= 200) {
				showX = mouseX + catethus[0];
				showY = mouseY - catethus[1];
			}
			else if (mouseX <= 200 && mouseY <= 200) {
				showX = mouseX + catethus[0];
				showY = mouseY + catethus[1];
			}
			else if (mouseX >= 200 && mouseY <= 200) {
				showX = mouseX - catethus[0];
				showY = mouseY + catethus[1];
			}

			strokeWeight(0);
			fill(255, 0, 0)
			circle(showX, showY, middleDiameter);
			fill(176, 2, 13);
			circle(showX, showY, smallDiameter);
			
		}
		else {
			stroke(0);
			strokeWeight(0);
			fill(255, 0, 0)
			circle(mouseX, mouseY, middleDiameter);
			fill(176, 2, 13);
			circle(mouseX, mouseY, smallDiameter);
		}
	}
	else {
		stroke(0);
		strokeWeight(0);
		fill(255, 0, 0)
		circle(areaX, areaY, middleDiameter);
		fill(176, 2, 13);
		circle(areaX, areaY, smallDiameter);
	}
}
