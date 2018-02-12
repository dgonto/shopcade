
    /* Accordian*/
    var acc = document.getElementsByClassName("accordion");
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

/* Gallary code */

    var th = document.getElementById('thumbnails');

    th.addEventListener('click', function(e) {
    var t = e.target, new_src = t.parentNode.href, 
        large = document.getElementById('large'),
        cl = large.classList,
        lgwrap = document.getElementById('lg-wrap');

    lgwrap.style.backgroundImage = 'url(' +large.src + ')';
    
    if(cl){
        cl.add('hideme');
    } 
    
    window.setTimeout(function(){
        large.src = new_src;
        if(cl){
            cl.remove('hideme');
        } 
    }, 50);
    
    e.preventDefault();
    }, false);
  
 