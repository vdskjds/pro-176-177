$(document).ready(function(){
    getTemplates()
})
function getTemplates(){
    $.ajax({
        url:"/get-template",
        type:"get",
        success:function(result){
            fillBlanks(result.word)
        },
        error:function(result){
            alert(result.responseJSON.message)
        }
    })
}
var gameOver=false
$(".clickable").click(function(){
    var correctGuess =  false
    let id=$(this).attr("id")
    var life = parseInt($("#life").text())
    for(var i=0;i<randomWord.word.length;i++){
        if(id==randomWord.word.chatAt(i).toLowerCase()== id){
            if(life>0&&($(".fill_blanks").eq(i).html()=="_"||$(".fill_blanks").eq(i).html()==id)){
                $(".fill_blanks").eq(i).html(id)
                correctGuess = true

                if($("#blanks").text()===randomWord.word.toLowerCase()){
                    $("#result").text("You Win!!")
                    correctGuess=true
                    gameOver=true
                }

            }
        }

    }


})
