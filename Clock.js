function change(){
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth()+1;
  var day = now.getDate();
  var week = now.getDay();　//"hiduke"から週を取り出し"week"へ
  var yobi = ["日","月","火","水","木","金","土"];　//yobi配列用意
  var date = document.getElementById("calendar");
  date.innerHTML = year + "年" + month + "月" + day + "日" + yobi[week] + "曜日";

  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  var time = document.getElementById("time");
  time.innerHTML = hour + "時" + minute + "分" + second + "秒";

  var tstr = year + "/" + month + "/" + day;
  var zero = new Date(tstr);
  var morning = zero.setHours(4);  //朝
  var noon = zero.setHours(11);  //昼
  var evening = zero.setHours(16);  //夕
  var night = zero.setHours(19);  //夜
  var body = document.body;
  if(now >= morning && now < noon){
    body.style.backgroundImage = "url(Clockimg/morining.jpg)";
    date.style.color = "#111100";
    time.style.color = "#111100";
  }
  if(now >= noon && now < evening){
    body.style.backgroundImage = "url(Clockimg/noon.jpg)";
    date.style.color = "#001200";
    time.style.color = "#001200";
  }
  if(now >= evening && now < night){
    body.style.backgroundImage = "url(Clockimg/evening.jpg)";
    date.style.color = "#E0D9FF";
    time.style.color = "#E0D9FF";
  }
  if(now >= night || now < morning){
    body.style.backgroundImage = "url(Clockimg/night.jpg)";
    date.style.color = "#F0F8FF";
    time.style.color = "#F0F8FF";
  }
}

setInterval('change()', 1000);
