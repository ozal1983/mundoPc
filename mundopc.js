class DispositivoEntrada{

    constructor (tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada; 
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca (marca){
        return this._marca=marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;

    constructor(tipoEntrada, marca){
        super (tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1= new Raton ('USB', 'HP');
console.log( raton1.toString ());
let raton2=new Raton ('Bluetooth', 'dell');
raton2.marca='HP';
console.log(raton2.toString ());

// hasta aqui clase raton
// a continuacion clase teclzado

class Teclado extends DispositivoEntrada{
    static contadorTeclados=0;

    constructor(tipoEntrada, marca){
        super (tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let teclado1= new Teclado ('USB', 'Lenovo');
console.log( teclado1.toString ());
let teclado2=new Teclado ('Bluetooth', 'Huawei');
teclado2.marca='Apple';
console.log(teclado2.toString ());

// hasta aqui clase teclado
// a continuacion clase Monitor

class Monitor{
    static contadorMonitor=0;

    constructor(marca, tamaño){    
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca=marca;
        this._tamaño=tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }     
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño=tamaño;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}], tamaño: ${this._tamaño}`;
    }
}

let monitor1= new Monitor ( 'Acer', '20"');
console.log( monitor1.toString ());
let monitor2=new Monitor ('Compaq',' 15"');
monitor2.marca='Asus';
console.log(monitor2.toString ());

// hasta aqui clase Monitor
// a continuacion clase Computadora

class Computadora{
    static contadorComputadoras=0;

    constructor(nombre,monitor, raton,teclado ){    
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
    }

    get idComputadora(){
        return this._idComputadora;
    }     
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor=monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado=teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton=raton;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor}\n ${this._raton}\n ${this._teclado} `;
    }
}

let computadora1= new Computadora ( 'Toshiba', monitor1, teclado1, raton1);
console.log( computadora1.toString ());
let computadora2=new Computadora ('Compaq', monitor2, teclado2, raton2);
// computadora2.nombre='Asus';
console.log(computadora2.toString ());

// hasta aqui clase Computadora
// a continuacion clase Orden

class Orden{
    static contadorOrdenes=0;
   
    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }

        get idOrden(){
            return this._idOrden;
        }
        agregarComputadora(computadora){
            
            this._computadoras.push(computadora);
                // this._productos[this._contadorProductosAgregados++]=producto;
        }
        mostrarOrden(){
            let computadorasOrden='';
            for(let computadora of this._computadoras){
                computadorasOrden+=`\n${computadora}`;
            }
            console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
        }
    

}

let orden1=new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2=new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();