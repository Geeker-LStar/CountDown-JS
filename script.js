// 下雪效果
function snow()
{
    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");
 
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
 
    // Set number of snowflakes
    let numberFlakes = 400;
    let snowflakes = [];
 
    for (let i = 0; i < numberFlakes; i++)
    {
        snowflakes.push
        (
            {
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 3+1,
                d: Math.random() + 2
            }
        )
    }
 
    // Draw the snowflakes
    function drawFlakes()
    {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "white";
        ctx.beginPath();
 
        for (let i = 0; i < numberFlakes; i++)
        {
            let sf = snowflakes[i];
            ctx.moveTo(sf.x, sf.y);
            ctx.arc(sf.x, sf.y, sf.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        moveFlakes();
    }
 
    // Move the snowflakes
    function moveFlakes(){
        for (let i = 0; i < numberFlakes; i++)
        {
            let sf = snowflakes[i];
            sf.y += Math.pow(sf.d, 2) + 1;
 
            if(sf.y > height)
            {
                snowflakes[i] = 
                {
                    x: Math.random()*width, y: 0, r: sf.r, d: sf.d
                };
            }
        }
    }
    // Snowflake animation
    setInterval(drawFlakes, 26);
}
 
// 新春倒计时
// 11am on December 25th
const countDownDate = new Date("July 25, 2022, 12:00:00").getTime();
 
const x = setInterval
(function()
    {
        // Today's date + time
        let now = new Date().getTime();
        let distance = countDownDate - now;
    
        // Calculations for days/hours/minutes/seconds
        let days = Math.floor(distance / (1000*60*60*24));
        let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
        let seconds = Math.floor((distance % (1000*60)) / 1000);
    
        document.getElementById("countdown").innerHTML = days + " 天 " + hours + " 时 " + minutes + " 分 " + seconds + " 秒 ";
    
        if (distance < 0)
        {
            clearInterval(x);
            document.getElementById("message").innerHTML = "两周年倒计时—— czm & ltx";
            document.getElementById("countdown").innerHTML = "- 0 - 0 - 0 - 0 -"
        }
    }
, 1000);
