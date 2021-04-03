/* test("Debe de ser true", () => {
    const isActive = true;
    if(isActive){
        throw new Error("No esta activo");
    }
});

 */

describe("Prubas en el archivo dempo.test.js", () => {

    test('Deben de ser iguales los strings ', () => {
        // 1. Inicialización
        const mensaje = "Hola Mundo";
        
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // ===
    })
});
