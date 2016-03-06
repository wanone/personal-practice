window.onload=function(){
	if(!document.getElementsByTagName) return false;
	var imgs=document.getElementsByTagName("img");
	for (var i=0;i<imgs.length;i++){
		imgs[i].onmouseover=function(){
			this.style.opacity="0.7";
		}
		imgs[i].onmouseout=function(){
			this.style.opacity="1";
		}

	}
}
