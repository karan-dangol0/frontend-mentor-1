let categories = document.querySelectorAll(".left-side .sub-heading");
let score = document.querySelectorAll(".right-side");

let icon = document.querySelectorAll(".left-side img");

        

fetch("./data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("JSON not found");
        }
        return response.json();
    })
    .then(data => {
        // console.log(category);
       /* data.forEach(element => {
            console.log(element.category, element.score, element.icon);
           /~ categories.forEach(category => {
                category.textContent = element.category
            })~/
            
            for (let i = 0; i < categories.length; i++){
                categories[i].textContent = element.category;
                console.log(categories[i].textContent);
                
            }

            
        })*/
        
        
        for (let i = 0; i < categories.length; i++){
            for (let i = 0; i < data.length; i++){
                categories[i].textContent = data[i].category;
                icon[i].setAttribute("src", `${data[i].icon}`);
                score[i].firstChild.textContent = data[i].score; 
                
                
                
            }
        }
        
        
    })
    .catch(error => {
        console.error("error loading json", error);
        
    });




  








