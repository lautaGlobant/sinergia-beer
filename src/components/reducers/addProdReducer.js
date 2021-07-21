const initialState = {
    products: [],
    listProds : [
        { title: 'Cervezas', products: [{ name:'Doble Ipa', desc:'Que rica la doble ipa rica la doble ipa rica la doble ipa rica la doble ipa rica la doble ipa', price:'$1000' }, { name:'Blone Ale', desc:'Es como la cerveza rubia normal', price:'$100' }] },
        { title: 'Comida', products: [{ name:'Papas con cheddar', desc:'Papas delciosas con cheddar', price:'150' }, { name:'Pizza con muzzarela', desc:'Una pizzeta bien cheta y rica', price:'$200' }] }
    ]
};

export const addReducer = function (state = initialState, action) {
    switch (action.type){
        case 'ADD':
            let newProducts = state.products;
            newProducts.push(action.prod);
            return { products: newProducts, listProds: state.listProds };
        default:
            return state;
    }
}