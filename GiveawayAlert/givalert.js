window.addEventListener('onEventReceived', function (obj) {
    if (obj.detail.listener !== "message") return;
	let data = obj.detail.event.data;
   	if (data.nick !== "nightbot") return;
  	let len = data.text.search(/\b\W/);
    if (data.text.slice(len,len+22) !== " has won the giveaway.") return;
	let winner = data.text.slice(0,len);
	let username = `<span style="color:{{winColor}}">` + winner + `</span>`;
	var message = username + ` {{winMessage}}`;
  addMessage(message);
  playAudio();
});

function html_encode(e) {
    return e.replace(/[<>"^]/g, function (e) {
        return "&#" + e.charCodeAt(0) + ";";
    });
}

function addMessage(message) {
  	div = document.getElementById("main_container");
    div.innerHTML = `<img src="{{animation}}" \><br \>` + message;
  	div.classList.remove("opac");
    void div.offsetWidth;
    div.classList.add("opac");
}
  
function playAudio() {
    var als = document.getElementById("alertSound");
    var vol = 0.45;
    als.volume = vol;
    als.play();
}
