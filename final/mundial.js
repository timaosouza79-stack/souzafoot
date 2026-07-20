/**
 * ========================================
 * SISTEMA DE MUNDIAL DE CLUBES (FIFA)
 * Estilo Brasfoot - Eliminação Direta
 * ========================================
 * Taça Intercontinental com 6 confederações
 * Simulação de fundo para campeonatos continentais
 */

// ============= DADOS DE CAMPEONATOS CONTINENTAIS =============

const continentalChampions = {
    'uefa_champions': null,      // Europa - Champions League (maior strength)
    'conmebol_libertadores': null, // América do Sul - Libertadores
    'concacaf_champions': null,   // América do Norte/Central
    'caf_champions': null,        // África
    'afc_champions': null,        // Ásia
    'ofc_champions': null         // Oceania
};

const continentalLeagues = {
    'uefa': ['england', 'spain', 'italy', 'france', 'portugal', 'germany'],
    'conmebol': ['south_america'],
    'concacaf': ['north_america', 'central_america'],
    'caf': ['africa'],
    'afc': ['asia'],
    'ofc': ['oceania']
};

// ============= SISTEMA DE SIMULAÇÃO DE CAMPEONATOS =============

class ContinentalTournament {
    constructor(confederation, name, teamsData) {
        this.confederation = confederation;
        this.name = name;
        this.teamsData = teamsData;
        this.format = 'knockout'; // simplificado
        this.champion = null;
    }

    /**
     * Simula o campeonato de forma leve (estilo Brasfoot)
     * Seleciona os melhores times e roda eliminações simples
     */
    simulate() {
        const eligible = this.getEligibleTeams();
        
        if (eligible.length === 0) {
            console.warn(`⚠️  Sem times elegíveis para ${this.name}`);
            return null;
        }

        // Reduz para os 8 melhores times (para não ficar muito pesado)
        const qualified = eligible
            .sort((a, b) => b.strength - a.strength)
            .slice(0, 8);

        // Simula mata-mata rápido
        let current = [...qualified];
        
        while (current.length > 1) {
            const next = [];
            
            for (let i = 0; i < current.length; i += 2) {
                const team1 = current[i];
                const team2 = current[i + 1];
                
                // Lógica simplificada: time com maior strength tem 70% de chance
                const winner = this.simulateMatch(team1, team2);
                next.push(winner);
            }
            
            current = next;
        }

        this.champion = current[0];
        return this.champion;
    }

    /**
     * Simula um jogo simples baseado em força dos times
     */
    simulateMatch(team1, team2) {
        const totalStr = team1.strength + team2.strength;
        const team1Prob = team1.strength / totalStr;
        const random = Math.random();
        
        return random < team1Prob ? team1 : team2;
    }

    /**
     * Retorna times elegíveis desta confederação
     */
    getEligibleTeams() {
        // Filtrar times que pertencem a ligas desta confederação
        const leaguesAllowed = this.getLeaguesForConfederation();
        
        return this.teamsData.filter(team => 
            leaguesAllowed.some(league => 
                team.league && team.league.includes(league)
            )
        );
    }

    /**
     * Mapeia confederações para ligas disponíveis no sistema
     */
    getLeaguesForConfederation() {
        const leagueMaps = {
            'UEFA': ['england', 'spain', 'italy', 'france', 'portugal', 'germany', 'rest_world_europe'],
            'CONMEBOL': ['south_america', 'rest_world_conmebol'],
            'CONCACAF': ['north_america', 'central_america', 'mexico', 'rest_world_concacaf'],
            'CAF': ['africa', 'egypt', 'cameroon', 'southafrica', 'rest_world_africa'],
            'AFC': ['asia', 'japan', 'southkorea', 'saudi_arabia', 'china', 'rest_world_asia'],
            'OFC': ['oceania', 'australia', 'newzealand']
        };
        
        return leagueMaps[this.confederation] || [];
    }
}

// ============= GERENCIADOR DO MUNDIAL =============

class MundialDeClubes {
    constructor(teamsData) {
        this.teamsData = teamsData;
        this.status = 'waiting'; // waiting, phase1, phase2, phase3, final, finished
        this.year = new Date().getFullYear();
        
        this.qualifiers = {
            uefa: null,
            libertadores: null,
            concacaf: null,
            caf: null,
            afc: null,
            ofc: null
        };

        this.bracket = {
            fase1: [],      // Playoff OFC vs AFC/CAF
            quartas: [],    // Jogo A e Jogo B
            semifinal: [],  // Taça Challenger
            final: null
        };

        this.schedule = [];
        this.results = [];
        this.alternating = {
            fase1Opponent: 'afc', // Alterna entre AFC e CAF
            fase1Home: 'ofc',      // Alterna quem é mandante
            americasHome: 'libertadores' // Alterna Libertadores/CONCACAF como mandante
        };
    }

