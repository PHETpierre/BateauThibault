export const AddProduct=(productList, name,price)=>{
    if (productList==[] || productList.filter(elt=>elt.name==name) == []){
        return [...productList,{name,price,numbItems:1,amount:price}]
    }
    return productList
}