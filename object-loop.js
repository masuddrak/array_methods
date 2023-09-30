const shopingCard = {
    potato: "20kg",
    alu: '5kg',
    chili: '1kg'
}
for (let items in shopingCard) {

    const value = shopingCard[items]
    console.log(items,value)
}