const Url = "https://dummyjson.com/products"

const apirequest = async () => {
    const response = await fetch(Url);
    if (response.status ===200){
        const products =  await response.json();
        const titles = products.products
        
        const product = titles.filter(element =>
            element.price
        )
        const arrayproducts = [];

        product.forEach(element => {
            arrayproducts.push(element.price);
            
        });
        arrayproducts.sort((a, b) => a - b);
        arrayproducts.forEach(pricee => {
            console.log(pricee);
            
        });
        return product;    
        };
    }

apirequest();