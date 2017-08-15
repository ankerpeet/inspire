function TimeController() {
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var pm = "PM"
        var greeting = "Good Evening"
        m = checkTime(m);
        s = checkTime(s);
        if(h == 0){
            h = 12;
            pm = "AM"
        }
        if(h < 17){
            greeting = "Good Afternoon"
        }
        if(h < 12){
            pm = "AM"
            greeting = "Good Morning"
        }
        if(h > 12){
            h = h - 12;
        }
        document.getElementById('time').innerHTML = `<h1>${h}:${m} <span class="am-pm">${pm}</span></h1><div><h3 class="thing">${greeting}</h3></div>`
        var t = setTimeout(function(){startTime();}, 500);
    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }
    startTime()
}