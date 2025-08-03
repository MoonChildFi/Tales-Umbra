const readline = require('readline');
const { exec, execSync } = require('child_process');
const prompt = require('prompt-sync')();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menuItems = [
    'Iniciar Jogo',
    'Apagar progresso',
    'Configurações',
    'Sair'
];

let selectedIndex = 0;

const cores = {
    "0": "Preto", "1": "Azul Marinho", "2": "Verde Escuro", "3": "Azul-Água (Ciano Escuro)",
    "4": "Vermelho Escuro", "5": "Roxo Escuro", "6": "Amarelo (Oliva)", "7": "Branco (Cinza Claro)",
    "8": "Cinza Escuro", "9": "Azul Claro", "A": "Verde Claro", "B": "Azul-Água Claro (Ciano Claro)",
    "C": "Vermelho Claro", "D": "Roxo Claro (Magenta Claro)", "E": "Amarelo Claro", "F": "Branco Brilhante",
    "Preto": "0", "Azul": "1", "Verde": "2", "Azul-água": "3", "Vermelho": "4", "Roxo": "5",
    "Amarelo": "6", "Branco": "7", "Cinza": "8", "Azul Claro": "9", "Verde Claro": "A",
    "Azul-água Claro": "B", "Vermelho Claro": "C", "Roxo Claro": "D", "Amarelo Claro": "E",
    "Branco Brilhante": "F"
};

const linhaDivisoria = "---------------------------------------------------------------------------";
const tituloConfigs = "CONFIGURAÇÕES";
const tituloCorTerminal = "// COR DO TERMINAL \\\\";
const tituloFundo = "*Definir uma cor para o fundo:";
const tituloTexto = "*Definir uma cor para o Texto:";

const listaFundo = [
    "0 = Preto", "1 = Azul", "2 = Verde", "3 = Azul-água (Cyan)", "4 = Vermelho", "5 = Roxo",
    "6 = Amarelo", "7 = Branco", "8 = Cinza", "9 = Azul Claro"
];

const listaTexto = [
    "A = Verde Claro", "B = Azul-água Claro", "C = Vermelho Claro",
    "D = Roxo Claro", "E = Amarelo Claro", "F = Branco Brilhante"
];

function arrumarEntradaCor(entrada) {
    if (!entrada) return '';
    entrada = entrada.trim();
    if (entrada.length === 1 && cores[entrada.toUpperCase()]) {
        return entrada.toUpperCase();
    }
    return entrada.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()).join(' ');
}

function desenharMenu() {
    console.clear();
    console.log ("████████╗  █████╗  ██╗      ███████╗ ███████╗ TM");
    console.log ("╚══██╔══╝ ██╔══██╗ ██║      ██╔════╝ ██═════╝");
    console.log ("   ██║    ███████║ ██║      █████╗   ███████║");
    console.log ("   ██║    ██╔══██║ ██║      ██╔══╝        ██║");
    console.log ("   ██║    ██║  ██║ ███████╗ ███████╗ ███████║");
    console.log ("   ╚═╝    ╚═╝  ╚═╝ ╚══════╝ ╚══════╝ ╚══════╝");
    console.log ("██╗   ██╗ ███╗  ╔███╗ ███████╗ ██████╗   █████╗ ");
    console.log ("██║   ██║ ████╗╔████║ ██╔══███ ██╔══██║ ██╔══██╗");
    console.log ("██║   ██║ ██╔═██═╗██║ ███████╗ ██████╔╝ ███████║");
    console.log ("██║   ██║ ██║    ║██║ ██╔══███ ██╔══██║ ██╔══██║");
    console.log ("╚██████╔╝ ██║    ║██║ ███████╗ ██║  ██║ ██║  ██║");
    console.log (" ╚═════╝  ╚═╝    ╚══╝ ╚══════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝");
    console.log ("---------------------------------------------------------------------------")
    console.log ("--- UMA HISTÓRIA DO UNIVERSO DE PALE LUNA ---")
    console.log ("---------------------------------------------------------------------------")

    menuItems.forEach((item, index) => {
        if (index === selectedIndex) {
            console.log(`> ${item} <`);
        } else {
            console.log(`  ${item}`);
        }
    });
    console.log('\nUse as setas para cima/baixo para navegar, Enter para selecionar.');
}

