window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
])


const functionApi = '';

const getVisitCount = () => {
    let count = 50;
    fetch(functionAPi).then(response => {
    return Response.json()
}).then(response =>{
    console.log("website called function API.");
    count = response.count;
    document.getElementById("counter").innerText = count;
    
})catch.(function(error){
    console.log(error);
});
return count;

}
    