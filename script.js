//Function for on or off visible options
function OnOffselect(idSelect, idOption){
    $('#'+idSelect).toggleClass('active');
    $('#'+idOption).toggleClass('active');
}

//Function for replace text from options to headline select
function replace(idSelect, idOption, idOptions){
    let select = document.querySelector('#'+idSelect+' p:first-of-type')
    let option = document.getElementById(idOption)
    select.innerHTML = option.innerHTML;
    OnOffselect(idSelect, idOptions);
}

//Function fro first replace text from options to headline select
function firstReplace(idSelect, idOption){
    let select = document.querySelector('#'+idSelect+' p:first-of-type')
    let option = document.getElementById(idOption)
    select.innerHTML = option.innerHTML;
}

//Applying Functions to Select
firstReplace('nameSel', 'nameOp0') //Aplying frist replace function
// for first meaning we take the id of the header of the custom select, for second meaning we take the id of first option

$('#nameSel').click(function(){ //Set click on header custom select
    OnOffselect('nameSel', 'nameOps') //Aplying on or off function
    //for first meaning we take the id of the header of the custom select, for second meaning we take the id of .options
})

$('#nameOps .option').click(function(){ //Set click on option 
    replace('nameSel', this.getAttribute('id'), 'nameOps') //Aplying replace function
    // for first meaning we take the id of the header of the custom select, for second meaning we take the id of third we take the id of the header of the .options

    $('#nameOriginalSelect').prop("selectedIndex", this.getAttribute('id').substr(6)) 
    //We look at which element we have selected and select the same element in the usual select
    //In substr we write the number of characters in id .option up to numbers, for example, in nameOp we have 10 characters, so we write 10
})