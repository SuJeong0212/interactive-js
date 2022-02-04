(function () {
    'use strict'

    const get = (element) => document.querySelector(element)

    const keyEvent = (control,func) => {
        document.addEventListener(control, func, false)
    }

    class BrickBreak {
        constructor(parent = 'body', data = {}) {
            this.parent = get(parent)
            this.canvas = document.createElement('canvas')
            this.canvas.setAttribute('width', 480)
            this.canvas.setAttribute('height', 340)
            this.ctx = this.canvas.getContext('2d')
            this.fontFamily = "20px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
            this.score = 0
            this.lives = data.lives
            this.speed = data.speed
            this.image = document.createElement('img')
            this.bg = data.bg
            this.radius = 10
            this.ballX = this.canvas.width / 2
            this.ballY = this.canvas.height - 30
            this.directX = data.speed
            this.directY = data.speed
            this.paddleWidth = data.paddleWidth
            this.paddleHeight = data.paddleHeight
            this.rightPressed = false
            this.leftPressed = false
            this.paddleX = (this.canvas.width - this.paddleWidth) / 2
            this.brickRow = data.brickRow
            this.brickCol = data.brickCol
            this.brickWidth = data.brickWidth
            this.brickHeight = data.brickHeight
            this.brickPad = data.brickPad
            this.brickPosX = data.brickPosX
            this.brickPosY = data.brickPosY
            this.ballColor = data.ballColor
            this.paddleColor = data.paddleColor
            this.fontColor = data.fontColor
            this.brickStartColor = data.brickStartColor
            this.brickEndColor = data.brickEndColor
            this.image.setAttribute('src', this.bg)
            this.parent.appendChild(this.canvas)
            this.bricks = []
        }

        init = () => {
            for (let colIndex = 0; colIndex < this.brickCol; colIndex++) {
                this.bricks[colIndex] = []
                for (let rowIndex = 0; rowIndex < this.brickRow; rowIndex++) {
                    this.bricks[colIndex][rowIndex] = {
                        x: 0,
                        y: 0,
                        status: 1
                    }
                }
            }
            this.keyEvent()
            this.draw()
        }

        keyupEvent = (event) =>{
            if('Right' === event.key || 'ArrowRight' === event.key){
                this.rightPressed = false
            }else if('Left' === event.key || 'ArrowLeft' === event.key){
                this.leftPressed = false
            }
        }

        keydownEvent = (event) =>{
            if('Right' === event.key || 'ArrowRight' === event.key){
                this.rightPressed = true
            }else if('Left' === event.key || 'ArrowLeft' === event.key){
                this.leftPressed = true
            }
        }

        mousemoveEvent = (event) =>{
            const positionX = event.clientX - this.canvas.offsetLeft

            if(0 < positionX && positionX < this.canvas.width){
                this.paddleX = positionX - this.paddleWidth / 2
            }
        }

        keyEvent = () =>{
            keyEvent('keyup', this.keyupEvent)
            keyEvent('keydown', this.keydownEvent)
            keyEvent('mousemove', this.mousemoveEvent)
        }

        drawBall = () =>{
            this.ctx.beginPath()
            this.ctx.fillStyle = this.ballColor
            this.ctx.arc(this.ballX, this.ballY, this.radius, 0, Math.PI * 2)
            this.ctx.fill()
            this.ctx.closePath()
        }

        drawPaddle = () =>{
            this.ctx.beginPath()
            this.ctx.rect(
                this.paddleX,
                this.canvas.height - this.paddleHeight,
                this.paddleWidth,
                this.paddleHeight
            )
            this.ctx.fillStyle = this.paddleColor
            this.ctx.fill()
            this.ctx.closePath()
        }

        drawBricks = () =>{
            let brickX = 0
            let brickY = 0
            let gradient = this.ctx.createLinearGradient(0, 0, 200, 0)
            gradient.addColorStop(0, this.brickStartColor)
            gradient.addColorStop(1, this.brickEndColor)

            for(let colIndex = 0; colIndex < this.brickCol; colIndex++){
                for(let rowIndex = 0; rowIndex < this.brickRow; rowIndex++){
                    if(1 !== this.bricks[colIndex] [rowIndex].status){
                        continue
                    }
                    brickX =colIndex * (this.brickWidth + this.brickPad) + this.brickPosX
                    brickY =rowIndex * (this.brickHeight + this.brickPad) + this.brickPosY

                    this.bricks[colIndex] [rowIndex].x = brickX
                    this.bricks[colIndex] [rowIndex].y = brickY

                    this.ctx.beginPath()
                    this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight)
                    this.ctx.fillStyle = gradient
                    this.ctx.fill()
                    this.ctx.closePath()
                }
            }
        }

        drawScore = () =>{
            this.ctx.font = this.fontFamily
            this.ctx.fillStyle = '#fff'
            this.ctx.fillText('점수 : ' + this.score, 10, 25)
        }

        drawLives = () =>{
            this.ctx.font = this.fontFamily
            this.ctx.fillStyle = '#fff'
            this.ctx.fillText('목숨 : ' + this.lives, this.canvas.width - 40, 25)
        }

        draw = () => {
            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)

            this.ctx.drawImage(
                this.image,
                this.canvas.width / 2 - this.image.width / 2,
                this.canvas.height / 2 - this.image.height / 2,
            )

            this.drawBall()
            this.drawPaddle()
            this.drawBricks()
            this.drawScore()
            this.drawLives()
            // this.detectCollision()

            if(this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
                this.paddleX += 7
            }else if(this.leftPressed && 0 < this.paddleX){
                this.paddleX -= 7
            }

            this.ballX += this.directX
            this.ballY -= this.directY

            requestAnimationFrame(this.draw)
        }

        // reset = () => {
        //     document.location.reload()
        // }
    }

    const data = {
        lives: 5,
        speed: 2,
        paddleHeight: 10,
        paddleWidth: 75,
        bg:'./assets/images/game.jpg',
        ballColor: "#ff9",
        paddleColor: "#e27575",
        fontColor: "#f2bb16",
        brickStartColor: "#f29f05",
        brickEndColor: "#f37712",
        brickRow: 3,
        brickCol: 5,
        brickWidth: 75,
        brickHeight: 20,
        brickPad: 10,
        brickPosX: 30,
        brickPosY: 30,
    }

    const brickBreak = new BrickBreak('.canvas', data)
    brickBreak.init()
})()