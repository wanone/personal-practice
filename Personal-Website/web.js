	window.onload=function(){
    		var second=document.getElementById("second");
    		var technology=document.getElementById("technology");
    		var three=document.getElementById("three");
    		var ntechnology=document.getElementById("ntechnology");

    		second.onmouseover=function(){
    			   technology.style.display="block";
    		}

    		second.onmouseup=function(){
    			technology.style.display="none";
    	    }	
    	    
        
    	    three.onmouseover=function(){
    			ntechnology.style.display="block";
    		}
    		
    		three.onmouseup=function(){
    			ntechnology.style.display="none";
    	    }	
    	    
    	}
