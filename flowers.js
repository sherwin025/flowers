const flowers = [
    {
        id: 1,
        color: "white",
        species: "rose",
        price: .90
    },
    {
        id: 2,
        color: "red",
        species: "tulip",
        price: 1.10
    }

]

const addFlower = (flowerObject) => {

    const lastIndex = flowers.length -1;
    const lastFlower = flowers[lastIndex];
    flowerObject.id = lastFlower.id + 1;

    flowers.push(flowerObject)

}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        }
    }



    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