    /**
     * PASSO 1: Verifica/simula os campeões continentais
     */
    qualifyContinentalChampions() {
        console.log('🏆 Buscando campeões continentais...');

        // UEFA: Busca o time mais forte da Europa que seja Champions
        this.qualifiers.uefa = this.findStrongestTeam(['england', 'spain', 'italy', 'france', 'portugal', 'germany', 'rest_world_europe']);
        
        // LIBERTADORES: Busca o mais forte da América do Sul
        this.qualifiers.libertadores = this.findStrongestTeam(['south_america', 'rest_world_conmebol']);
        
        // CONCACAF: Busca o mais forte da América do Norte/Central
        this.qualifiers.concacaf = this.findStrongestTeam(['north_america', 'central_america', 'mexico', 'rest_world_concacaf']) 
            || this.teamsData.find(t => t.id === 'rcdsapraia'); // Fallback para time forte
        
        // CAF: Busca o mais forte da África
        this.qualifiers.caf = this.findStrongestTeam(['africa', 'egypt', 'cameroon', 'southafrica', 'rest_world_africa']);
        
        // AFC: Simula Champions League da Ásia
        if (!this.qualifiers.afc) {
            const afcTournament = new ContinentalTournament('AFC', 'AFC Champions League', this.teamsData);
            this.qualifiers.afc = afcTournament.simulate();
        }
        
        // OFC: Simula Champions League da Oceania
        if (!this.qualifiers.ofc) {
            const ofcTournament = new ContinentalTournament('OFC', 'OFC Champions League', this.teamsData);
            this.qualifiers.ofc = ofcTournament.simulate();
        }

        // Fallbacks se faltarem times
        this.qualifiers.caf = this.qualifiers.caf || this.findStrongestTeam(['south_america']);
        this.qualifiers.concacaf = this.qualifiers.concacaf || this.teamsData[Math.floor(Math.random() * this.teamsData.length)];

        console.log('✅ Qualificados:', {
            'UEFA': this.qualifiers.uefa?.name,
            'CONMEBOL Libertadores': this.qualifiers.libertadores?.name,
            'CONCACAF': this.qualifiers.concacaf?.name,
            'CAF': this.qualifiers.caf?.name,
            'AFC': this.qualifiers.afc?.name,
            'OFC': this.qualifiers.ofc?.name
        });

        return this.qualifiers;
    }

    /**
     * Encontra o time mais forte de certas ligas
     */
    findStrongestTeam(leagues) {
        return this.teamsData
            .filter(team => leagues.some(l => team.league && team.league.includes(l)))
            .sort((a, b) => b.strength - a.strength)[0] || null;
    }

    /**
     * PASSO 2: Monta a estrutura de chaves com base no ano
     */
    mountBracket() {
        console.log('🏗️  Montando estrutura de chaves...');

        const isEvenYear = this.year % 2 === 0;

        // FASE 1: Playoff Africano/Asiático
        // Alterna: par=OFC vs AFC, ímpar=OFC vs CAF
        let fase1Home = isEvenYear ? this.qualifiers.ofc : this.qualifiers.ofc;
        let fase1Away = isEvenYear ? this.qualifiers.afc : this.qualifiers.caf;

        this.bracket.fase1.push({
            round: 'Fase 1 - Playoff Africano/Asiático',
            home: fase1Home,
            away: fase1Away,
            winner: null,
            score: null,
            date: new Date(this.year, 11, 1) // 1º de dezembro
        });

        // Após determinação do vencedor da Fase 1, monta as quartas
        // (Será atualizado após simular Fase 1)
        this.status = 'phase1';
    }

    /**
     * PASSO 3: Simula Fase 1 e monta Quartas
     */
    simulateFase1() {
        if (!this.bracket.fase1[0]) return;

        const match = this.bracket.fase1[0];
        const winner = this.simulateMatch(match.home, match.away);
        
        match.winner = winner;
        match.score = `${Math.random() > 0.5 ? 2 : 1} - ${Math.random() > 0.5 ? 1 : 0}`;
        
        console.log(`🎯 Fase 1: ${winner.name} se classifica!`);

        // Monta as quartas de final
        const isEvenYear = this.year % 2 === 0;
        const anotherTeam = isEvenYear ? this.qualifiers.caf : this.qualifiers.afc;

        this.bracket.quartas.push(
            {
                name: 'Jogo A - Derby das Américas',
                home: this.qualifiers.libertadores,
                away: this.qualifiers.concacaf,
                winner: null,
                mandoAlterna: true // Alterna a cada ano
            },
            {
                name: 'Jogo B - Playoff Africano/Asiático',
                home: winner, // Vencedor da Fase 1
                away: anotherTeam,
                winner: null,
                mandoAlterna: false
            }
        );

        this.status = 'phase2';
    }

