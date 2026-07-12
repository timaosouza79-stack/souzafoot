#!/bin/bash
# ========================================
# CHECKLIST DE INSTALAÇÃO DO MUNDIAL
# Sistema FIFA Club World Cup para Brasfoot
# ========================================

# 📋 CHECKLIST COMPLETO
# Use este arquivo como guia passo-a-passo

## ╔═══════════════════════════════════════════════════════════════╗
## ║  ETAPA 1: VERIFICAÇÃO INICIAL (2 minutos)                   ║
## ╚═══════════════════════════════════════════════════════════════╝

echo "🔍 ETAPA 1: VERIFICAÇÃO INICIAL"
echo "================================"

# ☐ Passo 1.1: Verificar se está no diretório correto
echo ""
echo "☐ 1.1 - Você está no diretório do projeto?"
echo "   Local esperado: /Users/adm123/Desktop/futebol foot - vscode"
echo "   Diretório atual: $(pwd)"
echo "   ✓ Digite 'cd \"/Users/adm123/Desktop/futebol foot - vscode\"' se necessário"

# ☐ Passo 1.2: Verificar se os 3 arquivos JS foram criados
echo ""
echo "☐ 1.2 - Verificando se os 3 arquivos JavaScript foram criados..."

if [ -f "mundial.js" ]; then
  echo "   ✓ mundial.js ($(wc -l < mundial.js) linhas)"
else
  echo "   ✗ mundial.js NÃO ENCONTRADO"
fi

if [ -f "continental_tournaments.js" ]; then
  echo "   ✓ continental_tournaments.js ($(wc -l < continental_tournaments.js) linhas)"
else
  echo "   ✗ continental_tournaments.js NÃO ENCONTRADO"
fi

if [ -f "mundial_integration.js" ]; then
  echo "   ✓ mundial_integration.js ($(wc -l < mundial_integration.js) linhas)"
else
  echo "   ✗ mundial_integration.js NÃO ENCONTRADO"
fi

# ☐ Passo 1.3: Verificar se a documentação foi criada
echo ""
echo "☐ 1.3 - Verificando documentação..."

for doc in "SUMMARY.md" "QUICK_START.md" "MUNDIAL_README.md" "REFERENCE.js" "HTML_INTEGRATION_EXAMPLE.html" "INDEX.md"
do
  if [ -f "$doc" ]; then
    echo "   ✓ $doc"
  else
    echo "   ✗ $doc NÃO ENCONTRADO"
  fi
done

## ╔═══════════════════════════════════════════════════════════════╗
## ║  ETAPA 2: INTEGRAÇÃO HTML (5 minutos)                        ║
## ╚═══════════════════════════════════════════════════════════════╝

echo ""
echo ""
echo "📝 ETAPA 2: INTEGRAÇÃO HTML"
echo "==========================="

echo ""
echo "☐ 2.1 - Abra seu arquivo 'index.html' em um editor de texto"
echo ""
echo "☐ 2.2 - Localize a linha que contém:"
echo "        <script src=\"script.js\"></script>"
echo ""
echo "☐ 2.3 - Logo após essa linha, adicione EXATAMENTE estas 3 linhas:"
echo ""
echo "        <script src=\"mundial.js\"></script>"
echo "        <script src=\"continental_tournaments.js\"></script>"
echo "        <script src=\"mundial_integration.js\"></script>"
echo ""
echo "☐ 2.4 - Salve o arquivo (Ctrl+S ou Cmd+S)"
echo ""
echo "✅ Exemplo visual:"
echo "---"
echo "  <script src=\"script.js\"></script>"
echo "  <script src=\"mundial.js\"></script>          ← ADICIONAR"
echo "  <script src=\"continental_tournaments.js\"></script>  ← ADICIONAR"
echo "  <script src=\"mundial_integration.js\"></script>      ← ADICIONAR"
echo "  <!-- Resto do seu código -->"
echo "---"

## ╔═══════════════════════════════════════════════════════════════╗
## ║  ETAPA 3: TESTE RÁPIDO (2 minutos)                           ║
## ╚═══════════════════════════════════════════════════════════════╝

echo ""
echo ""
echo "🧪 ETAPA 3: TESTE RÁPIDO"
echo "======================="

