$( document ).ready(function() {
    const result=$("iframe");
    result.find("head") && result.contents().find("head").append(`<style></style>`);
    result.find("body") && result.contents().find("body").append(`<script></script>`);
    $(".toggle li").click(function(){
       $(`.${$(this).text().toLowerCase()}`).toggleClass("hide");
    });

    $(".run-button").click(function(){
    const html=$(".html textarea");
    const css=$(".css textarea");
    const js=$(".js textarea");
    const result=$("iframe");
    result.contents().find("body").html(html.val());
    result.contents().find("head").append(`<style>${css.val()}</style>`);
    result.contents().find("body").append(`<script>${js.val()}</script>`);
    });

    $(".html textarea").keyup(function(e){
        const result=$("iframe");
        result.contents().find("body").html(e.target.value);
        });

        $(".css textarea").keyup(function(e){
            const result=$("iframe");
            result.contents().find("style").text(e.target.value);
            });

});
