   suspendcode="<div id='xenplaza_toolbox' align='center'><a onclick='javascript:amutop();return false;' href='#' title='Lên đầu'><img border=0 src='https://lh5.googleusercontent.com/-H0f8JK0baD4/UNPu25lerEI/AAAAAAAAAKM/2MNgvb7PwAU/s800/up.png' width=\"24\"></a><br><a onclick='javascript:history.back();return false;' href='#' title='Trang trước'><img border=0 src=\"https://lh3.googleusercontent.com/-lIQLqCIysO8/UNPu19DMHDI/AAAAAAAAAJ0/sekYWMo7jr4/s800/back.png\" width=\"24\"></a><br><a href='javascript:confirmRefresh();' title='Tải lại'><img border=0 src='https://lh4.googleusercontent.com/-je_iFnwbp58/UNPu2h92LCI/AAAAAAAAAKA/70Qt-4B-gC0/s800/refresh.png' width=\"24\"></a><br><a onclick='javascript:sc();return false;' href='#' title='Dừng chạy'><img border=0 src=\"https://lh3.googleusercontent.com/-NunVR1kV-wM/UNPu2SsK_9I/AAAAAAAAAJ8/y-LIXPw50rE/s800/pause.png\" width=\"24\"></a><br><a onclick='javascript:clearInterval(timer);initialize();return false;' href='#' title='Tự động chạy'><img border=0 src=\"https://lh3.googleusercontent.com/-VHgpTsCG2Ls/UNPu1g4FOfI/AAAAAAAAAJw/huSYXpaI1-c/s800/autodown.png\" width=\"24\"></a><br><a onclick='javascript:amubutton();return false;' href='#' title='Xuống cuối trang'><img border=0 src=\"https://lh3.googleusercontent.com/-dXWqNYQN2x0/UNPu13yc8fI/AAAAAAAAAJ4/TUkyHwpT6p4/s800/down.png\" width=\"24\"></a></div>"
    document.write(suspendcode);
 
    var currentpos,timer;
 
    function initialize()
    {
        timer=setInterval ("scrollwindow ()",100);
    }
    function sc()
    {
        clearInterval(timer);
    }
    function scrollwindow()
    {
        currentpos = document.documentElement.scrollTop || document.body.scrollTop;
        window.scrollTo(0,++currentpos);
    }
    function amutop()
    {
        window.scrollTo(0,0)
        clearInterval(timer);
    }
    function amubutton()
    {
        window.scrollTo(0,80000)
        clearInterval(timer);
    }
	function confirmRefresh() {
var okToRefresh = confirm("Tải lại trang ?");
if (okToRefresh)
    {
            setTimeout("location.reload(true);",1000);
    }
}