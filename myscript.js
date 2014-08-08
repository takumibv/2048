	var i=0,time=1,judge=0;
	var moveboard=document.getElementById('moveboard');
	var row0 = new Array();
	var	row1 = new Array();
	var	row2 = new Array();
	var	row3 = new Array();
	var	array = [row0,row1,row2,row3];
	var j,k;
	var p=document.createElement('p');
	function state(num,end){
		this.num=num;
		this.end=end;
	}

	for(j=0;j<4;j++){
		for(k=0;k<4;k++){
			array[j][k] = new state(0,0); //j:行　k:列
		}
	}
	k=0;

	create_element(Math.floor(Math.random()*4),Math.floor(Math.random()*4),2); //first move

document.onkeydown = function eve(e) {
	document.createElement('p');
	text=document.createTextNode(i);
	judge=0;

	if(String.fromCharCode(e.keyCode)=="'"){ //right
		for(j=0;j<4;j++){
			for(k=0;k<4;k++){
				//if(document.getElementsByClassName('image'+j+'-'+k)){
				if(array[3-k][j].num!=0){
					console.log((3-k)+"列"+j+"行");
					right_move(3-k,j);
				}
			}
		}
	}
	if(String.fromCharCode(e.keyCode)=="%"){ //left
		for(j=0;j<4;j++){
			for(k=0;k<4;k++){
				//if(document.getElementsByClassName('image'+j+'-'+k)){
				if(array[k][j].num!=0){
					console.log(k+"列"+j+"行");
					left_move(k,j);
				}
			}
		}
	}
	if(String.fromCharCode(e.keyCode)=="&"){ //up
		for(j=0;j<4;j++){
			for(k=0;k<4;k++){
				//if(document.getElementsByClassName('image'+j+'-'+k)){
				if(array[j][k].num!=0){
					console.log(j+"列"+k+"行");
					up_move(j,k);
				}
			}
		}
		
	}
	if(String.fromCharCode(e.keyCode)=="("){ //down
		for(j=0;j<4;j++){
			for(k=0;k<4;k++){
				//if(document.getElementsByClassName('image'+j+'-'+k)){
				if(array[k][3-j].num!=0){
					console.log(k+"列"+(3-j)+"行");
					down_move(k,(3-j));
				}
			}
		}
	}
    //alert ( String.fromCharCode(e.keyCode) + ":key が押されました");
    for(j=0;j<4;j++){
			for(k=0;k<4;k++){
				if(array[j][k].num==0){ break;}
			}
			if(k<4){
				if(array[j][k].num==0){ break;}
			}
		}
	if(j==4 && k==4){
		alert("end!");
	}else{
	    var left=Math.floor(Math.random()*4),
	    	top=Math.floor(Math.random()*4);
		while(array[left][top].num != 0){
			left=Math.floor(Math.random()*4);
	    	top=Math.floor(Math.random()*4);
		}

		if(judge==1){
			create_element(left,top,2);
			console.log("["+left+","+top+"]に作られました"+j+k);
		}
	}

	for(j=0;j<4;j++){
		for(k=0;k<4;k++){
			array[j][k].end=0;
			// if(array[j][k].num==0){
			// 	rmtag(j,k);
			// }
		}
	}
	console.log(array);
   return true;
}

