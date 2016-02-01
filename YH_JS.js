var YH_JS={
	//事件对象
	EVENT:{
		addEvent : function( obj, type, fn ) {
		  if (obj.addEventListener)
			  obj.addEventListener( type, fn, false );
		  else if (obj.attachEvent) {
			  obj.attachEvent("on"+type,fn,false);
		  }
		},
		removeEvent:function( obj, type, fn ){
			 if (obj.removeEventListener)
				  obj.removeEventListener( type, fn, false );
			  else if (obj.detachEvent) {
					obj.detachEvent("on"+type,fn,false);
			  }	
		}
	},
	processThis:function(obj,fn){
		return function(e){fn.call(obj,e)}
	}
}
//小数点后保留几位（四舍五入）
Number.prototype.toFixedNum = function(s){
	changenum=(parseInt(this * Math.pow( 10, s ) + 0.5)/ Math.pow( 10, s )).toString();
	index=changenum.indexOf(".");
	//index为小数点出现的位置,s为保留几位
	
	//如果不存在小数点 56
	if(index<0&&s>0){
		changenum=changenum+".";
		for(i=0;i<s;i++){
			changenum=changenum+"0";
		}
	}else {
		//如果存在小数点
		index=changenum.length-index;
		//console.log("|"+(index));
		for(i=0;i<=(s-index);i++){
			changenum=changenum+"0";
		}
	}
	return changenum;
} 

