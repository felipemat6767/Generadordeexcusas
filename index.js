var button = document.getElementById("button")
var excuse = document.getElementById("excuse")
button.addEventListener("click", generar)

let generarexcusa = () => {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let whoindex = Math.floor(Math.random() * who.length)
    let actionindex = Math.floor(Math.random() * action.length)
    let whatindex = Math.floor(Math.random() * what.length)
    let whenindex = Math.floor(Math.random() * when.length)

    return (who[whoindex] + " " + action[actionindex] + " " + what[whatindex] + " " + when[whenindex])

}

function generar() {
    excuse.innerHTML = generarexcusa()
}