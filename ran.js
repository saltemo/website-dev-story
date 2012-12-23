function get_random(maxNum)
{
 if (Math.random && Math.round)
 {
   var ranNum= Math.round(Math.random()*(maxNum-1));
   ranNum+=1;
   return ranNum;
 }
 else
 {
 today= new Date();
 hours= today.getHours();
 mins=  today.getMinutes();
 secn=  today.getSeconds();
 if (hours==25)
 hours=25;
 var ranNum= (((hours+1)*(mins+1)*secn)%maxNum)+1;
 return ranNum;
 }
}

function getaQuote()
{
var maxQuotes=78;
var whichQuote=get_random(maxQuotes);
whichQuote--;

var quote=new Array(maxQuotes)
 quote[0]="&quot;Lời nói nào bạn kiềm chế được là nô lệ của bạn<br>Lời nói nào bạn không kiềm chế được thì bạn là nô lệ nô lệ cho lời nói đó.&quot; ";
 quote[1]="&quot;Tình yêu trong xa cách như ngọn lửa trong gió<br>Gió thổi tắt ngọn lửa nhỏ nhưng thổi bùng ngọn lửa to.&quot; ";
 quote[2]="&quot;Cái gì xuất phát từ trái tim thì sẽ đi đến trái tim.&quot; ";
 quote[3]="&quot;Nếu có ai khen ngợi bạn thì bạn phải kiểm tra coi lời nói đó có đúng không. Nhất là lời khen ngợi từ các bạn khác giới.&quot; ";
 quote[4]="&quot;Khi có tình yêu ta sống và làm việc thú vị biết bao. Khi có người yêu bên cạnh chúng ta vượt qua những khó khăn dễ dàng biết bao.&quot; ";
 quote[5]="&quot;Phải biết và nhìn thấy được rằng biển cả có bão tố và thuỷ triều dâng nhưng trong lòng nó có bao ngọc quý.&quot; ";
 quote[6]="&quot;Nếu chỉ yêu bản thân thì khi tuyệt vọng. Con người sẽ tự nguyền rủa mình, tự đau khổ một mình.&quot; ";
 quote[7]="&quot;Sự dối trá giết chết tình yêu nhưng sự thật trắng trợn cũng đâu làm cho tình yêu sống lại.&quot; ";
 quote[8]="&quot;Con người sống không có tình thương thì cũng như vườn hoa mà không có ánh mặt trời, không có gì đẹp đẽ nảy sinh trong đó được..&quot; ";
 quote[9]="&quot;Một người con gái không đẹp về tâm hồn thì cũng như một bông mẫu đơn, có sắc mà không có hương.&quot; ";
 quote[10]="&quot;Kỷ niệm hạnh phúc thì mãi luôn hạnh phúc<br>Kỷ niệm đau khổ thì đau khổ khôn nguôi.&quot; ";
 quote[11]="&quot;Thời gian là một liều thuốc thần diệu xoá đi bao đau khổ và tăm tối đã qua.&quot; ";
 quote[12]="&quot;Quyền của tình yêu cũng giống như quyền của vua chúa, không chấp nhận chia sẻ.&quot; ";
 quote[13]="&quot;Không bao giờ mất kiên nhẫn - Đó là chiếc chìa khoá cuối cùng mở ra cánh của tình yêu.&quot; ";
 quote[14]="&quot;Hoa hồng không gai, đó là tình bạn<br>Hoa hồng có gai, đó là ái tình.&quot; ";
 quote[15]="&quot;Đau khổ là cái ác nhưng đau khổ cũng lam cho con người sống cao quý hơn.&quot; ";
 quote[16]="&quot;Tình yêu là một sự tô điểm vĩ đại. Nó làm cho thiên nhiên nở hoa, nó hát lên những bài hát kỳ diệu nhất và quay cuồng những vũ điệu huy hoàng nhất.&quot; ";
 quote[17]="&quot;Buồn đau là biển cả, Vui sướng là ngọc châu. Muốn có ngọc châu phải lặn sâu vào biển cả.&quot; ";
 quote[18]="&quot;Cuộc sống cao quý nhất khi ta có lý tưởng và thực hiện được lý tưởng đó.&quot; ";
 quote[19]="&quot;Người biết nhìn nhận tương lai sẽ không bao giờ nhìn vào quá khứ của người khác.&quot; ";
 quote[20]="&quot;Người lạc quan nhìn bông hồng mà quên gai nhọn<br>Kẻ bi quan chỉ nhìn gai nhọn mà quên bông hồng.&quot; ";
 quote[21]="&quot;Đừng bao giờ chúc anh hạnh phúc,<br>Vì em là hạnh phúc cuộc đời anh.&quot; ";
 quote[22]="&quot;Bạn không cần phải thay đổi mình để tìm kiếm tình yêu. Bạn sẽ có người yêu đích thực , bất kể bạn là người như thế nào đi chăng nữa. Hãy nhìn vào những người giống mình và hãy nghĩ rằng bạn cũng như họ. Mặc cảm của bạn sẽ tan biến.&quot; ";
 quote[23]="&quot;Điều đáng sợ nhất trong cuộc sống không phải là cái chết mà là bị lãng quên ..là khi người ban yêu dấu nhất từ bỏ tấm chân tình của bạn để chạy theo những điều hư ảo...là khi những người bạn thân của bạn từ bỏ bạn vì đơn giản rằng họ không hiểu bạn....&quot; ";
 quote[24]="&quot;Cuộc đời anh là một cơn mộng kéo dài. Nó trôi qua thật êm đềm và tĩnh lặng .Anh chìm đắm trong cơn mơ đó , tưởng chừng như không bao giờ tỉnh giấc và để rồi vào một ngày đẹp trời anh đã choàng tỉnh cơn mộng vì đã có một người con gái đến đánh thức con tim tình yêu đang ngủ say của anh dậy. Người con gái ấy có tên là....&quot; ";
 quote[25]="&quot;Nếu anh có được cả thế gian, thế gian đó phải là của em.<br>Vì có cả thế gian anh vẫn khổ nếu em không là của anh..&quot; ";
 quote[26]="&quot;Yêu nhau không chỉ là nhìn nhau mà là cùng nhìn về một hướng.&quot; ";
 quote[27]="&quot;Hãy trân trọng tình yêu, bạn sẽ nhận được tất cả. Tình yêu sẽ trường tồn ngay cả khi sức khoẻ ngàn vàng của bạn không còn nữa.&quot; ";
 quote[28]="&quot;Cái sung sướng nhất trên đời là tin chắc chắn rằng mình đang được yêu.&quot; ";
 quote[29]="&quot;Gió sẽ làm cho đám lửa cháy to hơn, nhưng thử thách sẽ làm cho tình yêu đẹp hơn.&quot; ";
 quote[30]="&quot;Tình yêu đúng đắn sẽ nâng cao con người lên, làm cho con người đẹp hẳn ra.&quot; ";
 quote[31]="&quot;Chỉ có tình yêu mãnh liệt mới có thể xua tan những hiểu lầm vụn vặt nảy sinh trong cuộc sống chung.&quot; ";
 quote[32]="&quot;Con người không có tình yêu chẳng khác nào trái đất không có mặt trời.&quot; ";
 quote[33]="&quot;Tình yêu là món quà quý nhất mà con người nhận được của nhau.&quot; ";
 quote[34]="&quot;Tình yêu là một thứ tình cảm vĩ đại nhất, nó làm sáng tạo lên điều kỳ diệu, nó sáng tạo nên những con người mới, nó làm ra những giá trị vĩ đại nhất của con người.&quot; ";
 quote[35]="&quot;Khiêm tốn thật sự không có nghĩa là không biết đến những giá trị của mình mà chính là biết cách nhận ra những giá trị ấy.&quot; ";
 quote[36]="&quot;Không phải sức lực hay tiền bạc , mà chính lòng kiên nhẫn đã làm nên những điều tuyêt vời nhất.&quot; ";
 quote[37]="&quot;Muốn thành công phải có mục tiêu, một kế hoạch , một phương pháp và bền chí thực hiện.&quot; ";
 quote[38]="&quot;Suy nghĩ về điều mình sắp nói thì tốt hơn là khi ân hận về điều mình đã nói ra.&quot; ";
 quote[39]="&quot;Phải biết mở cửa lòng mình trước mới mong mở được lòng kẻ khác.&quot; ";
 quote[40]="&quot;Một điều kiện tất yếu của cử chỉ là đúng giờ.&quot; ";
 quote[41]="&quot;Kẻ nào không chịu làm việc mà chỉ hi vọng vào dịp may thì sẽ gặt hái thất vọng.&quot; ";
 quote[42]="&quot;Lời nói không mất tiền mua, Lựa lời mà nói cho vừa lòng nhau.&quot; ";
 quote[43]="&quot;Không sợ người phán xét mình, mà sợ lương tâm phán xét.&quot; ";
 quote[44]="&quot;Đừng quyết định hấp tấp. Sự quyết định đã đưa ra không thể lấy lại được.&quot; ";
 quote[45]="&quot;Kẻ thù không thể làm cho trái tim bạn tan nát, Nhưng chính những người mà bạn yêu quý có thể làm được điều đó.&quot; ";
 quote[46]="&quot;Con tim có thể cảm nhận được điều mà đôi mắt không bao giờ thấy được.&quot; ";
 quote[47]="&quot;Hãy tin rằng những kho tàng quý báu nhất là những kho tàng bạn chất chứa trong trái tim.&quot; ";
 quote[48]="&quot;Bạn chỉ có thể mở cửa trái tim của kẻ khác khi bạn mở chính trái tim của bạn.&quot; ";
 quote[49]="&quot;Nếu tâm hồn bạn là đoá hồng thì môi miệng bạn sẽ thốt ra những lời ngát hương.&quot; ";
 quote[50]="&quot;Hai căn bệnh nặng nhất của tâm hồn đó là ao ước cái không thể được và bất động trước nỗi khổ của người khác.&quot; ";
 quote[51]="&quot;Sự hiểu biết, đó là kho báu của cuộc sống . Nó mang đến cho con người niềm vui và hạnh phúc.&quot; ";
 quote[52]="&quot;Nếu bạn không biết học cười khi gặp những thăng trầm của cuộc đời, chắc chắn bạn sẽ không có gì để cười khi tuổi già xế bóng.&quot; ";
 quote[53]="&quot;Cuộc sống nghèo nàn , và buồn tẻ nhất là cuộc sống không có tiếng cười.&quot; ";
 quote[54]="&quot;Không phải tất cả những người cười với bạn đều là người tốt.Không phải tất cả những người làm cho bạn bực mình đều là kẻ thù của bạn.&quot; ";
 quote[54]="&quot;Sông có cạn, đá có mòn, nhưng tình yêu anh dành cho em không hề thay đổi, sống trên dời này, anh nghĩ rằng cuộc đời này chỉ để dành cho em.&quot; ";
quote[55]="&quot;Xin Chúc Các Bạn Có 1 Ngày Vui Vẻ Va Tràn Đầy Hạnh Phúc !&quot; ";
quote[56]="&quot;Chúc các bạn vui vẻ ... và đừng quên truy cập vào <a href='http://lang.name.vn'>lang.name.vn</a> để biết thêm những điều mới mẻ&quot; ";
quote[57]="&quot;Lời Chúc Bình An Và Hạnh Phúc Đến Tất Cả Các Bạn&quot; ";
quote[58]="&quot;Khi một người mơ mộng thì đó chỉ là một giấc mơ thôi. Nhưng khi nhiều người cùng mơ mộng thì giấc mơ đó đã bắt ầu trở thành một thực tế mới mẻ rồi. (Tổng Giám Mục Dom Helder Camara)&quot; ";
quote[59]="&quot;Khác với loài người, tình thương của Thiên Chúa không phát sinh từ đối tượng đáng yêu, nhưng chính tình thương của Ngài dành cho đối tượng đó mới làm cho đối tượng đó trở thành đáng yêu. Như thế, con người được Thiên Chúa yêu thương không phải vì họ đáng yêu, nhưng họ đã trở thành đáng yêu vì họ được Thiên Chúa yêu thương. (Chiara Lubich)&quot; ";
quote[60]="&quot;Nơi nào không tìm thấy tình thương, bạn hãy gieo nó, rồi bạn sẽ gặt được nó. (Thánh Gioan Thánh giá)&quot; ";
quote[61]="&quot;Nếu cuộc ời cho bạn một trái chanh, bạn hãy dùng nó mà làm thành một ly chanh đường. (Khuyết danh)&quot; ";
quote[62]="&quot;Chúng ta không sống lâu để mà sống một cách cẩn thận đâu. (Barnard Shaw)&quot; ";
quote[63]="&quot;Hãy yêu chân lý, nhưng cũng phải biết tha thứ những lỗi lầm (Volataire)&quot; ";
quote[64]="&quot;Chính trị gia là người ứng cử nhờ tiền của người giầu, thắng cử nhờ phiếu của giới nghèo và hứa hẹn bảo vệ cho cả 2 phe! (Khuyết danh)&quot; ";
quote[65]="&quot;Chính trị gia là người phịa ra chuyện gì sẽ xảy ra tuần sau, tháng sau, năm sau, nhưng cũng là người cắt nghĩa tại sao những sự kiện đó lại không xảy ra như vậy (Winston Churchill)&quot; ";
quote[66]="&quot;Người không ược cắp sách đến trừơng thì chỉ ăn cắp vặt trong các toa xe lửa, nhưng người học cao hiểu rộng thì có thể ăn cắp ược cả đường rầy xe lửa. (T. Roosevelt)&quot; ";
quote[67]="&quot;Du khách là người đi chơi xa để tìm sự mới lạ, nhưng lại hay kêu ca là không giống như nơi mình sống! (Khuyết danh)&quot; ";
quote[68]="&quot;Chẳng có chiếc lá bé nhỏ nào vàng đi và rụng xuống mà không có sự cộng tác âm thầm của từng thân cây (Khalil Gibran)&quot; ";
quote[69]="&quot;Hạnh phúc của riêng mình là làm cho tha nhân được hạnh phúc (Khuyết danh)&quot; ";
quote[70]="&quot;Một bông hồng tặng cho người lúc còn sống quý hơn cả một vườn hồng tặng cho người khi người đã chết (Khuyết danh)&quot; ";
quote[71]="&quot;Đời sống không tôn giáo là đời sống không nguyên tắc. Và một đời sống không nguyên tắc là một con tầu không bánh lái (Mahatma Gandhi)&quot; ";
quote[72]="&quot;Lúc nửa đêm cũng là lúc bắt ầu một ngày mới.(Đức Thánh Cha Gioan Phaolơ II)&quot; ";
quote[73]="&quot;Tơi đã tìm Thượng Đế mà không thấy Ngài. Tôi đã tìm tôi mà cũng chẳng thấy tôi. Cho đến khi tôi đi tìm tha nhân thì tôi lại gặp được cả ba: Thượng Đế, chính tôi và tha nhân (Khuyết danh)&quot; ";
quote[74]="&quot;Ai đi tìm Chúa sẽ gặp được niềm vui (Thánh Augustinơ)&quot; ";
quote[75]="&quot;Kẻ kiên nhẫn sẽ đạt được tất cả (Thánh Têrêsa Avila)&quot; ";
quote[76]="&quot;Một ông thánh buồn là một ông thánh đáng buồn.  (Thánh Phanxicơ Sale)&quot; ";
quote[77]="&quot;Chúng ta không thể nên thánh, nếu chúng ta không có một tâm hồn vui vẻ (Đức Thánh Cha Gioan Phaolơ I)&quot; ";
quote[78]="&quot;Một nụ cười mím chi còn hơn là một bài diễn văn dài (Đức Thánh Cha Gioan Phaolơ I)&quot; ";
document.write(quote[whichQuote]);

}

getaQuote();

//-->