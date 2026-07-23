const fs = require('fs');

const realData = {
    "independiente": {
        "players": [
            { "name": "Rodrigo Rey", "pos": "GOL", "str": 80 },
            { "name": "Mauricio Isla", "pos": "LAT", "str": 79 },
            { "name": "Felipe Aguilar", "pos": "ZAG", "str": 78 },
            { "name": "Joaquín Laso", "pos": "ZAG", "str": 79 },
            { "name": "Ayrton Costa", "pos": "LAT", "str": 78 },
            { "name": "Iván Marcone", "pos": "MEI", "str": 81 },
            { "name": "Federico Mancuello", "pos": "MEI", "str": 80 },
            { "name": "Lucas González", "pos": "MEI", "str": 77 },
            { "name": "Matías Giménez", "pos": "ATA", "str": 79 },
            { "name": "Alexis Canelo", "pos": "ATA", "str": 78 },
            { "name": "Gabriel Ávalos", "pos": "ATA", "str": 81 },
            { "name": "Diego Segovia", "pos": "GOL", "str": 72 },
            { "name": "Juan Fedorco", "pos": "ZAG", "str": 74 },
            { "name": "Julio Buffarini", "pos": "LAT", "str": 73 },
            { "name": "Damián Pérez", "pos": "LAT", "str": 74 },
            { "name": "Johnny Quiñónez", "pos": "MEI", "str": 75 },
            { "name": "Gabriel Neves", "pos": "MEI", "str": 77 },
            { "name": "Alex Luna", "pos": "MEI", "str": 74 },
            { "name": "Ignacio Maestro Puch", "pos": "ATA", "str": 75 },
            { "name": "Javier Ruiz", "pos": "ATA", "str": 73 }
        ]
    },
    "racingclub": {
        "players": [
            { "name": "Gabriel Arias", "pos": "GOL", "str": 82 },
            { "name": "Gastón Martirena", "pos": "LAT", "str": 78 },
            { "name": "Leonardo Sigali", "pos": "ZAG", "str": 81 },
            { "name": "Nazareno Colombo", "pos": "ZAG", "str": 79 },
            { "name": "Gabriel Rojas", "pos": "LAT", "str": 80 },
            { "name": "Bruno Zuculini", "pos": "MEI", "str": 81 },
            { "name": "Agustín Almendra", "pos": "MEI", "str": 80 },
            { "name": "Juan Quintero", "pos": "MEI", "str": 84 },
            { "name": "Santiago Solari", "pos": "ATA", "str": 79 },
            { "name": "Adrián Martínez", "pos": "ATA", "str": 83 },
            { "name": "Roger Martínez", "pos": "ATA", "str": 82 },
            { "name": "Facundo Cambeses", "pos": "GOL", "str": 77 },
            { "name": "Marco Di Cesare", "pos": "ZAG", "str": 78 },
            { "name": "Tobías Rubio", "pos": "LAT", "str": 75 },
            { "name": "Ignacio Galván", "pos": "LAT", "str": 76 },
            { "name": "Leonel Miranda", "pos": "MEI", "str": 78 },
            { "name": "Baltasar Rodríguez", "pos": "MEI", "str": 80 },
            { "name": "Johan Carbonero", "pos": "ATA", "str": 81 },
            { "name": "Maximiliano Salas", "pos": "ATA", "str": 78 },
            { "name": "Agustín Urzi", "pos": "ATA", "str": 77 }
        ]
    },
    "estudianteslp": {
        "players": [
            { "name": "Matías Mansilla", "pos": "GOL", "str": 79 },
            { "name": "Eros Mancuso", "pos": "LAT", "str": 80 },
            { "name": "Federico Fernández", "pos": "ZAG", "str": 81 },
            { "name": "Zaid Romero", "pos": "ZAG", "str": 82 },
            { "name": "Gastón Benedetti", "pos": "LAT", "str": 79 },
            { "name": "Enzo Pérez", "pos": "MEI", "str": 83 },
            { "name": "Santiago Ascacíbar", "pos": "MEI", "str": 82 },
            { "name": "José Sosa", "pos": "MEI", "str": 80 },
            { "name": "Tiago Palacios", "pos": "ATA", "str": 78 },
            { "name": "Javier Correa", "pos": "ATA", "str": 81 },
            { "name": "Guido Carrillo", "pos": "ATA", "str": 81 },
            { "name": "Juan Pablo Zozaya", "pos": "GOL", "str": 72 },
            { "name": "Luciano Lollo", "pos": "ZAG", "str": 76 },
            { "name": "Eric Meza", "pos": "LAT", "str": 77 },
            { "name": "Nicolás Fernández", "pos": "LAT", "str": 75 },
            { "name": "Fernando Zuqui", "pos": "MEI", "str": 78 },
            { "name": "Nehuén Paz", "pos": "MEI", "str": 76 },
            { "name": "Edwuin Cetré", "pos": "ATA", "str": 80 },
            { "name": "Mauro Méndez", "pos": "ATA", "str": 78 },
            { "name": "Pablo Piatti", "pos": "ATA", "str": 77 }
        ]
    },
    "velezsarsfield": {
        "players": [
            { "name": "Tomás Marchiori", "pos": "GOL", "str": 78 },
            { "name": "Joaquín García", "pos": "LAT", "str": 77 },
            { "name": "Emanuel Mammana", "pos": "ZAG", "str": 79 },
            { "name": "Valentín Gómez", "pos": "ZAG", "str": 80 },
            { "name": "Elías Gómez", "pos": "LAT", "str": 78 },
            { "name": "Christian Ordóñez", "pos": "MEI", "str": 77 },
            { "name": "Agustín Bouzat", "pos": "MEI", "str": 78 },
            { "name": "Claudio Aquino", "pos": "MEI", "str": 82 },
            { "name": "Francisco Pizzini", "pos": "ATA", "str": 78 },
            { "name": "Braian Romero", "pos": "ATA", "str": 80 },
            { "name": "Thiago Fernández", "pos": "ATA", "str": 76 },
            { "name": "Lautaro Garzón", "pos": "GOL", "str": 71 },
            { "name": "Damián Fernández", "pos": "ZAG", "str": 74 },
            { "name": "Tomás Cavanagh", "pos": "LAT", "str": 73 },
            { "name": "Leonardo Jara", "pos": "LAT", "str": 75 },
            { "name": "Santiago Cáseres", "pos": "MEI", "str": 76 },
            { "name": "Tomás Guidara", "pos": "MEI", "str": 74 },
            { "name": "Lenny Lobato", "pos": "ATA", "str": 75 },
            { "name": "Alejo Sarco", "pos": "ATA", "str": 74 },
            { "name": "Abiel Osorio", "pos": "ATA", "str": 73 }
        ]
    },
    "velez": {
        "players": [
            { "name": "Tomás Marchiori", "pos": "GOL", "str": 78 },
            { "name": "Joaquín García", "pos": "LAT", "str": 77 },
            { "name": "Emanuel Mammana", "pos": "ZAG", "str": 79 },
            { "name": "Valentín Gómez", "pos": "ZAG", "str": 80 },
            { "name": "Elías Gómez", "pos": "LAT", "str": 78 },
            { "name": "Christian Ordóñez", "pos": "MEI", "str": 77 },
            { "name": "Agustín Bouzat", "pos": "MEI", "str": 78 },
            { "name": "Claudio Aquino", "pos": "MEI", "str": 82 },
            { "name": "Francisco Pizzini", "pos": "ATA", "str": 78 },
            { "name": "Braian Romero", "pos": "ATA", "str": 80 },
            { "name": "Thiago Fernández", "pos": "ATA", "str": 76 },
            { "name": "Lautaro Garzón", "pos": "GOL", "str": 71 },
            { "name": "Damián Fernández", "pos": "ZAG", "str": 74 },
            { "name": "Tomás Cavanagh", "pos": "LAT", "str": 73 },
            { "name": "Leonardo Jara", "pos": "LAT", "str": 75 },
            { "name": "Santiago Cáseres", "pos": "MEI", "str": 76 },
            { "name": "Tomás Guidara", "pos": "MEI", "str": 74 },
            { "name": "Lenny Lobato", "pos": "ATA", "str": 75 },
            { "name": "Alejo Sarco", "pos": "ATA", "str": 74 },
            { "name": "Abiel Osorio", "pos": "ATA", "str": 73 }
        ]
    },
    "newellsoldboys": {
        "players": [
            { "name": "Ramiro Macagno", "pos": "GOL", "str": 77 },
            { "name": "Armando Méndez", "pos": "LAT", "str": 78 },
            { "name": "Gustavo Velázquez", "pos": "ZAG", "str": 79 },
            { "name": "Ian Glavinovich", "pos": "ZAG", "str": 77 },
            { "name": "Ángelo Martino", "pos": "LAT", "str": 78 },
            { "name": "Rodrigo Fernández", "pos": "MEI", "str": 79 },
            { "name": "Éver Banega", "pos": "MEI", "str": 81 },
            { "name": "Jerónimo Cacciabue", "pos": "MEI", "str": 76 },
            { "name": "Brian Aguirre", "pos": "ATA", "str": 80 },
            { "name": "Juan Ignacio Ramírez", "pos": "ATA", "str": 81 },
            { "name": "Francisco González", "pos": "ATA", "str": 77 },
            { "name": "Lucas Hoyos", "pos": "GOL", "str": 75 },
            { "name": "Leonel Vangioni", "pos": "ZAG", "str": 76 },
            { "name": "Tomás Jacob", "pos": "LAT", "str": 74 },
            { "name": "Brian Calderara", "pos": "LAT", "str": 73 },
            { "name": "Julián Fernández", "pos": "MEI", "str": 75 },
            { "name": "Guillermo Balzi", "pos": "MEI", "str": 74 },
            { "name": "Guillermo May", "pos": "ATA", "str": 76 },
            { "name": "Giovani Chiaverano", "pos": "ATA", "str": 73 },
            { "name": "Misael Jaime", "pos": "ATA", "str": 72 }
        ]
    },
    "argentinosjuniors": {
        "players": [
            { "name": "Diego Rodríguez", "pos": "GOL", "str": 78 },
            { "name": "Thiago Santamaría", "pos": "LAT", "str": 76 },
            { "name": "Francisco Álvarez", "pos": "ZAG", "str": 77 },
            { "name": "Tobías Palacio", "pos": "ZAG", "str": 76 },
            { "name": "Román Vega", "pos": "LAT", "str": 75 },
            { "name": "Alan Lescano", "pos": "MEI", "str": 79 },
            { "name": "Franco Moyano", "pos": "MEI", "str": 78 },
            { "name": "Nicolás Oroz", "pos": "MEI", "str": 77 },
            { "name": "Luciano Gondou", "pos": "ATA", "str": 81 },
            { "name": "Maximiliano Romero", "pos": "ATA", "str": 78 },
            { "name": "Gastón Verón", "pos": "ATA", "str": 77 },
            { "name": "Gonzalo Siri", "pos": "GOL", "str": 70 },
            { "name": "Jonatan Galván", "pos": "ZAG", "str": 75 },
            { "name": "Sebastián Prieto", "pos": "LAT", "str": 74 },
            { "name": "Ariel Gamarra", "pos": "MEI", "str": 73 },
            { "name": "Santiago Montiel", "pos": "MEI", "str": 76 },
            { "name": "Emiliano Viveros", "pos": "MEI", "str": 74 },
            { "name": "Damián Batallini", "pos": "ATA", "str": 75 },
            { "name": "José María Herrera", "pos": "ATA", "str": 74 },
            { "name": "Leonardo Heredia", "pos": "ATA", "str": 75 }
        ]
    },
    "lanus": {
        "players": [
            { "name": "Lucas Acosta", "pos": "GOL", "str": 77 },
            { "name": "Julio Soler", "pos": "LAT", "str": 76 },
            { "name": "Ezequiel Muñoz", "pos": "ZAG", "str": 78 },
            { "name": "Abel Luciatti", "pos": "ZAG", "str": 77 },
            { "name": "Braian Aguirre", "pos": "LAT", "str": 78 },
            { "name": "Felipe Peña Biafore", "pos": "MEI", "str": 79 },
            { "name": "Raúl Loaiza", "pos": "MEI", "str": 77 },
            { "name": "Marcelino Moreno", "pos": "MEI", "str": 80 },
            { "name": "Ramiro Carrera", "pos": "MEI", "str": 78 },
            { "name": "Walter Bou", "pos": "ATA", "str": 81 },
            { "name": "Augusto Lotti", "pos": "ATA", "str": 77 },
            { "name": "Alan Aguerre", "pos": "GOL", "str": 75 },
            { "name": "José María Canale", "pos": "ZAG", "str": 76 },
            { "name": "Juan Cáceres", "pos": "LAT", "str": 75 },
            { "name": "Nicolás Morgantini", "pos": "LAT", "str": 74 },
            { "name": "Luciano Boggio", "pos": "MEI", "str": 76 },
            { "name": "Agustín Rodríguez", "pos": "MEI", "str": 73 },
            { "name": "Jonatan Torres", "pos": "ATA", "str": 75 },
            { "name": "Favio Álvarez", "pos": "ATA", "str": 76 },
            { "name": "Leandro Díaz", "pos": "ATA", "str": 78 }
        ]
    },
    "huracan": {
        "players": [
            { "name": "Hernán Galíndez", "pos": "GOL", "str": 78 },
            { "name": "Lucas Souto", "pos": "LAT", "str": 75 },
            { "name": "Fernando Tobio", "pos": "ZAG", "str": 78 },
            { "name": "Lucas Carrizo", "pos": "ZAG", "str": 76 },
            { "name": "César Ibáñez", "pos": "LAT", "str": 75 },
            { "name": "Rodrigo Echeverría", "pos": "MEI", "str": 79 },
            { "name": "Williams Alarcón", "pos": "MEI", "str": 78 },
            { "name": "Héctor Fértoli", "pos": "MEI", "str": 77 },
            { "name": "Ignacio Pussetto", "pos": "ATA", "str": 80 },
            { "name": "Walter Mazzantti", "pos": "ATA", "str": 78 },
            { "name": "Leandro Garate", "pos": "ATA", "str": 77 },
            { "name": "Sebastián Meza", "pos": "GOL", "str": 74 },
            { "name": "Fabio Pereyra", "pos": "ZAG", "str": 75 },
            { "name": "Guillermo Burdisso", "pos": "ZAG", "str": 76 },
            { "name": "Guillermo Benítez", "pos": "LAT", "str": 74 },
            { "name": "Agustín Toledo", "pos": "MEI", "str": 73 },
            { "name": "Franco Alfonso", "pos": "MEI", "str": 76 },
            { "name": "Marcelo Pérez", "pos": "ATA", "str": 75 },
            { "name": "Andrés Roa", "pos": "ATA", "str": 76 },
            { "name": "Matías Gómez", "pos": "ATA", "str": 73 }
        ]
    },
    "defensayjusticia": {
        "players": [
            { "name": "Cristopher Fiermarín", "pos": "GOL", "str": 76 },
            { "name": "Nicolás Tripichio", "pos": "LAT", "str": 78 },
            { "name": "Emanuel Aguilera", "pos": "ZAG", "str": 77 },
            { "name": "Santiago Ramos Mingo", "pos": "ZAG", "str": 76 },
            { "name": "Alexis Soto", "pos": "LAT", "str": 78 },
            { "name": "Kevin López", "pos": "MEI", "str": 77 },
            { "name": "Julián López", "pos": "MEI", "str": 76 },
            { "name": "Rodrigo Bogarín", "pos": "MEI", "str": 77 },
            { "name": "Luciano Herrera", "pos": "ATA", "str": 76 },
            { "name": "Nicolás Fernández", "pos": "ATA", "str": 81 },
            { "name": "Gastón Togni", "pos": "ATA", "str": 79 },
            { "name": "Enrique Bologna", "pos": "GOL", "str": 75 },
            { "name": "Esteban Burgos", "pos": "ZAG", "str": 75 },
            { "name": "Darío Cáceres", "pos": "LAT", "str": 74 },
            { "name": "Ezequiel Cannavo", "pos": "LAT", "str": 73 },
            { "name": "Gabriel Alanís", "pos": "MEI", "str": 75 },
            { "name": "Benjamín Schamine", "pos": "MEI", "str": 72 },
            { "name": "Aaron Molinas", "pos": "MEI", "str": 76 },
            { "name": "Leandro Godoy", "pos": "ATA", "str": 74 },
            { "name": "Nicolás Blandi", "pos": "ATA", "str": 75 }
        ]
    },
    "belgrano": {
        "players": [
            { "name": "Nahuel Losada", "pos": "GOL", "str": 78 },
            { "name": "Juan Barinaga", "pos": "LAT", "str": 77 },
            { "name": "Matías Moreno", "pos": "ZAG", "str": 76 },
            { "name": "Alejandro Rébola", "pos": "ZAG", "str": 77 },
            { "name": "Alex Ibacache", "pos": "LAT", "str": 76 },
            { "name": "Santiago Longo", "pos": "MEI", "str": 79 },
            { "name": "Esteban Rolón", "pos": "MEI", "str": 77 },
            { "name": "Ulises Sánchez", "pos": "MEI", "str": 80 },
            { "name": "Matías Marín", "pos": "MEI", "str": 76 },
            { "name": "Lucas Passerini", "pos": "ATA", "str": 81 },
            { "name": "Bryan Reyna", "pos": "ATA", "str": 79 },
            { "name": "Ignacio Chicco", "pos": "GOL", "str": 75 },
            { "name": "Gonzalo Maffini", "pos": "ZAG", "str": 74 },
            { "name": "Nicolás Meriano", "pos": "ZAG", "str": 75 },
            { "name": "Rafael Delgado", "pos": "LAT", "str": 75 },
            { "name": "Facundo Quignon", "pos": "MEI", "str": 76 },
            { "name": "Ariel Rojas", "pos": "MEI", "str": 74 },
            { "name": "Francisco González Metilli", "pos": "ATA", "str": 76 },
            { "name": "Franco Jara", "pos": "ATA", "str": 77 },
            { "name": "Matias Suarez", "pos": "ATA", "str": 76 }
        ]
    },
    "godoycruz": {
        "players": [
            { "name": "Franco Petroli", "pos": "GOL", "str": 77 },
            { "name": "Lucas Arce", "pos": "LAT", "str": 76 },
            { "name": "Pier Barrios", "pos": "ZAG", "str": 78 },
            { "name": "Federico Rasmussen", "pos": "ZAG", "str": 77 },
            { "name": "Thomas Galdames", "pos": "LAT", "str": 77 },
            { "name": "Bruno Leyes", "pos": "MEI", "str": 76 },
            { "name": "Nicolás Fernández", "pos": "MEI", "str": 78 },
            { "name": "Hernán López Muñoz", "pos": "MEI", "str": 80 },
            { "name": "Tomás Conechny", "pos": "ATA", "str": 79 },
            { "name": "Tomás Badaloni", "pos": "ATA", "str": 78 },
            { "name": "Juan Bautista Cejas", "pos": "ATA", "str": 76 },
            { "name": "Roberto Ramírez", "pos": "GOL", "str": 73 },
            { "name": "Brian Salvareschi", "pos": "ZAG", "str": 74 },
            { "name": "Martín Luciano", "pos": "LAT", "str": 73 },
            { "name": "Manuel Guillén", "pos": "LAT", "str": 74 },
            { "name": "Vicente Poggi", "pos": "MEI", "str": 75 },
            { "name": "Mariano Santiago", "pos": "MEI", "str": 73 },
            { "name": "Daniel Barrea", "pos": "ATA", "str": 74 },
            { "name": "Nahuel Ulariaga", "pos": "ATA", "str": 75 },
            { "name": "Martín Pino", "pos": "ATA", "str": 73 }
        ]
    },
    "banfield": {
        "players": [
            { "name": "Marcelo Barovero", "pos": "GOL", "str": 77 },
            { "name": "Ezequiel Bonifacio", "pos": "LAT", "str": 75 },
            { "name": "Alejandro Maciel", "pos": "ZAG", "str": 76 },
            { "name": "Aarón Quirós", "pos": "ZAG", "str": 77 },
            { "name": "Emanuel Insúa", "pos": "LAT", "str": 76 },
            { "name": "Yvo Calleros", "pos": "MEI", "str": 75 },
            { "name": "Jesús Soraire", "pos": "MEI", "str": 75 },
            { "name": "Ignacio Rodríguez", "pos": "MEI", "str": 76 },
            { "name": "Gerónimo Rivera", "pos": "ATA", "str": 78 },
            { "name": "Milton Giménez", "pos": "ATA", "str": 79 },
            { "name": "Bruno Sepúlveda", "pos": "ATA", "str": 76 },
            { "name": "Facundo Sanguinetti", "pos": "GOL", "str": 72 },
            { "name": "Mateo Pérez", "pos": "ZAG", "str": 73 },
            { "name": "Franco Quinteros", "pos": "LAT", "str": 74 },
            { "name": "Cristian Núñez", "pos": "MEI", "str": 73 },
            { "name": "Juan Quintana", "pos": "MEI", "str": 72 },
            { "name": "Matías González", "pos": "MEI", "str": 74 },
            { "name": "Braian Galván", "pos": "ATA", "str": 75 },
            { "name": "Juan Álvarez", "pos": "ATA", "str": 74 },
            { "name": "Marcos Echeverría", "pos": "ATA", "str": 72 }
        ]
    },
    "tigre": {
        "players": [
            { "name": "Matías Tagliamonte", "pos": "GOL", "str": 75 },
            { "name": "Martín Ortega", "pos": "LAT", "str": 74 },
            { "name": "Gian Nardelli", "pos": "ZAG", "str": 75 },
            { "name": "Facundo Giacopuzzi", "pos": "ZAG", "str": 74 },
            { "name": "Nahuel Genez", "pos": "LAT", "str": 73 },
            { "name": "Agustín Cardozo", "pos": "MEI", "str": 76 },
            { "name": "Martín Garay", "pos": "MEI", "str": 75 },
            { "name": "Brahian Alemán", "pos": "MEI", "str": 77 },
            { "name": "Blas Armoa", "pos": "ATA", "str": 76 },
            { "name": "Gonzalo Flores", "pos": "ATA", "str": 74 },
            { "name": "Nicolás Contín", "pos": "ATA", "str": 75 },
            { "name": "Felipe Zenobio", "pos": "GOL", "str": 72 },
            { "name": "Augusto Aguirre", "pos": "ZAG", "str": 73 },
            { "name": "Sebastián Sánchez", "pos": "LAT", "str": 72 },
            { "name": "Tomás Galván", "pos": "MEI", "str": 75 },
            { "name": "Sebastián Medina", "pos": "MEI", "str": 74 },
            { "name": "Matías Espíndola", "pos": "MEI", "str": 72 },
            { "name": "Ezequiel Forclaz", "pos": "ATA", "str": 74 },
            { "name": "Flabián Londoño", "pos": "ATA", "str": 73 },
            { "name": "Camilo Viganoni", "pos": "ATA", "str": 71 }
        ]
    },
    "union": {
        "players": [
            { "name": "Nicolás Campisi", "pos": "GOL", "str": 74 },
            { "name": "Federico Vera", "pos": "LAT", "str": 76 },
            { "name": "Nicolás Paz", "pos": "ZAG", "str": 75 },
            { "name": "Franco Pardo", "pos": "ZAG", "str": 74 },
            { "name": "Claudio Corvalán", "pos": "LAT", "str": 77 },
            { "name": "Bruno Pittón", "pos": "MEI", "str": 75 },
            { "name": "Mauro Pittón", "pos": "MEI", "str": 76 },
            { "name": "Joaquín Mosqueira", "pos": "MEI", "str": 75 },
            { "name": "Mauro Luna Diale", "pos": "ATA", "str": 78 },
            { "name": "Lucas Gamba", "pos": "ATA", "str": 77 },
            { "name": "Adrián Balboa", "pos": "ATA", "str": 76 },
            { "name": "Thiago Cardozo", "pos": "GOL", "str": 73 },
            { "name": "Miguel Torrén", "pos": "ZAG", "str": 76 },
            { "name": "Valentín Fascendini", "pos": "ZAG", "str": 73 },
            { "name": "Mateo Del Blanco", "pos": "LAT", "str": 74 },
            { "name": "Patricio Tanda", "pos": "MEI", "str": 73 },
            { "name": "Enzo Roldán", "pos": "MEI", "str": 75 },
            { "name": "Simón Rivero", "pos": "MEI", "str": 72 },
            { "name": "Jerónimo Dómina", "pos": "ATA", "str": 74 },
            { "name": "Nicolás Orsini", "pos": "ATA", "str": 75 }
        ]
    },
    "atleticotucuman": {
        "players": [
            { "name": "José Devecchi", "pos": "GOL", "str": 75 },
            { "name": "Agustín Lagos", "pos": "LAT", "str": 74 },
            { "name": "Francisco Flores", "pos": "ZAG", "str": 75 },
            { "name": "Nicolás Romero", "pos": "ZAG", "str": 76 },
            { "name": "Matías Orihuela", "pos": "LAT", "str": 75 },
            { "name": "Guillermo Acosta", "pos": "MEI", "str": 76 },
            { "name": "Adrián Sánchez", "pos": "MEI", "str": 75 },
            { "name": "Joaquín Pereyra", "pos": "MEI", "str": 79 },
            { "name": "Justo Giani", "pos": "ATA", "str": 75 },
            { "name": "Mateo Coronel", "pos": "ATA", "str": 77 },
            { "name": "Marcelo Estigarribia", "pos": "ATA", "str": 76 },
            { "name": "Tomás Durso", "pos": "GOL", "str": 73 },
            { "name": "Gonzalo Paz", "pos": "ZAG", "str": 73 },
            { "name": "Juan Infante", "pos": "LAT", "str": 74 },
            { "name": "Renzo Tesuri", "pos": "MEI", "str": 75 },
            { "name": "Nicolás Castro", "pos": "MEI", "str": 74 },
            { "name": "Julián Carrasco", "pos": "MEI", "str": 72 },
            { "name": "Nicolás Servetto", "pos": "ATA", "str": 74 },
            { "name": "Mateo Bajamich", "pos": "ATA", "str": 75 },
            { "name": "Francisco Bonfiglio", "pos": "ATA", "str": 73 }
        ]
    },
    "emelec": {
        "players": [
            { "name": "Pedro Ortiz", "pos": "GOL", "str": 77 },
            { "name": "Romario Caicedo", "pos": "LAT", "str": 75 },
            { "name": "Aníbal Leguizamón", "pos": "ZAG", "str": 76 },
            { "name": "Luis Fernando León", "pos": "ZAG", "str": 77 },
            { "name": "Jackson Rodríguez", "pos": "LAT", "str": 74 },
            { "name": "Cristian Erbes", "pos": "MEI", "str": 75 },
            { "name": "Marcelo Meli", "pos": "MEI", "str": 76 },
            { "name": "Jhon Sánchez", "pos": "MEI", "str": 74 },
            { "name": "Tommy Chamba", "pos": "MEI", "str": 73 },
            { "name": "Washington Corozo", "pos": "ATA", "str": 76 },
            { "name": "Facundo Castelli", "pos": "ATA", "str": 75 },
            { "name": "Gilmar Napa", "pos": "GOL", "str": 71 },
            { "name": "João Quiñónez", "pos": "ZAG", "str": 72 },
            { "name": "Gustavo Cortez", "pos": "LAT", "str": 73 },
            { "name": "Roberto Garcés", "pos": "MEI", "str": 74 },
            { "name": "Andrés Ricaurte", "pos": "MEI", "str": 75 },
            { "name": "Rodrigo Rivero", "pos": "MEI", "str": 74 },
            { "name": "Maicon Solís", "pos": "ATA", "str": 73 },
            { "name": "Jaime Ayoví", "pos": "ATA", "str": 74 },
            { "name": "Javier Ruiz", "pos": "ATA", "str": 71 }
        ]
    },
    "americadecali": {
        "players": [
            { "name": "Joel Graterol", "pos": "GOL", "str": 78 },
            { "name": "Esneyder Mena", "pos": "LAT", "str": 75 },
            { "name": "Daniel Bocanegra", "pos": "ZAG", "str": 77 },
            { "name": "John García", "pos": "ZAG", "str": 75 },
            { "name": "Edwin Velasco", "pos": "LAT", "str": 76 },
            { "name": "Luis Paz", "pos": "MEI", "str": 75 },
            { "name": "Harold Rivera", "pos": "MEI", "str": 74 },
            { "name": "Josen Escobar", "pos": "MEI", "str": 76 },
            { "name": "Cristian Barrios", "pos": "ATA", "str": 78 },
            { "name": "Rodrigo Holgado", "pos": "ATA", "str": 77 },
            { "name": "Edwar López", "pos": "ATA", "str": 76 },
            { "name": "Jorge Soto", "pos": "GOL", "str": 73 },
            { "name": "Andrés Mosquera", "pos": "ZAG", "str": 74 },
            { "name": "Marcos Mina", "pos": "LAT", "str": 73 },
            { "name": "Franco Leys", "pos": "MEI", "str": 74 },
            { "name": "Ever Valencia", "pos": "MEI", "str": 75 },
            { "name": "Alexis Zapata", "pos": "MEI", "str": 76 },
            { "name": "Víctor Ibarbo", "pos": "ATA", "str": 75 },
            { "name": "Andrés Sarmiento", "pos": "ATA", "str": 74 },
            { "name": "Michael Barrios", "pos": "ATA", "str": 75 }
        ]
    },
    "universitario": {
        "players": [
            { "name": "Sebastián Britos", "pos": "GOL", "str": 76 },
            { "name": "Aldo Corzo", "pos": "ZAG", "str": 77 },
            { "name": "Williams Riveros", "pos": "ZAG", "str": 76 },
            { "name": "Matías Di Benedetto", "pos": "ZAG", "str": 75 },
            { "name": "Andy Polo", "pos": "LAT", "str": 78 },
            { "name": "Rodrigo Ureña", "pos": "MEI", "str": 77 },
            { "name": "Martín Pérez Guedes", "pos": "MEI", "str": 76 },
            { "name": "Jairo Concha", "pos": "MEI", "str": 77 },
            { "name": "Segundo Portocarrero", "pos": "LAT", "str": 75 },
            { "name": "Edison Flores", "pos": "ATA", "str": 79 },
            { "name": "Alex Valera", "pos": "ATA", "str": 77 },
            { "name": "Diego Romero", "pos": "GOL", "str": 72 },
            { "name": "Marco Saravia", "pos": "ZAG", "str": 73 },
            { "name": "Nelson Cabanillas", "pos": "LAT", "str": 74 },
            { "name": "Hugo Ancajima", "pos": "LAT", "str": 72 },
            { "name": "Horacio Calcaterra", "pos": "MEI", "str": 75 },
            { "name": "Jorge Murrugarra", "pos": "MEI", "str": 74 },
            { "name": "Yuriel Celi", "pos": "MEI", "str": 73 },
            { "name": "Christofer Gonzáles", "pos": "MEI", "str": 76 },
            { "name": "Diego Dorregaray", "pos": "ATA", "str": 74 }
        ]
    },
    "tachira": {
        "players": [
            { "name": "Alejandro Araque", "pos": "GOL", "str": 74 },
            { "name": "Nelson Hernández", "pos": "LAT", "str": 73 },
            { "name": "Carlos Vivas", "pos": "ZAG", "str": 74 },
            { "name": "Oliver Benítez", "pos": "ZAG", "str": 73 },
            { "name": "Yanniel Hernández", "pos": "LAT", "str": 72 },
            { "name": "Maurice Cova", "pos": "MEI", "str": 76 },
            { "name": "Carlos Robles", "pos": "MEI", "str": 72 },
            { "name": "Carlos Sosa", "pos": "MEI", "str": 73 },
            { "name": "Yerson Chacón", "pos": "ATA", "str": 75 },
            { "name": "Andrés Ríos", "pos": "ATA", "str": 74 },
            { "name": "Bryan Castillo", "pos": "ATA", "str": 72 },
            { "name": "Jesús Camargo", "pos": "GOL", "str": 69 },
            { "name": "Haibrany Ruiz Díaz", "pos": "ZAG", "str": 71 },
            { "name": "Jefre Vargas", "pos": "LAT", "str": 72 },
            { "name": "Julián Figueroa", "pos": "MEI", "str": 71 },
            { "name": "Leandro Fioravanti", "pos": "MEI", "str": 72 },
            { "name": "Diomar Díaz", "pos": "MEI", "str": 71 },
            { "name": "Jean Franco Castillo", "pos": "ATA", "str": 71 },
            { "name": "Gleiker Mendoza", "pos": "ATA", "str": 70 },
            { "name": "Jesús Hernández", "pos": "ATA", "str": 72 }
        ]
    },
    "caracas": {
        "players": [
            { "name": "Wilbert Hernández", "pos": "GOL", "str": 73 },
            { "name": "Luis Casiani", "pos": "LAT", "str": 72 },
            { "name": "Francisco La Mantía", "pos": "ZAG", "str": 74 },
            { "name": "Rubert Quijada", "pos": "ZAG", "str": 75 },
            { "name": "Renné Rivas", "pos": "LAT", "str": 73 },
            { "name": "Vicente Rodríguez", "pos": "MEI", "str": 72 },
            { "name": "Anderson Contreras", "pos": "MEI", "str": 74 },
            { "name": "Ender Echenique", "pos": "MEI", "str": 72 },
            { "name": "Richard Figueroa", "pos": "ATA", "str": 73 },
            { "name": "Edwuin Pernía", "pos": "ATA", "str": 74 },
            { "name": "Danny Pérez", "pos": "ATA", "str": 73 },
            { "name": "Frankarlos Benítez", "pos": "GOL", "str": 68 },
            { "name": "Brayan Rodríguez", "pos": "ZAG", "str": 70 },
            { "name": "Daniel Rivillo", "pos": "LAT", "str": 71 },
            { "name": "Miguel Vegas", "pos": "MEI", "str": 69 },
            { "name": "Blessing Edet", "pos": "MEI", "str": 70 },
            { "name": "Armando Rivas", "pos": "MEI", "str": 69 },
            { "name": "Enmanuel Moreno", "pos": "ATA", "str": 71 },
            { "name": "Lucciano Reinoso", "pos": "ATA", "str": 70 },
            { "name": "Néstor Jiménez", "pos": "ATA", "str": 71 }
        ]
    },
    "wilstermann": {
        "players": [
            { "name": "Arnaldo Giménez", "pos": "GOL", "str": 74 },
            { "name": "Widen Saucedo", "pos": "LAT", "str": 72 },
            { "name": "Julián Velázquez", "pos": "ZAG", "str": 75 },
            { "name": "Martín Chiatti", "pos": "ZAG", "str": 73 },
            { "name": "Marvin Bejarano", "pos": "LAT", "str": 72 },
            { "name": "Alejandro Chumacero", "pos": "MEI", "str": 75 },
            { "name": "Cristhian Machado", "pos": "MEI", "str": 73 },
            { "name": "Rodrigo Amaral", "pos": "MEI", "str": 76 },
            { "name": "Gabriel Esparza", "pos": "ATA", "str": 75 },
            { "name": "Marcos Riquelme", "pos": "ATA", "str": 75 },
            { "name": "Serginho", "pos": "ATA", "str": 74 },
            { "name": "Bruno Poveda", "pos": "GOL", "str": 68 },
            { "name": "Gonzalo Castillo", "pos": "ZAG", "str": 72 },
            { "name": "Robson dos Santos", "pos": "LAT", "str": 71 },
            { "name": "Luis Cárdenas", "pos": "MEI", "str": 70 },
            { "name": "Adrián Pacheco", "pos": "MEI", "str": 69 },
            { "name": "Jonata Machado", "pos": "MEI", "str": 71 },
            { "name": "Jefferson Tavares", "pos": "ATA", "str": 72 },
            { "name": "Bismark Ubah", "pos": "ATA", "str": 70 },
            { "name": "Héctor Bobadilla", "pos": "ATA", "str": 71 }
        ]
    }
};

let content = fs.readFileSync('final/squads.js', 'utf8');

for (const [teamId, teamData] of Object.entries(realData)) {
    // Regex explanation:
    // Matches: "teamId": { ... "players": [ ... ] }
    const regex = new RegExp(`("${teamId}"\\s*:\\s*\\{[\\s\\S]*?"players"\\s*:\\s*\\[)[\\s\\S]*?(\\]\\s*\\})`, "g");
    
    const replacementStr = teamData.players.map(p => `            { "name": "${p.name}", "pos": "${p.pos}", "str": ${p.str} }`).join(',\n');
    
    if (regex.test(content)) {
        content = content.replace(regex, `$1\n${replacementStr}\n$2`);
        console.log(`Replaced players for ${teamId}`);
    } else {
        console.log(`Team ${teamId} not found or no matching generic structure`);
    }
}

fs.writeFileSync('final/squads.js', content);
console.log('Successfully updated final/squads.js with real players!');
