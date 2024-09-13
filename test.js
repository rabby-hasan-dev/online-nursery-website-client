

const dummydata = {
    title: " test ",
    description: "A beautiful flowering tree with stunning pink blooms in spring before leaves emerge. Grows to be 20-30 feet tall.",
    price: 20,
    category: "66934e8357cfbdaa1f8ca68c",
    brand: "amropali",
    stock: 15,
    rating: 4.3,
    images: "redbud_tree.jpg"
}




const transformedData = Object.entries(dummydata).reduce((acc, [key, value]) => {
    acc[key]= String(value);
    return acc;
}, {});

console.log(transformedData);