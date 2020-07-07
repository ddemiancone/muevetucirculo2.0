const MOVEMENT_DISTANCE = 60

window.onload = function() {

	// IDENTIFICATIONS

		const allButtons = document.querySelectorAll('.button')
		const buttonUp = document.querySelector('.button-up')
		const buttonLeftUp = document.querySelector('.button-up-left')
		const buttonRightUp = document.querySelector('.button-up-right')
		const buttonLeft = document.querySelector('.button-left')
		const buttonRight = document.querySelector('.button-right')
		const buttonDown = document.querySelector('.button-down')
		const buttonLeftDown = document.querySelector('.button-down-left')
		const buttonRightDown = document.querySelector('.button-down-right')
		const buttonRandom = document.querySelector('.button-random')
		const buttonStopRandom = document.querySelector('.button-stop-random')
		const colorPad = document.querySelector('.colorPad')
		const colorToRed = document.querySelector('.color-red')
		const colorToGreen = document.querySelector('.color-green')
		const colorToBlue = document.querySelector('.color-blue')
		const circle = document.querySelector('.circle')
		const music = document.querySelector('audio')
		const container = document.querySelector('.container')		

		console.log(music)
		
	// ANIMATION	

		const animation = activateAnimation(circle)

	// FUNCTIONS

		function moveToLeft () {
			const circleY = document.querySelector('.circle').offsetLeft
			circle.style.left = circleY - MOVEMENT_DISTANCE
		}

		function moveToRight () {
			const circleY = document.querySelector('.circle').offsetLeft
			circle.style.left = circleY + MOVEMENT_DISTANCE
		}

		function moveToUp () {
			const circleX = document.querySelector('.circle').offsetTop
			circle.style.top = circleX - MOVEMENT_DISTANCE
		}

		function moveToDown () {
			const circleX = document.querySelector('.circle').offsetTop
			circle.style.top = circleX + MOVEMENT_DISTANCE
		}

		function setRandomColor()	{
			const randomColor = getRandomColor()
			circle.style.background = randomColor
			buttonRandom.style.background = randomColor
			colorPad.classList.add('bouncePad')
		}		

		function randomMovement() {

			buttonStopRandom.style.visibility = 'visible'
			let randomMove = getRandomMoves()

			if (randomMove === 'up') {
				moveToUp()
			}

			else if (randomMove === 'down') {
				moveToDown()
			}

			else if (randomMove === 'left') {
				moveToLeft()
			}

			else if (randomMove === 'right') {
				moveToRight()
			}

			else if (randomMove === 'up left') {
				moveToLeft()
				moveToUp()
			}

			else if (randomMove === 'up right') {
				moveToRight()
				moveToUp()
			}

			else if (randomMove === 'down left') {
				moveToDown()
				moveToLeft()
			}

			else if (randomMove === 'down right') {
				moveToDown()
				moveToRight()
			}

			returnCircle()
		}

		buttonRandom.onclick = function() {
			music.play()
			setInterval(randomMovement, 300)
			setInterval(setRandomColor, 200)
		}

		buttonStopRandom.onclick = function() {
			location.reload()
		}	
		

	// MOVE WITH KEYS

		window.onkeydown = function(e) {
			
			if (e.key === 'ArrowLeft') {
				moveToLeft()
			}

			else if (e.key === 'ArrowUp') {
				moveToUp()
			}

			else if (e.key === 'ArrowRight') {
				moveToRight()
			}

			else if (e.key === 'ArrowDown') {
				moveToDown()
			}

			returnCircle()
		}

	// MOVE WITH BUTTONS

 	 	window.onclick = function(e) {

	 	 	if (e.target === buttonUp) {
	 	 		moveToUp()
	 	 	}

	 	 	else if (e.target === buttonLeftUp) {
	 	 		moveToUp()
	 	 		moveToLeft()
	 	 	}

	 	 	else if (e.target === buttonRightUp) {
	 	 		moveToUp()
	 	 		moveToRight()
	 	 	}

	 	 	else if (e.target === buttonDown) {
	 	 		moveToDown()
	 	 	}

	 	 	else if (e.target === buttonLeftDown) {
	 	 		moveToDown()
	 	 		moveToLeft()
	 	 	}

	 	 	else if (e.target === buttonRightDown) {
	 	 		moveToDown()
	 	 		moveToRight()
	 	 	}

	 	 	else if (e.target === buttonLeft) {
	 	 		moveToLeft()
	 	 	}

	 	 	else if (e.target === buttonRight) {
	 	 		moveToRight()
	 	 	}

	 	 	returnCircle()
	 	}	


	 	function returnCircle() {
	 		const width = window.innerWidth
			const height = window.innerHeight
			const circleY = document.querySelector('.circle').offsetLeft
			const circleX = document.querySelector('.circle').offsetTop
			const colorList = ['green', 'red', 'blue']

			let randomColor = colorList[Math.floor(Math.random() * colorList.length)]


			if (circleX <= 0) {
				container.style = 'box-shadow: inset 0 0 0 5px red'
				setRandomColor()
				circle.style.top = 30
			}

			else if (circleX >= height) {
				container.style = 'box-shadow: inset 0 0 0 5px red'
				setRandomColor()
				circle.style.top = height - 140
			}

			else if (circleY <= 0) {
				container.style = 'box-shadow: inset 0 0 0 5px red'
				setRandomColor()
				circle.style.left = 30
			}

			else if (circleY >= width) {
				container.style = 'box-shadow: inset 0 0 0 5px red'
				setRandomColor()
				circle.style.left = width - 120
			}

			else {
				container.style = 'box-shadow: none'
			}
		}

	// CHANGE COLORS

 	 	colorToGreen.onclick = function() {
 	 		if (circle.style.background != 'green') {
 	 			circle.style.background = 'green'
 	 		}
 	 	}

 	 	colorToBlue.onclick = function() {
 	 		if (circle.style.background = 'blue') {
 	 			circle.style.background = 'blue'
 	 		}
 	 	}

 	 	colorToRed.onclick = function() {
 	 		if (circle.style.background != 'red') {
 	 			circle.style.background = 'red'
 	 		}
 	 	} 	
}

