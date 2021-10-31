// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(function(){
    $(".input-url").on('change',function(){
        let inputVal = $(this).val()
        let currElement = $(`#c${$(this).attr("id")}`)
        currElement.attr("href",`https://${inputVal}`)
        currElement.children().attr("src",`https://logo.clearbit.com/${inputVal.split('/')[0]}`)
        $("textarea").val( `<!-- Start -->${$(".Preview").html()}<!---- end -->`)
    })


    $(".toggle-checkbox").on('click',function(){
        $(".Logo").each(function() {
            if($(this).attr("src") === "") return
            let url = new URL($(this).attr("src"))
            let greyScale = ("true" === url.searchParams.get("greyscale"))
            url.searchParams.set("greyscale",!greyScale)
            let newURL = url.href
            $(this).attr("src",newURL)
            $("textarea").val( `<!-- Start -->${$(".Preview").html()}<!---- end -->`)
        })
    })

})


