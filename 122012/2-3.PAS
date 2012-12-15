Program Vic;
uses crt;
type sau=array[1..20] of integer;
var a:sau;
    N,i,j,dcn:integer;
BEGIN
clrscr;
	Repeat
    write('Nhap N:');
    readln(N);
	Until (N>0) and (N<21);
	
 for i:=1 to N do
			begin
			write('a[',i,']=');
			readln(a[i]);
			end;
        writeln('Vi tri co gia tri chia het cho 3 va 5');
        writeln('VT GT');
  for i:=1 to n do
		begin
			if(a[i] mod 3=0) then
				if (a[i] mod 5=0) then
							writeln('#',i,'=',a[i]);
		end;
 for i:=1 to N do
	for j:=i+1 to N do
		if a[i]>a[j] then
			begin
				dcn:=A[i];
				A[i]:=A[j];
				A[j]:=dcn;
			end;
 writeln('Sau khi sap xep theo  chieu tang dan :');
	for i:=1 to N do
			write(A[i]:5);
 readln
 end.
