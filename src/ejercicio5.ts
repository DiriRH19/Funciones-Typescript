
interface Reserva {
    nombreHuesped: string;
    numeroHabitacion: number;
    precioPorNoche: number;
    noches: number;
}


let reservas: Reserva[] = [];


function agregarReserva(nombreHuesped: string, numeroHabitacion: number, precioPorNoche: number, noches: number): void {
    reservas.push({ nombreHuesped, numeroHabitacion, precioPorNoche, noches });
}


function buscarReserva(nombreHuesped: string): Reserva | undefined {
    return reservas.find(reserva => reserva.nombreHuesped.toLowerCase() === nombreHuesped.toLowerCase());
}


function calcularIngresoTotal(): number {
    return reservas.reduce((total, reserva) => total + (reserva.precioPorNoche * reserva.noches), 0);
}


agregarReserva("Juan Pérez", 101, 100, 3);
agregarReserva("María García", 102, 120, 2);
agregarReserva("Carlos López", 103, 80, 1);

console.log(buscarReserva("María García")); 
console.log("Ingreso total del hotel:", calcularIngresoTotal()); 