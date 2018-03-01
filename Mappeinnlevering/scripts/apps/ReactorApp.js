const ReactorApp = {
    wrapper: null,

    init() {
        const RA = ReactorApp
        const elements = function () {
            RA.wrapper = $('<div id=wrapper>')
        }()

        const gui = function () {
            /*Header*/
            $("#header")
                .css({
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "1000px",
                    marginTop: "20px",
                    marginBottom: "0px",
                    fontSize: "50px"
                })
            
            $("#undertittel")
                .css({
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "1000px",
                    marginTop: "0px",
                    marginBottom: "40px",
                    fontSize: "20px"
                })
            
            /*SVG bilde*/
            $("#Atomreaktor")
                .css({
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "1000px",
                    marginTop: "50px",
                    marginBottom: "50px"
                })

            $("#rect8182, #rect8172, #rect8178")
                .css({
                    fill: "#E1EEED"
                })

            /*Infoboks*/
            $(function () {
                $("#infoboks").accordion();
            });
            
            $(".boks")
                .css({
                    backgroundColor: "#F4F6F7"
                })

            $("#infoboks")
                .css({
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "600px"
                })

            $(".overskrift")
                .css({
                    color: "#FFFFFF",
                    backgroundColor: "#828A95",
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    fontSize: "18px"
                
                })

            $(".faktatekst")
                .css({
                    textAlign: "left",
                    width: "500px"
                })

            /*Slider*/
            $("#slider")
                .css({
                    height: "15px",
                    width: "200px",
                    backgroundColor: "gradient(red, blue)"
                })

            let div = $('<div class="MyClass">')

            let slider = $('<div id="slider">')


            let btn1 = $('<button>')
                .text('Start reaktor 1')
                .css({
                    marginBottom: "10px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "150px",
                    height: "50px",
                    background: "#828A95",
                    borderRadius: "10px",
                    border: "none",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "15px",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                })
                .on('click', function () {
                    /*Skriver hva knappen gjør*/
                    RA.coolDown()
                    RA.ArrowShakingVFast()
                    RA.arrowShakingVSlow()
                })

            let btn2 = $('<button>')
                .text('Start reaktor 2')
                .css({
                    marginBottom: "40px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "150px",
                    height: "50px",
                    background: "#828A95",
                    borderRadius: "10px",
                    border: "none",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "15px",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                })
                .on('click', function () {
                    /*Skriver hva knappen gjør*/
                    RA.arrowShakingHSlow()
                    RA.arrowShakingHFast()
                    RA.rotatePumpH()

                })
            div.append(btn1, btn2)

            RA.wrapper.append(div, slider)
        }() /*end init*/
        return RA.wrapper
    },
    arrowShakingHSlow() {
        console.log("HI")
        $("#Atomreaktor").css("position", "static")

        $("#3pilerRød, #4pilerBlå").animate({
            transform: "translate(2 2)"
        }, 200, function () {
            $("#3pilerRød, #4pilerBlå").animate({
                transform: "translate(-2 -2)"
            }, 200)
            ReactorApp.arrowShakingHSlow()
        })
    },

    arrowShakingHFast() {
        console.log("HI")
        $("#4pilerRød").css("position", "static")

        $("#4pilerRød").animate({
            transform: "translate(2 2)",
            transorm: "translateY(5)"
        }, 100, function(){
            $("#4pilerRød").animate({
                transform: "translate(-2 -2)"
            }, 100)
            ReactorApp.arrowShakingHFast()
        })
    },

    arrowShakingVSlow() {
        console.log("HI")
        $("#Atomreaktor").css("position, static")

        $("#3pilerV, #4pilerV").animate({
            transform: "translate(2 2)"
        }, 200, function() {
            $("#3pilerV, #4pilerV").animate({
                transform: "translate(-2 -2)"
            }, 200)
            ReactorApp.arrowShakingVSlow()
        })
    },

    ArrowShakingVFast() {
        console.log("HI")
        $("#Atomreaktor").css("position", "static")

        $("#4pilerRødV").animate({
            transform: "translate(2 2)"
        }, 70, function(){
            $("#4pilerRødV").animate({
                transform: "translate(-2 -2)"
            }, 90)
            ReactorApp.ArrowShakingVFast()
        })
    },

    rotatePumpH() {
        $("#VifteH").animate({
        "-webkit-transform":
        "rotate(360deg)"
        }, 500, function () {
            ReactorApp.rotatePumpH()
        })
        
    },

    
    coolDown() {
        console.log("SLIDER")
        $("#slider").slider({
            min: 50,
            max: 200,
            orientation: "horizontal",
            step: 10,
            values: [150],
            slide: function (event, ui) {
                console.log(ui.value);
                console.log(ui.values[0]);
            }
        }, function () {
            ReactorApp.coolDown()
        })
    } 

}
