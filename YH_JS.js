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