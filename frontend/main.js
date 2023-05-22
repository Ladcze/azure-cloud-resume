window.addEventListener('DOMContentLoaded', (event) =>{ 
    getVisitCount();
})
const functionApiUrl = "https://w2cazureresume.azurewebsites.net/api/GetResumeCounter?code=80BNNa_pj_YMc6zcTsXZ6jnzMK7W6kax7vZZ9zKhjvAyAzFuF90p2w==https://w2cazureresume.azurewebsites.net/api/GetResumeCounter?code=80BNNa_pj_YMc6zcTsXZ6jnzMK7W6kax7vZZ9zKhjvAyAzFuF90p2w==";
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("website called function API");
        count = response.count
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
    console.log(error);
});
return count; 
    
}
