/**
 * ========================================
 * INTEGRAÇÃO E EXEMPLOS DO MUNDIAL
 * Como usar o sistema no seu jogo
 * ========================================
 */

// ============= FUNÇÃO PRINCIPAL DE INTEGRAÇÃO =============

/**
 * FUNÇÃO PRINCIPAL: Executa o Mundial de Clubes completo
 * 
 * Uso:
 *   const report = executeWorldCup(teamsData);
 *   console.log(report);
 */
async function executeWorldCup(teamsData) {
    console.log('\n\n');
    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║      🏆 MUNDIAL DE CLUBES - TAÇA INTERCONTINENTAL 🏆   ║');
    console.log('╚════════════════════════════════════════════════════════╝');
    console.log('\n');

    try {
        // PASSO 1: Simula todos os campeonatos continentais
        console.log('📍 PASSO 1: Simulando Campeonatos Continentais...\n');
        const manager = new ContinentalChampionshipManager(teamsData);
        const continentalChamps = manager.simulateAllChampionships();

        // PASSO 2: Cria e monta o Mundial
        console.log('\n📍 PASSO 2: Preparando o Mundial...\n');
        const mundial = new MundialDeClubes(teamsData);

        // Injeta os campeões continentais simulados
        mundial.qualifiers = {
            'uefa': continentalChamps['UEFA'],
            'libertadores': continentalChamps['CONMEBOL'],
            'concacaf': continentalChamps['CONCACAF'],
            'caf': continentalChamps['CAF'],
            'afc': continentalChamps['AFC'],
            'ofc': continentalChamps['OFC']
        };

        // PASSO 3: Monta o chaveamento
        console.log('\n📍 PASSO 3: Montando o Chaveamento...\n');
        mundial.mountBracket();
        mundial.generateCalendar();

        // PASSO 4-6: Executa as fases
        console.log('\n📍 PASSO 4-6: Executando as Fases do Torneio...\n');
        mundial.simulateFase1();
        await delay(800);

        mundial.simulateQuartas();
        await delay(800);

        mundial.simulateSemifinal();
        await delay(800);

        const champion = mundial.simulateFinal();

        // Retorna relatório completo
        const report = {
            status: 'completed',
            year: mundial.year,
            champions: {
                'UEFA': continentalChamps['UEFA'],
                'CONMEBOL': continentalChamps['CONMEBOL'],
                'CONCACAF': continentalChamps['CONCACAF'],
                'CAF': continentalChamps['CAF'],
                'AFC': continentalChamps['AFC'],
                'OFC': continentalChamps['OFC']
            },
            bracket: mundial.bracket,
            schedule: mundial.schedule,
            worldChampion: champion,
            timestamp: new Date().toISOString()
        };

        return report;

    } catch (error) {
        console.error('❌ Erro ao executar Mundial:', error);
        return { status: 'error', message: error.message };
    }
}

// ============= FUNÇÃO AUXILIAR: Delay para visualização =============

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============= VERIFICAÇÃO RÁPIDA DE QUALIFICADOS =============

/**
 * Verifica rapidamente os campeões continentais sem simular o torneio completo
 */
function getQualifiedTeams(teamsData) {
    const manager = new ContinentalChampionshipManager(teamsData);
    const champs = manager.simulateAllChampionships();

    return {
        'Europa (UEFA)': champs['UEFA']?.name || 'Não disponível',
        'América do Sul (CONMEBOL)': champs['CONMEBOL']?.name || 'Não disponível',
        'América do Norte/Central (CONCACAF)': champs['CONCACAF']?.name || 'Não disponível',
        'África (CAF)': champs['CAF']?.name || 'Não disponível',
        'Ásia (AFC)': champs['AFC']?.name || 'Não disponível',
        'Oceania (OFC)': champs['OFC']?.name || 'Não disponível'
    };
}

// ============= VISUALIZAR CALENDÁRIO =============

/**
 * Retorna o calendário formatado para exibição
 */
