var linkList = document.querySelectorAll('a');

for(var i in linkList){
 linkList[i].setAttribute('target', '_blank');
}
