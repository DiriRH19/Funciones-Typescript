
interface Estudiante {
    nombre: string;
    notas: number[];
}


let estudiantes: Estudiante[] = [];


function agregarEstudiante(nombre: string, notas: number[]): void {
    estudiantes.push({ nombre, notas });
}


function buscarEstudiante(nombre: string): Estudiante | undefined {
    return estudiantes.find(estudiante => estudiante.nombre.toLowerCase() === nombre.toLowerCase());
}


function calcularPromedioNotas(estudiante: Estudiante): number {
    const suma = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    return suma / estudiante.notas.length;
}


function calcularPromedioTotal(): number {
    const sumaTotal = estudiantes.reduce((acc, estudiante) => acc + calcularPromedioNotas(estudiante), 0);
    return sumaTotal / estudiantes.length;
}


agregarEstudiante("Juan", [85, 90, 78]);
agregarEstudiante("María", [92, 88, 95]);
agregarEstudiante("Carlos", [70, 75, 80]);

console.log(buscarEstudiante("María")); 
console.log("Promedio total de todos los estudiantes:", calcularPromedioTotal()); 