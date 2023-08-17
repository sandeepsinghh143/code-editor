$( document ).ready(function() {
    const result=$("iframe");
    result.find("head") && result.contents().find("head").append(`<style></style>`);
    $(".toggle li").click(function(){
       $(`.${$(this).text().toLowerCase()}`).toggleClass("hide");
    });

    $(".run-button").click(function(){
    const html=$(".html textarea");
    const js=$(".js textarea");
    const result=$("iframe");
    result.contents().find("body").html(html.val());
    document.getElementById("iframe").contentWindow.eval(js.val());
    });

    $(".html textarea").keyup(function(e){
        const result=$("iframe");
        result.contents().find("body").html(e.target.value);
        });

    $(".css textarea").keyup(function(e){
            const result=$("iframe");
            result.contents().find("style").text(e.target.value);
            });

    $(".js textarea").keypress(function(e){
        const mark=";"
        if(e.key==mark){
            document.getElementById("iframe").contentWindow.eval($(".js textarea").val());
        }
        
    })

});
