const displayButon = () => {
    const getInputValue = document.getElementById('input-value');

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputValue.value}`;

    // fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    fetch(url)
        .then(resp => resp.json())
        .then(data => displayMeals(data.meals))


}


const displayMeals = item => {

    const itemDiv = document.getElementById('items');
    // console.log(item.meals)
    item.forEach(search => {
        // console.log(search)
        const div = document.createElement('div');
        div.className = 'item-list card col-sm';

        div.innerHTML = `
        <img src="${search.strMealThumb}" alt="">
         <h6>${search.strMeal}</h6> `

        itemDiv.appendChild(div);

    })

}