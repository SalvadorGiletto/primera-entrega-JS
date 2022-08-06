//Ecommerce de una tienda de ropa

//clase de remeras
class Ropa {
    constructor(id, categoria, marca, color, talle, material, precio){
        this.id = id
        this.categoria = categoria
        this.marca = marca
        this.color = color
        this.talle = talle
        this.material = material
        this.precio = precio
    }
    
    subirPrecio(aumento){
        this.precio += aumento
    }     

}

//obtejos tipo Ropa
//Remeras
const remera1 = new Ropa (1 , "Remeras", "Billabong", "Negra" , "XL", "algodón", 10);
const remera2 = new Ropa (2 , "Remeras", "Billabong", "Azul" , "S", "algodón", 12);
const remera3 = new Ropa (3 , "Remeras", "Nike", "Blanca" , "M", "algodón", 13);
const remera4 = new Ropa (4 , "Remeras", "Adidas", "Amarilla" , "L", "algodón y lycra", 14);

//Pantalones
const pantalon1 = new Ropa (7 , "Pantalón", "Levis", "Negro" , "48", "Jean", 9);
const pantalon2 = new Ropa (8 , "Pantalón", "Armani", "Azul Oscuro" , "46", "Jean", 11);
const pantalon3 = new Ropa (9 , "Pantalón", "DC", "Azul" , "42", "Jean", 16);
const pantalon4 = new Ropa (10 , "Pantalón", "Brooksfield", "Negro" , "48", "Jean", 19);
const pantalon5 = new Ropa (11 , "Pantalón", "Brooksfield", "Celeste" , "40", "Jean", 12);

//Camisas
const camisa1 = new Ropa (15 , "Camisa", "Vita Jean", "Negra" , "XXL", "algodón", 22)
const camisa2 = new Ropa (16 , "Camisa", "DC", "Azul" , "M", "algodón", 21);
const camisa3 = new Ropa (17 , "Camisa", "DC", "Celeste" , "L", "jean", 26);
const camisa4 = new Ropa (18, "Camisa", "Levis", "Rosa" , "M", "algodón", 24);
const camisa5 = new Ropa (19 , "Camisa", "Batuk", "Beige" , "40", "algodón", 26);


//Array por prendas
const remeras = [remera1, remera2, remera3, remera4];
const pantalones = [pantalon1, pantalon2, pantalon3, pantalon4, pantalon5]
const camisas = [camisa1, camisa2, camisa3, camisa4, camisa5]

//Array general
const ropaTotal = [remera1, remera2, remera3, remera4, pantalon1, pantalon2, pantalon3, pantalon4, pantalon5, camisa1, camisa2, camisa3, camisa4, camisa5]

//Variables
const carrito = [];

//Funcion
const agregarAlCarrito = () => {
    carrito.push(pregunta2)
    alert(`Agregaste al carrito el elemento con ID N° ${pregunta2}`)
}


//Ejecucion
let pregunta0 = alert("Abre la consola para ver todos los productos")
console.table(ropaTotal)

let pregunta1, pregunta2, pregunta3
do{
    do{
        pregunta1 = prompt("Qué categoría desea ver?(remeras / pantalones / camisas)").toLowerCase()

        if(pregunta1 === "remeras"){
            console.table(remeras)
        }else if(pregunta1 === "pantalones"){
            console.table(pantalones)
        }else if(pregunta1 === "camisas"){
            console.table(camisas)
        }else {
            alert("Referencia no válida")
        }

    }while(pregunta1 != "remeras" && pregunta1 != "pantalones" && pregunta1 != "camisas")

    pregunta2 = parseInt(prompt("Marque el ID del elemento a agregar"))
    agregarAlCarrito()
    console.log(carrito)
    pregunta3 = prompt("quiere elegir otro producto?").toLowerCase()

}while(pregunta3 == "si")






















