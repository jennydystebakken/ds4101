const HeartBook = {

    htmlWrap: null,

    image: null,

    output: null,

    filepath: "images/profiles/",

    init() {

        const HB = HeartBook;

        const elements = function () {
            HB.htmlWrap = $("<div>")
            HB.output = $("<div>", {
                id: "output"
            })
        }()

        const GUI = function () {
            let he = $("<h3>", {
            })

            let btn = $(".btn")
            .css({
                margin: "15px",
                width: "150px",
                height: "50px",
                background: "#D88898",
                borderRadius: "10px",
                border: "none",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "15px",
                color: "#FFFFFF",
                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",

            })

            let all = $("#all")
            .on("click", function () {
                HB.getPictures(HeartbookModule.getAll());
            })

            let women = $("#women")
                .on("click", function () {
                  HB.getPictures(HeartbookModule.getWomen());
                })

            let men = $("#men")
            .on("click", function () {
                HB.getPictures(HeartbookModule.getMen());
            })

            /*let bio = $("#description")
            .on("click", function () {
                HB.getInformation();
            })*/

            let student = $("#students")
            .on("click", function() {
                HB.getPictures(HeartbookModule.getStudent());
            })

            let teacher = $("#teachers")
            .on("click", function() {
                HB.getPictures(HeartbookModule.getTeacher());
            })

            HB.htmlWrap.append(he, all, men, women, student, teacher, HB.output)

        }()

        return HB.htmlWrap
    },
    getPictures(person) {
      $("#output").empty()
        let out = $("#output")

        for (let i = 0; i < person.length; i++) {
            let picture = $("<img>", {
                src: "images/profiles/" + person[i].imagesrc + ".png"
                })
                .on("click", function (){
                  $(`<h3>${person[i].name}</h3`)
                })
                .appendTo(out)
            }
        }
}
