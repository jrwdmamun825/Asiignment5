// const displayButon = () => {
//     const getInputValue = document.getElementById('input-value');

//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputValue.value}`;

//     // fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => displayMeals(data.meals))


// }


// const displayMeals = item => {

//     const itemDiv = document.getElementById('items');
//     // console.log(item.meals)
//     item.forEach(search => {
//         // console.log(search)
//         const div = document.createElement('div');
//         div.className = 'item-list card col-sm';

//         div.innerHTML = `
//         <img src="${search.strMealThumb}" alt="">
//          <h6>${search.strMeal}</h6> `

//         itemDiv.appendChild(div);

//     })

// }


const displayButon = () => {
    const getInputValue = document.getElementById('input-value');

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputValue.value}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = item => {
    const itemDiv = document.getElementById('items');
    item.forEach(search => {
        const div = document.createElement('div');
        div.className = 'item-list card col-sm';

        div.innerHTML = `
            <img onclick="mealsIng('${search.idMeal}')" src="${search.strMealThumb}" alt="">
            <h5>${search.strMeal}</h5> `
        itemDiv.appendChild(div);
    })

}

const mealsIng = showDetails => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${showDetails}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => displayShow(data.meals[0]))
}

const displayShow = itemIng => {
    const infoDiv = document.getElementById('display-deatails');

    const createDiv = document.createElement('div');

    createDiv.innerHTML = ` 
        <div class="itemsDetail border">
            <img src="${itemIng.strMealThumb}" alt="">
            <h4>${itemIng.strMeal}</h4>

            <h3>Ingredients</h3>

            <h6>${itemIng.strIngredient1}</h6>
            <h6>${itemIng.strIngredient2}</h6>
            <h6>${itemIng.strIngredient3}</h6>
            <h6>${itemIng.strIngredient4}</h6>
            <h6>${itemIng.strIngredient5}</h6>
            <h6>${itemIng.strIngredient6}</h6>
            <h6>${itemIng.strIngredient7}</h6>
            <h6>${itemIng.strIngredient8}</h6>
            <h6>${itemIng.strIngredient9}</h6>
            <h6>${itemIng.strIngredient10}</h6>
        </div>


    `
    infoDiv.appendChild(createDiv)


}