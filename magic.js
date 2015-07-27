function ChangeAll(obj,size)
{
	try
	{
		if(obj.style != undefined)
		{
			obj.style.fontSize = size + "px";
			obj.style.lineHeight = size*1.5 + "px";
		}
		var childs = obj.childNodes;
		if(childs != null)
		{
			var i;
			for(i=0;i< childs.length;i++)
				ChangeAll(childs[i],size);
		}
	}
	catch(e){}
}
function ChangeFontSize(delta)
{
	var objFS = "fontsize";
	var fs = YAHOO.util.Cookie.get(objFS);
	if(fs == null) fs = 13;
	fs = fs*1 + delta;
	var objDiv = YAHOO.util.Dom.get("chapter");
	if(objDiv != null)
	{
		ChangeAll(objDiv,fs);
	}
	YAHOO.util.Cookie.set(objFS,fs,{path:"/"});
}
function ChangeFontFamilyAll(obj,font)
{
	try
	{
		obj.style.fontFamily = font;
		var childs = obj.childNodes;
		if(childs != null)
		{
			var i;
			for(i=0;i< childs.length;i++)
				ChangeFontFamilyAll(childs[i],font);
		}
	}catch(e){}
}
function ChangeFontFamily(font)
{
	var chapter = YAHOO.util.Dom.get("chapter");
	if(chapter != null)
	{
		ChangeFontFamilyAll(chapter,font);
	}
	YAHOO.util.Cookie.set("fontfamily",font,{path:"/"});
}
function Init()
{
	var font = YAHOO.util.Cookie.get("fontfamily");
	if(font != null) 
	{
		ChangeFontFamily(font);
		var fontSelect = YAHOO.util.Dom.get("fontfamily");
		if(fontSelect != null) fontSelect.value = font;
	}
	ChangeFontSize(0);	
	if(YAHOO.util.Cookie.get("brush") == "true" || YAHOO.util.Cookie.get("brush") == null)
	{
		YAHOO.util.Dom.get("cbBrush").checked = true;
	}
	YAHOO.util.Event.on(document, "click", mouseclick);
}
var mouseclick = function(e)
{
	if(YAHOO.util.Dom.get("cbBrush").checked == false)
	{
		YAHOO.util.Dom.get("window").style.display = "none";
		return;
	}	
	YAHOO.util.Dom.get("window").style.display = "";
	var mouseX = YAHOO.util.Event.getPageX(e);
	var mouseY = YAHOO.util.Event.getPageY(e);
	var resizeRegion = YAHOO.util.Dom.getRegion('chapter');
	var pad = 0;
	var c1 = mouseX > (resizeRegion.left - pad);
	var c2 = mouseX < (resizeRegion.right + pad);
	var c3 = mouseY > (resizeRegion.top - pad);
	var c4 = mouseY < (resizeRegion.bottom + pad);	
	if(c1 && c2 && c3 && c4)
	{
		pad = 4;
		var width = resizeRegion.right - resizeRegion.left + pad*2;;
		var height = 300;
		height = Math.min(height,(resizeRegion.bottom - mouseY)*2);
		YAHOO.util.Dom.setX('window',resizeRegion.left - pad);
		YAHOO.util.Dom.setY('window',Math.max(resizeRegion.top,mouseY - height/2));		
		YAHOO.util.Dom.setStyle('window','width', width + "px");
		YAHOO.util.Dom.setStyle('window','height', height + "px");		
	}
};
function CheckBrush(cb)
{
	YAHOO.util.Dom.get("window").style.display = "none";
	YAHOO.util.Cookie.set("brush",cb.checked,{path:"/"});
}