window.onload = function() {
    getPost();
};

function getPost(){
    const url = 'https://www.reddit.com/r/wallpapers/top/.json';
    $.get(url, function(data, status){
        getBackground(data);
    })
}

function getBackground(data){
    const bgPath = data.data.children[0].data.url;
    document.querySelector('html').style.backgroundImage = "url(" + bgPath + ")";
}