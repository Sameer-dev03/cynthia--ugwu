const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });


function mousecurser(){
    const mouse =  document.querySelector("#mousecursor");
    const main = document.querySelector("#main")

   main.addEventListener("mousemove",  function(det ){

        mouse.style.left = `${det.clientX}px`;
    mouse.style.top = `${det.clientY}px`;



    })
}

mousecurser()


function servicemove() {
    const elem = document.querySelectorAll(".elem");

    elem.forEach(function(service) {
        const img = service.querySelector("img");

        service.addEventListener("mousemove", function(det) {
            const rect = service.getBoundingClientRect();

            const x = det.clientX - rect.left;
            const y = det.clientY - rect.top;

            img.style.display = "block";
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
        });

        service.addEventListener("mouseleave", function() {
            img.style.display = "none";
        });
    });
}

servicemove();  