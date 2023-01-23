// alert("Hello, Welcome to Arpit's Profile.");
// var nav = document.querySelectorAll('.nav-menu a');
//
//
// for(var i=0;i<nav.length;i++)
// {
//     nav[i].addEventListener('click',function(event)
//     {
//         event.preventDefault();
//         var tarid = this.textContent.trim().toLowerCase();
//         var target = document.getElementById(tarid);
//         var interval = setInterval(function()
//         {
//             var tarc = target.getBoundingClientRect();
//             if(tarc.top <= 0)
//             {
//                clearInterval(interval);
//                return;
//             }
//             window.scrollBy(0,50);
//         },50);
//     });
// }

var skillop = document.querySelectorAll('.skill-pro > div');
var skill = document.getElementById('skill-dis');
window.addEventListener('scroll',work);
var animdone = false;

function work2()
{
    for(let bar of skillop)
    {
        bar.style.width = 0 +'%';
    }
}

function fillwork()
{
    for(let k of skillop)
    {
       let value = k.getAttribute('data-value');
       let curr = 0;

       var interval = setInterval(function()
       {
          if(curr == value)
          {
            clearInterval(interval);
            return;
          }
          else
          {
            curr++;
            k.style.width = curr +'%';
          }
       },5);
    }
}


function work()
{
    var corrdinte = skill.getBoundingClientRect();
    if(!animdone && corrdinte.top < window.innerHeight)
    {
       animdone = true;
       fillwork();
    }
    else if((corrdinte.bottom < 0 || corrdinte.top > window.innerHeight))
    {
        work2();
        animdone = false;
    }
}
