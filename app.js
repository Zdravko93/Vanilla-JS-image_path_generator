// image/background/text path source used:    placeholder.com

const select = document.querySelector('select');
const inputAll = document.querySelectorAll('input');
const image = document.querySelector('img');
const textarea = document.querySelector('textarea');

select.addEventListener('change', buildApp);
inputAll.forEach(item => {
    item.addEventListener('change', buildApp);
});

function clearHashTag(string){
    return string.replace("#", "");
};

function formatTextPath(string){
    return string.split("").join("+");
};

function buildApp(){
    let obj = {};
    obj.size = select.value;
    obj.textInput = formatTextPath(inputAll[0].value);
    obj.bgColor = clearHashTag( inputAll[1].value);
    obj.txtColor = clearHashTag(inputAll[2].value);
    obj.path = "https://via.placeholder.com/" + obj.size + "/" + obj.bgColor +
    "/" + obj.txtColor + "?text=" + obj.textInput;
    image.src = obj.path;
    textarea.value = obj.path;
    textarea.select();
    document.execCommand('copy');
};









































