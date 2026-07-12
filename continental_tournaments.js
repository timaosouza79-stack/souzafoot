/**
 * ========================================
 * SIMULADORES DE CAMPEONATOS CONTINENTAIS
 * Específicos por Confederação
 * ========================================
 */

// ============= CLUBE REPRESENTANTE PARA CONFEDERAÇÕES SEM TIMES =============

const placeholderTeams = {
    // ÁFRICA - Usando times brasileiros forte como fallback
    africa: [
        { id: 'caf_champion', name: 'Al Ahly (Egito)', strength: 78, league: 'africa', confederation: 'CAF' },
        { id: 'caf_finalist', name: 'Kaizer Chiefs (África do Sul)', strength: 76, league: 'africa', confederation: 'CAF' },
        { id: 'caf_semi1', name: 'Raja (Marrocos)', strength: 74, league: 'africa', confederation: 'CAF' },
        { id: 'caf_semi2', name: 'Orlando Pirates (África do Sul)', strength: 72, league: 'africa', confederation: 'CAF' }
    ],

    // ÁSIA - Representantes fortes
    asia: [
        { id: 'afc_champion', name: 'Al Hilal (Arábia Saudita)', strength: 81, league: 'asia', confederation: 'AFC' },
        { id: 'afc_finalist', name: 'Urawa Red Diamonds (Japão)', strength: 79, league: 'asia', confederation: 'AFC' },
        { id: 'afc_semi1', name: 'Ulsan Hyundai (Coreia do Sul)', strength: 77, league: 'asia', confederation: 'AFC' },
        { id: 'afc_semi2', name: 'Shanghai Port (China)', strength: 75, league: 'asia', confederation: 'AFC' }
    ],

    // OCEANIA - Times australianos
    oceania: [
        { id: 'ofc_champion', name: 'Sydney FC (Austrália)', strength: 74, league: 'oceania', confederation: 'OFC' },
        { id: 'ofc_finalist', name: 'Melbourne City (Austrália)', strength: 72, league: 'oceania', confederation: 'OFC' },
        { id: 'ofc_semi1', name: 'Phoenix (Nova Zelândia)', strength: 70, league: 'oceania', confederation: 'OFC' }
    ]
};

// ============= SIMULADOR UEFA CHAMPIONS LEAGUE =============

class UEFAChampionsLeagueSimulator {
    constructor(teamsData) {
        this.teamsData = teamsData;
        this.name = 'UEFA Champions League';
    }

    /**
     * Retorna o campeão europeu (time mais forte das ligas europeias)
     */
    getChampion() {
        const europeanLeagues = ['england', 'spain', 'italy', 'france', 'portugal', 'germany'];
        
        const champion = this.teamsData
            .filter(team => europeanLeagues.some(l => team.league && team.league.includes(l)))
            .sort((a, b) => b.strength - a.strength)[0];

        console.log(`🏆 UEFA Champions: ${champion?.name || 'Nenhum'}`);
        return champion;
    }
}

// ============= SIMULADOR CONMEBOL LIBERTADORES =============

class ConmebolLibertadoresSimulator {
    constructor(teamsData) {
        this.teamsData = teamsData;
        this.name = 'CONMEBOL Libertadores';
    }

    /**
     * Retorna o campeão da América do Sul
     */
    getChampion() {
        const saTeams = this.teamsData
            .filter(team => team.league && team.league.includes('south_america'))
            .sort((a, b) => b.strength - a.strength)[0];

        console.log(`🏆 Libertadores: ${saTeams?.name || 'Nenhum'}`);
        return saTeams;
    }
}

// ============= SIMULADOR CONCACAF CHAMPIONS CUP =============

class ConcacafChampionsSimulator {
    constructor(teamsData) {
        this.teamsData = teamsData;
        this.name = 'CONCACAF Champions Cup';
    }