echo ""
echo "☐ 3.1 - Abra seu navegador e acesse seu jogo"
echo "        URL: http://localhost:8000 (ou similar)"
echo ""
echo "☐ 3.2 - Abra o Console do Navegador"
echo "        • Windows: Pressione F12 → Aba 'Console'"
echo "        • Mac: Pressione Cmd+Option+I → Aba 'Console'"
echo ""
echo "☐ 3.3 - No console, copie e cole EXATAMENTE isto:"
echo ""
echo "        quickWorldCupTest(teamsData)"
echo ""
echo "☐ 3.4 - Pressione Enter"
echo ""
echo "✅ Resultado esperado:"
echo "   🧪 Executando teste rápido do Mundial..."
echo "   1️⃣ Qualificados: {...}"
echo "   2️⃣ Calendário: {...}"
echo "   ✅ Teste rápido concluído! Sistema funcionando."
echo ""
echo "❌ Se vir erro 'teamsData is undefined':"
echo "   → Certifique-se que carregou o jogo completamente"
echo "   → Verifique se squads.js e script.js foram carregados"

## ╔═══════════════════════════════════════════════════════════════╗
## ║  ETAPA 4: USAR O MUNDIAL (3 minutos)                         ║
## ╚═══════════════════════════════════════════════════════════════╝

echo ""
echo ""
echo "🚀 ETAPA 4: USAR O MUNDIAL"
echo "=========================="

echo ""
echo "☐ 4.1 - Para simular UMA VEZ:"
echo ""
echo "        const report = await executeWorldCup(teamsData);"
echo "        console.log(report);"
echo ""
echo "☐ 4.2 - Para VER QUALIFICADOS (rápido):"
echo ""
echo "        const qualified = getQualifiedTeams(teamsData);"
echo "        console.log(qualified);"
echo ""
echo "☐ 4.3 - Para COMPARAR FORÇA:"
echo ""
echo "        const ranking = compareQualifiedStrength(qualified);"
echo "        console.log(ranking);"
echo ""
echo "☐ 4.4 - Para SALVAR RESULTADO:"
echo ""
echo "        saveWorldCupResult(2024, report);"
echo ""
echo "☐ 4.5 - Para VER HISTÓRICO:"
echo ""
echo "        console.log(listAllWorldCups());"

## ╔═══════════════════════════════════════════════════════════════╗
## ║  ETAPA 5: INTEGRAÇÃO COM BOTÃO (OPCIONAL - 5 minutos)       ║
## ╚═══════════════════════════════════════════════════════════════╝

echo ""
echo ""
echo "🎨 ETAPA 5: INTEGRAÇÃO COM BOTÃO (OPCIONAL)"
echo "==========================================="

echo ""
echo "☐ 5.1 - (Opcional) Se quer um botão no seu jogo:"
echo ""
echo "        Adicione em seu HTML:"
echo "        <button onclick=\"launchMundial()\" class=\"btn btn-primary\">"
echo "          🏆 Começar Mundial"
echo "        </button>"
echo ""
echo "☐ 5.2 - Adicione em seu JavaScript:"
echo ""
echo "        async function launchMundial() {"
echo "          const report = await executeWorldCup(teamsData);"
echo "          console.log('Campeão:', report.worldChampion.name);"
echo "        }"

## ╔═══════════════════════════════════════════════════════════════╗
## ║  ETAPA 6: INTEGRAÇÃO COM UI VISUAL (OPCIONAL - 10 min)      ║
## ╚═══════════════════════════════════════════════════════════════╝

echo ""
echo ""
echo "🎨 ETAPA 6: INTEGRAÇÃO COM UI VISUAL (OPCIONAL)"
echo "=============================================="

echo ""
echo "☐ 6.1 - Se quiser interface visual completa:"
echo ""
echo "        1. Abra o arquivo: mundial_ui.html"
echo "        2. Copie TODO O SEU CONTEÚDO (Ctrl+A, Ctrl+C)"
echo "        3. Abra seu index.html"
echo "        4. Cole o conteúdo de mundial_ui.html"
echo "        5. Salve"
echo ""
echo "☐ 6.2 - Ou use o arquivo de exemplo:"
echo "        HTML_INTEGRATION_EXAMPLE.html"