    /**
     * PASSO 4: Simula Quartas e monta Semifinal (Taça Challenger)
     */
    simulateQuartas() {
        this.bracket.quartas.forEach(match => {
            const homeTeam = match.home;
            const awayTeam = match.away;
            
            // Aplica mando de campo alternado se configurado
            let finalHome = homeTeam;
            let finalAway = awayTeam;

            if (match.mandoAlterna && this.year % 2 === 1) {
                [finalHome, finalAway] = [finalAway, finalHome];
            }

            match.winner = this.simulateMatch(finalHome, finalAway);
            console.log(`🎯 ${match.name}: ${match.winner.name} se classifica!`);
        });

        // Monta a semifinal
        const winnerJogoA = this.bracket.quartas[0].winner;
        const winnerJogoB = this.bracket.quartas[1].winner;

        this.bracket.semifinal.push({
            name: 'Semifinal - Taça Challenger',
            home: winnerJogoA,
            away: winnerJogoB,
            winner: null,
            champion: null // Leva a Taça Challenger para a final
        });

        this.status = 'phase3';
    }

    /**
     * PASSO 5: Simula Semifinal (Taça Challenger)
     */
    simulateSemifinal() {
        const semifinal = this.bracket.semifinal[0];
        semifinal.winner = this.simulateMatch(semifinal.home, semifinal.away);
        semifinal.champion = semifinal.winner; // Vencedor leva Taça Challenger

        console.log(`🏆 Taça Challenger: ${semifinal.champion.name}!`);

        // Monta a final: UEFA vs Vencedor da Taça Challenger
        this.bracket.final = {
            name: 'Grande Final do Mundial',
            home: this.qualifiers.uefa,
            away: semifinal.champion,
            location: 'Campo Neutro',
            date: new Date(this.year, 11, 20), // 20 de dezembro
            winner: null
        };

        this.status = 'final';
    }

    /**
     * PASSO 6: Simula a Grande Final
     */
    simulateFinal() {
        const final = this.bracket.final;
        final.winner = this.simulateMatch(final.home, final.away);

        console.log(`\n🏆🏆🏆 CAMPEÃO MUNDIAL ${this.year}: ${final.winner.name}! 🏆🏆🏆\n`);

        this.status = 'finished';
        return final.winner;
    }

    /**
     * Simula um jogo com prorrogação e pênaltis
     */
    simulateMatch(team1, team2) {
        const totalStr = team1.strength + team2.strength;
        const prob1 = team1.strength / totalStr;
        const random = Math.random();

        // 70% chance para o time mais forte
        if (prob1 > 0.5) {
            return random < prob1 ? team1 : team2;
        } else {
            return random < (1 - prob1) ? team2 : team1;
        }
    }

    /**
     * Gera o calendário completo em dezembro
     */
    generateCalendar() {
        const december = this.year % 4 === 0 ? 29 : 28; // Dias em dezembro

        this.schedule = [
            { date: '2024-12-01', event: '⚽ Fase 1: Playoff Africano/Asiático', match: this.bracket.fase1[0] },
            { date: '2024-12-05', event: '⚽ Jogo A: Libertadores vs CONCACAF (Derby das Américas)', match: this.bracket.quartas[0] },
            { date: '2024-12-08', event: '⚽ Jogo B: Vencedor Fase 1 vs Outro Continental', match: this.bracket.quartas[1] },
            { date: '2024-12-12', event: '🏆 Semifinal: Taça Challenger (Vencedor A vs B)', match: this.bracket.semifinal[0] },
            { date: '2024-12-20', event: '🏆 GRANDE FINAL: UEFA vs Vencedor Taça Challenger (Campo Neutro)', match: this.bracket.final }
        ];

        return this.schedule;
    }

    /**
     * Retorna um relatório completo do torneiro
     */
    getReport() {
        return {
            status: this.status,
            year: this.year,
            qualifiers: this.qualifiers,
            bracket: this.bracket,
            schedule: this.schedule,
            results: this.results
        };
    }

    /**
     * Executa o torneio completo em etapas
     */
    async runFullTournament() {
        this.qualifyContinentalChampions();
        this.mountBracket();
        this.generateCalendar();
        
        this.simulateFase1();
        this.simulateQuartas();
        this.simulateSemifinal();
        
        const champion = this.simulateFinal();

        return this.getReport();
    }
}

// ============= FUNÇÃO DE INTEGRAÇÃO =============

/**
 * Inicializa e roda o Mundial de Clubes
 * Use: runMundial(teamsData) no seu script principal
 */
function runMundial(teamsData) {
    const mundial = new MundialDeClubes(teamsData);
    return mundial.runFullTournament();
}

/**
 * Verifica campeões e monta árvore rapidamente
 */
function quickMundialCheck(teamsData) {
    const mundial = new MundialDeClubes(teamsData);
    mundial.qualifyContinentalChampions();
    mundial.mountBracket();
    mundial.generateCalendar();
    
    return {
        qualifiers: mundial.qualifiers,
        schedule: mundial.schedule,
        champion: null // Será preenchido após simulação
    };
}