function right_move(j,k){
			var orinum=array[j][k].num;
			for(var x=j+1;x<4;x++){
				if(array[x][k].num==0){
					array[x][k].num=array[x-1][k].num;
					array[x-1][k].num=0;
					//rmtag(x-1,k);
					console.log("0right"+j+k);
					judge=1;
				}else if(array[x][k].num==array[x-1][k].num && array[x-1][k].end==0 && array[x][k].end==0){
					array[x][k].num = orinum*2;
					array[x][k].end = 1;
					array[x-1][k].num=0;
					//rmtag(x-1,k);
					rmtag(x,k);
					x++;
					judge=1;
					break;
				}else{
					//rmtag(x-1,k);
					break;
				}
			}
			var max=(x-1)*111;

		//create_element(j,k,orinum);
		var begin = new Date()*3 - 0;
		var eleme = document.getElementsByClassName('image '+j+'-'+k)[0];
		var origin = parseInt(eleme.style.marginLeft);
		var id = setInterval(function(){
		var current = new Date()*3 - begin;
			if (origin+current > max){
				clearInterval(id);
		    	current = max-origin; 
			}
			eleme.style.marginLeft = (origin+current) + 'px';
		}, 10);

		
		eleme.innerHTML=array[x-1][k].num;
		eleme.className='image '+(x-1)+'-'+k;
		console.log(j+","+k+" → "+(x-1)+","+k);
		chgcolor(x-1,k);
}

function left_move(j,k){
		var orinum=array[j][k].num;
		for(var x=j-1;x>=0;x--){
			if(array[x][k].num==0){
				array[x][k].num=array[x+1][k].num;
				array[x+1][k].num=0;
				//rmtag(x+1,k);
				console.log("0left"+j+k);
				judge=1;
			}else if(array[x][k].num==array[x+1][k].num && array[x+1][k].end==0 && array[x][k].end==0){
				array[x][k].num = orinum*2;
				array[x][k].end = 1;
				array[x+1][k].num=0;
				rmtag(x,k);
				x--;
				judge=1;
				break;
			}else{ 
				//rmtag(x+1,k);
				break;
			}
		}
		var max=(x+1)*111;

		//create_element(j,k,orinum);
		var begin = new Date()*3 - 0;
		var eleme = document.getElementsByClassName('image '+j+'-'+k)[0];
		console.log("aaa:"+eleme);
		var origin = parseInt(eleme.style.marginLeft);
		var id = setInterval(function(){
			var current = new Date()*3 - begin;
			if (origin-current < max){
				clearInterval(id);
				current = origin-max;
			}
			eleme.style.marginLeft = (origin-current) + 'px';
		}, 10);

			 
			  eleme.innerHTML=array[x+1][k].num;
			  eleme.className='image '+(x+1)+'-'+k;
			  console.log(j+","+k+" → "+(x+1)+","+k);
			  chgcolor(x+1,k);
		//console.log(eleme.style.marginLeft);
}

function down_move(j,k){
	var orinum=array[j][k].num;
			for(var x=k+1;x<4;x++){
				if(array[j][x].num==0){
					array[j][x].num=array[j][x-1].num;
					array[j][x-1].num=0;
					//rmtag(x-1,k);
					console.log("0down"+j+k);
					judge=1;
				}else if(array[j][x].num==array[j][x-1].num && array[j][x-1].end==0 && array[j][x].end==0){
					array[j][x].num = orinum*2;
					array[j][x].end = 1;
					array[j][x-1].num=0;
					//rmtag(x-1,k);
					rmtag(j,x);
					x++;
					judge=1;
					break;
				}else{
					//rmtag(x-1,k);
					break;
				}
			}
			var max=(x-1)*111;

		var begin = new Date()*3 - 0;
		var eleme = document.getElementsByClassName('image '+j+'-'+k)[0];
		var origin = parseInt(eleme.style.marginTop);
		var id = setInterval(function(){
			var current = new Date()*3 - begin;
			  if (origin+current > max){
			    clearInterval(id);
			    current = max-origin; 
			  }
			  eleme.style.marginTop = (origin+current) + 'px';
		}, 10);

		//console.log(eleme.style.marginTop);
		eleme.innerHTML=array[j][x-1].num;
		eleme.className='image '+j+'-'+(x-1);
		console.log(j+","+k+" → "+j+","+(x-1));
		chgcolor(j,x-1);
}


