function TimeController() {
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var pm = "PM"
        m = checkTime(m);
        s = checkTime(s);
        if(h == 0){
            h = 12;
            pm = "AM"
        }
        if(h < 12){
            pm = "AM"
        }
        if(h > 12){
            h = h - 12;
        }
        document.getElementById('time').innerHTML = `<h1>${h}:${m} <span class="am-pm">${pm}</span></h1>`
           // h + ":" + m + ":" + s;
        var t = setTimeout(function(){startTime();}, 500);
    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }
    startTime()
}