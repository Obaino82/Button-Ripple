const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
    button.addEventListener("click",  (e) => {
        // position of where one click
        const x = e.clientX
        const y = e.clientY

        // console.log(x,y)
        
        // position of button
        const buttonTop =e.target.offsetTop
        const buttonleft =e.target.offsetLeft

        // console.log(buttonTop,buttonleft)

        // To calculate where we click
        const xInside = x - buttonleft
        const yInside = y - buttonTop

        // console.log (xInside,yInside)

        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style.top = yInside + "px"
        circle.style.left = xInside + "px"

        button.appendChild(circle)

        setInterval(() => circle.remove(), 500)

    })
})

