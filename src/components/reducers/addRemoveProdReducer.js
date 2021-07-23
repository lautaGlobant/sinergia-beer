const initialState = {
    products: [],
    listProds : [
        { title: 'Cervezas', products: [{ name:'Doble Ipa', desc:'Que rica la doble ipa rica la doble ipa rica la doble ipa rica la doble ipa rica la doble ipa', price:'$1000', quantity:0 }, { name:'Blone Ale', desc:'Es como la cerveza rubia normal', price:'$100', quantity:0 }] },
        { title: 'Comida', products: [{ name:'Papas con cheddar', desc:'Papas delciosas con cheddar', price:'150', quantity:0 }, { name:'Pizza con muzzarela', desc:'Una pizzeta bien cheta y rica', price:'$200', quantity:0 }] }
    ]
};

export const addRemoveReducer = function (state = initialState, action) {
    switch (action.type){
        case 'ADD': {
            let newProducts = state.products;
            
            let prod = {
                name: action.prod.name,
                price: action.prod.price,
                quantity: action.prod.quantity + 1
            }

            let repeated = false;

            if(newProducts.length > 0){
                for(var i = 0; i < newProducts.length; i++){
                    if(newProducts[i].name === prod.name){
                        repeated = true;
                        
                        prod.quantity =  newProducts[i].quantity + 1
                        newProducts.splice(i, 1);
                        newProducts.push(prod);
                        break;
                    }
                }
            }

            if(!repeated){
                newProducts.push(prod);
            }

            return { products: newProducts, listProds: state.listProds };
        }
        case 'REMOVE': {
            let newProducts = state.products;

            for(var i = 0; i < newProducts.length; i++){
                if(newProducts[i].name === newProducts[i].name){
                    if(newProducts[i].quantity > 1){

                        let prod = {
                            name: action.prod.name,
                            price: action.prod.price,
                            quantity: newProducts[i].quantity - 1
                        }            

                        newProducts.splice(i, 1);
                        newProducts.push(prod);
                        break;
                    }else{
                        newProducts.splice(i, 1);
                    }
                }
            }

            return { products: newProducts, listProds: state.listProds }
        }
        default:
            return state;
    }
}