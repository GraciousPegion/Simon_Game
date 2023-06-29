var game_pattern=[];
var user_pattern=[];
var ButtonColors=["pink","teal","purple","orange"];
var level=0;
var started=0;
$(document).keypress((event)=>{
    if(started==0)
    {
    if(event.which==13)
    {
    NextSequence();
    started=1;
    }
    }
})
function NextSequence()
{
    user_pattern=[];
    level++;
    $("h1").text("level "+level);
    var n=Math.floor(Math.random()*4);
    var Random_color=ButtonColors[n];
    game_pattern.push(Random_color);
    $("#"+Random_color).fadeIn(100).fadeOut(100).fadeIn(100);
}
$(".btn").click(function(){
    var user_choosen_colour=this.id;
    animate_press(user_choosen_colour);
    user_pattern.push(user_choosen_colour);
    check_answer(user_pattern.length);
});
function animate_press(color)
{
    $("#"+color).addClass("pressed");
    setTimeout(()=>{
        $("#"+color).removeClass("pressed");
    },200);
}
function check_answer(level)
{
    if(user_pattern[level-1]==game_pattern[level-1] && level==game_pattern.length)
        setTimeout(()=>{NextSequence();},1000);
        else if(game_pattern[level-1]!=user_pattern[level-1])
        {
            $("body").css("background-color","#FF6666");
            setTimeout(()=>{$("body").css("background-color","black");},200);
            $("h1").text("Game Over press enter to restart..");
            start_over();
        }
}
function start_over()
{
    game_pattern=[]
    started=0;
    level=0;
}