function getWorldCupCalendar(teamsData) {
    const mundial = new MundialDeClubes(teamsData);
    mundial.qualifyContinentalChampions();
    mundial.generateCalendar();

    return mundial.schedule.map((event, index) => ({
        position: index + 1,
        date: event.date,
        event: event.event
    }));
}

// ============= COMPARAÇÃO DE FORÇA =============

/**
 * Compara a força dos 6 qualificados
 */
function compareQualifiedStrength(champions) {
    const strengthMap = {
        'UEFA': champions['UEFA']?.strength,
        'CONMEBOL': champions['CONMEBOL']?.strength,
        'CONCACAF': champions['CONCACAF']?.strength,
        'CAF': champions['CAF']?.strength,
        'AFC': champions['AFC']?.strength,
        'OFC': champions['OFC']?.strength
    };

    const sorted = Object.entries(strengthMap)
        .sort((a, b) => b[1] - a[1])
        .map((entry, rank) => ({
            rank: rank + 1,
            confederation: entry[0],
            strength: entry[1]
        }));

    return sorted;
}

// ============= EXEMPLO DE USO COMPLETO =============

/**
 * EXEMPLO: Como integrar ao seu jogo
 * 
 * 1. No seu index.html, adicione:
 * 
 *    <script src="mundial.js"></script>
 *    <script src="continental_tournaments.js"></script>
 *    <script src="mundial_integration.js"></script>
 * 
 * 2. Em um evento do jogo (ex: quando clica em "Começar Mundial"):
 * 
 *    const worldCupReport = await executeWorldCup(teamsData);
 *    console.log(worldCupReport);
 *    
 *    // Exibir informações
 *    updateUIWithWorldCupData(worldCupReport);
 * 
 * 3. Para salvar o resultado:
 * 
 *    localStorage.setItem('worldcup_2024', JSON.stringify(worldCupReport));
 */

// ============= FUNÇÃO PARA ATUALIZAR UI =============

/**
 * Atualiza a interface com dados do Mundial
 * (Adapt conforme sua UI)
 */
function updateUIWithWorldCupData(report) {
    if (!report || report.status !== 'completed') {
        console.error('Relatório inválido');
        return;
    }

    console.log('🏆 CAMPEÃO MUNDIAL:', report.worldChampion?.name);

    // Exibir qualificados
    console.log('\n🌍 QUALIFICADOS:');
    Object.entries(report.champions).forEach(([conf, team]) => {
        console.log(`  ${conf}: ${team?.name} (Força: ${team?.strength})`);
    });

    // Exibir calendário
    console.log('\n📅 CALENDÁRIO:');
    report.schedule.forEach(event => {
        console.log(`  ${event.date}: ${event.event}`);
    });

    // Exibir bracket (chaveamento)
    console.log('\n🏗️  CHAVEAMENTO:');
    console.log('Fase 1 (Playoff Africano/Asiático):', 
        report.bracket.fase1[0]?.winner?.name || 'Não jogado');
    
    report.bracket.quartas.forEach((match, i) => {
        console.log(`${match.name}:`, match.winner?.name || 'Não jogado');
    });

    console.log('Taça Challenger (Semifinal):', 
        report.bracket.semifinal[0]?.champion?.name || 'Não decidida');
    
    console.log('FINAL:', 
        report.bracket.final?.winner?.name || 'Não jogada');
}

// ============= GERAR ESTATÍSTICAS =============

/**
 * Gera estatísticas detalhadas do Mundial
 */
function generateWorldCupStats(report) {
    if (!report.worldChampion) return null;

    const stats = {
        winner: {
            name: report.worldChampion.name,
            confederation: Object.keys(report.champions).find(
                key => report.champions[key].id === report.worldChampion.id
            ),
            strength: report.worldChampion.strength,
            stadium: report.worldChampion.stadium
        },
        participants: Object.values(report.champions).length,
        strongest_participant: Math.max(...Object.values(report.champions).map(t => t.strength)),
        weakest_participant: Math.min(...Object.values(report.champions).map(t => t.strength)),
        average_strength: (Object.values(report.champions).reduce((sum, t) => sum + t.strength, 0) / 6).toFixed(1)
    };

    return stats;
}