function ajustarCores() {
    let toNessaTelaDeCor = true;

    while (toNessaTelaDeCor) {
        console.clear();
        console.log(linhaDivisoria);
        console.log(tituloConfigs);
        console.log(linhaDivisoria);
        console.log(tituloCorTerminal);
        console.log("");
        console.log(tituloFundo);
        listaFundo.forEach(item => console.log(item));
        console.log("");
        console.log(tituloTexto);
        listaTexto.forEach(item => console.log(item));
        console.log("");
        console.log(linhaDivisoria);
        console.log("-> Pra voltar pro Menu Principal, digite '0' no campo da Cor de Fundo OU só aperte ENTER nas duas opções.");
        console.log("-> Pode mudar as cores várias vezes aqui!");
        console.log(linhaDivisoria);

        let inputFundo = prompt("Cor pro fundo (digite o nome ou o código, tipo: Preto ou 0): ");
        let inputTexto = prompt("Cor pro texto (digite o nome ou o código, tipo: Verde Claro ou A): ");

        if (inputFundo.trim() === '0' || (inputFundo.trim() === '' && inputTexto.trim() === '')) {
            toNessaTelaDeCor = false;
            console.clear();
            console.log("Voltando pro Menu Principal...");
            break;
        }

        const codigoDoFundo = cores[arrumarEntradaCor(inputFundo)];
        const codigoDoTexto = cores[arrumarEntradaCor(inputTexto)];
        
        if (!codigoDoFundo || !codigoDoTexto) {
            console.clear();
            console.log(linhaDivisoria);
            console.log("-> Erro: Uma ou as duas cores que você digitou tão erradas!");
            console.log("-> Por favor, escreva os nomes ou os códigos (0-F) igualzinho tá na lista.");
            console.log(linhaDivisoria);
            prompt("Aperta ENTER pra tentar de novo...");
        } else if (codigoDoFundo === codigoDoTexto) {
            console.clear();
            console.log(linhaDivisoria);
            console.log("-> Erro: Fundo e texto não podem ter a mesma cor! Aí não dá pra ler nada!");
            console.log("-> Por favor, escolhe cores diferentes pro fundo e pro texto.");
            console.log(linhaDivisoria);
            prompt("Aperta ENTER pra tentar de novo...");
        } else {
            const comandoCor = `COLOR ${codigoDoFundo}${codigoDoTexto}`;
            try {
                execSync(comandoCor, { stdio: 'inherit' });

                console.clear();
                console.log(linhaDivisoria);
                console.log("-> CORES DO TERMINAL MUDARAM COM SUCESSO!");
                console.log(linhaDivisoria);
                console.log(`Fundo: ${listaFundo.find(item => item.startsWith(codigoDoFundo)) || codigoDoFundo}`);
                console.log(`Texto: ${listaTexto.find(item => item.startsWith(codigoDoTexto)) || codigoDoTexto}`);
                console.log(linhaDivisoria);
                console.log("-> As cores do seu terminal já estão diferentes!");
                prompt("Aperta ENTER pra botar mais cores ou voltar...");
            } catch (error) {
                console.clear();
                console.log(linhaDivisoria);
                console.log("-> DEU RUIM ao tentar mudar as cores.");
                console.log("-> Vê se você tá rodando isso num terminal do Windows (CMD ou PowerShell).");
                console.log(`Erro técnico: ${error.message}`);
                console.log(linhaDivisoria);
                prompt("Aperta ENTER pra tentar de novo...");
            }
        }
    }
    desenharMenu();
    process.stdin.setRawMode(true);
    process.stdin.resume();
}

desenharMenu();

process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on('data', (chunk) => {
    const key = chunk.toString('hex');

    switch (key) {
        case '1b5b41':
            selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
            desenharMenu();
            break;
        case '1b5b42':
            selectedIndex = (selectedIndex + 1) % menuItems.length;
            desenharMenu();
            break;
        case '0d':
            console.clear();
            
            if (selectedIndex === 0) {
                rl.close();
                process.stdin.pause();
                console.log('Iniciando o jogo...');
                require('./main.js');
            } else if (selectedIndex === 3) {
                console.log('Saindo do menu...');
                rl.close();
                process.exit();
            } else if (selectedIndex === 1) {
                process.stdin.setRawMode(false);
                process.stdin.pause();
                exec('start cmd.exe /c Apagar_progresso.bat', (error) => {
                    if (error) {
                        console.error(`Erro ao rodar o arquivo: ${error.message}`);
                    } else {
                        console.log('Comando Apagar_progresso.bat rodou de boa.');
                    }
                    console.log('\nAperta ENTER pra voltar pro menu...');
                    prompt('');
                    desenharMenu();
                    process.stdin.setRawMode(true);
                    process.stdin.resume();
                });
            } else if (selectedIndex === 2) {
                process.stdin.setRawMode(false);
                process.stdin.pause();
                
                ajustarCores();
            }
            break;
        case '03':
            console.log('\nSaindo do menu...');
            rl.close();
            process.exit();
            break;
        default:
            break;
    }
});

rl.on('close', () => {
    console.log('\nMenu encerrado.');
});