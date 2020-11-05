document.addEventListener('turbolinks:loaded', function(){
    document.addEventListener('ajax:success', function(event){
        var res = event.detail;
        console.log(res);
    })
})

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#post_form').addEventListener('ajax:success', function(){
        var title = document.querySelector('#post_title');
        var content = document.querySelector('#post_content');

        title.value = '';
        content.value = '';
    })
})