// ============= SALVAR E CARREGAR HISTÓRICO =============

/**
 * Salva o resultado do Mundial no localStorage
 */
function saveWorldCupResult(year, report) {
    const key = `worldcup_${year}`;
    localStorage.setItem(key, JSON.stringify(report));
    console.log(`✅ Mundial ${year} salvo!`);
}

/**
 * Carrega resultado anterior do Mundial
 */
function loadWorldCupResult(year) {
    const key = `worldcup_${year}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

/**
 * Lista todos os Mundiais salvos
 */
function listAllWorldCups() {
    const worldcups = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('worldcup_')) {
            const year = key.replace('worldcup_', '');
            const data = JSON.parse(localStorage.getItem(key));
            worldcups.push({
                year,
                champion: data.worldChampion?.name,
                timestamp: data.timestamp
            });
        }
    }
    return worldcups;
}

// ============= FORMATO JSON PARA EXPORTAR =============

/**
 * Exporta dados do Mundial em formato JSON limpo
 */
function exportWorldCupAsJSON(report) {
    return {
        metadata: {
            event: 'FIFA Club World Cup (Intercontinental)',
            year: report.year,
            generated: report.timestamp
        },
        qualifiers: {
            UEFA: report.champions['UEFA']?.name,
            CONMEBOL: report.champions['CONMEBOL']?.name,
            CONCACAF: report.champions['CONCACAF']?.name,
            CAF: report.champions['CAF']?.name,
            AFC: report.champions['AFC']?.name,
            OFC: report.champions['OFC']?.name
        },
        results: {
            phase1_winner: report.bracket.fase1[0]?.winner?.name,
            quarterfinal_a_winner: report.bracket.quartas[0]?.winner?.name,
            quarterfinal_b_winner: report.bracket.quartas[1]?.winner?.name,
            challenger_winner: report.bracket.semifinal[0]?.champion?.name,
            world_champion: report.worldChampion?.name,
            runner_up: report.bracket.final?.home?.id === report.worldChampion?.id 
                ? report.bracket.final?.away?.name 
                : report.bracket.final?.home?.name
        }
    };
}

// ============= EXEMPLO DE BOTÃO PARA ATIVAR =============

/**
 * Adicione este código ao seu HTML para criar um botão:
 * 
 * <button onclick="startWorldCup()">🏆 Começar Mundial de Clubes</button>
 * 
 * E crie esta função no seu script principal:
 */

function startWorldCup() {
    // Você precisa ter acesso a 'teamsData' do seu script principal
    executeWorldCup(teamsData).then(report => {
        console.log('📊 Relatório do Mundial:', report);
        
        // Salva o resultado
        saveWorldCupResult(new Date().getFullYear(), report);
        
        // Atualiza UI
        updateUIWithWorldCupData(report);
        
        // Mostra estatísticas
        console.log('📈 Estatísticas:', generateWorldCupStats(report));
    });
}

// ============= TESTE RÁPIDO =============

/**
 * TESTE: Execute no console para verificar se tudo funciona
 * 
 * quickWorldCupTest(teamsData);
 */

function quickWorldCupTest(teamsData) {
    console.log('🧪 Executando teste rápido do Mundial...\n');

    // Verifica qualificados
    console.log('1️⃣  Qualificados:');
    const qualified = getQualifiedTeams(teamsData);
    console.log(qualified);

    // Verifica calendário
    console.log('\n2️⃣  Calendário:');
    const calendar = getWorldCupCalendar(teamsData);
    calendar.forEach(event => console.log(`  ${event.date}: ${event.event}`));

    console.log('\n✅ Teste rápido concluído! Sistema funcionando.');
}
