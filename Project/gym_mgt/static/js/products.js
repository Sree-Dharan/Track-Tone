export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
        if(product.id === productId){
            matchingProduct = product;
        }
    });

    return matchingProduct;
}


export const shoeProducts =[{
    id:'sh1',
    image:'/static/images/sports2.png',
    name:'Abros Blaster',
    price:'1519'
},{
    id:'sh2',
    image:'/static/images/runnin tech shoe.png',
    name:'Runnin Tech Adidas',
    price:'3899'
},{
    id:'sh3',
    image:'/static/images/downshifter1.png',
    name:'Nike Downshifter',
    price:'4295'
},{
    id:'sh4',
    image:'/static/images/shoe4.png',
    name:'Ghost 15',
    price:'9000'
},{
    id:'sh5',
    image:'/static/images/sports1(r).png',
    name:'Adidas',
    price:'2500'
},]

export const tShirtProducts=[{
    id:'ts1',
    image:'/static/images/t-shirt1.png',
    name:'Zexer Men',
    price:'368'
},{
    id:'ts2',
    image:'/static/images/tshirts.png',
    name:'Workout T-Shirts for Men',
    price:'899'
},{
    id:'ts3',
    image:'/static/images/t-shirt3.png',
    name:'Jinquedai Sportswear',
    price:'1020'
},{
    id:'ts4',
    image:'/static/images/t-shirt4.png',
    name:'Tacvasen Workout Shirts',
    price:'900'
},{
    id:'ts5',
    image:'/static/images/t-shirt5.png',
    name:"Casual Fitness T-Shirt",
    price:'1250'
}]

export const trackPantProducts=[{
    id:'tr1',
    image:'/static/images/track1.png',
    name:'Kraasa gym joggers',
    price:'599'
    
},{
    id:'tr2',
    image:'/static/images/tracks2.png',
    name:'Mens Trackpant for Gym',
    price:'2599'
},{
    id:'tr3',
    image:'/static/images/tracks3.png',
    name:'Gray Sportswear Trousers for Men',
    price:'4999'
},{
    id:'tr4',
    image:'/static/images/tracks4.png',
    name:'Adidas astro knit Mens Pant',
    price:'3999'
},{
    id:'tr5',
    image:'/static/images/tracks5.png',
    name:'RUSH Grey Slim Fit Trackpants',
    price:'7999'
}]

export const supplementProducts=[{
    id:'su1',
    image:'/static/images/mbwhey.png',
    name:'Muscle Blaze Whey 1kg',
    price:'1449'
},{
    id:'su2',
    image:'/static/images/supplements2.png',
    name:'BigMuscle Nutrition Freak 60S',
    price:'1899'
},{
    id:'su3',
    image:'/static/images/supplements3.png',
    name:'GNC Creatine Monohydrate',
    price:'1499'
},{
    id:'su4',
    image:'/static/images/supplements4.png',
    name:'Bolt Whey Protein Powder',
    price:'1299'
},{
    id:'su5',
    image:'/static/images/supplements5.png',
    name:'ProSupps Hyde Xtreme Pre Workout',
    price:'1699'
}]

export const equipmentProducts=[{
    id:'eq1',
    image:'/static/images/dumbbells1.png',
    name:'Bouncer Dumbbells',
    price:'3721'
},
{
    id:'eq2',
    image:'/static/images/equip2.png',
    name: 'Multifunctional pull-up bar',
    price:'2499'
},{
    id:'eq3',
    image:'/static/images/equip3.png',
    name:'Gym Weight Bench 900 ',
    price:'16999'
},{
    id:'eq4',
    image:'/static/images/equip4.png',
    name:'Powermax Fitness Td-m1 Treadmill',
    price:'23999'
},{
    id:'eq5',
    image:'/static/images/equip5.png',
    name:'THE FLEXBIKE LITE',
    price:'18999'
}]



//for checkout
export const products =[{
    id:'sh1',
    image:'/static/images/sports2.png',
    name:'Abros Blaster',
    price:'1519'
},{
    id:'sh2',
    image:'/static/images/runnin tech shoe.png',
    name:'Runnin Tech Adidas',
    price:'3899'
},{
    id:'sh3',
    image:'/static/images/downshifter1.png',
    name:'Nike Downshifter',
    price:'4295'
},{
    id:'sh4',
    image:'/static/images/shoe4.png',
    name:'Ghost 15',
    price:'9000'
},{
    id:'sh5',
    image:'/static/images/sports1(r).png',
    name:'Adidas',
    price:'2500'
},{
    id:'ts1',
    image:'/static/images/t-shirt1.png',
    name:'Zexer Men',
    price:'368'
},{
    id:'ts2',
    image:'/static/images/tshirts.png',
    name:'Workout T-Shirts for Men',
    price:'899'
},{
    id:'ts3',
    image:'/static/images/t-shirt3.png',
    name:'Jinquedai Sportswear',
    price:'1020'
},{
    id:'ts4',
    image:'/static/images/t-shirt4.png',
    name:'Tacvasen Workout Shirts',
    price:'900'
},{
    id:'ts5',
    image:'/static/images/t-shirt5.png',
    name:"Casual Fitness T-Shirt",
    price:'1250'
},{
    id:'tr1',
    image:'/static/images/track1.png',
    name:'Kraasa gym joggers',
    price:'599'
    
},{
    id:'tr2',
    image:'/static/images/tracks2.png',
    name:'Mens Trackpant for Gym',
    price:'2599'
},{
    id:'tr3',
    image:'/static/images/tracks3.png',
    name:'Gray Sportswear Trousers for Men',
    price:'4999'
},{
    id:'tr4',
    image:'/static/images/tracks4.png',
    name:'Adidas astro knit Mens Pant',
    price:'3999'
},{
    id:'tr5',
    image:'/static/images/tracks5.png',
    name:'RUSH Grey Slim Fit Trackpants',
    price:'7999'
},{
    id:'su1',
    image:'/static/images/mbwhey.png',
    name:'Muscle Blaze Whey 1kg',
    price:'1449'
},{
    id:'su2',
    image:'/static/images/supplements2.png',
    name:'BigMuscle Nutrition Freak 60S',
    price:'1899'
},{
    id:'su3',
    image:'/static/images/supplements3.png',
    name:'GNC Creatine Monohydrate',
    price:'1499'
},{
    id:'su4',
    image:'/static/images/supplements4.png',
    name:'Bolt Whey Protein Powder',
    price:'1299'
},{
    id:'su5',
    image:'/static/images/supplements5.png',
    name:'ProSupps Hyde Xtreme Pre Workout',
    price:'1699'
},{
    id:'eq1',
    image:'/static/images/dumbbells1.png',
    name:'Bouncer Dumbbells',
    price:'3721'
},
{
    id:'eq2',
    image:'/static/images/equip2.png',
    name: 'Multifunctional pull-up bar',
    price:'2499'
},{
    id:'eq3',
    image:'/static/images/equip3.png',
    name:'Gym Weight Bench 900 ',
    price:'16999'
},{
    id:'eq4',
    image:'/static/images/equip4.png',
    name:'Powermax Fitness Td-m1 Treadmill',
    price:'23999'
},{
    id:'eq5',
    image:'/static/images/equip5.png',
    name:'THE FLEXBIKE LITE',
    price:'18999'
}]