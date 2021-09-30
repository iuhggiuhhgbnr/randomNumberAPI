var rapidCall = setInterval(getNumber,1000)
async function getNumber(){
    const resp = await fetch("https://random-data-api.com/api/cannabis/random_cannabis?size=1");
    //const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data =  await resp.json();
    //console.log(data);
    //console.log(data[0].id);
    //console.log(data[0].uid);

    appendDataToElement(data[0].id);
    appendUidToElement(data[0].uid);
    //console.log(data.status);
    //console.log(data.message);
}

function appendDataToElement(idValue){
    var getPElemt = document.getElementById('numberValue');
    getPElemt.innerHTML = idValue;

}

function appendUidToElement(uidValue){
    var getPElemt2 = document.getElementById('uidValue')
    getPElemt2.innerHTML = uidValue;
}