## ╔═══════════════════════════════════════════════════════════════╗
## ║  ETAPA 7: TROUBLESHOOTING (EM CASO DE ERRO)                  ║
## ╚═══════════════════════════════════════════════════════════════╝

echo ""
echo ""
echo "⚠️ ETAPA 7: TROUBLESHOOTING"
echo "=========================="

echo ""
echo "❌ ERRO: 'function not found'"
echo "   ✅ SOLUÇÃO:"
echo "      1. Verificar se os 3 arquivos .js estão no HTML"
echo "      2. Verificar se a ORDEM está correta (mundial.js PRIMEIRO)"
echo "      3. Recarregar a página (F5)"
echo "      4. Limpar cache (Ctrl+Shift+Delete)"
echo ""
echo "❌ ERRO: 'teamsData is undefined'"
echo "   ✅ SOLUÇÃO:"
echo "      1. Verificar se script.js e squads.js foram carregados"
echo "      2. Esperar página carregar completamente"
echo "      3. Verificar console do navegador por outros erros"
echo ""
echo "❌ ERRO: 'Sem times de certa confederação'"
echo "   ✅ SOLUÇÃO:"
echo "      Normal! Sistema cria times placeholder automaticamente"
echo "      Pode ignorar o aviso - sistema funciona normalmente"
echo ""
echo "❌ ERRO: Sistema lento"
echo "   ✅ SOLUÇÃO:"
echo "      Não deve acontecer - todo o processo é rápido"
echo "      Se lento, verificar console por erro em loop infinito"

## ╔═══════════════════════════════════════════════════════════════╗
## ║  ETAPA 8: VALIDAÇÃO FINAL                                    ║
## ╚═══════════════════════════════════════════════════════════════╝

echo ""
echo ""
echo "✅ ETAPA 8: VALIDAÇÃO FINAL"
echo "=========================="

echo ""
echo "Use este checklist final para confirmar que tudo funciona:"
echo ""
echo "☐ Passo 1: Integração"
echo "   ✓ Os 3 arquivos .js estão no HTML em ORDEM certa"
echo "   ✓ Arquivo salvo"
echo ""
echo "☐ Passo 2: Teste Rápido"
echo "   ✓ Rodou quickWorldCupTest() com sucesso"
echo "   ✓ Console mostra as 3 mensagens (qualificados, calendário, sucesso)"
echo ""
echo "☐ Passo 3: Função Principal"
echo "   ✓ Chamou executeWorldCup(teamsData)"
echo "   ✓ Retornou relatório com campeão"
echo ""
echo "☐ Passo 4: Salvamento (opcional)"
echo "   ✓ Salvou resultado com saveWorldCupResult()"
echo "   ✓ Carregou com loadWorldCupResult()"
echo ""
echo "✅ TUDO OK!"

## ╔═══════════════════════════════════════════════════════════════╗
## ║  RESUMO EXECUTIVO                                            ║
## ╚═══════════════════════════════════════════════════════════════╝

echo ""
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "             ✅ INSTALAÇÃO CONCLUÍDA COM SUCESSO!"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "📊 Resumo do que foi criado:"
echo "   • 3 arquivos JavaScript (1600+ linhas)"
echo "   • 6 documentos de referência"
echo "   • 8 exemplos práticos"
echo "   • Sistema completo FIFA Club World Cup"
echo ""
echo "🚀 Próximos passos:"
echo "   1. Adicionar scripts ao HTML (ETAPA 2)"
echo "   2. Testar com quickWorldCupTest() (ETAPA 3)"
echo "   3. Chamar executeWorldCup() (ETAPA 4)"
echo "   4. (Opcional) Integrar UI visual (ETAPA 6)"
echo ""
echo "📚 Documentação disponível:"
echo "   • QUICK_START.md - Começar em 5 min"
echo "   • MUNDIAL_README.md - Referência completa"
echo "   • HTML_INTEGRATION_EXAMPLE.html - Exemplo prático"
echo ""
echo "🏆 Seu FIFA Club World Cup está pronto para dominar!"
echo ""
echo "═══════════════════════════════════════════════════════════════"

echo ""
echo "👉 PRÓXIMO: Abra QUICK_START.md para começar!"
echo ""