function up_move(j,k){
		var orinum=array[j][k].num;
		for(var x=k-1;x>=0;x--){
			if(array[j][x].num==0){
				array[j][x].num=array[j][x+1].num;
				array[j][x+1].num=0;
				//rmtag(x-1,k);
				console.log("0down"+j+k);
				judge=1;
			}else if(array[j][x].num==array[j][x+1].num && array[j][x+1].end==0 && array[j][x].end==0){
				array[j][x].num = orinum*2;
				array[j][x].end = 1;
				array[j][x+1].num=0;
				//rmtag(x-1,k);
				rmtag(j,x);
				x--;
				judge=1;
				break;
			}else{
				//rmtag(x-1,k);
				break;
			}
		}
		var max=(x+1)*111;

		var begin = new Date()*3 - 0;
		var eleme = document.getElementsByClassName('image '+j+'-'+k)[0];
		var origin = parseInt(eleme.style.marginTop);
		var id = setInterval(function(){
		var current = new Date()*3 - begin;
		  if (origin-current < max){
		    clearInterval(id);
		    current = origin-max; 
		  }
		  eleme.style.marginTop = (origin-current) + 'px';
		}, 10);

		//console.log(eleme.style.marginTop);
		eleme.innerHTML=array[j][x+1].num;
		eleme.className='image '+j+'-'+(x+1);
		console.log(j+","+k+" → "+j+","+(x+1));
		chgcolor(j,x+1);
}

function create_element(left,top,num){ //２を生成
	var p=document.createElement('p');
	var ele=moveboard.appendChild(p);
	ele.className="image "+left+"-"+top;
	ele.innerHTML=num;
	//setTimeout(function(){
		ele.style.marginLeft=(111*left)+"px";
		ele.style.marginTop=(111*top)+"px";
		ele.style.width = 0+'px';
		ele.style.height = 0+ 'px';
	//},1000);
	array[left][top].num=num;
	i++;
	console.log(ele.className);

	var begin = new Date()*4/5 - 0;
	var appear = setInterval(function(){
		var current = new Date()*4/5 - begin;
		  if (current > 110){
		    clearInterval(appear);
		    current = 110; 
		  }
		  ele.style.width = current+ 'px';
		  ele.style.height = current+ 'px';
		  ele.style.marginLeft=(55+111*left-current/2)+"px";
		  ele.style.marginTop=(55+111*top-curent/2)+"px";
		}, 10);
	
}

function rmtag(right,top){
	var parent=document.getElementById("moveboard");
	for(var k=0;k<3;k++){
		if(document.getElementsByClassName('image '+right+'-'+top)[k]){
			console.log("消しマース"+right+","+top);
			var child=document.getElementsByClassName('image '+right+'-'+top)[k];
			parent.removeChild(child);
		}
	}

}

function chgcolor(right,top){
	//var parent=document.getElementById("moveboard");
	for(var k=0;k<3;k++){
		if(document.getElementsByClassName('image '+right+'-'+top)[k]){
			var child=document.getElementsByClassName('image '+right+'-'+top)[k];
			//var col=child.style.backgroundColor;
			switch(child.innerHTML){
				case "2":
				//alert("2");
					child.style.backgroundColor="cyan";
					break;
				case "4":
					child.style.backgroundColor="deepskyblue";
					break;
				case "8":
					child.style.backgroundColor="springgreen";
					break;
				case "16":
					child.style.backgroundColor="lime";
					break;
				case "32":
					child.style.backgroundColor="lightyellow";
					break;
				case "64":
					child.style.backgroundColor="gold";
					break;
				case "128":
					child.style.backgroundColor="salmon";
					break;
				case "256":
					child.style.backgroundColor="tomato";
					break;
				case "512":
					child.style.backgroundColor="deeppink";
					break;
				case "1024":
					child.style.backgroundColor="magenta";
					break;
				case "2048":
					child.style.backgroundColor="purple";
					child.style.color="white";
					break;
				default:
					child.style.backgroundColor="indigo";
					break;
			}
			//child.style.backgroundColor="#000000";
			//child.style.backgroundColor="#"+(150250100-10*child.innerHTML).toString(16);
			//child.style.backgroundColor="red";
		}
	}
}