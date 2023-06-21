
function calculateBill()
{
    let billAmt = document.getElementById('billTotalInput').value ;
    
    let tipAmt = document.getElementById('tipInput').value ;

    let numberOfPeople = (document.getElementById('numberOfPeople').innerText) ;

    let finAmount = (parseInt(billAmt) + parseInt(tipAmt))/numberOfPeople ;

    document.getElementById("perPersonTotal").innerText = Math.round(finAmount) ;
}

function decreasePeople()
{
    
    let personCount = parseInt(document.getElementById('numberOfPeople').innerText) ;
    
    if(personCount > 1)
    {
        personCount = personCount - 1 ;
    }
    else
    {
        personCount = personCount  ;
    }
    // personCount = personCount 1 ;
    document.getElementById('numberOfPeople').innerText = personCount ;

    calculateBill() ;
}

function increasePeople()
{
    
    let personCount = parseInt(document.getElementById('numberOfPeople').innerText) ;
    
    if(personCount >= 1)
    {
        personCount = personCount + 1 ;
    }
    else
    {
        personCount = personCount ;
    }
    // personCount = personCount +1 ;
    document.getElementById('numberOfPeople').innerText = personCount ;

    calculateBill();
}