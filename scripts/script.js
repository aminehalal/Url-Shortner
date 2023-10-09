fullLink = document.getElementById('link');

shortingBtn = document.getElementById('shorting');

theShorterLinkField = document.getElementById('theshorterlink');

CopingBtn = document.getElementById('copying') ;

CopyDone = document.getElementById('copy-done');

shortingBtn.addEventListener('click' , async function(e){
    const theLink = fullLink.value
    const theShortLink = await fetch(`https://api.shrtco.de/v2/shorten?url=${theLink}`)
    const result = await theShortLink.json() ;
    const theShorterLink = result.result.short_link;
    theShorterLinkField.value = theShorterLink ;
})

CopingBtn.addEventListener('click' , function(){
    theShorterLinkField.select();
    theShorterLinkField.setSelectionRange(0,99999);
    document.execCommand('copy');
    CopyDone.classList.remove('hidden');
})