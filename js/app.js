function checkList(list, k){
    let res = []
    for (let i = 0; i < list.length-1; i++) {
        for (let j = i+1; j < list.length; j++) {
            if(list[i]+list[j] == k){
                res.push([list[i],list[j]])
            }
        }
        
    }
    if (res == []){
        return false
    }
    return res;
}
function sumTheFears(){
    let k = parseInt(document.getElementById("k").value)
    if (isNaN(k)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'You didn\'t input a number!'
        })
    }
    let numbers = JSON.parse(localStorage.getItem("userArray"))||[93, 57, 44,14,32,37,25,5,4,30,80,18,40,55,84,10,27,79,39,9]
    let answer = checkList(numbers, k)
    displayData(answer)
}
function loadPage(){
    let data = JSON.parse(localStorage.getItem("userArray")) || [93, 57, 44, 14, 32, 37, 25, 5, 4, 30, 80, 18, 40, 55, 84, 10, 27, 79, 39, 9]
    displayList(data)
    
}
function addToArray(){
    let newElement = parseInt(document.getElementById("numIn").value)
    if(isNaN(newElement)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'You didn\'t input a number!'
        })
    }
    document.getElementById("numIn").value = ""
    let array = JSON.parse(localStorage.getItem("userArray"))
    array.push(newElement)
    localStorage.setItem("userArray", JSON.stringify(array))
    displayList(array)
}
function resetArray(){
    let defList = [93, 57, 44, 14, 32, 37, 25, 5, 4, 30, 80, 18, 40, 55, 84, 10, 27, 79, 39, 9]
    localStorage.setItem("userArray",JSON.stringify(defList))
    displayList(defList)
}
function clearArray(){
    
    localStorage.setItem("userArray", JSON.stringify([]))
    displayList([])
}
function displayList(list){
    document.getElementById("numlist").innerHTML = ""
    document.getElementById("numlist").innerHTML = "<h3>List of numbers:</h3>"
    template = document.getElementById("itemTemplate")

    for (let i = 0; i < list.length; i++) {
        const listItem = document.importNode(template.content,true)
        listItem.getElementById("item").innerText = list[i]
        document.getElementById("numlist").appendChild(listItem)
    }
}
function displayData(result){
    template = document.getElementById("itemTemplate")
    if (result == false){
        document.getElementById("output").innerHTML = "<h3 id=\"output\">False</h3>"
        return
    }
    document.getElementById("outlist").innerHTML = "<h3 id=\"output\">True</h3>"
    for (let i = 0; i < result.length; i++) {
        const equation = document.importNode(template.content, true)
        equation.getElementById("item").innerText = `${result[i][0]} + ${result[i][1]}`
        document.getElementById("outlist").appendChild(equation)
        
    }
}
loadPage()