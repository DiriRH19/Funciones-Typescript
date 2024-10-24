interface Libro {
    titulo: string;
    autor: string;
    año: number;
}

let biblioteca: Libro[] = [];

function agregarLibro(titulo: string, autor: string, año: number):void {
    const nuevoLibro: Libro = {titulo, autor, año};
    biblioteca.push(nuevoLibro);
    console.log(`libro ${titulo} agregado a la biblioteca`);
}

function buscarLibro(titulo: string): Libro | undefined {
    return biblioteca.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
}

function mostrarLibros(): void {
    if (biblioteca.length === 0) {
      console.log("No hay libros en la biblioteca.");
      return;
    }
    console.log("Libros disponibles en la biblioteca:");
    biblioteca.forEach(libro => {
      console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}`);
    });
  }
  
  agregarLibro("Cien Años de Soledad", "Gabriel García Márquez", 1967);
  agregarLibro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);
  
  console.log(buscarLibro("Cien Años de Soledad"));
  
  mostrarLibros();