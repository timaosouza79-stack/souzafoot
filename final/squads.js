const realSquads = {
    athleticopr: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Santos', pos: 'GOL', str: 80 },
            { name: 'Carlos Terán', pos: 'ZAG', str: 77 }, { name: 'Juan Felipe Aguirre', pos: 'ZAG', str: 77 },
            { name: 'Lucas Esquivel', pos: 'LAT', str: 79 }, { name: 'Gilberto', pos: 'LAT', str: 78 },
            { name: 'Bruno Zapelli', pos: 'MEI', str: 81 }, { name: 'Alejandro García', pos: 'MEI', str: 78 }, { name: 'Juan Portilla', pos: 'MEI', str: 78 },
            { name: 'Stiven Mendoza', pos: 'ATA', str: 80 }, { name: 'Julimar', pos: 'ATA', str: 78 }, { name: 'Kevin Viveros', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Mycael', pos: 'GOL', str: 79 }, { name: 'Matheus Soares', pos: 'GOL', str: 72 },
            { name: 'Léo', pos: 'ZAG', str: 75 },
            { name: 'Gastón Benavídez', pos: 'LAT', str: 77 }, { name: 'Dudu', pos: 'LAT', str: 75 }, { name: 'Madson', pos: 'LAT', str: 74 },
            { name: 'Jadson', pos: 'MEI', str: 76 }, { name: 'Luiz Gustavo', pos: 'MEI', str: 75 }, { name: 'Isaac', pos: 'MEI', str: 72 },
            { name: 'Bruninho', pos: 'ATA', str: 76 }, { name: 'Leozinho', pos: 'ATA', str: 74 }
        ]
    },
    atleticomg: {
        formation: '4-4-2',
        players: [
            // Titulares (11)
            { name: 'Éverson', pos: 'GOL', str: 83 },
            { name: 'Junior Alonso', pos: 'ZAG', str: 82 }, { name: 'Lyanco', pos: 'ZAG', str: 81 },
            { name: 'Renan Lodi', pos: 'LAT', str: 83 }, { name: 'Ángelo Preciado', pos: 'LAT', str: 79 },
            { name: 'Gustavo Scarpa', pos: 'MEI', str: 83 }, { name: 'Bernard', pos: 'MEI', str: 81 }, { name: 'Alan Franco', pos: 'MEI', str: 80 }, { name: 'Reinier', pos: 'MEI', str: 80 },
            { name: 'Mateo Cassierra', pos: 'ATA', str: 84 }, { name: 'Alan Minda', pos: 'ATA', str: 81 },
            // Reservas
            { name: 'Gabriel Delfim', pos: 'GOL', str: 72 }, { name: 'Pedro Cobra', pos: 'GOL', str: 70 },
            { name: 'Ruan Tressoldi', pos: 'ZAG', str: 79 }, { name: 'Vitor Hugo', pos: 'ZAG', str: 78 }, { name: 'Iván Román', pos: 'ZAG', str: 77 },
            { name: 'Natanael', pos: 'LAT', str: 77 },
            { name: 'Alexsander', pos: 'MEI', str: 79 }, { name: 'Maycon', pos: 'MEI', str: 79 }, { name: 'Igor Gomes', pos: 'MEI', str: 78 }, { name: 'Patrick', pos: 'MEI', str: 77 },
            { name: 'Dudu', pos: 'ATA', str: 80 }, { name: 'Tomás Cuello', pos: 'ATA', str: 79 }
        ]
    },
    bahia: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Ronaldo', pos: 'GOL', str: 79 },
            { name: 'Gabriel Xavier', pos: 'ZAG', str: 80 }, { name: 'Santiago Ramos Mingo', pos: 'ZAG', str: 78 },
            { name: 'Luciano Juba', pos: 'LAT', str: 79 }, { name: 'Gilberto', pos: 'LAT', str: 77 },
            { name: 'Éverton Ribeiro', pos: 'MEI', str: 83 }, { name: 'Caio Alexandre', pos: 'MEI', str: 82 }, { name: 'Jean Lucas', pos: 'MEI', str: 82 },
            { name: 'Willian José', pos: 'ATA', str: 81 }, { name: 'Erick Pulga', pos: 'ATA', str: 79 }, { name: 'Ademir', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'João Paulo', pos: 'GOL', str: 78 }, { name: 'Léo Vieira', pos: 'GOL', str: 72 },
            { name: 'Kanu', pos: 'ZAG', str: 78 }, { name: 'David Duarte', pos: 'ZAG', str: 76 }, { name: 'Luiz Gustavo', pos: 'ZAG', str: 75 },
            { name: 'Iago Borduchi', pos: 'LAT', str: 78 }, { name: 'Román Gómez', pos: 'LAT', str: 74 },
            { name: 'Rodrigo Nestor', pos: 'MEI', str: 80 }, { name: 'Nicolás Acevedo', pos: 'MEI', str: 79 }, { name: 'Michel Araújo', pos: 'MEI', str: 78 }, { name: 'Rezende', pos: 'MEI', str: 77 },
            { name: 'Everaldo', pos: 'ATA', str: 78 }, { name: 'Mateo Sanabria', pos: 'ATA', str: 77 }
        ]
    },
    botafogo: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Neto', pos: 'GOL', str: 79 },
            { name: 'Bastos', pos: 'ZAG', str: 82 }, { name: 'Alexander Barboza', pos: 'ZAG', str: 81 },
            { name: 'Alex Telles', pos: 'LAT', str: 82 }, { name: 'Vitinho', pos: 'LAT', str: 80 },
            { name: 'Cristian Medina', pos: 'MEI', str: 83 }, { name: 'Santi Rodríguez', pos: 'MEI', str: 81 }, { name: 'Danilo', pos: 'MEI', str: 80 },
            { name: 'Joaquín Correa', pos: 'ATA', str: 83 }, { name: 'Júnior Santos', pos: 'ATA', str: 83 }, { name: 'Matheus Martins', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Léo Linck', pos: 'GOL', str: 78 }, { name: 'Raul', pos: 'GOL', str: 77 },
            { name: 'Ferraresi', pos: 'ZAG', str: 79 }, { name: 'Ythallo', pos: 'ZAG', str: 74 },
            { name: 'Mateo Ponte', pos: 'LAT', str: 78 }, { name: 'Marçal', pos: 'LAT', str: 76 }, { name: 'Caio Roque', pos: 'LAT', str: 74 },
            { name: 'Allan', pos: 'MEI', str: 79 }, { name: 'Álvaro Montoro', pos: 'MEI', str: 78 }, { name: 'Newton', pos: 'MEI', str: 77 }, { name: 'Edenilson', pos: 'MEI', str: 76 },
            { name: 'Arthur Cabral', pos: 'ATA', str: 81 }, { name: 'Chris Ramos', pos: 'ATA', str: 80 }, { name: 'Nathan Fernandes', pos: 'ATA', str: 78 }
        ]
    },
    bragantino: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Cleiton', pos: 'GOL', str: 81 },
            { name: 'Eduardo Santos', pos: 'ZAG', str: 78 }, { name: 'Pedro Henrique', pos: 'ZAG', str: 77 },
            { name: 'Juninho Capixaba', pos: 'LAT', str: 80 }, { name: 'Luan Cândido', pos: 'LAT', str: 79 },
            { name: 'Matheus Fernandes', pos: 'MEI', str: 79 }, { name: 'Eric Ramires', pos: 'MEI', str: 78 }, { name: 'Jadsom', pos: 'MEI', str: 77 },
            { name: 'Eduardo Sasha', pos: 'ATA', str: 80 }, { name: 'Henry Mosquera', pos: 'ATA', str: 78 }, { name: 'Thiago Borbas', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Lucão', pos: 'GOL', str: 71 },
            { name: 'Douglas Mendes', pos: 'ZAG', str: 76 },
            { name: 'Nathan Mendes', pos: 'LAT', str: 77 },
            { name: 'Lincoln', pos: 'MEI', str: 76 }
        ]
    },
    chapecoense: {
        formation: '4-4-2',
        players: [
            // Titulares (11)
            { name: 'Matheus Cavichioli', pos: 'GOL', str: 72 },
            { name: 'Bruno Leonardo', pos: 'ZAG', str: 68 }, { name: 'Habraão', pos: 'ZAG', str: 66 },
            { name: 'Maílton', pos: 'LAT', str: 69 }, { name: 'Mancha', pos: 'LAT', str: 67 },
            { name: 'Giovanni Augusto', pos: 'MEI', str: 72 }, { name: 'Thomás', pos: 'MEI', str: 70 }, { name: 'Foguinho', pos: 'MEI', str: 68 }, { name: 'Tárik', pos: 'MEI', str: 67 },
            { name: 'Mário Sérgio', pos: 'ATA', str: 71 }, { name: 'Perotti', pos: 'ATA', str: 70 },
            // Reservas
            { name: 'João Paulo', pos: 'ZAG', str: 65 },
            { name: 'Marcinho', pos: 'ATA', str: 68 }
        ]
    },
    corinthians: {
        formation: '4-2-3-1',
        players: [
            // Titulares (11)
            { name: 'Hugo Souza', pos: 'GOL', str: 83 },
            { name: 'Gabriel Paulista', pos: 'ZAG', str: 82 }, { name: 'André Ramalho', pos: 'ZAG', str: 81 },
            { name: 'Matheuzinho', pos: 'LAT', str: 77 }, { name: 'Matheus Bidu', pos: 'LAT', str: 76 },
            { name: 'Rodrigo Garro', pos: 'MEI', str: 86 }, { name: 'Breno Bidon', pos: 'MEI', str: 80 }, { name: 'Zakaria Labyad', pos: 'MEI', str: 80 }, { name: 'José Martínez', pos: 'MEI', str: 79 }, { name: 'Allan', pos: 'MEI', str: 79 },
            { name: 'Memphis Depay', pos: 'ATA', str: 87 },
            // Reservas
            { name: 'Matheus Donelli', pos: 'GOL', str: 72 }, { name: 'Felipe Longo', pos: 'GOL', str: 70 },
            { name: 'Félix Torres', pos: 'ZAG', str: 80 }, { name: 'Cacá', pos: 'ZAG', str: 79 }, { name: 'Gustavo Henrique', pos: 'ZAG', str: 78 },
            { name: 'Pedro Milans', pos: 'LAT', str: 76 }, { name: 'Fabrizio Angileri', pos: 'LAT', str: 76 }, { name: 'Hugo', pos: 'LAT', str: 75 },
            { name: 'Raniele', pos: 'MEI', str: 79 }, { name: 'Carrillo', pos: 'MEI', str: 79 }, { name: 'Alex Santana', pos: 'MEI', str: 78 }, { name: 'Charles', pos: 'MEI', str: 78 }, { name: 'Ryan', pos: 'MEI', str: 75 },
            { name: 'Yuri Alberto', pos: 'ATA', str: 84 }, { name: 'Jesse Lingard', pos: 'ATA', str: 83 }, { name: 'Vitinho', pos: 'ATA', str: 80 }, { name: 'Kaio César', pos: 'ATA', str: 77 }
        ]
    },
    coritiba: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Pedro Morisco', pos: 'GOL', str: 73 },
            { name: 'Marcelo Benevenuto', pos: 'ZAG', str: 73 }, { name: 'Maurício Antônio', pos: 'ZAG', str: 71 },
            { name: 'Bruno Melo', pos: 'LAT', str: 70 }, { name: 'Rodrigo Gelado', pos: 'LAT', str: 69 },
            { name: 'Matheus Frizzo', pos: 'MEI', str: 76 }, { name: 'Sebastián Gómez', pos: 'MEI', str: 75 }, { name: 'Vini Paulista', pos: 'MEI', str: 71 },
            { name: 'Robson', pos: 'ATA', str: 76 }, { name: 'Lucas Ronier', pos: 'ATA', str: 74 }, { name: 'Figueiredo', pos: 'ATA', str: 72 },
            // Reservas
            { name: 'Gabriel', pos: 'GOL', str: 70 },
            { name: 'Geovane Meurer', pos: 'MEI', str: 68 }
        ]
    },
    cruzeiro: {
        formation: '4-2-3-1',
        players: [
            // Titulares (11)
            { name: 'Cássio', pos: 'GOL', str: 83 },
            { name: 'Fabrício Bruno', pos: 'ZAG', str: 83 }, { name: 'João Marcelo', pos: 'ZAG', str: 79 },
            { name: 'William', pos: 'LAT', str: 82 }, { name: 'Fágner', pos: 'LAT', str: 78 },
            { name: 'Gerson', pos: 'MEI', str: 87 }, { name: 'Matheus Pereira', pos: 'MEI', str: 86 }, { name: 'Matheus Henrique', pos: 'MEI', str: 81 }, { name: 'Walace', pos: 'MEI', str: 80 }, { name: 'Lucas Romero', pos: 'MEI', str: 79 },
            { name: 'Sinisterra', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Matheus Cunha', pos: 'GOL', str: 81 }, { name: 'Otávio', pos: 'GOL', str: 70 },
            { name: 'Lucas Villalba', pos: 'ZAG', str: 78 }, { name: 'Jonathan Jesus', pos: 'ZAG', str: 75 },
            { name: 'Kaiki', pos: 'LAT', str: 76 }, { name: 'Kauã Moraes', pos: 'LAT', str: 72 },
            { name: 'Christian', pos: 'MEI', str: 78 }, { name: 'Lucas Silva', pos: 'MEI', str: 77 }, { name: 'Japa', pos: 'MEI', str: 75 },
            { name: 'Kaio Jorge', pos: 'ATA', str: 82 }, { name: 'Bruno Rodrigues', pos: 'ATA', str: 79 }, { name: 'Chico da Costa', pos: 'ATA', str: 78 }, { name: 'Keny Arroyo', pos: 'ATA', str: 75 }, { name: 'Néiser Villarreal', pos: 'ATA', str: 75 }
        ]
    },
    flamengo: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Rossi', pos: 'GOL', str: 83 },
            { name: 'Léo Pereira', pos: 'ZAG', str: 84 }, { name: 'Léo Ortiz', pos: 'ZAG', str: 84 },
            { name: 'Alex Sandro', pos: 'LAT', str: 82 }, { name: 'Emerson Royal', pos: 'LAT', str: 81 },
            { name: 'Lucas Paquetá', pos: 'MEI', str: 91 }, { name: 'De Arrascaeta', pos: 'MEI', str: 87 }, { name: 'De la Cruz', pos: 'MEI', str: 86 },
            { name: 'Pedro', pos: 'ATA', str: 88 }, { name: 'Samuel Lino', pos: 'ATA', str: 85 }, { name: 'Everton', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Andrew', pos: 'GOL', str: 81 }, { name: 'Dyogo Alves', pos: 'GOL', str: 71 },
            { name: 'Danilo', pos: 'ZAG', str: 82 }, { name: 'Vitão', pos: 'ZAG', str: 82 }, { name: 'João Victor', pos: 'ZAG', str: 80 },
            { name: 'Ayrton Lucas', pos: 'LAT', str: 81 }, { name: 'Varela', pos: 'LAT', str: 78 },
            { name: 'Saúl Ñíguez', pos: 'MEI', str: 83 }, { name: 'Erick Pulgar', pos: 'MEI', str: 82 }, { name: 'Jorge Carrascal', pos: 'MEI', str: 81 }, { name: 'Jorginho', pos: 'MEI', str: 81 }, { name: 'Evertton Araújo', pos: 'MEI', str: 77 },
            { name: 'Bruno Henrique', pos: 'ATA', str: 82 }, { name: 'Luiz Araújo', pos: 'ATA', str: 81 }, { name: 'Gonzalo Plata', pos: 'ATA', str: 81 }
        ]
    },
    fluminense: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Fábio', pos: 'GOL', str: 82 },
            { name: 'Ignácio', pos: 'ZAG', str: 79 }, { name: 'Igor Rabello', pos: 'ZAG', str: 78 },
            { name: 'Guilherme Arana', pos: 'LAT', str: 85 }, { name: 'Samuel Xavier', pos: 'LAT', str: 77 },
            { name: 'Savarino', pos: 'MEI', str: 82 }, { name: 'PH Ganso', pos: 'MEI', str: 82 }, { name: 'Lucho Acosta', pos: 'MEI', str: 82 },
            { name: 'Hulk', pos: 'ATA', str: 86 }, { name: 'Germán Cano', pos: 'ATA', str: 83 }, { name: 'Soteldo', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Vitor Eudes', pos: 'GOL', str: 71 }, { name: 'Marcelo Pitaluga', pos: 'GOL', str: 72 },
            { name: 'Jemmes', pos: 'ZAG', str: 77 }, { name: 'Julián Millán', pos: 'ZAG', str: 77 }, { name: 'Freytes', pos: 'ZAG', str: 76 },
            { name: 'Renê', pos: 'LAT', str: 77 }, { name: 'Guga', pos: 'LAT', str: 75 },
            { name: 'Otávio', pos: 'MEI', str: 81 }, { name: 'Facundo Bernal', pos: 'MEI', str: 80 }, { name: 'Martinelli', pos: 'MEI', str: 80 }, { name: 'Hércules', pos: 'MEI', str: 79 }, { name: 'Alisson', pos: 'MEI', str: 76 }, { name: 'Nonato', pos: 'MEI', str: 76 },
            { name: 'Canobbio', pos: 'ATA', str: 81 }, { name: 'Kevin Serna', pos: 'ATA', str: 79 }, { name: 'John Kennedy', pos: 'ATA', str: 79 }, { name: 'Rodrigo Castillo', pos: 'ATA', str: 76 }
        ]
    },
    gremio: {
        formation: '4-2-3-1',
        players: [
            // Titulares (11)
            { name: 'Weverton', pos: 'GOL', str: 83 },
            { name: 'Fabián Balbuena', pos: 'ZAG', str: 79 }, { name: 'Wagner Leonardo', pos: 'ZAG', str: 78 },
            { name: 'Marlon', pos: 'LAT', str: 80 }, { name: 'João Pedro', pos: 'LAT', str: 78 },
            { name: 'Villasanti', pos: 'MEI', str: 83 }, { name: 'Arthur', pos: 'MEI', str: 81 }, { name: 'Miguel Monsalve', pos: 'MEI', str: 80 }, { name: 'Juan Nardoni', pos: 'MEI', str: 79 }, { name: 'Willian', pos: 'MEI', str: 78 },
            { name: 'Martin Braithwaite', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Gabriel Grando', pos: 'GOL', str: 75 }, { name: 'Thiago Beltrame', pos: 'GOL', str: 70 },
            { name: 'Kannemann', pos: 'ZAG', str: 79 }, { name: 'Gustavo Martins', pos: 'ZAG', str: 76 }, { name: 'Luis Eduardo', pos: 'ZAG', str: 70 },
            { name: 'Marcos Rocha', pos: 'LAT', str: 77 }, { name: 'Caio Paulista', pos: 'LAT', str: 77 },
            { name: 'Dodi', pos: 'MEI', str: 77 }, { name: 'Erick Noriega', pos: 'MEI', str: 75 },
            { name: 'Cristian Pavón', pos: 'ATA', str: 82 }, { name: 'Tetê', pos: 'ATA', str: 82 }, { name: 'Carlos Vinícius', pos: 'ATA', str: 81 }, { name: 'Francisco Amuzu', pos: 'ATA', str: 79 }, { name: 'Gabriel Mec', pos: 'ATA', str: 75 }
        ]
    },
    internacional: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Sergio Rochet', pos: 'GOL', str: 84 },
            { name: 'Gabriel Mercado', pos: 'ZAG', str: 78 }, { name: 'Juninho', pos: 'ZAG', str: 74 },
            { name: 'Alexandro Bernabei', pos: 'LAT', str: 81 }, { name: 'Bruno Gomes', pos: 'LAT', str: 77 },
            { name: 'Alan Patrick', pos: 'MEI', str: 84 }, { name: 'Thiago Maia', pos: 'MEI', str: 80 }, { name: 'Bruno Tabata', pos: 'MEI', str: 79 },
            { name: 'Rafael Borré', pos: 'ATA', str: 83 }, { name: 'Vitinho', pos: 'ATA', str: 79 }, { name: 'Jhon Vásquez Carbonero', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Ivan', pos: 'GOL', str: 74 }, { name: 'Keiller', pos: 'GOL', str: 73 },
            { name: 'Aguirre', pos: 'LAT', str: 75 },
            { name: 'Bruno Henrique', pos: 'MEI', str: 78 }, { name: 'Alan Rodríguez', pos: 'MEI', str: 77 }
        ]
    },
    mirassol: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Alex Muralha', pos: 'GOL', str: 73 },
            { name: 'Luiz Otávio', pos: 'ZAG', str: 71 }, { name: 'João Victor', pos: 'ZAG', str: 69 },
            { name: 'Artur', pos: 'LAT', str: 69 }, { name: 'Lucas Gazal', pos: 'ZAG', str: 68 },
            { name: 'Gabriel', pos: 'MEI', str: 72 }, { name: 'Chico Kim', pos: 'MEI', str: 71 }, { name: 'Isaque', pos: 'MEI', str: 70 },
            { name: 'Dellatorre', pos: 'ATA', str: 74 }, { name: 'Fernandinho', pos: 'ATA', str: 72 }, { name: 'Negueba', pos: 'ATA', str: 70 },
            // Reservas
            { name: 'Vanderlei', pos: 'GOL', str: 69 }
        ]
    },
    palmeiras: {
        formation: '4-2-3-1',
        players: [
            // Titulares (11)
            { name: 'Carlos Miguel', pos: 'GOL', str: 83 },
            { name: 'Gustavo Gómez', pos: 'ZAG', str: 85 }, { name: 'Murilo', pos: 'ZAG', str: 83 },
            { name: 'Joaquín Piquerez', pos: 'LAT', str: 83 }, { name: 'Khellven', pos: 'LAT', str: 80 },
            { name: 'Andreas Pereira', pos: 'MEI', str: 84 }, { name: 'Felipe Anderson', pos: 'MEI', str: 83 }, { name: 'Maurício', pos: 'MEI', str: 82 }, { name: 'Lucas Evangelista', pos: 'MEI', str: 80 }, { name: 'Marlon Freitas', pos: 'MEI', str: 81 },
            { name: 'Vitor Roque', pos: 'ATA', str: 86 }, { name: 'Jhon Arias', pos: 'ATA', str: 86 },
            // Reservas
            { name: 'Marcelo Lomba', pos: 'GOL', str: 76 }, { name: 'Aranha', pos: 'GOL', str: 70 },
            { name: 'Bruno Fuchs', pos: 'ZAG', str: 79 }, { name: 'Koné', pos: 'ZAG', str: 77 }, { name: 'Robson', pos: 'ZAG', str: 75 }, { name: 'Benedetti', pos: 'ZAG', str: 74 },
            { name: 'Agustín Giay', pos: 'LAT', str: 78 }, { name: 'Jefté', pos: 'LAT', str: 77 },
            { name: 'Emiliano Martínez', pos: 'MEI', str: 79 }, { name: 'Figueiredo', pos: 'MEI', str: 76 },
            { name: 'Paulinho', pos: 'ATA', str: 84 }, { name: 'Flaco López', pos: 'ATA', str: 82 }, { name: 'Ramón Sosa', pos: 'ATA', str: 80 }, { name: 'Luighi', pos: 'ATA', str: 75 }
        ]
    },
    remo: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Marcelo Rangel', pos: 'GOL', str: 70 },
            { name: 'Ligger', pos: 'ZAG', str: 68 }, { name: 'Bruno Bispo', pos: 'ZAG', str: 66 },
            { name: 'Raimar', pos: 'LAT', str: 66 }, { name: 'Thalys', pos: 'LAT', str: 65 },
            { name: 'Matheus Anjos', pos: 'MEI', str: 70 }, { name: 'Jaderson', pos: 'MEI', str: 69 }, { name: 'Pavani', pos: 'MEI', str: 68 },
            { name: 'Ytalo', pos: 'ATA', str: 71 }, { name: 'Kelvin', pos: 'ATA', str: 68 }, { name: 'Ribamar', pos: 'ATA', str: 67 },
            // Reservas
            { name: 'Léo Lang', pos: 'GOL', str: 63 },
            { name: 'Ícaro', pos: 'ZAG', str: 67 },
            { name: 'Renato Alves', pos: 'MEI', str: 66 }
        ]
    },
    santos: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Gabriel Brazão', pos: 'GOL', str: 76 },
            { name: 'Alexis Duarte', pos: 'ZAG', str: 79 }, { name: 'Adonis Frías', pos: 'ZAG', str: 79 },
            { name: 'Mayke', pos: 'LAT', str: 79 }, { name: 'Igor Vinícius', pos: 'LAT', str: 77 },
            { name: 'Zé Rafael', pos: 'MEI', str: 80 }, { name: 'Thaciano', pos: 'MEI', str: 80 }, { name: 'João Schmidt', pos: 'MEI', str: 78 },
            { name: 'Neymar', pos: 'ATA', str: 93 }, { name: 'Gabriel Barbosa', pos: 'ATA', str: 85 }, { name: 'Rony', pos: 'ATA', str: 80 },
            // Reservas
            { name: 'Diógenes', pos: 'GOL', str: 70 }, { name: 'Rodrigo Falcão', pos: 'GOL', str: 70 }, { name: 'João Pedro', pos: 'GOL', str: 70 },
            { name: 'Zé Ivaldo', pos: 'ZAG', str: 78 }, { name: 'Luan Peres', pos: 'ZAG', str: 78 }, { name: 'João Basso', pos: 'ZAG', str: 76 },
            { name: 'JP Chermont', pos: 'LAT', str: 76 }, { name: 'Escobar', pos: 'LAT', str: 74 },
            { name: 'Willian Arão', pos: 'MEI', str: 78 }, { name: 'Tomás Rincón', pos: 'MEI', str: 76 }, { name: 'Gabriel Menino', pos: 'MEI', str: 77 }, { name: 'Miguelito', pos: 'MEI', str: 75 },
            { name: 'Lautaro Díaz', pos: 'ATA', str: 80 }, { name: 'Barreal', pos: 'ATA', str: 80 }, { name: 'Rollheiser', pos: 'ATA', str: 79 }
        ]
    },
    saopaulo: {
        formation: '4-2-3-1',
        players: [
            // Titulares (11)
            { name: 'Rafael', pos: 'GOL', str: 83 },
            { name: 'Robert Arboleda', pos: 'ZAG', str: 83 }, { name: 'Rafael Tolói', pos: 'ZAG', str: 80 },
            { name: 'Wendell', pos: 'LAT', str: 80 }, { name: 'Enzo Díaz', pos: 'LAT', str: 78 },
            { name: 'Cauly', pos: 'MEI', str: 83 }, { name: 'Pablo Maia', pos: 'MEI', str: 82 }, { name: 'Marcos Antônio', pos: 'MEI', str: 79 }, { name: 'Damián Bobadilla', pos: 'MEI', str: 77 }, { name: 'Danielzinho', pos: 'MEI', str: 76 },
            { name: 'Lucas Moura', pos: 'ATA', str: 86 },
            // Reservas
            { name: 'Carlos Coronel', pos: 'GOL', str: 79 }, { name: 'Young', pos: 'GOL', str: 70 }, { name: 'Leandro', pos: 'GOL', str: 70 },
            { name: 'Alan Franco', pos: 'ZAG', str: 80 }, { name: 'Dória', pos: 'ZAG', str: 78 }, { name: 'Sabino', pos: 'ZAG', str: 76 }, { name: 'Matheus Belém', pos: 'ZAG', str: 71 },
            { name: 'Cédric Soares', pos: 'LAT', str: 78 }, { name: 'Lucas Ramon', pos: 'LAT', str: 76 }, { name: 'João Moreira', pos: 'LAT', str: 73 },
            { name: 'Luan', pos: 'MEI', str: 75 },
            { name: 'Jonathan Calleri', pos: 'ATA', str: 85 }, { name: 'Luciano', pos: 'ATA', str: 83 }, { name: 'Artur', pos: 'ATA', str: 81 }, { name: 'Ferreira', pos: 'ATA', str: 80 }, { name: 'André Silva', pos: 'ATA', str: 78 }, { name: 'Gonzalo Tapia', pos: 'ATA', str: 77 }
        ]
    },
    vasco: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Léo Jardim', pos: 'GOL', str: 83 },
            { name: 'Robert Renan', pos: 'ZAG', str: 80 }, { name: 'Carlos Cuesta', pos: 'ZAG', str: 79 },
            { name: 'Lucas Piton', pos: 'LAT', str: 81 }, { name: 'Cuiabano', pos: 'LAT', str: 80 },
            { name: 'Matheus França', pos: 'MEI', str: 80 }, { name: 'Thiago Mendes', pos: 'MEI', str: 79 }, { name: 'Tchê Tchê', pos: 'MEI', str: 78 },
            { name: 'Andrés Gómez', pos: 'ATA', str: 78 }, { name: 'Adson', pos: 'ATA', str: 78 }, { name: 'David', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Daniel Fuzato', pos: 'GOL', str: 74 }, { name: 'Pablo', pos: 'GOL', str: 71 },
            { name: 'Alan Saldivia', pos: 'ZAG', str: 78 }, { name: 'Lucas Freitas', pos: 'ZAG', str: 74 },
            { name: 'Paulo Henrique', pos: 'LAT', str: 76 }, { name: 'Puma Rodríguez', pos: 'LAT', str: 75 },
            { name: 'Jair', pos: 'MEI', str: 77 }, { name: 'Hugo Moura', pos: 'MEI', str: 78 }, { name: 'Mateus Carvalho', pos: 'MEI', str: 76 }, { name: 'Johan Rojas', pos: 'MEI', str: 77 }, { name: 'JP', pos: 'MEI', str: 74 },
            { name: 'Brenner', pos: 'ATA', str: 77 }, { name: 'Nuno Moreira', pos: 'ATA', str: 76 }
        ]
    },
    vitoria: {
        formation: '4-3-3',
        players: [
            // Titulares (11)
            { name: 'Lucas Arcanjo', pos: 'GOL', str: 76 },
            { name: 'Neris', pos: 'ZAG', str: 75 }, { name: 'Edu', pos: 'ZAG', str: 72 },
            { name: 'Willean Lepo', pos: 'LAT', str: 75 }, { name: 'Lucas Esteves', pos: 'LAT', str: 74 },
            { name: 'Matheuzinho', pos: 'MEI', str: 77 }, { name: 'Willian Oliveira', pos: 'MEI', str: 75 }, { name: 'Machado', pos: 'MEI', str: 74 },
            { name: 'Alerrandro', pos: 'ATA', str: 76 }, { name: 'Gustavo Mosquito', pos: 'ATA', str: 75 }, { name: 'Carlos Eduardo', pos: 'ATA', str: 74 },
            // Reservas
            { name: 'Muriel', pos: 'GOL', str: 70 },
            { name: 'Jean Mota', pos: 'MEI', str: 73 },
            { name: 'Janderson', pos: 'ATA', str: 72 }
        ]
    },
    // Premier League - Inglaterra (Maio de 2026 - Atualizado)
    mancity: {
        formation: '4-3-3',
        players: [
            { name: 'Ederson', pos: 'GOL', str: 89 },
            { name: 'Ruben Dias', pos: 'ZAG', str: 91 }, { name: 'Gvardiol', pos: 'ZAG', str: 90 },
            { name: 'Akanji', pos: 'ZAG', str: 88 }, { name: 'Rico Lewis', pos: 'LAT', str: 87 },
            { name: 'Rodri', pos: 'MEI', str: 92 }, { name: 'Foden', pos: 'MEI', str: 91 }, { name: 'Bernardo Silva', pos: 'MEI', str: 88 },
            { name: 'Haaland', pos: 'ATA', str: 94 }, { name: 'Savinho', pos: 'ATA', str: 88 }, { name: 'Doku', pos: 'ATA', str: 87 },
            // Reservas
            { name: 'Ortega', pos: 'GOL', str: 83 }, { name: 'Stones', pos: 'ZAG', str: 87 }, { name: 'Walker', pos: 'LAT', str: 84 },
            { name: 'De Bruyne', pos: 'MEI', str: 87 }, { name: 'Kovacic', pos: 'MEI', str: 85 }, { name: 'Nunes', pos: 'MEI', str: 84 }, 
            { name: 'Grealish', pos: 'ATA', str: 85 }, { name: 'Oscar Bobb', pos: 'ATA', str: 83 }
        ]
    },
    arsenal: {
        formation: '4-3-3',
        players: [
            { name: 'David Raya', pos: 'GOL', str: 87 },
            { name: 'Saliba', pos: 'ZAG', str: 89 }, { name: 'Gabriel', pos: 'ZAG', str: 88 },
            { name: 'Calafiori', pos: 'ZAG', str: 87 }, { name: 'Ben White', pos: 'LAT', str: 86 },
            { name: 'Declan Rice', pos: 'MEI', str: 90 }, { name: 'Odegaard', pos: 'MEI', str: 91 }, { name: 'Merino', pos: 'MEI', str: 86 },
            { name: 'Saka', pos: 'ATA', str: 91 }, { name: 'Havertz', pos: 'ATA', str: 87 }, { name: 'Martinelli', pos: 'ATA', str: 88 },
            // Reservas
            { name: 'Neto', pos: 'GOL', str: 82 }, { name: 'Timber', pos: 'LAT', str: 85 }, { name: 'Zinchenko', pos: 'LAT', str: 84 },
            { name: 'Tomiyasu', pos: 'LAT', str: 83 }, { name: 'Jorginho', pos: 'MEI', str: 82 }, { name: 'Trossard', pos: 'ATA', str: 85 },
            { name: 'Gabriel Jesus', pos: 'ATA', str: 85 }
        ]
    },
    liverpool: {
        formation: '4-3-3',
        players: [
            { name: 'Alisson', pos: 'GOL', str: 89 },
            { name: 'Van Dijk', pos: 'ZAG', str: 88 }, { name: 'Konate', pos: 'ZAG', str: 87 },
            { name: 'Robertson', pos: 'LAT', str: 86 }, { name: 'Alexander-Arnold', pos: 'LAT', str: 89 },
            { name: 'Mac Allister', pos: 'MEI', str: 88 }, { name: 'Szoboszlai', pos: 'MEI', str: 87 }, { name: 'Gravenberch', pos: 'MEI', str: 86 },
            { name: 'Salah', pos: 'ATA', str: 89 }, { name: 'Nunez', pos: 'ATA', str: 87 }, { name: 'Luis Diaz', pos: 'ATA', str: 87 },
            // Reservas
            { name: 'Kelleher', pos: 'GOL', str: 82 }, { name: 'Quansah', pos: 'ZAG', str: 84 }, { name: 'Gomez', pos: 'ZAG', str: 83 },
            { name: 'Tsimikas', pos: 'LAT', str: 82 }, { name: 'Bradley', pos: 'LAT', str: 81 },
            { name: 'Endo', pos: 'MEI', str: 83 }, { name: 'Elliott', pos: 'MEI', str: 83 }, { name: 'Bajcetic', pos: 'MEI', str: 82 },
            { name: 'Gakpo', pos: 'ATA', str: 86 }, { name: 'Jota', pos: 'ATA', str: 86 }
        ]
    },
    manutd: {
        formation: '4-2-3-1',
        players: [
            { name: 'Onana', pos: 'GOL', str: 85 },
            { name: 'Lisandro Martinez', pos: 'ZAG', str: 87 }, { name: 'De Ligt', pos: 'ZAG', str: 87 },
            { name: 'Dalot', pos: 'LAT', str: 84 }, { name: 'Mazraoui', pos: 'LAT', str: 83 },
            { name: 'Mainoo', pos: 'MEI', str: 86 }, { name: 'Ugarte', pos: 'MEI', str: 85 },
            { name: 'Bruno Fernandes', pos: 'MEI', str: 88 }, { name: 'Garnacho', pos: 'ATA', str: 87 }, { name: 'Rashford', pos: 'ATA', str: 86 },
            { name: 'Hojlund', pos: 'ATA', str: 86 },
            // Reservas
            { name: 'Bayindir', pos: 'GOL', str: 80 }, { name: 'Leny Yoro', pos: 'ZAG', str: 84 }, { name: 'Maguire', pos: 'ZAG', str: 81 },
            { name: 'Shaw', pos: 'LAT', str: 83 }, { name: 'Casemiro', pos: 'MEI', str: 83 }, { name: 'Eriksen', pos: 'MEI', str: 81 },
            { name: 'Zirkzee', pos: 'ATA', str: 84 }, { name: 'Amad Diallo', pos: 'ATA', str: 82 }
        ]
    },
    chelsea: {
        formation: '4-3-3',
        players: [
            { name: 'Robert Sanchez', pos: 'GOL', str: 83 },
            { name: 'Fofana', pos: 'ZAG', str: 86 }, { name: 'Colwill', pos: 'ZAG', str: 85 },
            { name: 'Cucurella', pos: 'LAT', str: 84 }, { name: 'Reece James', pos: 'LAT', str: 86 },
            { name: 'Enzo Fernandez', pos: 'MEI', str: 87 }, { name: 'Caicedo', pos: 'MEI', str: 86 }, { name: 'Gallagher', pos: 'MEI', str: 84 },
            { name: 'Cole Palmer', pos: 'MEI', str: 90 }, { name: 'Nicolas Jackson', pos: 'ATA', str: 85 }, { name: 'Pedro Neto', pos: 'ATA', str: 86 },
            // Reservas
            { name: 'Jorgensen', pos: 'GOL', str: 81 }, { name: 'Badiashile', pos: 'ZAG', str: 84 }, { name: 'Malo Gusto', pos: 'LAT', str: 84 },
            { name: 'Lavia', pos: 'MEI', str: 83 }, { name: 'Joao Felix', pos: 'ATA', str: 85 }, { name: 'Nkunku', pos: 'ATA', str: 86 },
            { name: 'Mudryk', pos: 'ATA', str: 83 }, { name: 'Madueke', pos: 'ATA', str: 84 }
        ]
    },
    tottenham: {
        formation: '4-2-3-1',
        players: [
            { name: 'Vicario', pos: 'GOL', str: 84 },
            { name: 'Romero', pos: 'ZAG', str: 86 }, { name: 'Van de Ven', pos: 'ZAG', str: 85 },
            { name: 'Udogie', pos: 'LAT', str: 84 }, { name: 'Porro', pos: 'LAT', str: 83 },
            { name: 'Bissouma', pos: 'MEI', str: 84 }, { name: 'Sarr', pos: 'MEI', str: 83 },
            { name: 'Maddison', pos: 'MEI', str: 87 }, { name: 'Kulusevski', pos: 'MEI', str: 84 }, { name: 'Son Heung-min', pos: 'ATA', str: 88 },
            { name: 'Solanke', pos: 'ATA', str: 85 },
            // Reservas
            { name: 'Forster', pos: 'GOL', str: 78 }, { name: 'Dragusin', pos: 'ZAG', str: 83 }, { name: 'Davies', pos: 'ZAG', str: 80 },
            { name: 'Gray', pos: 'LAT', str: 81 }, { name: 'Bergvall', pos: 'MEI', str: 82 },
            { name: 'Bentancur', pos: 'MEI', str: 85 }, { name: 'Hojbjerg', pos: 'MEI', str: 82 },
            { name: 'Werner', pos: 'ATA', str: 82 }, { name: 'Johnson', pos: 'ATA', str: 83 }, { name: 'Richarlison', pos: 'ATA', str: 84 }
        ]
    },
    newcastle: {
        formation: '4-3-3',
        players: [
            { name: 'Pope', pos: 'GOL', str: 85 },
            { name: 'Botman', pos: 'ZAG', str: 86 }, { name: 'Schar', pos: 'ZAG', str: 84 },
            { name: 'Trippier', pos: 'LAT', str: 85 }, { name: 'Livramento', pos: 'LAT', str: 83 },
            { name: 'Guimaraes', pos: 'MEI', str: 87 }, { name: 'Tonali', pos: 'MEI', str: 86 }, { name: 'Joelinton', pos: 'MEI', str: 85 },
            { name: 'Isak', pos: 'ATA', str: 87 }, { name: 'Gordon', pos: 'ATA', str: 84 }, { name: 'Barnes', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Dubravka', pos: 'GOL', str: 79 }, { name: 'Lascelles', pos: 'ZAG', str: 80 }, { name: 'Burn', pos: 'ZAG', str: 79 },
            { name: 'Hall', pos: 'LAT', str: 81 }, { name: 'Targett', pos: 'LAT', str: 79 },
            { name: 'Longstaff', pos: 'MEI', str: 82 }, { name: 'Willock', pos: 'MEI', str: 83 },
            { name: 'Wilson', pos: 'ATA', str: 82 }, { name: 'Almiron', pos: 'ATA', str: 81 }
        ]
    },
    brighton: {
        formation: '4-2-3-1',
        players: [
            { name: 'Verbruggen', pos: 'GOL', str: 81 },
            { name: 'Dunk', pos: 'ZAG', str: 82 }, { name: 'Van Hecke', pos: 'ZAG', str: 80 },
            { name: 'Estupinan', pos: 'LAT', str: 83 }, { name: 'Lamptey', pos: 'LAT', str: 80 },
            { name: 'Gross', pos: 'MEI', str: 83 }, { name: 'Gilmour', pos: 'MEI', str: 81 },
            { name: 'Mitoma', pos: 'MEI', str: 85 }, { name: 'Joao Pedro', pos: 'MEI', str: 84 }, { name: 'Adingra', pos: 'ATA', str: 82 },
            { name: 'Ferguson', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Steele', pos: 'GOL', str: 78 }, { name: 'Webster', pos: 'ZAG', str: 79 }, { name: 'Igor', pos: 'ZAG', str: 78 },
            { name: 'Veltman', pos: 'LAT', str: 79 }, { name: 'Hinshelwood', pos: 'LAT', str: 78 },
            { name: 'Baleba', pos: 'MEI', str: 80 }, { name: 'Moder', pos: 'MEI', str: 79 }, { name: 'Lallana', pos: 'MEI', str: 77 },
            { name: 'Enciso', pos: 'ATA', str: 81 }
        ]
    },
    astonvilla: {
        formation: '4-3-3',
        players: [
            { name: 'Martinez', pos: 'GOL', str: 85 },
            { name: 'Konsa', pos: 'ZAG', str: 82 }, { name: 'Pau Torres', pos: 'ZAG', str: 82 },
            { name: 'Digne', pos: 'LAT', str: 80 }, { name: 'Cash', pos: 'LAT', str: 80 },
            { name: 'Douglas Luiz', pos: 'MEI', str: 83 }, { name: 'Tielemans', pos: 'MEI', str: 82 }, { name: 'McGinn', pos: 'MEI', str: 81 },
            { name: 'Watkins', pos: 'ATA', str: 84 }, { name: 'Bailey', pos: 'ATA', str: 82 }, { name: 'Diaby', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Olsen', pos: 'GOL', str: 77 }, { name: 'Lenglet', pos: 'ZAG', str: 79 }, { name: 'Chambers', pos: 'ZAG', str: 77 },
            { name: 'Moreno', pos: 'LAT', str: 79 }, { name: 'Konsa', pos: 'LAT', str: 78 },
            { name: 'Kamara', pos: 'MEI', str: 80 }, { name: 'Ramsey', pos: 'MEI', str: 80 },
            { name: 'Zaniolo', pos: 'ATA', str: 81 }, { name: 'Duran', pos: 'ATA', str: 79 }
        ]
    },
    westham: {
        formation: '4-2-3-1',
        players: [
            { name: 'Areola', pos: 'GOL', str: 81 },
            { name: 'Zouma', pos: 'ZAG', str: 80 }, { name: 'Aguerd', pos: 'ZAG', str: 80 },
            { name: 'Emerson Palmieri', pos: 'LAT', str: 79 }, { name: 'Coufal', pos: 'LAT', str: 78 },
            { name: 'Paqueta', pos: 'MEI', str: 84 }, { name: 'Ward-Prowse', pos: 'MEI', str: 82 },
            { name: 'Bowen', pos: 'MEI', str: 83 }, { name: 'Kudus', pos: 'MEI', str: 82 }, { name: 'Soucek', pos: 'MEI', str: 80 },
            { name: 'Ings', pos: 'ATA', str: 79 },
            // Reservas
            { name: 'Fabianski', pos: 'GOL', str: 77 }, { name: 'Mavropanos', pos: 'ZAG', str: 78 }, { name: 'Johnson', pos: 'LAT', str: 77 },
            { name: 'Alvarez', pos: 'MEI', str: 81 }, { name: 'Fornals', pos: 'MEI', str: 78 },
            { name: 'Antonio', pos: 'ATA', str: 78 }, { name: 'Cornet', pos: 'ATA', str: 77 }
        ]
    },
    everton: {
        formation: '4-4-2',
        players: [
            { name: 'Pickford', pos: 'GOL', str: 82 },
            { name: 'Tarkowski', pos: 'ZAG', str: 79 }, { name: 'Branthwaite', pos: 'ZAG', str: 78 },
            { name: 'Mykolenko', pos: 'LAT', str: 78 }, { name: 'Patterson', pos: 'LAT', str: 77 },
            { name: 'Doucoure', pos: 'MEI', str: 79 }, { name: 'Garner', pos: 'MEI', str: 78 }, { name: 'Onana', pos: 'MEI', str: 79 }, { name: 'McNeil', pos: 'MEI', str: 77 },
            { name: 'Calvert-Lewin', pos: 'ATA', str: 80 }, { name: 'Harrison', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Virginia', pos: 'GOL', str: 74 }, { name: 'Keane', pos: 'ZAG', str: 76 }, { name: 'Godfrey', pos: 'ZAG', str: 75 },
            { name: 'Young', pos: 'LAT', str: 74 }, { name: 'Coleman', pos: 'LAT', str: 73 },
            { name: 'Gueye', pos: 'MEI', str: 77 }, { name: 'Danjuma', pos: 'ATA', str: 76 }
        ]
    },
    crystalpalace: {
        formation: '4-3-3',
        players: [
            { name: 'Johnstone', pos: 'GOL', str: 78 },
            { name: 'Guehi', pos: 'ZAG', str: 79 }, { name: 'Andersen', pos: 'ZAG', str: 78 },
            { name: 'Mitchell', pos: 'LAT', str: 77 }, { name: 'Ward', pos: 'LAT', str: 76 },
            { name: 'Eze', pos: 'MEI', str: 81 }, { name: 'Doucoure', pos: 'MEI', str: 78 }, { name: 'Olise', pos: 'MEI', str: 80 },
            { name: 'Mateta', pos: 'ATA', str: 77 }, { name: 'Ayew', pos: 'ATA', str: 76 }, { name: 'Edouard', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Henderson', pos: 'GOL', str: 76 }, { name: 'Richards', pos: 'ZAG', str: 75 }, { name: 'Tomkins', pos: 'ZAG', str: 73 },
            { name: 'Clyne', pos: 'LAT', str: 72 }, { name: 'Riedewald', pos: 'MEI', str: 75 },
            { name: 'Lerma', pos: 'MEI', str: 77 }, { name: 'Schlupp', pos: 'MEI', str: 76 },
            { name: 'Rak-Sakyi', pos: 'ATA', str: 74 }
        ]
    },
    fulham: {
        formation: '4-2-3-1',
        players: [
            { name: 'Leno', pos: 'GOL', str: 79 },
            { name: 'Bassey', pos: 'ZAG', str: 77 }, { name: 'Adarabioyo', pos: 'ZAG', str: 76 },
            { name: 'Robinson', pos: 'LAT', str: 76 }, { name: 'Castagne', pos: 'LAT', str: 77 },
            { name: 'Palhinha', pos: 'MEI', str: 81 }, { name: 'Reed', pos: 'MEI', str: 76 },
            { name: 'Pereira', pos: 'MEI', str: 77 }, { name: 'Willian', pos: 'MEI', str: 76 }, { name: 'Iwobi', pos: 'MEI', str: 76 },
            { name: 'Jimenez', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Rodak', pos: 'GOL', str: 74 }, { name: 'Diop', pos: 'ZAG', str: 75 }, { name: 'Ream', pos: 'ZAG', str: 74 },
            { name: 'Tete', pos: 'LAT', str: 75 }, { name: 'Lukic', pos: 'MEI', str: 75 },
            { name: 'Cairney', pos: 'MEI', str: 74 }, { name: 'Wilson', pos: 'ATA', str: 75 }
        ]
    },
    wolves: {
        formation: '4-3-3',
        players: [
            { name: 'Sa', pos: 'GOL', str: 78 },
            { name: 'Kilman', pos: 'ZAG', str: 77 }, { name: 'Dawson', pos: 'ZAG', str: 75 },
            { name: 'Ait-Nouri', pos: 'LAT', str: 76 }, { name: 'Semedo', pos: 'LAT', str: 75 },
            { name: 'Ruben Neves', pos: 'MEI', str: 80 }, { name: 'Joao Gomes', pos: 'MEI', str: 77 }, { name: 'Lemina', pos: 'MEI', str: 76 },
            { name: 'Cunha', pos: 'ATA', str: 78 }, { name: 'Neto', pos: 'ATA', str: 77 }, { name: 'Hwang Hee-chan', pos: 'ATA', str: 76 },
            // Reservas
            { name: 'Bentley', pos: 'GOL', str: 73 }, { name: 'Bueno', pos: 'ZAG', str: 74 }, { name: 'Doherty', pos: 'LAT', str: 74 },
            { name: 'Traore', pos: 'MEI', str: 75 }, { name: 'Saravia', pos: 'MEI', str: 74 },
            { name: 'Kalajdzic', pos: 'ATA', str: 75 }
        ]
    },
    brentford: {
        formation: '3-5-2',
        players: [
            { name: 'Flekken', pos: 'GOL', str: 77 },
            { name: 'Pinnock', pos: 'ZAG', str: 76 }, { name: 'Mee', pos: 'ZAG', str: 75 }, { name: 'Collins', pos: 'ZAG', str: 74 },
            { name: 'Henry', pos: 'LAT', str: 75 }, { name: 'Roerslev', pos: 'LAT', str: 74 },
            { name: 'Norgaard', pos: 'MEI', str: 76 }, { name: 'Jensen', pos: 'MEI', str: 75 }, { name: 'Janelt', pos: 'MEI', str: 74 },
            { name: 'Toney', pos: 'ATA', str: 79 }, { name: 'Mbeumo', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Strakosha', pos: 'GOL', str: 72 }, { name: 'Ajer', pos: 'ZAG', str: 73 }, { name: 'Lewis-Potter', pos: 'MEI', str: 73 },
            { name: 'Wissa', pos: 'ATA', str: 76 }, { name: 'Schade', pos: 'ATA', str: 75 }
        ]
    },
    nottinghamforest: {
        formation: '4-3-3',
        players: [
            { name: 'Turner', pos: 'GOL', str: 76 },
            { name: 'Murillo', pos: 'ZAG', str: 76 }, { name: 'Niakhate', pos: 'ZAG', str: 75 },
            { name: 'Toffolo', pos: 'LAT', str: 74 }, { name: 'Aurier', pos: 'LAT', str: 73 },
            { name: 'Gibbs-White', pos: 'MEI', str: 77 }, { name: 'Mangala', pos: 'MEI', str: 75 }, { name: 'Danilo', pos: 'MEI', str: 74 },
            { name: 'Awoniyi', pos: 'ATA', str: 76 }, { name: 'Elanga', pos: 'ATA', str: 75 }, { name: 'Hudson-Odoi', pos: 'ATA', str: 74 },
            // Reservas
            { name: 'Vlachodimos', pos: 'GOL', str: 74 }, { name: 'Boly', pos: 'ZAG', str: 73 }, { name: 'Williams', pos: 'LAT', str: 73 },
            { name: 'Yates', pos: 'MEI', str: 73 }, { name: 'Dominguez', pos: 'MEI', str: 72 },
            { name: 'Wood', pos: 'ATA', str: 73 }
        ]
    },
    bournemouth: {
        formation: '4-2-3-1',
        players: [
            { name: 'Neto', pos: 'GOL', str: 75 },
            { name: 'Senesi', pos: 'ZAG', str: 74 }, { name: 'Zabarnyi', pos: 'ZAG', str: 73 },
            { name: 'Kerkez', pos: 'LAT', str: 73 }, { name: 'Aarons', pos: 'LAT', str: 72 },
            { name: 'Lewis Cook', pos: 'MEI', str: 74 }, { name: 'Billing', pos: 'MEI', str: 73 },
            { name: 'Tavernier', pos: 'MEI', str: 72 }, { name: 'Kluivert', pos: 'MEI', str: 73 }, { name: 'Ouattara', pos: 'MEI', str: 72 },
            { name: 'Solanke', pos: 'ATA', str: 75 },
            // Reservas
            { name: 'Travers', pos: 'GOL', str: 71 }, { name: 'Mepham', pos: 'ZAG', str: 72 }, { name: 'Kelly', pos: 'ZAG', str: 71 },
            { name: 'Smith', pos: 'LAT', str: 70 }, { name: 'Christie', pos: 'MEI', str: 71 },
            { name: 'Semenyo', pos: 'ATA', str: 72 }
        ]
    },
    burnley: {
        formation: '4-4-2',
        players: [
            { name: 'Trafford', pos: 'GOL', str: 74 },
            { name: 'O\'Shea', pos: 'ZAG', str: 73 }, { name: 'Beyer', pos: 'ZAG', str: 72 },
            { name: 'Taylor', pos: 'LAT', str: 72 }, { name: 'Vitinho', pos: 'LAT', str: 71 },
            { name: 'Berge', pos: 'MEI', str: 73 }, { name: 'Brownhill', pos: 'MEI', str: 72 }, { name: 'Cullen', pos: 'MEI', str: 71 }, { name: 'Koleosho', pos: 'MEI', str: 72 },
            { name: 'Foster', pos: 'ATA', str: 74 }, { name: 'Amdouni', pos: 'ATA', str: 73 },
            // Reservas
            { name: 'Muric', pos: 'GOL', str: 70 }, { name: 'Ekdal', pos: 'ZAG', str: 71 }, { name: 'Roberts', pos: 'LAT', str: 70 },
            { name: 'Gudmundsson', pos: 'MEI', str: 70 }, { name: 'Zaroury', pos: 'ATA', str: 71 }
        ]
    },
    sheffieldunited: {
        formation: '3-5-2',
        players: [
            { name: 'Foderingham', pos: 'GOL', str: 73 },
            { name: 'Egan', pos: 'ZAG', str: 72 }, { name: 'Robinson', pos: 'ZAG', str: 71 }, { name: 'Ahmedhodzic', pos: 'ZAG', str: 70 },
            { name: 'Baldock', pos: 'LAT', str: 71 }, { name: 'Lowe', pos: 'LAT', str: 70 },
            { name: 'Hamer', pos: 'MEI', str: 72 }, { name: 'Souza', pos: 'MEI', str: 71 }, { name: 'Norwood', pos: 'MEI', str: 70 },
            { name: 'Archer', pos: 'ATA', str: 73 }, { name: 'McBurnie', pos: 'ATA', str: 72 },
            // Reservas
            { name: 'Davies', pos: 'GOL', str: 69 }, { name: 'Basham', pos: 'ZAG', str: 69 }, { name: 'Bogle', pos: 'LAT', str: 69 },
            { name: 'Osborn', pos: 'MEI', str: 69 }, { name: 'Brereton Diaz', pos: 'ATA', str: 71 }
        ]
    },
    lutontown: {
        formation: '3-4-3',
        players: [
            { name: 'Kaminski', pos: 'GOL', str: 72 },
            { name: 'Lockyer', pos: 'ZAG', str: 71 }, { name: 'Bell', pos: 'ZAG', str: 70 }, { name: 'Burke', pos: 'ZAG', str: 69 },
            { name: 'Doughty', pos: 'LAT', str: 70 }, { name: 'Kabore', pos: 'LAT', str: 69 },
            { name: 'Barkley', pos: 'MEI', str: 72 }, { name: 'Nakamba', pos: 'MEI', str: 70 },
            { name: 'Chong', pos: 'ATA', str: 69 }, { name: 'Morris', pos: 'ATA', str: 72 }, { name: 'Adebayo', pos: 'ATA', str: 71 },
            // Reservas
            { name: 'Shea', pos: 'GOL', str: 68 }, { name: 'Mengi', pos: 'ZAG', str: 68 }, { name: 'Ogbene', pos: 'ATA', str: 70 }
        ]
    },
    leicestercity: {
        formation: '4-3-3',
        players: [
            { name: 'Hermansen', pos: 'GOL', str: 78 },
            { name: 'Faes', pos: 'ZAG', str: 77 }, { name: 'Vestergaard', pos: 'ZAG', str: 76 },
            { name: 'Castagne', pos: 'LAT', str: 77 }, { name: 'Justin', pos: 'LAT', str: 76 },
            { name: 'Winks', pos: 'MEI', str: 77 }, { name: 'Dewsbury-Hall', pos: 'MEI', str: 78 }, { name: 'Ndidi', pos: 'MEI', str: 77 },
            { name: 'Maddison', pos: 'ATA', str: 80 }, { name: 'Daka', pos: 'ATA', str: 78 }, { name: 'Iheanacho', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Stolarczyk', pos: 'GOL', str: 70 }, { name: 'Coady', pos: 'ZAG', str: 75 }, { name: 'Pereira', pos: 'LAT', str: 76 },
            { name: 'Soumare', pos: 'MEI', str: 75 }, { name: 'Praet', pos: 'MEI', str: 74 },
            { name: 'Vardy', pos: 'ATA', str: 76 }
        ]
    },
    // ITÁLIA (Serie A 2026)
    inter: {
        formation: '3-5-2',
        players: [
            { name: 'Yann Sommer', pos: 'GOL', str: 87 },
            { name: 'Alessandro Bastoni', pos: 'ZAG', str: 89 }, { name: 'Benjamin Pavard', pos: 'ZAG', str: 88 }, { name: 'Francesco Acerbi', pos: 'ZAG', str: 84 },
            { name: 'Federico Dimarco', pos: 'LAT', str: 87 }, { name: 'Denzel Dumfries', pos: 'LAT', str: 85 },
            { name: 'Nicolò Barella', pos: 'MEI', str: 89 }, { name: 'Hakan Calhanoglu', pos: 'MEI', str: 88 }, { name: 'Davide Frattesi', pos: 'MEI', str: 85 },
            { name: 'Lautaro Martínez', pos: 'ATA', str: 91 }, { name: 'Marcus Thuram', pos: 'ATA', str: 88 },
            // Reservas
            { name: 'Audero', pos: 'GOL', str: 80 }, { name: 'Bisseck', pos: 'ZAG', str: 82 }, { name: 'Asllani', pos: 'MEI', str: 82 }, { name: 'Taremi', pos: 'ATA', str: 84 }
        ]
    },
    juventus: {
        formation: '4-3-3',
        players: [
            { name: 'Di Gregorio', pos: 'GOL', str: 86 },
            { name: 'Bremer', pos: 'ZAG', str: 89 }, { name: 'Gatti', pos: 'ZAG', str: 83 },
            { name: 'Cambiaso', pos: 'LAT', str: 84 }, { name: 'Kalulu', pos: 'LAT', str: 82 },
            { name: 'Douglas Luiz', pos: 'MEI', str: 87 }, { name: 'Thuram', pos: 'MEI', str: 84 }, { name: 'Koopmeiners', pos: 'MEI', str: 88 },
            { name: 'Kenan Yildiz', pos: 'ATA', str: 86 }, { name: 'Vlahovic', pos: 'ATA', str: 89 }, { name: 'Nico Gonzalez', pos: 'ATA', str: 85 },
            // Reservas
            { name: 'Perin', pos: 'GOL', str: 81 }, { name: 'Locatelli', pos: 'MEI', str: 84 }, { name: 'Fagioli', pos: 'MEI', str: 83 }, { name: 'Conceição', pos: 'ATA', str: 84 }
        ]
    },
    acmilan: {
        formation: '4-2-3-1',
        players: [
            { name: 'Mike Maignan', pos: 'GOL', str: 89 },
            { name: 'Tomori', pos: 'ZAG', str: 86 }, { name: 'Pavlovic', pos: 'ZAG', str: 84 },
            { name: 'Theo Hernández', pos: 'LAT', str: 89 }, { name: 'Emerson Royal', pos: 'LAT', str: 81 },
            { name: 'Reijnders', pos: 'MEI', str: 85 }, { name: 'Fofana', pos: 'MEI', str: 84 },
            { name: 'Pulisic', pos: 'MEI', str: 87 }, { name: 'Rafael Leão', pos: 'ATA', str: 90 }, { name: 'Chukwueze', pos: 'ATA', str: 82 },
            { name: 'Morata', pos: 'ATA', str: 86 },
            // Reservas
            { name: 'Torriani', pos: 'GOL', str: 75 }, { name: 'Thiaw', pos: 'ZAG', str: 83 }, { name: 'Loftus-Cheek', pos: 'MEI', str: 83 }, { name: 'Okafor', pos: 'ATA', str: 82 }
        ]
    },
    napoli: {
        formation: '3-4-2-1',
        players: [
            { name: 'Meret', pos: 'GOL', str: 84 },
            { name: 'Buongiorno', pos: 'ZAG', str: 86 }, { name: 'Rrahmani', pos: 'ZAG', str: 83 }, { name: 'Di Lorenzo', pos: 'ZAG', str: 85 },
            { name: 'Spinazzola', pos: 'LAT', str: 81 }, { name: 'Mazzocchi', pos: 'LAT', str: 79 },
            { name: 'Lobotka', pos: 'MEI', str: 85 }, { name: 'Anguissa', pos: 'MEI', str: 84 },
            { name: 'Kvaratskhelia', pos: 'ATA', str: 89 }, { name: 'McTominay', pos: 'MEI', str: 84 },
            { name: 'Lukaku', pos: 'ATA', str: 87 },
            // Reservas
            { name: 'Caprile', pos: 'GOL', str: 79 }, { name: 'Gilmour', pos: 'MEI', str: 82 }, { name: 'Neres', pos: 'ATA', str: 83 }, { name: 'Raspadori', pos: 'ATA', str: 82 }
        ]
    },
    // ESPANHA - Times Restantes
    getafe: {
        formation: '4-2-3-1',
        players: [
            { name: 'David Soria', pos: 'GOL', str: 81 },
            { name: 'Djené', pos: 'ZAG', str: 80 }, { name: 'Alderete', pos: 'ZAG', str: 79 },
            { name: 'Diego Rico', pos: 'LAT', str: 78 }, { name: 'Iglesias', pos: 'LAT', str: 77 },
            { name: 'Mauro Arambarri', pos: 'MEI', str: 80 }, { name: 'Luis Milla', pos: 'MEI', str: 80 },
            { name: 'Carles Pérez', pos: 'MEI', str: 78 }, { name: 'Uche', pos: 'MEI', str: 77 }, { name: 'Alex Sola', pos: 'MEI', str: 77 },
            { name: 'Borja Mayoral', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Letacek', pos: 'GOL', str: 75 }, { name: 'Aberdin', pos: 'ZAG', str: 74 }, { name: 'Yildirim', pos: 'ATA', str: 76 }
        ]
    },
    celta: {
        formation: '3-4-3',
        players: [
            { name: 'Guaita', pos: 'GOL', str: 80 },
            { name: 'Starfelt', pos: 'ZAG', str: 79 }, { name: 'Jailson', pos: 'ZAG', str: 78 }, { name: 'Mingueza', pos: 'ZAG', str: 81 },
            { name: 'Hugo Álvarez', pos: 'LAT', str: 78 }, { name: 'Carreira', pos: 'LAT', str: 76 },
            { name: 'Fran Beltrán', pos: 'MEI', str: 80 }, { name: 'Ilaix Moriba', pos: 'MEI', str: 79 },
            { name: 'Iago Aspas', pos: 'ATA', str: 84 }, { name: 'Bamba', pos: 'ATA', str: 79 }, { name: 'Borja Iglesias', pos: 'ATA', str: 81 },
            // Reservas
            { name: 'Iván Villar', pos: 'GOL', str: 75 }, { name: 'Douvikas', pos: 'ATA', str: 78 }, { name: 'Swedberg', pos: 'MEI', str: 77 }
        ]
    },
    alaves: {
        formation: '4-2-3-1',
        players: [
            { name: 'Sivera', pos: 'GOL', str: 80 },
            { name: 'Abqar', pos: 'ZAG', str: 78 }, { name: 'Sedlar', pos: 'ZAG', str: 76 },
            { name: 'Manu Sánchez', pos: 'LAT', str: 78 }, { name: 'Tenaglia', pos: 'LAT', str: 77 },
            { name: 'Guevara', pos: 'MEI', str: 78 }, { name: 'Blanco', pos: 'MEI', str: 78 },
            { name: 'Vicente', pos: 'MEI', str: 79 }, { name: 'Guridi', pos: 'MEI', str: 78 }, { name: 'Conechny', pos: 'MEI', str: 77 },
            { name: 'Toni Martínez', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Owono', pos: 'GOL', str: 72 }, { name: 'Mouriño', pos: 'ZAG', str: 76 }, { name: 'Villalibre', pos: 'ATA', str: 77 }
        ]
    },
    laspalmas: {
        formation: '4-3-3',
        players: [
            { name: 'Cillessen', pos: 'GOL', str: 79 },
            { name: 'Mika Mármol', pos: 'ZAG', str: 79 }, { name: 'Alex Suárez', pos: 'ZAG', str: 76 },
            { name: 'Alex Muñoz', pos: 'LAT', str: 76 }, { name: 'Rozada', pos: 'LAT', str: 76 },
            { name: 'Kirian Rodríguez', pos: 'MEI', str: 81 }, { name: 'Javi Muñoz', pos: 'MEI', str: 78 }, { name: 'Moleiro', pos: 'MEI', str: 80 },
            { name: 'Sandro', pos: 'ATA', str: 78 }, { name: 'McBurnie', pos: 'ATA', str: 77 }, { name: 'Mata', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Horkas', pos: 'GOL', str: 74 }, { name: 'Essugo', pos: 'MEI', str: 75 }, { name: 'Fábio Silva', pos: 'ATA', str: 77 }
        ]
    },
    rayo: {
        formation: '4-2-3-1',
        players: [
            { name: 'Batalla', pos: 'GOL', str: 79 },
            { name: 'Lejeune', pos: 'ZAG', str: 80 }, { name: 'Mumin', pos: 'ZAG', str: 78 },
            { name: 'Chavarría', pos: 'LAT', str: 77 }, { name: 'Ratiu', pos: 'LAT', str: 77 },
            { name: 'Valentín', pos: 'MEI', str: 79 }, { name: 'Unai López', pos: 'MEI', str: 78 },
            { name: 'James Rodríguez', pos: 'MEI', str: 82 }, { name: 'Isi Palazón', pos: 'MEI', str: 80 }, { name: 'Alvaro García', pos: 'MEI', str: 80 },
            { name: 'Camello', pos: 'ATA', str: 79 },
            // Reservas
            { name: 'Cárdenas', pos: 'GOL', str: 75 }, { name: 'Embarba', pos: 'MEI', str: 77 }, { name: 'RDT', pos: 'ATA', str: 78 }
        ]
    },
    mallorca: {
        formation: '4-3-3',
        players: [
            { name: 'Leo Román', pos: 'GOL', str: 78 },
            { name: 'Raíllo', pos: 'ZAG', str: 80 }, { name: 'Valjent', pos: 'ZAG', str: 78 },
            { name: 'Mojica', pos: 'LAT', str: 78 }, { name: 'Maffeo', pos: 'LAT', str: 78 },
            { name: 'Samú Costa', pos: 'MEI', str: 80 }, { name: 'Darder', pos: 'MEI', str: 80 }, { name: 'Morlanes', pos: 'MEI', str: 77 },
            { name: 'Asano', pos: 'ATA', str: 78 }, { name: 'Muriqi', pos: 'ATA', str: 81 }, { name: 'Larin', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Greif', pos: 'GOL', str: 77 }, { name: 'Mascarell', pos: 'MEI', str: 77 }, { name: 'Abdon Prats', pos: 'ATA', str: 76 }
        ]
    },
    espanyol: {
        formation: '4-4-2',
        players: [
            { name: 'Joan García', pos: 'GOL', str: 81 },
            { name: 'Kumbulla', pos: 'ZAG', str: 78 }, { name: 'Cabrera', pos: 'ZAG', str: 77 },
            { name: 'Romero', pos: 'LAT', str: 76 }, { name: 'El Hilali', pos: 'LAT', str: 75 },
            { name: 'Král', pos: 'MEI', str: 78 }, { name: 'Gragera', pos: 'MEI', str: 77 }, { name: 'Aguado', pos: 'MEI', str: 76 }, { name: 'Jofre', pos: 'MEI', str: 75 },
            { name: 'Puado', pos: 'ATA', str: 79 }, { name: 'Véliz', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Pacheco', pos: 'GOL', str: 76 }, { name: 'Cheddira', pos: 'ATA', str: 77 }, { name: 'Cardona', pos: 'MEI', str: 75 }
        ]
    },
    leganes: {
        formation: '4-2-3-1',
        players: [
            { name: 'Dimitrovic', pos: 'GOL', str: 78 },
            { name: 'Sáenz', pos: 'ZAG', str: 76 }, { name: 'Sergio', pos: 'ZAG', str: 75 },
            { name: 'Franquesa', pos: 'LAT', str: 76 }, { name: 'Rosier', pos: 'LAT', str: 77 },
            { name: 'Neyou', pos: 'MEI', str: 77 }, { name: 'Cissé', pos: 'MEI', str: 76 },
            { name: 'Munir', pos: 'MEI', str: 78 }, { name: 'Brasanac', pos: 'MEI', str: 75 }, { name: 'Cruz', pos: 'MEI', str: 77 },
            { name: 'Haller', pos: 'ATA', str: 80 },
            // Reservas
            { name: 'Soriano', pos: 'GOL', str: 74 }, { name: 'Nastasic', pos: 'ZAG', str: 76 }, { name: 'Raba', pos: 'ATA', str: 75 }
        ]
    },
    valladolid: {
        formation: '4-3-3',
        players: [
            { name: 'Hein', pos: 'GOL', str: 78 },
            { name: 'Boyomo', pos: 'ZAG', str: 77 }, { name: 'Juma Bah', pos: 'ZAG', str: 74 },
            { name: 'Lucas Rosa', pos: 'LAT', str: 75 }, { name: 'Luis Pérez', pos: 'LAT', str: 76 },
            { name: 'Juríc', pos: 'MEI', str: 77 }, { name: 'Kike Pérez', pos: 'MEI', str: 76 }, { name: 'Amallah', pos: 'MEI', str: 77 },
            { name: 'Raúl Moro', pos: 'ATA', str: 77 }, { name: 'Latasa', pos: 'ATA', str: 76 }, { name: 'Amath', pos: 'ATA', str: 76 },
            // Reservas
            { name: 'Ferreira', pos: 'GOL', str: 72 }, { name: 'Meseguer', pos: 'MEI', str: 75 }, { name: 'Sylla', pos: 'ATA', str: 75 }
        ]
    },
    // BUNDESLIGA - Times faltantes
    leverkusen: {
        formation: '3-4-2-1',
        players: [
            { name: 'Kovar', pos: 'GOL', str: 82 },
            { name: 'Tapsoba', pos: 'ZAG', str: 87 }, { name: 'Tah', pos: 'ZAG', str: 86 }, { name: 'Hincapié', pos: 'ZAG', str: 86 },
            { name: 'Grimaldo', pos: 'LAT', str: 88 }, { name: 'Frimpong', pos: 'LAT', str: 87 },
            { name: 'Xhaka', pos: 'MEI', str: 88 }, { name: 'Palacios', pos: 'MEI', str: 85 },
            { name: 'Wirtz', pos: 'MEI', str: 92 }, { name: 'Terrier', pos: 'ATA', str: 84 },
            { name: 'Boniface', pos: 'ATA', str: 87 },
            // Reservas
            { name: 'Hradecky', pos: 'GOL', str: 83 }, { name: 'Andrich', pos: 'MEI', str: 84 }, { name: 'Schick', pos: 'ATA', str: 83 }
        ]
    },
    leipzig: {
        formation: '4-2-2-2',
        players: [
            { name: 'Gulácsi', pos: 'GOL', str: 84 },
            { name: 'Lukeba', pos: 'ZAG', str: 86 }, { name: 'Orban', pos: 'ZAG', str: 84 },
            { name: 'Raum', pos: 'LAT', str: 83 }, { name: 'Henrichs', pos: 'LAT', str: 81 },
            { name: 'Xavi Simons', pos: 'MEI', str: 89 }, { name: 'Haidara', pos: 'MEI', str: 82 }, { name: 'Seiwald', pos: 'MEI', str: 80 }, { name: 'Nusa', pos: 'MEI', str: 83 },
            { name: 'Openda', pos: 'ATA', str: 87 }, { name: 'Sesko', pos: 'ATA', str: 87 },
            // Reservas
            { name: 'Vandevoordt', pos: 'GOL', str: 79 }, { name: 'Geertruida', pos: 'ZAG', str: 83 }, { name: 'Elmas', pos: 'MEI', str: 81 }
        ]
    },
    frankfurt: {
        formation: '4-2-3-1',
        players: [
            { name: 'Trapp', pos: 'GOL', str: 83 },
            { name: 'Koch', pos: 'ZAG', str: 82 }, { name: 'Tuta', pos: 'ZAG', str: 80 },
            { name: 'Theate', pos: 'LAT', str: 81 }, { name: 'Kristensen', pos: 'LAT', str: 79 },
            { name: 'Larsson', pos: 'MEI', str: 81 }, { name: 'Skhiri', pos: 'MEI', str: 81 },
            { name: 'Götze', pos: 'MEI', str: 81 }, { name: 'Chaïbi', pos: 'MEI', str: 80 }, { name: 'Marmoush', pos: 'MEI', str: 84 },
            { name: 'Ekitiké', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Santos', pos: 'GOL', str: 76 }, { name: 'Uzun', pos: 'MEI', str: 79 }, { name: 'Matanovic', pos: 'ATA', str: 78 }
        ]
    },
    roma: {
        formation: '4-3-3',
        players: [
            { name: 'Svilar', pos: 'GOL', str: 84 },
            { name: 'Gianluca Mancini', pos: 'ZAG', str: 85 }, { name: 'Evan Ndicka', pos: 'ZAG', str: 84 },
            { name: 'Angeliño', pos: 'LAT', str: 82 }, { name: 'Zeki Celik', pos: 'LAT', str: 81 },
            { name: 'Bryan Cristante', pos: 'MEI', str: 84 }, { name: 'Leandro Paredes', pos: 'MEI', str: 84 }, { name: 'Lorenzo Pellegrini', pos: 'MEI', str: 86 },
            { name: 'Paulo Dybala', pos: 'ATA', str: 88 }, { name: 'Artem Dovbyk', pos: 'ATA', str: 87 }, { name: 'Matías Soulé', pos: 'ATA', str: 85 },
            // Reservas
            { name: 'Ryan', pos: 'GOL', str: 78 }, { name: 'Hummels', pos: 'ZAG', str: 83 }, { name: 'Manu Koné', pos: 'MEI', str: 83 }, { name: 'Baldanzi', pos: 'ATA', str: 82 }
        ]
    },
    lazio: {
        formation: '4-3-3',
        players: [
            { name: 'Ivan Provedel', pos: 'GOL', str: 85 },
            { name: 'Alessio Romagnoli', pos: 'ZAG', str: 84 }, { name: 'Mario Gila', pos: 'ZAG', str: 82 },
            { name: 'Nuno Tavares', pos: 'LAT', str: 82 }, { name: 'Manuel Lazzari', pos: 'LAT', str: 81 },
            { name: 'Nicolò Rovella', pos: 'MEI', str: 83 }, { name: 'Matteo Guendouzi', pos: 'MEI', str: 85 }, { name: 'Gaetano Castrovilli', pos: 'MEI', str: 81 },
            { name: 'Mattia Zaccagni', pos: 'ATA', str: 85 }, { name: 'Taty Castellanos', pos: 'ATA', str: 84 }, { name: 'Boulaye Dia', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Mandas', pos: 'GOL', str: 78 }, { name: 'Patric', pos: 'ZAG', str: 80 }, { name: 'Vecino', pos: 'MEI', str: 80 }, { name: 'Noslin', pos: 'ATA', str: 81 }
        ]
    },
    atalanta: {
        formation: '3-4-2-1',
        players: [
            { name: 'Carnesecchi', pos: 'GOL', str: 86 },
            { name: 'Giorgio Scalvini', pos: 'ZAG', str: 87 }, { name: 'Isak Hien', pos: 'ZAG', str: 83 }, { name: 'Kolasinac', pos: 'ZAG', str: 82 },
            { name: 'Raoul Bellanova', pos: 'LAT', str: 83 }, { name: 'Matteo Ruggeri', pos: 'LAT', str: 82 },
            { name: 'Ederson', pos: 'MEI', str: 86 }, { name: 'Marten de Roon', pos: 'MEI', str: 83 },
            { name: 'De Ketelaere', pos: 'MEI', str: 86 }, { name: 'Ademola Lookman', pos: 'ATA', str: 88 },
            { name: 'Mateo Retegui', pos: 'ATA', str: 86 },
            // Reservas
            { name: 'Rui Patrício', pos: 'GOL', str: 79 }, { name: 'Djimsiti', pos: 'ZAG', str: 82 }, { name: 'Pasalic', pos: 'MEI', str: 83 }, { name: 'Zaniolo', pos: 'ATA', str: 82 }
        ]
    },
    fiorentina: {
        formation: '4-2-3-1',
        players: [
            { name: 'David De Gea', pos: 'GOL', str: 85 },
            { name: 'Marin Pongracic', pos: 'ZAG', str: 82 }, { name: 'Martínez Quarta', pos: 'ZAG', str: 83 },
            { name: 'Robin Gosens', pos: 'LAT', str: 83 }, { name: 'Dodô', pos: 'LAT', str: 82 },
            { name: 'Yacine Adli', pos: 'MEI', str: 81 }, { name: 'Amir Richardson', pos: 'MEI', str: 80 },
            { name: 'Gudmundsson', pos: 'MEI', str: 85 }, { name: 'Andrea Colpani', pos: 'MEI', str: 84 }, { name: 'Moise Kean', pos: 'ATA', str: 84 },
            { name: 'Lucas Beltrán', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Terracciano', pos: 'GOL', str: 79 }, { name: 'Ranieri', pos: 'ZAG', str: 80 }, { name: 'Mandragora', pos: 'MEI', str: 80 }, { name: 'Ikoné', pos: 'ATA', str: 79 }
        ]
    },
    bologna: {
        formation: '4-2-3-1',
        players: [
            { name: 'Skorupski', pos: 'GOL', str: 82 },
            { name: 'Beukema', pos: 'ZAG', str: 81 }, { name: 'Lucumí', pos: 'ZAG', str: 82 },
            { name: 'Miranda', pos: 'LAT', str: 80 }, { name: 'Posch', pos: 'LAT', str: 81 },
            { name: 'Remo Freuler', pos: 'MEI', str: 82 }, { name: 'Aebischer', pos: 'MEI', str: 81 },
            { name: 'Orsolini', pos: 'MEI', str: 83 }, { name: 'Lewis Ferguson', pos: 'MEI', str: 84 }, { name: 'Ndoye', pos: 'MEI', str: 81 },
            { name: 'Thijs Dallinga', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Ravaglia', pos: 'GOL', str: 76 }, { name: 'Casale', pos: 'ZAG', str: 80 }, { name: 'Pobega', pos: 'MEI', str: 80 }, { name: 'Castro', pos: 'ATA', str: 79 }
        ]
    },
    torino: {
        formation: '3-5-2',
        players: [
            { name: 'Milinkovic-Savic', pos: 'GOL', str: 81 },
            { name: 'Coco', pos: 'ZAG', str: 80 }, { name: 'Masina', pos: 'ZAG', str: 78 }, { name: 'Walukiewicz', pos: 'ZAG', str: 77 },
            { name: 'Borna Sosa', pos: 'LAT', str: 80 }, { name: 'Lazaro', pos: 'LAT', str: 78 },
            { name: 'Samuele Ricci', pos: 'MEI', str: 83 }, { name: 'Ilic', pos: 'MEI', str: 81 }, { name: 'Vlasic', pos: 'MEI', str: 82 },
            { name: 'Che Adams', pos: 'ATA', str: 81 }, { name: 'Duvan Zapata', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Paleari', pos: 'GOL', str: 75 }, { name: 'Vojvoda', pos: 'LAT', str: 77 }, { name: 'Linetty', pos: 'MEI', str: 78 }, { name: 'Sanabria', pos: 'ATA', str: 80 }
        ]
    },
    monza: {
        formation: '3-4-2-1',
        players: [
            { name: 'Turati', pos: 'GOL', str: 79 },
            { name: 'Pablo Marí', pos: 'ZAG', str: 79 }, { name: 'Izzo', pos: 'ZAG', str: 78 }, { name: 'Carboni', pos: 'ZAG', str: 77 },
            { name: 'Kyriakopoulos', pos: 'LAT', str: 77 }, { name: 'Birindelli', pos: 'LAT', str: 76 },
            { name: 'Pessina', pos: 'MEI', str: 81 }, { name: 'Bondo', pos: 'MEI', str: 78 },
            { name: 'Daniel Maldini', pos: 'MEI', str: 81 }, { name: 'Mota', pos: 'MEI', str: 79 },
            { name: 'Djurić', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Pizzignacco', pos: 'GOL', str: 74 }, { name: 'Caldirola', pos: 'ZAG', str: 76 }, { name: 'Sensi', pos: 'MEI', str: 78 }, { name: 'Petagna', pos: 'ATA', str: 77 }
        ]
    },
    lecce: {
        formation: '4-2-3-1',
        players: [
            { name: 'Falcone', pos: 'GOL', str: 81 },
            { name: 'Baschirotto', pos: 'ZAG', str: 79 }, { name: 'Gaspar', pos: 'ZAG', str: 78 },
            { name: 'Gallo', pos: 'LAT', str: 77 }, { name: 'Guilbert', pos: 'LAT', str: 77 },
            { name: 'Ramadani', pos: 'MEI', str: 78 }, { name: 'Pierret', pos: 'MEI', str: 76 },
            { name: 'Rebic', pos: 'MEI', str: 79 }, { name: 'Oudin', pos: 'MEI', str: 78 }, { name: 'Banda', pos: 'MEI', str: 79 },
            { name: 'Krstovic', pos: 'ATA', str: 81 },
            // Reservas
            { name: 'Fruchtl', pos: 'GOL', str: 74 }, { name: 'Jean', pos: 'ZAG', str: 75 }, { name: 'Coulibaly', pos: 'MEI', str: 77 }, { name: 'Burnete', pos: 'ATA', str: 73 }
        ]
    },
    udinese: {
        formation: '3-5-2',
        players: [
            { name: 'Okoye', pos: 'GOL', str: 80 },
            { name: 'Bijol', pos: 'ZAG', str: 82 }, { name: 'Giannetti', pos: 'ZAG', str: 77 }, { name: 'Kristensen', pos: 'ZAG', str: 77 },
            { name: 'Kamara', pos: 'LAT', str: 77 }, { name: 'Ehizibue', pos: 'LAT', str: 77 },
            { name: 'Karlström', pos: 'MEI', str: 78 }, { name: 'Lovric', pos: 'MEI', str: 80 }, { name: 'Payero', pos: 'MEI', str: 78 },
            { name: 'Thauvin', pos: 'ATA', str: 82 }, { name: 'Lucca', pos: 'ATA', str: 81 },
            // Reservas
            { name: 'Sava', pos: 'GOL', str: 73 }, { name: 'Kabasele', pos: 'ZAG', str: 76 }, { name: 'Ekkelenkamp', pos: 'MEI', str: 77 }, { name: 'Alexis Sánchez', pos: 'ATA', str: 80 }
        ]
    },
    genoa: {
        formation: '3-5-2',
        players: [
            { name: 'Gollini', pos: 'GOL', str: 80 },
            { name: 'Bani', pos: 'ZAG', str: 78 }, { name: 'Vásquez', pos: 'ZAG', str: 80 }, { name: 'Vogliacco', pos: 'ZAG', str: 77 },
            { name: 'Martin', pos: 'LAT', str: 77 }, { name: 'Sabelli', pos: 'LAT', str: 77 },
            { name: 'Badelj', pos: 'MEI', str: 78 }, { name: 'Frendrup', pos: 'MEI', str: 81 }, { name: 'Malinovskyi', pos: 'MEI', str: 80 },
            { name: 'Vitinha', pos: 'ATA', str: 80 }, { name: 'Pinamonti', pos: 'ATA', str: 81 },
            // Reservas
            { name: 'Leali', pos: 'GOL', str: 75 }, { name: 'Matturro', pos: 'ZAG', str: 75 }, { name: 'Thorsby', pos: 'MEI', str: 77 }, { name: 'Ekhator', pos: 'ATA', str: 72 }
        ]
    },
    cagliari: {
        formation: '3-5-2',
        players: [
            { name: 'Scuffet', pos: 'GOL', str: 79 },
            { name: 'Mina', pos: 'ZAG', str: 80 }, { name: 'Luperto', pos: 'ZAG', str: 78 }, { name: 'Zappa', pos: 'ZAG', str: 77 },
            { name: 'Augello', pos: 'LAT', str: 77 }, { name: 'Zortea', pos: 'LAT', str: 77 },
            { name: 'Marin', pos: 'MEI', str: 78 }, { name: 'Makoumbou', pos: 'MEI', str: 77 }, { name: 'Gaetano', pos: 'MEI', str: 79 },
            { name: 'Luvumbo', pos: 'ATA', str: 79 }, { name: 'Piccoli', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Sherri', pos: 'GOL', str: 72 }, { name: 'Palomino', pos: 'ZAG', str: 78 }, { name: 'Deiola', pos: 'MEI', str: 76 }, { name: 'Pavoletti', pos: 'ATA', str: 76 }
        ]
    },
    verona: {
        formation: '4-2-3-1',
        players: [
            { name: 'Montipò', pos: 'GOL', str: 80 },
            { name: 'Dawidowicz', pos: 'ZAG', str: 77 }, { name: 'Magnani', pos: 'ZAG', str: 77 },
            { name: 'Frese', pos: 'LAT', str: 76 }, { name: 'Tchatchoua', pos: 'LAT', str: 77 },
            { name: 'Duda', pos: 'MEI', str: 78 }, { name: 'Belahyane', pos: 'MEI', str: 75 },
            { name: 'Suslov', pos: 'MEI', str: 80 }, { name: 'Harroui', pos: 'MEI', str: 77 }, { name: 'Lazovic', pos: 'MEI', str: 78 },
            { name: 'Tengstedt', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Perilli', pos: 'GOL', str: 73 }, { name: 'Coppola', pos: 'ZAG', str: 76 }, { name: 'Serdar', pos: 'MEI', str: 77 }, { name: 'Mosquera', pos: 'ATA', str: 75 }
        ]
    },
    empoli: {
        formation: '3-4-2-1',
        players: [
            { name: 'Vasquez', pos: 'GOL', str: 78 },
            { name: 'Ismajli', pos: 'ZAG', str: 77 }, { name: 'Viti', pos: 'ZAG', str: 77 }, { name: 'Goglichidze', pos: 'ZAG', str: 75 },
            { name: 'Pezzella', pos: 'LAT', str: 76 }, { name: 'Gyasi', pos: 'LAT', str: 76 },
            { name: 'Henderson', pos: 'MEI', str: 76 }, { name: 'Grassi', pos: 'MEI', str: 76 },
            { name: 'Fazzini', pos: 'MEI', str: 79 }, { name: 'Esposito', pos: 'MEI', str: 78 },
            { name: 'Colombo', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Brancolini', pos: 'GOL', str: 72 }, { name: 'De Sciglio', pos: 'LAT', str: 77 }, { name: 'Maleh', pos: 'MEI', str: 76 }, { name: 'Solbakken', pos: 'ATA', str: 76 }
        ]
    },
    sassuolo: {
        formation: '4-3-3',
        players: [
            { name: 'Moldovan', pos: 'GOL', str: 77 },
            { name: 'Muharemovic', pos: 'ZAG', str: 76 }, { name: 'Romagna', pos: 'ZAG', str: 75 },
            { name: 'Doig', pos: 'LAT', str: 77 }, { name: 'Toljan', pos: 'LAT', str: 76 },
            { name: 'Boloca', pos: 'MEI', str: 78 }, { name: 'Thorstvedt', pos: 'MEI', str: 80 }, { name: 'Obiang', pos: 'MEI', str: 75 },
            { name: 'Berardi', pos: 'ATA', str: 84 }, { name: 'Laurienté', pos: 'ATA', str: 79 }, { name: 'Mulattieri', pos: 'ATA', str: 76 },
            // Reservas
            { name: 'Consigli', pos: 'GOL', str: 77 }, { name: 'Odenthal', pos: 'ZAG', str: 75 }, { name: 'Lipani', pos: 'MEI', str: 73 }, { name: 'Moro', pos: 'ATA', str: 75 }
        ]
    },
    parma: {
        formation: '4-2-3-1',
        players: [
            { name: 'Suzuki', pos: 'GOL', str: 78 },
            { name: 'Balogh', pos: 'ZAG', str: 76 }, { name: 'Circati', pos: 'ZAG', str: 77 },
            { name: 'Valeri', pos: 'LAT', str: 76 }, { name: 'Coulibaly', pos: 'LAT', str: 75 },
            { name: 'Bernabé', pos: 'MEI', str: 81 }, { name: 'Sohm', pos: 'MEI', str: 77 },
            { name: 'Man', pos: 'MEI', str: 82 }, { name: 'Mihaila', pos: 'MEI', str: 78 }, { name: 'Cancellieri', pos: 'MEI', str: 77 },
            { name: 'Bonny', pos: 'ATA', str: 79 },
            // Reservas
            { name: 'Chichizola', pos: 'GOL', str: 75 }, { name: 'Delprato', pos: 'ZAG', str: 76 }, { name: 'Estevez', pos: 'MEI', str: 76 }, { name: 'Almqvist', pos: 'ATA', str: 77 }
        ]
    },
    como: {
        formation: '4-2-3-1',
        players: [
            { name: 'Audero', pos: 'GOL', str: 79 },
            { name: 'Kempf', pos: 'ZAG', str: 77 }, { name: 'Dossena', pos: 'ZAG', str: 77 },
            { name: 'Alberto Moreno', pos: 'LAT', str: 78 }, { name: 'Van der Brempt', pos: 'LAT', str: 76 },
            { name: 'Máximo Perrone', pos: 'MEI', str: 80 }, { name: 'Sergi Roberto', pos: 'MEI', str: 81 },
            { name: 'Nico Paz', pos: 'MEI', str: 83 }, { name: 'Strefezza', pos: 'MEI', str: 79 }, { name: 'Fadera', pos: 'MEI', str: 76 },
            { name: 'Patrick Cutrone', pos: 'ATA', str: 80 },
            // Reservas
            { name: 'Reina', pos: 'GOL', str: 76 }, { name: 'Goldaniga', pos: 'ZAG', str: 76 }, { name: 'Mazzitelli', pos: 'MEI', str: 77 }, { name: 'Belotti', pos: 'ATA', str: 79 }
        ]
    },
    stuttgart: {
        formation: '4-4-2',
        players: [
            { name: 'Nübel', pos: 'GOL', str: 83 },
            { name: 'Chabot', pos: 'ZAG', str: 81 }, { name: 'Rouault', pos: 'ZAG', str: 79 },
            { name: 'Mittelstädt', pos: 'LAT', str: 81 }, { name: 'Vagnoman', pos: 'LAT', str: 79 },
            { name: 'Stiller', pos: 'MEI', str: 83 }, { name: 'Karazor', pos: 'MEI', str: 81 }, { name: 'Millot', pos: 'MEI', str: 82 }, { name: 'Fuhrich', pos: 'MEI', str: 82 },
            { name: 'Undav', pos: 'ATA', str: 84 }, { name: 'Demirovic', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Bredlow', pos: 'GOL', str: 75 }, { name: 'Al-Dakhil', pos: 'ZAG', str: 78 }, { name: 'Rieder', pos: 'MEI', str: 80 }
        ]
    },
    bayern: {
        formation: '4-2-3-1',
        players: [
            { name: 'Neuer', pos: 'GOL', str: 88 },
            { name: 'Kim Min-jae', pos: 'ZAG', str: 87 }, { name: 'Upamecano', pos: 'ZAG', str: 86 },
            { name: 'Davies', pos: 'LAT', str: 88 }, { name: 'Kimmich', pos: 'LAT', str: 89 },
            { name: 'Pavlovic', pos: 'MEI', str: 84 }, { name: 'Palhinha', pos: 'MEI', str: 86 },
            { name: 'Musiala', pos: 'MEI', str: 91 }, { name: 'Olise', pos: 'MEI', str: 87 }, { name: 'Sané', pos: 'MEI', str: 88 },
            { name: 'Harry Kane', pos: 'ATA', str: 92 },
            // Reservas
            { name: 'Ulreich', pos: 'GOL', str: 80 }, { name: 'Ito', pos: 'ZAG', str: 82 }, { name: 'Tel', pos: 'ATA', str: 84 }, { name: 'Müller', pos: 'ATA', str: 84 }
        ]
    },
    realmadrid: {
        formation: '4-3-3',
        players: [
            { name: 'Courtois', pos: 'GOL', str: 91 },
            { name: 'Eder Militao', pos: 'ZAG', str: 90 }, { name: 'Rudiger', pos: 'ZAG', str: 89 },
            { name: 'Alfonso Davies', pos: 'LAT', str: 89 }, { name: 'Carvajal', pos: 'LAT', str: 87 },
            { name: 'Bellingham', pos: 'MEI', str: 93 }, { name: 'Valverde', pos: 'MEI', str: 91 }, { name: 'Camavinga', pos: 'MEI', str: 89 },
            { name: 'Mbappé', pos: 'ATA', str: 95 }, { name: 'Vinícius Jr', pos: 'ATA', str: 94 }, { name: 'Rodrygo', pos: 'ATA', str: 90 },
            // Reservas
            { name: 'Lunin', pos: 'GOL', str: 84 }, { name: 'Tchouaméni', pos: 'MEI', str: 89 }, { name: 'Arda Guler', pos: 'MEI', str: 85 },
            { name: 'Endrick', pos: 'ATA', str: 87 }, { name: 'Brahim Díaz', pos: 'ATA', str: 86 }
        ]
    },
    barcelona: {
        formation: '4-3-3',
        players: [
            { name: 'Ter Stegen', pos: 'GOL', str: 88 },
            { name: 'Araujo', pos: 'ZAG', str: 89 }, { name: 'Cubarsí', pos: 'ZAG', str: 85 },
            { name: 'Balde', pos: 'LAT', str: 85 }, { name: 'Koundé', pos: 'LAT', str: 86 },
            { name: 'Pedri', pos: 'MEI', str: 90 }, { name: 'Gavi', pos: 'MEI', str: 89 }, { name: 'Fermin Lopez', pos: 'MEI', str: 84 },
            { name: 'Lamine Yamal', pos: 'ATA', str: 92 }, { name: 'Lewandowski', pos: 'ATA', str: 88 }, { name: 'Raphinha', pos: 'ATA', str: 87 },
            // Reservas
            { name: 'Inaki Pena', pos: 'GOL', str: 79 }, { name: 'Christensen', pos: 'ZAG', str: 84 }, { name: 'Frenkie de Jong', pos: 'MEI', str: 88 },
            { name: 'Dani Olmo', pos: 'MEI', str: 87 }, { name: 'Ferran Torres', pos: 'ATA', str: 83 }
        ]
    },
    atleticomadrid: {
        formation: '3-5-2',
        players: [
            { name: 'Jan Oblak', pos: 'GOL', str: 88 },
            { name: 'Robin Le Normand', pos: 'ZAG', str: 86 }, { name: 'Jose Giménez', pos: 'ZAG', str: 85 }, { name: 'Reinildo', pos: 'ZAG', str: 82 },
            { name: 'Marcos Llorente', pos: 'LAT', str: 86 }, { name: 'Samuel Lino', pos: 'LAT', str: 85 },
            { name: 'Conor Gallagher', pos: 'MEI', str: 86 }, { name: 'Koke', pos: 'MEI', str: 84 }, { name: 'Rodrigo De Paul', pos: 'MEI', str: 85 },
            { name: 'Julián Álvarez', pos: 'ATA', str: 91 }, { name: 'Antoine Griezmann', pos: 'ATA', str: 88 },
            // Reservas
            { name: 'Musso', pos: 'GOL', str: 81 }, { name: 'Azpilicueta', pos: 'ZAG', str: 80 }, { name: 'Pablo Barrios', pos: 'MEI', str: 83 },
            { name: 'Alexander Sorloth', pos: 'ATA', str: 84 }, { name: 'Angel Correa', pos: 'ATA', str: 83 }
        ]
    },
    realsociedad: {
        formation: '4-3-3',
        players: [
            { name: 'Alex Remiro', pos: 'GOL', str: 85 },
            { name: 'Igor Zubeldia', pos: 'ZAG', str: 83 }, { name: 'Nayef Aguerd', pos: 'ZAG', str: 82 },
            { name: 'Javi López', pos: 'LAT', str: 80 }, { name: 'Jon Aramburu', pos: 'LAT', str: 79 },
            { name: 'Martin Zubimendi', pos: 'MEI', str: 88 }, { name: 'Brais Méndez', pos: 'MEI', str: 84 }, { name: 'Luka Sucic', pos: 'MEI', str: 82 },
            { name: 'Takefusa Kubo', pos: 'ATA', str: 87 }, { name: 'Mikel Oyarzabal', pos: 'ATA', str: 85 }, { name: 'Sheraldo Becker', pos: 'ATA', str: 81 },
            // Reservas
            { name: 'Unai Marrero', pos: 'GOL', str: 75 }, { name: 'Pacheco', pos: 'ZAG', str: 80 }, { name: 'Turrientes', pos: 'MEI', str: 79 },
            { name: 'Sergio Gómez', pos: 'MEI', str: 81 }, { name: 'Orri Oskarsson', pos: 'ATA', str: 78 }
        ]
    },
    athletic: {
        formation: '4-2-3-1',
        players: [
            { name: 'Unai Simón', pos: 'GOL', str: 87 },
            { name: 'Daniel Vivian', pos: 'ZAG', str: 84 }, { name: 'Aitor Paredes', pos: 'ZAG', str: 81 },
            { name: 'Yuri Berchiche', pos: 'LAT', str: 80 }, { name: 'Oscar de Marcos', pos: 'LAT', str: 79 },
            { name: 'Iñigo Ruiz de Galarreta', pos: 'MEI', str: 81 }, { name: 'Beñat Prados', pos: 'MEI', str: 80 },
            { name: 'Oihan Sancet', pos: 'MEI', str: 85 }, { name: 'Nico Williams', pos: 'ATA', str: 90 }, { name: 'Iñaki Williams', pos: 'ATA', str: 84 },
            { name: 'Gorka Guruzeta', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Julen Agirrezabala', pos: 'GOL', str: 80 }, { name: 'Yeray', pos: 'ZAG', str: 80 }, { name: 'Unai Gómez', pos: 'MEI', str: 78 },
            { name: 'Berenguer', pos: 'ATA', str: 81 }, { name: 'Alvaro Djaló', pos: 'ATA', str: 80 }
        ]
    },
    girona: {
        formation: '4-3-3',
        players: [
            { name: 'Paulo Gazzaniga', pos: 'GOL', str: 82 },
            { name: 'Daley Blind', pos: 'ZAG', str: 81 }, { name: 'David López', pos: 'ZAG', str: 80 },
            { name: 'Miguel Gutiérrez', pos: 'LAT', str: 84 }, { name: 'Arnau Martínez', pos: 'LAT', str: 80 },
            { name: 'Yangel Herrera', pos: 'MEI', str: 82 }, { name: 'Iván Martín', pos: 'MEI', str: 81 }, { name: 'Donny van de Beek', pos: 'MEI', str: 80 },
            { name: 'Viktor Tsygankov', pos: 'ATA', str: 84 }, { name: 'Abel Ruiz', pos: 'ATA', str: 81 }, { name: 'Bryan Gil', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Pau López', pos: 'GOL', str: 79 }, { name: 'Krejci', pos: 'ZAG', str: 80 }, { name: 'Asprilla', pos: 'MEI', str: 81 },
            { name: 'Portu', pos: 'ATA', str: 79 }, { name: 'Miovski', pos: 'ATA', str: 78 }
        ]
    },
    villarreal: {
        formation: '4-4-2',
        players: [
            { name: 'Diego Conde', pos: 'GOL', str: 80 },
            { name: 'Eric Bailly', pos: 'ZAG', str: 81 }, { name: 'Raúl Albiol', pos: 'ZAG', str: 79 },
            { name: 'Sergi Cardona', pos: 'LAT', str: 79 }, { name: 'Kiko Femenía', pos: 'LAT', str: 78 },
            { name: 'Dani Parejo', pos: 'MEI', str: 83 }, { name: 'Santi Comesaña', pos: 'MEI', str: 80 }, { name: 'Alex Baena', pos: 'MEI', str: 86 }, { name: 'Yeremy Pino', pos: 'MEI', str: 82 },
            { name: 'Gerard Moreno', pos: 'ATA', str: 84 }, { name: 'Thierno Barry', pos: 'ATA', str: 80 },
            // Reservas
            { name: 'Luiz Júnior', pos: 'GOL', str: 79 }, { name: 'Logan Costa', pos: 'ZAG', str: 79 }, { name: 'Pape Gueye', pos: 'MEI', str: 79 },
            { name: 'Ayoze Pérez', pos: 'ATA', str: 82 }, { name: 'Nicolas Pépé', pos: 'ATA', str: 80 }
        ]
    },
    betis: {
        formation: '4-2-3-1',
        players: [
            { name: 'Rui Silva', pos: 'GOL', str: 81 },
            { name: 'Diego Llorente', pos: 'ZAG', str: 82 }, { name: 'Natan', pos: 'ZAG', str: 80 },
            { name: 'Romain Perraud', pos: 'LAT', str: 78 }, { name: 'Hector Bellerín', pos: 'LAT', str: 79 },
            { name: 'Johnny Cardoso', pos: 'MEI', str: 82 }, { name: 'Marc Roca', pos: 'MEI', str: 81 },
            { name: 'Giovani Lo Celso', pos: 'MEI', str: 86 }, { name: 'Pablo Fornals', pos: 'MEI', str: 82 }, { name: 'Abde Ezzalzouli', pos: 'ATA', str: 81 },
            { name: 'Chimy Ávila', pos: 'ATA', str: 80 },
            // Reservas
            { name: 'Adrian', pos: 'GOL', str: 76 }, { name: 'Ricardo Rodriguez', pos: 'LAT', str: 79 }, { name: 'William Carvalho', pos: 'MEI', str: 80 },
            { name: 'Isco', pos: 'MEI', str: 83 }, { name: 'Cedric Bakambu', pos: 'ATA', str: 78 }
        ]
    },
    valencia: {
        formation: '4-4-2',
        players: [
            { name: 'Giorgi Mamardashvili', pos: 'GOL', str: 87 },
            { name: 'Cristhian Mosquera', pos: 'ZAG', str: 82 }, { name: 'César Tárrega', pos: 'ZAG', str: 78 },
            { name: 'José Gayà', pos: 'LAT', str: 83 }, { name: 'Thierry Correia', pos: 'LAT', str: 79 },
            { name: 'Pepelu', pos: 'MEI', str: 83 }, { name: 'Javi Guerra', pos: 'MEI', str: 81 }, { name: 'Diego López', pos: 'MEI', str: 80 }, { name: 'Luis Rioja', pos: 'MEI', str: 78 },
            { name: 'Hugo Duro', pos: 'ATA', str: 81 }, { name: 'Rafa Mir', pos: 'ATA', str: 79 },
            // Reservas
            { name: 'Stole Dimitrievski', pos: 'GOL', str: 80 }, { name: 'Yarek Gasiorowski', pos: 'ZAG', str: 79 }, { name: 'Enzo Barrenechea', pos: 'MEI', str: 78 },
            { name: 'Fran Pérez', pos: 'ATA', str: 77 }, { name: 'Dani Gómez', pos: 'ATA', str: 76 }
        ]
    },
    sevilla: {
        formation: '4-3-3',
        players: [
            { name: 'Orjan Nyland', pos: 'GOL', str: 80 },
            { name: 'Loïc Badé', pos: 'ZAG', str: 82 }, { name: 'Tanguy Nianzou', pos: 'ZAG', str: 78 },
            { name: 'Valentín Barco', pos: 'LAT', str: 79 }, { name: 'José Carmona', pos: 'LAT', str: 78 },
            { name: 'Albert Sambi Lokonga', pos: 'MEI', str: 80 }, { name: 'Saúl Ñíguez', pos: 'MEI', str: 81 }, { name: 'Djibril Sow', pos: 'MEI', str: 80 },
            { name: 'Dodi Lukebakio', pos: 'ATA', str: 82 }, { name: 'Isaac Romero', pos: 'ATA', str: 80 }, { name: 'Chidera Ejuke', pos: 'ATA', str: 79 },
            // Reservas
            { name: 'Alvaro Fernández', pos: 'GOL', str: 77 }, { name: 'Marcao', pos: 'ZAG', str: 78 }, { name: 'Lucien Agoumé', pos: 'MEI', str: 78 },
            { name: 'Peque Fernández', pos: 'ATA', str: 78 }, { name: 'Kelechi Iheanacho', pos: 'ATA', str: 77 }
        ]
    },
    osasuna: {
        formation: '4-3-3',
        players: [
            { name: 'Sergio Herrera', pos: 'GOL', str: 80 },
            { name: 'Catena', pos: 'ZAG', str: 79 }, { name: 'Boyomo', pos: 'ZAG', str: 78 },
            { name: 'Abel Bretones', pos: 'LAT', str: 77 }, { name: 'Jesús Areso', pos: 'LAT', str: 77 },
            { name: 'Lucas Torró', pos: 'MEI', str: 79 }, { name: 'Jon Moncayola', pos: 'MEI', str: 79 }, { name: 'Aimar Oroz', pos: 'MEI', str: 82 },
            { name: 'Bryan Zaragoza', pos: 'ATA', str: 83 }, { name: 'Ante Budimir', pos: 'ATA', str: 81 }, { name: 'Rubén García', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Aitor Fernández', pos: 'GOL', str: 77 }, { name: 'Juan Cruz', pos: 'ZAG', str: 76 }, { name: 'Iker Muñoz', pos: 'MEI', str: 77 },
            { name: 'Moi Gómez', pos: 'MEI', str: 78 }, { name: 'Raúl García', pos: 'ATA', str: 76 }
        ]
    },
    psg: {
        formation: '4-3-3',
        players: [
            { name: 'Donnarumma', pos: 'GOL', str: 91 },
            { name: 'Achraf Hakimi', pos: 'LAT', str: 89 }, { name: 'Marquinhos', pos: 'ZAG', str: 89 }, { name: 'Willian Pacho', pos: 'ZAG', str: 87 }, { name: 'Nuno Mendes', pos: 'LAT', str: 88 },
            { name: 'Warren Zaïre-Emery', pos: 'MEI', str: 91 }, { name: 'Vitinha', pos: 'MEI', str: 89 }, { name: 'Joao Neves', pos: 'MEI', str: 88 },
            { name: 'Ousmane Dembélé', pos: 'ATA', str: 88 }, { name: 'Bradley Barcola', pos: 'ATA', str: 91 }, { name: 'Gonçalo Ramos', pos: 'ATA', str: 87 },
            // Reservas
            { name: 'Safonov', pos: 'GOL', str: 83 }, { name: 'Lucas Beraldo', pos: 'ZAG', str: 85 }, { name: 'Lucas Hernandez', pos: 'ZAG', str: 86 },
            { name: 'Xavi Simons', pos: 'MEI', str: 90 }, { name: 'Désiré Doué', pos: 'MEI', str: 86 }, { name: 'Fabian Ruiz', pos: 'MEI', str: 85 },
            { name: 'Randal Kolo Muani', pos: 'ATA', str: 84 }, { name: 'Lee Kang-in', pos: 'ATA', str: 85 }
        ]
    },
    monaco: {
        formation: '4-3-3',
        players: [
            { name: 'Philipp Köhn', pos: 'GOL', str: 82 },
            { name: 'Vanderson', pos: 'LAT', str: 83 }, { name: 'Guillermo Maripán', pos: 'ZAG', str: 81 }, { name: 'Mohammed Salisu', pos: 'ZAG', str: 80 }, { name: 'Caio Henrique', pos: 'LAT', str: 82 },
            { name: 'Youssouf Fofana', pos: 'MEI', str: 84 }, { name: 'Mohamed Camara', pos: 'MEI', str: 81 }, { name: 'Maghnes Akliouche', pos: 'MEI', str: 83 },
            { name: 'Takumi Minamino', pos: 'ATA', str: 80 }, { name: 'Wissam Ben Yedder', pos: 'ATA', str: 82 }, { name: 'Folarin Balogun', pos: 'ATA', str: 84 },
            // Reservas
            { name: 'Radosław Majecki', pos: 'GOL', str: 78 }, { name: 'Axel Disasi', pos: 'ZAG', str: 80 }, { name: 'Ismail Jakobs', pos: 'LAT', str: 79 },
            { name: 'Aleksandr Golovin', pos: 'MEI', str: 83 }, { name: 'Denis Zakaria', pos: 'MEI', str: 82 },
            { name: 'Breel Embolo', pos: 'ATA', str: 81 }, { name: 'Myron Boadu', pos: 'ATA', str: 79 }
        ]
    },
    lyon: {
        formation: '4-3-3',
        players: [
            { name: 'Anthony Lopes', pos: 'GOL', str: 83 },
            { name: 'Nicolás Tagliafico', pos: 'LAT', str: 80 }, { name: 'Duje Caleta-Car', pos: 'ZAG', str: 79 }, { name: 'Dejan Lovren', pos: 'ZAG', str: 78 }, { name: 'Malo Gusto', pos: 'LAT', str: 82 },
            { name: 'Maxence Caqueret', pos: 'MEI', str: 82 }, { name: 'Corentin Tolisso', pos: 'MEI', str: 80 }, { name: 'Rayan Cherki', pos: 'MEI', str: 83 },
            { name: 'Alexandre Lacazette', pos: 'ATA', str: 83 }, { name: 'Ernest Nuamah', pos: 'ATA', str: 82 }, { name: 'Bradley Barcola', pos: 'ATA', str: 84 },
            // Reservas
            { name: 'Rémy Riou', pos: 'GOL', str: 75 }, { name: 'Sinaly Diomandé', pos: 'ZAG', str: 78 }, { name: 'Saël Kumbedi', pos: 'LAT', str: 77 },
            { name: 'Ainsley Maitland-Niles', pos: 'MEI', str: 79 }, { name: 'Johann Lepenant', pos: 'MEI', str: 78 },
            { name: 'Tino Kadewere', pos: 'ATA', str: 77 }, { name: 'Gift Orban', pos: 'ATA', str: 80 }
        ]
    },
    marseille: {
        formation: '4-3-3',
        players: [
            { name: 'Pau López', pos: 'GOL', str: 81 },
            { name: 'Jonathan Clauss', pos: 'LAT', str: 82 }, { name: 'Chancel Mbemba', pos: 'ZAG', str: 81 }, { name: 'Leonardo Balerdi', pos: 'ZAG', str: 80 }, { name: 'Renan Lodi', pos: 'LAT', str: 80 },
            { name: 'Jordan Veretout', pos: 'MEI', str: 81 }, { name: 'Geoffrey Kondogbia', pos: 'MEI', str: 80 }, { name: 'Amine Harit', pos: 'MEI', str: 82 },
            { name: 'Pierre-Emerick Aubameyang', pos: 'ATA', str: 80 }, { name: 'Vitinha', pos: 'ATA', str: 79 }, { name: 'Iliman Ndiaye', pos: 'ATA', str: 81 },
            // Reservas
            { name: 'Rubén Blanco', pos: 'GOL', str: 77 }, { name: 'Samuel Gigot', pos: 'ZAG', str: 78 }, { name: 'Michael Murillo', pos: 'LAT', str: 77 },
            { name: 'Valentin Rongier', pos: 'MEI', str: 79 }, { name: 'Azzedine Ounahi', pos: 'MEI', str: 78 },
            { name: 'Joaquín Correa', pos: 'ATA', str: 78 }, { name: 'Ismaïla Sarr', pos: 'ATA', str: 77 }
        ]
    },
    lille: {
        formation: '4-2-3-1',
        players: [
            { name: 'Lucas Chevalier', pos: 'GOL', str: 81 },
            { name: 'Bafodé Diakité', pos: 'LAT', str: 79 }, { name: 'Leny Yoro', pos: 'ZAG', str: 85 }, { name: 'Alexsandro', pos: 'ZAG', str: 78 }, { name: 'Ismaily', pos: 'LAT', str: 77 },
            { name: 'Benjamin André', pos: 'MEI', str: 80 }, { name: 'Nabil Bentaleb', pos: 'MEI', str: 79 },
            { name: 'Angel Gomes', pos: 'MEI', str: 81 }, { name: 'Jonathan David', pos: 'ATA', str: 85 }, { name: 'Yusuf Yazici', pos: 'ATA', str: 79 },
            { name: 'Edon Zhegrova', pos: 'ATA', str: 80 },
            // Reservas
            { name: 'Vito Mannone', pos: 'GOL', str: 76 }, { name: 'Samuel Umtiti', pos: 'ZAG', str: 77 }, { name: 'Gabriel Gudmundsson', pos: 'LAT', str: 76 },
            { name: 'Rémy Cabella', pos: 'MEI', str: 78 }, { name: 'Hákon Haraldsson', pos: 'MEI', str: 78 },
            { name: 'Adam Ounas', pos: 'ATA', str: 77 }, { name: 'Tiago Djaló', pos: 'ATA', str: 78 }
        ]
    },
    rennes: {
        formation: '4-3-3',
        players: [
            { name: 'Steve Mandanda', pos: 'GOL', str: 80 },
            { name: 'Lorenz Assignon', pos: 'LAT', str: 78 }, { name: 'Arthur Theate', pos: 'ZAG', str: 80 }, { name: 'Warmed Omari', pos: 'ZAG', str: 79 }, { name: 'Adrien Truffert', pos: 'LAT', str: 79 },
            { name: 'Baptiste Santamaria', pos: 'MEI', str: 78 }, { name: 'Enzo Le Fée', pos: 'MEI', str: 81 }, { name: 'Benjamin Bourigeaud', pos: 'MEI', str: 80 },
            { name: 'Arnaud Kalimuendo', pos: 'ATA', str: 80 }, { name: 'Amine Gouiri', pos: 'ATA', str: 82 }, { name: 'Jérémy Doku', pos: 'ATA', str: 83 },
            // Reservas
            { name: 'Gauthier Gallon', pos: 'GOL', str: 76 }, { name: 'Christopher Wooh', pos: 'ZAG', str: 77 }, { name: 'Birger Meling', pos: 'LAT', str: 77 },
            { name: 'Nemanja Matić', pos: 'MEI', str: 79 }, { name: 'Ludovic Blas', pos: 'MEI', str: 79 },
            { name: 'Martin Terrier', pos: 'ATA', str: 80 }, { name: 'Ibrahim Salah', pos: 'ATA', str: 78 }
        ]
    },
    nice: {
        formation: '4-3-3',
        players: [
            { name: 'Marcin Bulka', pos: 'GOL', str: 82 },
            { name: 'Jordan Lotomba', pos: 'LAT', str: 78 }, { name: 'Jean-Clair Todibo', pos: 'ZAG', str: 83 }, { name: 'Dante', pos: 'ZAG', str: 79 }, { name: 'Melvin Bard', pos: 'LAT', str: 78 },
            { name: 'Khéphren Thuram', pos: 'MEI', str: 82 }, { name: 'Morgan Sanson', pos: 'MEI', str: 79 }, { name: 'Hicham Boudaoui', pos: 'MEI', str: 80 },
            { name: 'Gaëtan Laborde', pos: 'ATA', str: 80 }, { name: 'Terem Moffi', pos: 'ATA', str: 81 }, { name: 'Jérémie Boga', pos: 'ATA', str: 80 },
            // Reservas
            { name: 'Teddy Boulhendi', pos: 'GOL', str: 76 }, { name: 'Youssouf Ndayishimiye', pos: 'ZAG', str: 78 }, { name: 'Pablo Rosario', pos: 'MEI', str: 77 },
            { name: 'Alexis Claude-Maurice', pos: 'MEI', str: 78 }, { name: 'Evann Guessand', pos: 'ATA', str: 77 }, { name: 'Badredine Bouanani', pos: 'ATA', str: 76 }
        ]
    },
    lens: {
        formation: '3-4-2-1',
        players: [
            { name: 'Brice Samba', pos: 'GOL', str: 82 },
            { name: 'Jonathan Gradit', pos: 'ZAG', str: 79 }, { name: 'Kevin Danso', pos: 'ZAG', str: 81 }, { name: 'Facundo Medina', pos: 'ZAG', str: 79 },
            { name: 'Przemysław Frankowski', pos: 'LAT', str: 79 }, { name: 'Deiver Machado', pos: 'LAT', str: 78 },
            { name: 'Salis Abdul Samed', pos: 'MEI', str: 79 }, { name: 'Seko Fofana', pos: 'MEI', str: 83 }, // Assuming Fofana is still there or a similar quality player
            { name: 'Florian Sotoca', pos: 'ATA', str: 79 }, { name: 'Angelo Fulgini', pos: 'MEI', str: 78 },
            { name: 'Elye Wahi', pos: 'ATA', str: 82 },
            // Reservas
            { name: 'Jean-Louis Leca', pos: 'GOL', str: 76 }, { name: 'Massadio Haïdara', pos: 'ZAG', str: 77 }, { name: 'Ruben Aguilar', pos: 'LAT', str: 77 },
            { name: 'Adrien Thomasson', pos: 'MEI', str: 78 }, { name: 'David Pereira da Costa', pos: 'MEI', str: 77 },
            { name: 'Wesley Saïd', pos: 'ATA', str: 77 }, { name: 'Morgan Guilavogui', pos: 'ATA', str: 76 }
        ]
    },
    strasbourg: {
        formation: '4-3-3',
        players: [
            { name: 'Matz Sels', pos: 'GOL', str: 79 },
            { name: 'Frédéric Guilbert', pos: 'LAT', str: 77 }, { name: 'Lucas Perrin', pos: 'ZAG', str: 78 }, { name: 'Abakar Sylla', pos: 'ZAG', str: 77 }, { name: 'Thomas Delaine', pos: 'LAT', str: 76 },
            { name: 'Ibrahima Sissoko', pos: 'MEI', str: 76 }, { name: 'Habib Diarra', pos: 'MEI', str: 77 }, { name: 'Dilane Bakwa', pos: 'MEI', str: 78 },
            { name: 'Kévin Gameiro', pos: 'ATA', str: 77 }, { name: 'Habib Diallo', pos: 'ATA', str: 78 }, { name: 'Lebo Mothiba', pos: 'ATA', str: 76 },
            // Reservas
            { name: 'Alaa Bellaarouch', pos: 'GOL', str: 74 }, { name: 'Gerzino Nyamsi', pos: 'ZAG', str: 76 }, { name: 'Marvin Senaya', pos: 'LAT', str: 75 },
            { name: 'Junior Mwanga', pos: 'MEI', str: 76 }, { name: 'Jessy Deminguet', pos: 'MEI', str: 75 },
            { name: 'Emanuel Emegha', pos: 'ATA', str: 77 }, { name: 'Moïse Sahi Dion', pos: 'ATA', str: 75 }
        ]
    },
    montpellier: {
        formation: '4-2-3-1',
        players: [
            { name: 'Benjamin Lecomte', pos: 'GOL', str: 78 },
            { name: 'Falaye Sacko', pos: 'LAT', str: 76 }, { name: 'Boubakar Kouyaté', pos: 'ZAG', str: 77 }, { name: 'Maxime Estève', pos: 'ZAG', str: 76 }, { name: 'Issiaga Sylla', pos: 'LAT', str: 75 },
            { name: 'Jordan Ferri', pos: 'MEI', str: 76 }, { name: 'Joris Chotard', pos: 'MEI', str: 77 },
            { name: 'Téji Savanier', pos: 'MEI', str: 79 }, { name: 'Arnaud Nordin', pos: 'ATA', str: 77 }, { name: 'Wahbi Khazri', pos: 'ATA', str: 76 },
            { name: 'Akor Adams', pos: 'ATA', str: 78 },
            // Reservas
            { name: 'Dimitry Bertaud', pos: 'GOL', str: 74 }, { name: 'Christopher Jullien', pos: 'ZAG', str: 75 }, { name: 'Modibo Sagnan', pos: 'ZAG', str: 74 },
            { name: 'Théo Sainte-Luce', pos: 'LAT', str: 74 }, { name: 'Léo Leroy', pos: 'MEI', str: 75 }, { name: 'Khalil Fayad', pos: 'MEI', str: 74 },
            { name: 'Stephy Mavididi', pos: 'ATA', str: 77 }
        ]
    },
    reims: {
        formation: '4-2-3-1',
        players: [
            { name: 'Yehvann Diouf', pos: 'GOL', str: 79 },
            { name: 'Thomas Foket', pos: 'LAT', str: 76 }, { name: 'Emmanuel Agbadou', pos: 'ZAG', str: 77 }, { name: 'Yunis Abdelhamid', pos: 'ZAG', str: 76 }, { name: 'Thibault De Smet', pos: 'LAT', str: 75 },
            { name: 'Azor Matusiwa', pos: 'MEI', str: 76 }, { name: 'Teddy Teuma', pos: 'MEI', str: 78 },
            { name: 'Junya Ito', pos: 'MEI', str: 78 }, { name: 'Keito Nakamura', pos: 'ATA', str: 76 }, { name: 'Mohamed Daramy', pos: 'ATA', str: 77 },
            { name: 'Oumar Diakité', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Ludovic Butelle', pos: 'GOL', str: 74 }, { name: 'Joseph Okumu', pos: 'ZAG', str: 75 }, { name: 'Josh Wilson-Esbrand', pos: 'LAT', str: 74 },
            { name: 'Jens Cajuste', pos: 'MEI', str: 76 }, { name: 'Dion Lopy', pos: 'MEI', str: 75 },
            { name: 'Amine Salama', pos: 'ATA', str: 75 }, { name: 'Adama Bojang', pos: 'ATA', str: 74 }
        ]
    },
    nantes: {
        formation: '4-3-3',
        players: [
            { name: 'Alban Lafont', pos: 'GOL', str: 80 },
            { name: 'Marcus Coco', pos: 'LAT', str: 76 }, { name: 'Jean-Charles Castelletto', pos: 'ZAG', str: 77 }, { name: 'Nicolas Pallois', pos: 'ZAG', str: 75 }, { name: 'Quentin Merlin', pos: 'LAT', str: 77 },
            { name: 'Pedro Chirivella', pos: 'MEI', str: 76 }, { name: 'Moussa Sissoko', pos: 'MEI', str: 75 }, { name: 'Samuel Moutoussamy', pos: 'MEI', str: 74 },
            { name: 'Moses Simon', pos: 'ATA', str: 78 }, { name: 'Mostafa Mohamed', pos: 'ATA', str: 77 }, { name: 'Evann Guessand', pos: 'ATA', str: 77 },
            // Reservas
            { name: 'Denis Petric', pos: 'GOL', str: 75 }, { name: 'Eray Cömert', pos: 'ZAG', str: 76 }, { name: 'Jaouen Hadjam', pos: 'LAT', str: 75 },
            { name: 'Florent Mollet', pos: 'MEI', str: 75 }, { name: 'Adson', pos: 'MEI', str: 74 },
            { name: 'Ignatius Ganago', pos: 'ATA', str: 76 }, { name: 'Matthis Abline', pos: 'ATA', str: 75 }
        ]
    },
    toulouse: {
        formation: '4-3-3',
        players: [
            { name: 'Guillaume Restes', pos: 'GOL', str: 78 },
            { name: 'Mikkel Desler', pos: 'LAT', str: 76 }, { name: 'Rasmus Nicolaisen', pos: 'ZAG', str: 77 }, { name: 'Logan Costa', pos: 'ZAG', str: 76 }, { name: 'Moussa Diarra', pos: 'LAT', str: 75 },
            { name: 'Vincent Sierro', pos: 'MEI', str: 76 }, { name: 'Stijn Spierings', pos: 'MEI', str: 75 }, { name: 'Cristian Cásseres Jr', pos: 'MEI', str: 75 },
            { name: 'Thijs Dallinga', pos: 'ATA', str: 78 }, { name: 'Zakaria Aboukhlal', pos: 'ATA', str: 76 }, { name: 'Frank Magri', pos: 'ATA', str: 75 },
            // Reservas
            { name: 'Kjetil Haug', pos: 'GOL', str: 74 }, { name: 'Kevin Keben', pos: 'ZAG', str: 74 }, { name: 'Warren Kamanzi', pos: 'LAT', str: 74 },
            { name: 'Gabriel Suazo', pos: 'MEI', str: 75 }, { name: 'Naatan Skyttä', pos: 'MEI', str: 74 },
            { name: 'Aron Dønnum', pos: 'ATA', str: 77 }, { name: 'Yanis Begraoui', pos: 'ATA', str: 74 }
        ]
    },
    lorient: {
        formation: '4-2-3-1',
        players: [
            { name: 'Yvon Mvogo', pos: 'GOL', str: 77 },
            { name: 'Gédéon Kalulu', pos: 'LAT', str: 75 }, { name: 'Montassar Talbi', pos: 'ZAG', str: 76 }, { name: 'Julien Laporte', pos: 'ZAG', str: 75 }, { name: 'Vincent Le Goff', pos: 'LAT', str: 74 },
            { name: 'Laurent Abergel', pos: 'MEI', str: 75 }, { name: 'Julien Ponceau', pos: 'MEI', str: 74 },
            { name: 'Romain Faivre', pos: 'MEI', str: 76 }, { name: 'Eli Kroupi', pos: 'ATA', str: 77 }, { name: 'Bamba Dieng', pos: 'ATA', str: 75 },
            { name: 'Siriné Doucouré', pos: 'ATA', str: 74 },
            // Reservas
            { name: 'Vito Mannone', pos: 'GOL', str: 73 }, { name: 'Isaak Touré', pos: 'ZAG', str: 74 }, { name: 'Darlin Yongwa', pos: 'LAT', str: 73 },
            { name: 'Bonke Innocent', pos: 'MEI', str: 73 }, { name: 'Jean-Victor Makengo', pos: 'MEI', str: 72 },
            { name: 'Théo Le Bris', pos: 'ATA', str: 74 }, { name: 'Panos Katseris', pos: 'ATA', str: 73 }
        ]
    },
    brest: {
        formation: '4-3-3',
        players: [
            { name: 'Marco Bizot', pos: 'GOL', str: 77 },
            { name: 'Kenny Lala', pos: 'LAT', str: 75 }, { name: 'Brendan Chardonnet', pos: 'ZAG', str: 76 }, { name: 'Lilian Brassier', pos: 'ZAG', str: 75 }, { name: 'Bradley Locko', pos: 'LAT', str: 74 },
            { name: 'Pierre Lees-Melou', pos: 'MEI', str: 76 }, { name: 'Hugo Magnetti', pos: 'MEI', str: 75 }, { name: 'Mahdi Camara', pos: 'MEI', str: 74 },
            { name: 'Romain Del Castillo', pos: 'ATA', str: 76 }, { name: 'Steve Mounié', pos: 'ATA', str: 75 }, { name: 'Martin Satriano', pos: 'ATA', str: 74 },
            // Reservas
            { name: 'Grégoire Coudert', pos: 'GOL', str: 73 }, { name: 'Achraf Dari', pos: 'ZAG', str: 74 }, { name: 'Jean-Kévin Duverne', pos: 'LAT', str: 73 },
            { name: 'Jérémy Le Douaron', pos: 'MEI', str: 74 }, { name: 'Mathias Pereira Lage', pos: 'MEI', str: 72 },
            { name: 'Irvin Cardona', pos: 'ATA', str: 74 }, { name: 'Axel Camblan', pos: 'ATA', str: 73 }
        ]
    },
    clermont: {
        formation: '4-2-3-1',
        players: [
            { name: 'Mory Diaw', pos: 'GOL', str: 76 },
            { name: 'Cheick Konaté', pos: 'LAT', str: 74 }, { name: 'Maximiliano Caufriez', pos: 'ZAG', str: 75 }, { name: 'Florent Ogier', pos: 'ZAG', str: 74 }, { name: 'Neto Borges', pos: 'LAT', str: 73 },
            { name: 'Johan Gastien', pos: 'MEI', str: 73 }, { name: 'Habib Keïta', pos: 'MEI', str: 72 },
            { name: 'Muhammed Cham', pos: 'MEI', str: 75 }, { name: 'Jim Allevinah', pos: 'ATA', str: 73 }, { name: 'Komnen Andrić', pos: 'ATA', str: 74 },
            { name: 'Shamar Nicholson', pos: 'ATA', str: 74 },
            // Reservas
            { name: 'Ouparine Djoco', pos: 'GOL', str: 72 }, { name: 'Andy Pelmard', pos: 'ZAG', str: 74 }, { name: 'Mehdi Zeffane', pos: 'LAT', str: 72 },
            { name: 'Maxime Gonalons', pos: 'MEI', str: 74 }, { name: 'Elbasan Rashani', pos: 'ATA', str: 73 },
            { name: 'Grejohn Kyei', pos: 'ATA', str: 72 }, { name: 'Alan Virginius', pos: 'ATA', str: 71 }
        ]
    },
    lehavre: {
        formation: '4-3-3',
        players: [
            { name: 'Arthur Desmas', pos: 'GOL', str: 76 },
            { name: 'Gautier Lloris', pos: 'ZAG', str: 73 }, { name: 'Arouna Sangante', pos: 'ZAG', str: 72 }, { name: 'Étienne Kinkoue', pos: 'ZAG', str: 71 }, { name: 'Oualid El Hajjam', pos: 'LAT', str: 73 },
            { name: 'Daler Kuzyaev', pos: 'MEI', str: 75 }, { name: 'Yassine Kechta', pos: 'MEI', str: 73 }, { name: 'Abdoulaye Touré', pos: 'MEI', str: 74 },
            { name: 'Antoine Joujou', pos: 'ATA', str: 72 }, { name: 'Josué Casimir', pos: 'ATA', str: 72 }, { name: 'Mohamed Bayo', pos: 'ATA', str: 73 },
            // Reservas
            { name: 'Mathieu Gorgelin', pos: 'GOL', str: 72 }, { name: 'Christopher Operi', pos: 'LAT', str: 72 }, { name: 'Loïc Nego', pos: 'LAT', str: 73 },
            { name: 'Rassoul Ndiaye', pos: 'MEI', str: 72 }, { name: 'Nolan Mbemba', pos: 'MEI', str: 71 },
            { name: 'Nabil Alioui', pos: 'ATA', str: 72 }, { name: 'André Ayew', pos: 'ATA', str: 71 }
        ]
    },
    auxerre: { // Promoted
        formation: '4-2-3-1',
        players: [
            { name: 'Donovan Léon', pos: 'GOL', str: 75 },
            { name: 'Jubal', pos: 'ZAG', str: 74 }, { name: 'Théo Pellenard', pos: 'ZAG', str: 73 },
            { name: 'Gauthier Hein', pos: 'LAT', str: 73 }, { name: 'Paul Joly', pos: 'LAT', str: 72 },
            { name: 'Birama Touré', pos: 'MEI', str: 72 }, { name: 'Gaëtan Perrin', pos: 'MEI', str: 71 },
            { name: 'Lassine Sinayoko', pos: 'MEI', str: 74 }, { name: 'Florian Ayé', pos: 'ATA', str: 73 }, { name: 'Hamza Sakhi', pos: 'MEI', str: 71 },
            { name: 'Ousmane Camara', pos: 'ATA', str: 72 },
            // Reservas
            { name: 'Théo De Percin', pos: 'GOL', str: 70 }, { name: 'Isaak Touré', pos: 'ZAG', str: 72 }, { name: 'Clément Akpa', pos: 'LAT', str: 71 },
            { name: 'Elisha Owusu', pos: 'MEI', str: 71 }, { name: 'Kévin Danois', pos: 'MEI', str: 70 },
            { name: 'Gaëtan Charbonnier', pos: 'ATA', str: 71 }, { name: 'Gédéon Kalulu', pos: 'ATA', str: 70 }
        ]
    },
    saintetienne: { // Promoted
        formation: '4-3-3',
        players: [
            { name: 'Gautier Larsonneur', pos: 'GOL', str: 75 },
            { name: 'Dylan Batubinsika', pos: 'ZAG', str: 74 }, { name: 'Mickaël Nadé', pos: 'ZAG', str: 73 },
            { name: 'Dennis Appiah', pos: 'LAT', str: 73 }, { name: 'Yvann Maçon', pos: 'LAT', str: 72 },
            { name: 'Thomas Monconduit', pos: 'MEI', str: 73 }, { name: 'Dylan Chambost', pos: 'MEI', str: 72 }, { name: 'Mathieu Cafaro', pos: 'MEI', str: 71 },
            { name: 'Ibrahima Sissoko', pos: 'ATA', str: 74 }, { name: 'Irvin Cardona', pos: 'ATA', str: 73 }, { name: 'Jean-Philippe Krasso', pos: 'ATA', str: 73 },
            // Reservas
            { name: 'Etienne Green', pos: 'GOL', str: 70 }, { name: 'Anthony Briançon', pos: 'ZAG', str: 72 }, { name: 'Léo Pétrot', pos: 'LAT', str: 71 },
            { name: 'Benjamin Bouchouari', pos: 'MEI', str: 71 }, { name: 'Victor Lobry', pos: 'MEI', str: 70 },
            { name: 'Ibrahim Sissoko', pos: 'ATA', str: 72 }, { name: 'Maxence Rivera', pos: 'ATA', str: 71 }
        ]
    },
    angers: { // Promoted
        formation: '4-2-3-1',
        players: [
            { name: 'Yahia Fofana', pos: 'GOL', str: 74 },
            { name: 'Cédric Hountondji', pos: 'ZAG', str: 73 }, { name: 'Miha Blažič', pos: 'ZAG', str: 72 },
            { name: 'Yan Valery', pos: 'LAT', str: 72 }, { name: 'Halid Šabanović', pos: 'LAT', str: 71 },
            { name: 'Nabil Bentaleb', pos: 'MEI', str: 72 }, { name: 'Himad Abdelli', pos: 'MEI', str: 71 },
            { name: 'Farid El Melali', pos: 'MEI', str: 70 }, { name: 'Pierrick Capelle', pos: 'MEI', str: 72 }, { name: 'Esteban Lepaul', pos: 'ATA', str: 71 },
            { name: 'Loïs Diony', pos: 'ATA', str: 73 },
            // Reservas
            { name: 'Melvin Zinga', pos: 'GOL', str: 69 }, { name: 'Ousmane Camara', pos: 'ZAG', str: 71 }, { name: 'Justin-Noël Kalumba', pos: 'LAT', str: 70 },
            { name: 'Zinédine Ould Khaled', pos: 'MEI', str: 70 }, { name: 'Jean-Mattéo Bahoya', pos: 'MEI', str: 71 },
            { name: 'Ibrahima Niane', pos: 'ATA', str: 70 }, { name: 'Jason Mbock', pos: 'ATA', str: 69 }
        ]
    },
    sporting: {
        formation: '3-4-3',
        players: [
            { name: 'Vladan Kovacevic', pos: 'GOL', str: 84 },
            { name: 'Ousmane Diomande', pos: 'ZAG', str: 87 }, { name: 'Zeno Debast', pos: 'ZAG', str: 85 }, { name: 'Gonçalo Inácio', pos: 'ZAG', str: 86 },
            { name: 'Morten Hjulmand', pos: 'MEI', str: 88 }, { name: 'Daniel Bragança', pos: 'MEI', str: 83 }, { name: 'Geovany Quenda', pos: 'MEI', str: 82 }, { name: 'Maximilian Araujo', pos: 'MEI', str: 81 },
            { name: 'Viktor Gyökeres', pos: 'ATA', str: 91 }, { name: 'Pedro Gonçalves', pos: 'ATA', str: 87 }, { name: 'Francisco Trincão', pos: 'ATA', str: 85 },
            // Reservas
            { name: 'Franco Israel', pos: 'GOL', str: 79 }, { name: 'Eduardo Quaresma', pos: 'ZAG', str: 80 }, { name: 'Hidemasa Morita', pos: 'MEI', str: 84 }, { name: 'Marcus Edwards', pos: 'ATA', str: 83 }, { name: 'Conrad Harder', pos: 'ATA', str: 78 }
        ]
    },
    porto: {
        formation: '4-2-3-1',
        players: [
            { name: 'Diogo Costa', pos: 'GOL', str: 90 },
            { name: 'Nehuén Pérez', pos: 'ZAG', str: 84 }, { name: 'Tiago Djaló', pos: 'ZAG', str: 83 },
            { name: 'Francisco Moura', pos: 'LAT', str: 82 }, { name: 'Martim Fernandes', pos: 'LAT', str: 81 },
            { name: 'Alan Varela', pos: 'MEI', str: 87 }, { name: 'Nico González', pos: 'MEI', str: 85 },
            { name: 'Fábio Vieira', pos: 'MEI', str: 84 }, { name: 'Galeno', pos: 'ATA', str: 86 }, { name: 'Pepê', pos: 'ATA', str: 85 },
            { name: 'Samu Omorodion', pos: 'ATA', str: 88 },
            // Reservas
            { name: 'Cláudio Ramos', pos: 'GOL', str: 78 }, { name: 'Otávio', pos: 'ZAG', str: 81 }, { name: 'Stephen Eustáquio', pos: 'MEI', str: 82 }, { name: 'Iván Jaime', pos: 'MEI', str: 80 }, { name: 'Deniz Gül', pos: 'ATA', str: 77 }
        ]
    },
    benfica: {
        formation: '4-3-3',
        players: [
            { name: 'Anatoliy Trubin', pos: 'GOL', str: 87 },
            { name: 'António Silva', pos: 'ZAG', str: 88 }, { name: 'Tomás Araújo', pos: 'ZAG', str: 84 },
            { name: 'Alvaro Carreras', pos: 'LAT', str: 83 }, { name: 'Alexander Bah', pos: 'LAT', str: 82 },
            { name: 'Florentino Luís', pos: 'MEI', str: 85 }, { name: 'Orkun Kökçü', pos: 'MEI', str: 86 }, { name: 'Fredrik Aursnes', pos: 'MEI', str: 85 },
            { name: 'Kerem Aktürkoğlu', pos: 'ATA', str: 86 }, { name: 'Vangelis Pavlidis', pos: 'ATA', str: 86 }, { name: 'Angel Di María', pos: 'ATA', str: 84 },
            // Reservas
            { name: 'Samuel Soares', pos: 'GOL', str: 75 }, { name: 'Otamendi', pos: 'ZAG', str: 82 }, { name: 'Leandro Barreiro', pos: 'MEI', str: 81 }, { name: 'Beste', pos: 'LAT', str: 81 }, { name: 'Arthur Cabral', pos: 'ATA', str: 80 }
        ]
    },
    braga: {
        formation: '4-3-3',
        players: [
            { name: 'Matheus', pos: 'GOL', str: 82 },
            { name: 'Bright Arrey-Mbi', pos: 'ZAG', str: 80 }, { name: 'Sikou Niakaté', pos: 'ZAG', str: 81 },
            { name: 'Adrian Marín', pos: 'LAT', str: 78 }, { name: 'Victor Gómez', pos: 'LAT', str: 79 },
            { name: 'Rodrigo Zalazar', pos: 'MEI', str: 84 }, { name: 'Vitor Carvalho', pos: 'MEI', str: 80 }, { name: 'Ricardo Horta', pos: 'MEI', str: 83 },
            { name: 'Bruma', pos: 'ATA', str: 82 }, { name: 'Amine El Ouazzani', pos: 'ATA', str: 81 }, { name: 'Roger Fernandes', pos: 'ATA', str: 80 },
            // Reservas
            { name: 'Tiago Sá', pos: 'GOL', str: 74 }, { name: 'João Ferreira', pos: 'LAT', str: 77 }, { name: 'André Horta', pos: 'MEI', str: 79 }, { name: 'Roberto Fernández', pos: 'ATA', str: 78 }
        ]
    },
    fortaleza: {
        formation: '4-3-3',
        players: [
            { name: 'João Ricardo', pos: 'GOL', str: 80 },
            { name: 'Kuscevic', pos: 'ZAG', str: 78 }, { name: 'Cardona', pos: 'ZAG', str: 77 },
            { name: 'Bruno Pacheco', pos: 'LAT', str: 79 }, { name: 'Tinga', pos: 'LAT', str: 79 },
            { name: 'Hércules', pos: 'MEI', str: 80 }, { name: 'Lucas Sasha', pos: 'MEI', str: 78 }, { name: 'Pochettino', pos: 'MEI', str: 81 },
            { name: 'Lucero', pos: 'ATA', str: 82 }, { name: 'Marinho', pos: 'ATA', str: 79 }, { name: 'Moisés', pos: 'ATA', str: 79 },
            { name: 'Kervin Andrade', pos: 'MEI', str: 77 }, { name: 'Breno Lopes', pos: 'ATA', str: 78 }
        ]
    },
    cuiaba: {
        formation: '4-3-3',
        players: [
            { name: 'Walter', pos: 'GOL', str: 79 },
            { name: 'Marllon', pos: 'ZAG', str: 75 }, { name: 'Bruno Alves', pos: 'ZAG', str: 75 },
            { name: 'Ramon', pos: 'LAT', str: 73 }, { name: 'Matheus Alexandre', pos: 'LAT', str: 74 },
            { name: 'Lucas Mineiro', pos: 'MEI', str: 74 }, { name: 'Denilson', pos: 'MEI', str: 75 }, { name: 'Max', pos: 'MEI', str: 73 },
            { name: 'Isidro Pitta', pos: 'ATA', str: 77 }, { name: 'Clayson', pos: 'ATA', str: 75 }, { name: 'Derik Lacerda', pos: 'ATA', str: 73 }
        ]
    },
    juventude: {
        formation: '4-3-3',
        players: [ { name: 'Gabriel', pos: 'GOL', str: 75 }, { name: 'Danilo Boza', pos: 'ZAG', str: 73 }, { name: 'Nenê', pos: 'MEI', str: 74 }, { name: 'Gilberto', pos: 'ATA', str: 75 } ]
    },
};
