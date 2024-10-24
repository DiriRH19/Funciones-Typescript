
interface Empleado {
    nombre: string;
    salario: number;
}


let empleados: Empleado[] = [];


function agregarEmpleado(nombre: string, salario: number): void {
    empleados.push({ nombre, salario });
}


function buscarEmpleado(nombre: string): Empleado[] {
    return empleados.filter(empleado => empleado.nombre.toLowerCase() === nombre.toLowerCase());
}


function calcularSalarioPromedio(): number {
    if (empleados.length === 0) {
        return 0;
    }
    let totalSalario = empleados.reduce((total, empleado) => total + empleado.salario, 0);
    return totalSalario / empleados.length;
}


agregarEmpleado("Juan", 3000);
agregarEmpleado("Ana", 3500);
agregarEmpleado("Luis", 2500);

console.log(buscarEmpleado("Ana")); 
console.log(calcularSalarioPromedio());