# S6.Intro-React
 
# S6.Intro-React
 
- Exercici 1
Com ja hem indicat, una aplicació amb React està composta de components, diguem que cada component és una peça del puzle, tenint aquests components un propòsit únic i obvi.

Pots crear tants components com vulguis, i sempre que ho consideris necessari, pots utilitzar un o diversos components dins d'un altre. 

Per exemple, si féssim una landing page amb React, dins del component principal (base de la web) podríem importar el component header, menú, formulari de contacte….

En aquest primer exercici, crearem un component que s'encarregarà de renderitzar una frase, i l’importarem i usarem en el component principal App.



Has de dur a terme els següents passos:

1. Crear la carpeta components.

2. Crear la carpeta escena dins de la carpeta components.

3. Dins de la carpeta escena implementarem el primer component. Per a això has de crear el fitxer Escena.js. Aquest primer component només ha de retornar el següent string:

"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"

4. Ja tenim el nostre primer component creat, però encara no es mostrarà la frase. Per a això farem servir el nostre flamant component Escena. En el return del component app has d'utilitzar el component Escena.
   
   - Exercici 2
GENIAL!, ja tens el primer component creat i funcionant. De moment només es mostra una frase, en aquest exercici farem que es mostrin totes les frases de la història. 

Per a això, has de dur a terme les següents tasques:

1. Llegirem les dades d'un arxiu JSON o JS, amb els textos de la història en el component App:

[
  "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
  "L'heroi va decidir travessar la porta que el portava a casa",
  "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
]
2. S'ha de passar per props cadascun dels textos de la història al component Escena. (El component escena renderitzarà una sola línia de text).

3. Modificarem el component Escena per a mostrar totes les línies de text obtingudes del component pare App mitjançant props.

- Exercici 3
És moment d'aplicar estils al nostre component Escena. Has de maquetar aquest component utilitzant styled-components:

- Exercici 4
Mostrarem totes les línies de l’aplicació, però ressaltarem només una cada vegada, que anirà canviant a mesura que premem els botons d’avançar o retrocedir:

- Exercici 5
ENHORABONA!, ja has creat la base del projecte!, ja es pot navegar per la història indicant a l'usuari/ària en què punt es troba. 

Seria convenient mostrar a l'usuari/ària una pantalla inicial de benvinguda, que contingui la descripció del projecte i un botó de començar. En aquest exercici has d'usar el renderitzat condicional.

Ajuda: Com implementar el renderitzat condicional? Mitjançant una variable guardada en el state del component principal App, seràs capaç de mostrar la pantalla de benvinguda, i una vegada que aquesta variable canviï, ocultar la pantalla de benvinguda i mostrar la pantalla amb la història.

- Exercici 6
Ja només et falta modificar la imatge de fons segons l'usuari/ària vagi canviant de frase. 

Modificar el fitxer JSON i convertir-lo en un fitxer JS amb un array d'objectes. Cada objecte tindrà dues propietats: txt i img:

- txt serà la propietat que emmagatzemarà el text de l'escena.

- img serà la propietat que emmagatzemarà la imatge de fons que es veurà a la pantalla.

Pots descarregar-te la carpeta amb les imatges de fons, en aquest -> enllaç.

Com en l'array ja tens la frase a mostrar juntament amb la seva imatge, et resultarà senzill dinamitzar l'atribut "src" de la imatge.