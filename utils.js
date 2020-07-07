function activateAnimation(element) {
	const circleY = document.querySelector('.circle').offsetLeft
	const circleX = document.querySelector('.circle').offsetTop

	element.style.top = circleX + 1 - 1
	element.style.left = circleY + 1 - 1
}


function getRandomColor() {
	const colorList = ['green', 'red', 'blue', 'orange', 'brown', 'gray', 'yellow', 'pink', 'purple', 'black']
	let randomColor = colorList[Math.floor(Math.random() * colorList.length)]
	return randomColor
}


function getRandomMoves() {
	const possibleMoves = ['up', 'down', 'left', 'right', 'up left', 'up right', 'down left', 'down right']

	let randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]

	return randomMove
}

