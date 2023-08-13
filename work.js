let current_input = "";

function append(value)
{
    current_input += value;
    document.getElementById("result").value = current_input;
}

function clearresult()
{
    current_input="";
    document.getElementById("result").value = current_input;
}

function calc()
{
    try
    {
        let result;
        result = eval(current_input);
        document.getElementById("result").value = current_input;
        current_input = result.toString();
 
    }catch(error)
    {
        document.getElementById("result").value = "Error";
        current_input="";

    }

}