    /**
     * Simula o campeão da CONCACAF
     * Inclui México, USA, América Central e Caribe
     */
    simulate() {
        const naTeams = this.teamsData
            .filter(team => team.league && (
                team.league.includes('mexico') || 
                team.league.includes('north_america') || 
                team.league.includes('central_america') ||
                team.league.includes('usa')
            ))
            .sort((a, b) => b.strength - a.strength);

        if (naTeams.length === 0) {
            console.warn('⚠️  CONCACAF: Sem times disponíveis, usando fallback');
            return placeholderTeams.oceania[0]; // Fallback
        }

        // Simula eliminação simples entre os 4 melhores
        const qualified = naTeams.slice(0, 4);
        let current = [...qualified];

        while (current.length > 1) {
            const next = [];
            for (let i = 0; i < current.length; i += 2) {
                const winner = this.simulateMatch(current[i], current[i + 1]);
                next.push(winner);
            }
            current = next;
        }

        const champion = current[0];
        console.log(`🏆 CONCACAF Champions: ${champion?.name || 'Desconhecido'}`);
        return champion;
    }

    simulateMatch(team1, team2) {
        const totalStr = team1.strength + team2.strength;
        const prob1 = team1.strength / totalStr;
        return Math.random() < prob1 ? team1 : team2;
    }
}

// ============= SIMULADOR CAF CHAMPIONS LEAGUE (ÁFRICA) =============

class CAFChampionsSimulator {
    constructor(teamsData) {
        this.teamsData = teamsData;
        this.name = 'CAF Champions League';
        this.placeholder = placeholderTeams.africa;
    }

    /**
     * Simula campeão africano
     * Se não tiver times africanos, usa representantes simulados
     */
    simulate() {
        const africaTeams = this.teamsData
            .filter(team => team.league && (
                team.league.includes('africa') ||
                team.league.includes('egypt') ||
                team.league.includes('cameroon') ||
                team.league.includes('southafrica')
            ));

        // Se não houver times africanos, usa placeholders
        let teamsToUse = africaTeams.length > 0 ? africaTeams : this.placeholder;

        if (teamsToUse.length === 0) {
            console.warn('⚠️  CAF: Sem representantes, usando Al Ahly fictício');
            return this.placeholder[0];
        }

        // Seleciona os 4 melhores
        const qualified = teamsToUse
            .sort((a, b) => b.strength - a.strength)
            .slice(0, 4);

        let current = [...qualified];

        while (current.length > 1) {
            const next = [];
            for (let i = 0; i < current.length; i += 2) {
                const winner = this.simulateMatch(current[i], current[i + 1]);
                next.push(winner);
            }
            current = next;
        }

        const champion = current[0];
        console.log(`🏆 CAF Champions: ${champion?.name || 'Desconhecido'}`);
        return champion;
    }

    simulateMatch(team1, team2) {
        const totalStr = team1.strength + team2.strength;
        const prob1 = team1.strength / totalStr;
        return Math.random() < prob1 ? team1 : team2;
    }
}

// ============= SIMULADOR AFC CHAMPIONS LEAGUE (ÁSIA) =============

class AFCChampionsSimulator {
    constructor(teamsData) {
        this.teamsData = teamsData;
        this.name = 'AFC Champions League';
        this.placeholder = placeholderTeams.asia;
    }

    /**
     * Simula campeão asiático
     */
    simulate() {
        const asiaTeams = this.teamsData
            .filter(team => team.league && (
                team.league.includes('asia') ||
                team.league.includes('japan') ||
                team.league.includes('southkorea') ||
                team.league.includes('saudi_arabia') ||
                team.league.includes('china')
            ));

        let teamsToUse = asiaTeams.length > 0 ? asiaTeams : this.placeholder;

        if (teamsToUse.length === 0) {
            console.warn('⚠️  AFC: Usando Al Hilal fictício');
            return this.placeholder[0];
        }

        const qualified = teamsToUse
            .sort((a, b) => b.strength - a.strength)
            .slice(0, 4);

        let current = [...qualified];

        while (current.length > 1) {
            const next = [];
            for (let i = 0; i < current.length; i += 2) {
                const winner = this.simulateMatch(current[i], current[i + 1]);
                next.push(winner);
            }
            current = next;
        }

        const champion = current[0];
        console.log(`🏆 AFC Champions: ${champion?.name || 'Desconhecido'}`);
        return champion;
    }

