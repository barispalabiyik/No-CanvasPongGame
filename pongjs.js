(function () {
    var CSS = {
        arena: {
            width: 900,
            height: 600,
            background: 'black',
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: '999',
            transform: 'translate(-50%, -50%)'
        },
        ball: {
            width: 15,
            height: 15,
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: 50,
            background: 'red'
        },
        line: {
            width: 0,
            height: 600,
            borderLeft: '2px dashed #C6A62F',
            position: 'absolute',
            top: 0,
            left: '50%'
        },
        stick: {
            width: 12,
            height: 85,
            position: 'absolute',
            background: '#C6A62F',


        },
        stick2: {
            width: 12,
            height: 85,
            position: 'absolute',
            background: '#C6A62F'


        },
        stick1: {
            left: 0,
            top: 150
        },
        stickk2: {
            left: 888,
            top: 150
        },

    };


    var CONSTS = {
        gameSpeed: 20,
        score1: 0,
        score2: 0,
        stick1Speed: 0,
        stick2Speed: 0,
        ballTopSpeed: 0,
        ballLeftSpeed: 0
    };

    function start() {
        draw();
        setEvents();
        roll();
        loop();
    }

    function draw() {
        $('<div/>', {
            id: 'pong-game'
        }).css(CSS.arena).appendTo('body');
        $('<div/>', {
            id: 'pong-line'
        }).css(CSS.line).appendTo('#pong-game');
        $('<div/>', {
            id: 'pong-ball'
        }).css(CSS.ball).appendTo('#pong-game');
        $('<div/>', {
            id: 'stick-1'
        }).css($.extend(CSS.stick1, CSS.stick)).appendTo('#pong-game');
        $('<div/>', {
            id: 'stick-2'
        }).css($.extend(CSS.stick2, CSS.stickk2)).appendTo('#pong-game');





    }


    function setEvents() {
        $(document).on('keydown', function (e) {
            if (e.keyCode == 87) {
                CONSTS.stick1Speed = -30;
                event.preventDefault();
            }
        });

        $(document).on('keyup', function (e) {
            if (e.keyCode == 87) {
                CONSTS.stick1Speed = 0;
                event.preventDefault();
            }
        });
        $(document).on('keydown', function (e) {
            if (e.keyCode == 83) {
                CONSTS.stick1Speed = 30;
                event.preventDefault();
            }
        });

        $(document).on('keyup', function (e) {
            if (e.keyCode == 83) {
                CONSTS.stick1Speed = 0;
                event.preventDefault();
            }
        });

        $(document).on('keydown', function (e) {
            if (e.keyCode == 38) {
                CONSTS.stick2Speed = -30;
                event.preventDefault();
            }
        });

        $(document).on('keyup', function (e) {
            if (e.keyCode == 38) {
                CONSTS.stick2Speed = 0;
                event.preventDefault();
            }
        });
        $(document).on('keydown', function (e) {
            if (e.keyCode == 40) {
                CONSTS.stick2Speed = 30;
                event.preventDefault();
            }
        });

        $(document).on('keyup', function (e) {
            if (e.keyCode == 40) {
                CONSTS.stick2Speed = 0;
                event.preventDefault();
            }

        });

    }

    function loop() {
        window.pongLoop = setInterval(function () {

            CSS.stick1.top += CONSTS.stick1Speed;
            $('#stick-1').css('top', CSS.stick1.top);
            CSS.stick2.top += CONSTS.stick2Speed;
            $('#stick-2').css('top', CSS.stick2.top);
            CSS.ball.top += CONSTS.ballTopSpeed;
            CSS.ball.left += CONSTS.ballLeftSpeed;

            if (CSS.stick2.top <= 0 ||
                CSS.stick2.top >= CSS.arena.height - CSS.stick.height) {
                CONSTS.stick2Speed = 0;
            }
            if (CSS.stick1.top <= 0 ||
                CSS.stick1.top >= CSS.arena.height - CSS.stick.height) {
                CONSTS.stick1Speed = 0;
            }

            if (CSS.ball.top <= 0 ||
                CSS.ball.top >= CSS.arena.height - CSS.ball.height) {
                CONSTS.ballTopSpeed = CONSTS.ballTopSpeed * -1;
            }






            $('#pong-ball').css({
                top: CSS.ball.top,
                left: CSS.ball.left
            });

            if (CSS.ball.left <= CSS.stick.width) {

                CSS.ball.top > CSS.stick1.top && CSS.ball.top < CSS.stick1.top + CSS.stick.height && (CONSTS.ballLeftSpeed = CONSTS.ballLeftSpeed * -1) || CONSTS.score1++ && roll();


            }

            if (CSS.ball.left >= CSS.arena.width - CSS.ball.width - CSS.stick.width) {

                CSS.ball.top > CSS.stick2.top && CSS.ball.top < CSS.stick2.top + CSS.stick.height && (CONSTS.ballLeftSpeed = CONSTS.ballLeftSpeed * -1) || CONSTS.score2++ && roll();

            }
        }, CONSTS.gameSpeed);
    }




    function roll() {

        document.getElementById("skor").innerHTML = "2. Player Score: " + CONSTS.score1;
        document.getElementById("skor2").innerHTML = "1. Player Score: " + CONSTS.score2;




        CSS.ball.top = 250;
        CSS.ball.left = 350;

        var side = -1;

        if (Math.random() < 0.5) {
            side = 1;
        }

        CONSTS.ballTopSpeed = Math.random() * -2 - 3;
        CONSTS.ballLeftSpeed = side * (Math.random() * 2 + 3);


    }

    start();

})();