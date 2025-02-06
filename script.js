let string = "";//Initialization an empty string to hold the current input.
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=')
        {
                string = eval(string.replace('X', '*').replace('÷', '/').replace('−', '-').replace("%","/100*"));
                document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL')
        {
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
        }
        else
        {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})