    simulateMatch(team1, team2) {
        const totalStr = team1.strength + team2.strength;
        const prob1 = team1.strength / totalStr;
        return Math.random() < prob1 ? team1 : team2;
    }
}

// ============= SIMULADOR OFC CHAMPIONS LEAGUE (OCEANIA) =============

class OFCChampionsSimulator {
    constructor(teamsData) {
        this.teamsData = teamsData;
        this.name = 'OFC Champions League';
        this.placeholder = placeholderTeams.oceania;
    }

    /**
     * Simula campeão da Oceania
     */
    simulate() {
        const oceaniaTeams = this.teamsData
            .filter(team => team.league && (
                team.league.includes('oceania') ||
                team.league.includes('australia') ||
                team.league.includes('newzealand')
            ));

        let teamsToUse = oceaniaTeams.length > 0 ? oceaniaTeams : this.placeholder;

        if (teamsToUse.length === 0) {
            console.warn('⚠️  OFC: Usando Sydney FC fictício');
            return this.placeholder[0];
        }

        const qualified = teamsToUse
            .sort((a, b) => b.strength - a.strength)
            .slice(0, 3);

        let current = [...qualified];

        while (current.length > 1) {
            const next = [];
            for (let i = 0; i < current.length; i += 2) {
                const winner = this.simulateMatch(current[i] || current[0], current[i + 1] || current[0]);
                next.push(winner);
            }
            current = next;
        }

        const champion = current[0];
        console.log(`🏆 OFC Champions: ${champion?.name || 'Desconhecido'}`);
        return champion;
    }

    simulateMatch(team1, team2) {
        if (!team1 || !team2) return team1 || team2;
        
        const totalStr = team1.strength + team2.strength;
        const prob1 = team1.strength / totalStr;
        return Math.random() < prob1 ? team1 : team2;
    }
}

// ============= GERENCIADOR CENTRAL DE CONFEDERAÇÕES =============

class ContinentalChampionshipManager {
    constructor(teamsData) {
        this.teamsData = teamsData;
        this.simulators = {
            'UEFA': new UEFAChampionsLeagueSimulator(teamsData),
            'CONMEBOL': new ConmebolLibertadoresSimulator(teamsData),
            'CONCACAF': new ConcacafChampionsSimulator(teamsData),
            'CAF': new CAFChampionsSimulator(teamsData),
            'AFC': new AFCChampionsSimulator(teamsData),
            'OFC': new OFCChampionsSimulator(teamsData)
        };
    }

    /**
     * Executa simulação de TODOS os campeonatos continentais
     */
    simulateAllChampionships() {
        console.log('\n====== 🌍 SIMULANDO CAMPEONATOS CONTINENTAIS 🌍 ======\n');

        const results = {
            'UEFA': this.simulators['UEFA'].getChampion(),
            'CONMEBOL': this.simulators['CONMEBOL'].getChampion(),
            'CONCACAF': this.simulators['CONCACAF'].simulate(),
            'CAF': this.simulators['CAF'].simulate(),
            'AFC': this.simulators['AFC'].simulate(),
            'OFC': this.simulators['OFC'].simulate()
        };

        console.log('\n====== ✅ CAMPEÕES CONTINENTAIS DEFINIDOS ✅ ======\n');

        return results;
    }

    /**
     * Retorna apenas os campeões definidos
     */
    getChampions() {
        return this.simulateAllChampionships();
    }
}

// ============= EXPORTAR PARA USO =============

// Função auxiliar para rodar toda a simulação
function simulateAllContinentalChampionships(teamsData) {
    const manager = new ContinentalChampionshipManager(teamsData);
    return manager.simulateAllChampionships();
}
