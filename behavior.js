var textBox = document.getElementById("searchArea");
var crossIcon = document.getElementById("cross");
var textInput = document.getElementById("textInput");
var slashIcon = document.getElementById("slash");

textInput.onfocus = ()=>{textBox.style.boxShadow = "0px 0px 5px 2px rgb(224, 224, 224)";}

textInput.onblur = ()=>{textBox.attributeStyleMap.clear();}

crossIcon.onclick = function () {
    textInput.value = "";
    crossIcon.style.display = "none";
    slashIcon.style.display = "none";
    textInput.focus();
}

textInput.oninput = function(){
    if(textInput.value !== ""){
        crossIcon.style.display = "block";
        slashIcon.style.display = "block";
    }
    else{
        crossIcon.style.display = "none";
        slashIcon.style.display = "none";
    }

}

document.getElementById('appsBtn').onmouseover = () => {
    document.getElementById('appsBtnHover').style.display = 'block';
};
document.getElementById('appsBtn').onmouseleave = () => {
    document.getElementById('appsBtnHover').style.display = 'none';
};

// document.getElementById('appsBtn').onclick=()=>{
//     if(document.getElementById('page').style.display === 'block'){
//         document.getElementById('page').style.display = 'none';
//     }
//     else{
//         document.getElementById('page').style.display = 'block';
//     }
// }


// Identify the target element
const targetElement = document.getElementById('appsBtn');
let clikedElm = false;
    targetElement.onclick = ()=>{
        clikedElm = true
}
document.addEventListener('click', ()=>{
    
    if(clikedElm){
        if(document.getElementById('page').style.display === 'block'){
            document.getElementById('page').style.display = 'none';
        }
        else{
            document.getElementById('page').style.display = 'block';
        }
        clikedElm=false;
    }
    else{
        if(document.getElementById('page').style.display === 'block'){
            document.getElementById('page').style.display = 'none';
        }
    }
    

});

document.querySelector('footer').style.width = windowWidth();
function windowWidth(){
    var deviceWidth = window.innerWidth;
    return deviceWidth;
}

window.addEventListener('resize',()=>{
    let footerBottom = document.getElementById('footerBottom');
    let footerLeft = document.getElementById('footerLeft');
    let footerLeftUl = document.getElementById('footerLeftUl');
    let footerRight = document.getElementById('footerRight');
    let footerRightUl = document.getElementById('footerRightUl');
    
    if(windowWidth()<680){
        footerBottom.style.display = 'block';
        footerLeft.style.width= '100%'; 
        footerRight.style.width= '100%';
        footerLeftUl.style.margin= 'auto'; 
        footerLeftUl.style.marginTop= '20px'; 
        footerLeftUl.style.marginBottom= '20px'; 
        footerRightUl.style.marginBottom= '20px'; 
        footerLeftUl.style.width= '400px'; 
        footerRightUl.style.margin= 'auto';
        footerRightUl.style.float= 'none';
        footerRightUl.style.width= '200px';
        document.querySelector('footer').style.height = '150px';
    }
    else if(windowWidth()<1300){
        document.querySelector('footer').attributeStyleMap.clear()
        footerBottom.attributeStyleMap.clear();
        footerLeft.attributeStyleMap.clear();
        footerLeftUl.attributeStyleMap.clear();
        footerRight.attributeStyleMap.clear();
        footerRightUl.attributeStyleMap.clear();

        footerBottom.style.paddingTop = '15px';

        footerLeftUl.style.margin= 'auto'; 
        footerLeftUl.style.width= '400px'; 
        footerRightUl.style.margin= 'auto';
        footerRightUl.style.float= 'none';
        footerRightUl.style.width= '100px';
    } 
    else{
        document.querySelector('footer').attributeStyleMap.clear()
        footerBottom.attributeStyleMap.clear();
        footerLeft.attributeStyleMap.clear();
        footerLeftUl.attributeStyleMap.clear();
        footerRight.attributeStyleMap.clear();
        footerRightUl.attributeStyleMap.clear();
    }
});