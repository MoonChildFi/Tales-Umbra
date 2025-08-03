/*
             █████████████
           █████████████████
           ███    ███    ███
           ███    ███    ███
           ███████ █ ███████
             █████████████
               ██ ███ ██
*/
// Propriedade de Lukzrdev Studios.

const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');


// AREA DE FUNÇOES

function gameoverlenhador() {
    console.clear();
    console.log ("---------------------------------------------------------------------------")
                console.log ("-> Você foi pego pelo lenhador")
                console.log ("---------------------------------------------------------------------------")
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("---------------------------------------------------------------------------")
                process.exit(1);
}

function gameover() {
    console.clear();
                console.log ("---------------------------------------------------------------------------")
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("---------------------------------------------------------------------------")
                process.exit(1);
}

function logo() {
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
}

function espaço(){
    console.log ("---------------------------------------------------------------------------")
}

function pausarParaContinuar() {
    console.log("---------------------------------------------------------------------------");
    console.log("-> Pressione 1 para continuar...");
    console.log("---------------------------------------------------------------------------");
    let input = prompt("> ");
    while (input !== '1') {
        input = prompt("> ");
    }
    console.clear();
}


function Regras(){
    console.log ("-> Dicas para uma experiencia imersiva!")
    espaço()
    console.log ("-> (1) Não utilize caracteres especiais (ex:?:^}:{)")
    console.log ("-> (2) Não feche o jogo durante uma ação, isso pode afetar o seu progresso!")
    console.log ("-> (3) Não veja o codigo fonte do jogo, pois perde o sentido do mistério.")
    console.log ("-> (4) Se houver (->) narração, caso contrario ('') fala de personagem.")
    console.log ("-> (5) Divirta-se (ou não)")
    espaço()
    console.log("-> Pressione 1 para continuar...");
    console.log ("---------------------------------------------------------------------------")
    let input = prompt("> ");
    while (input !== '1') {
        input = prompt("> ");
    }
    console.clear();
}

function BAD_ENDING() {
    if (BAD_ENDINGfile) {
        const conteudo = "VOCÊ COMPLETOU O FINAL RUIM";
        fs.writeFileSync('../Conquistas/BAD_ENDING.txt', conteudo, 'utf8');
    }
}
function REAL_ENDING() {
    if (REAL_ENDINGfile) {
        const conteudo2 = "VOCÊ COMPLETOU O FINAL REAL";
        fs.writeFileSync('../Conquistas/REAL_ENDING.txt', conteudo2, 'utf8');
    }
}
function GOOD_ENDING() {
    if (GOOD_ENDINGfile) {
        const conteudo3 = "VOCÊ COMPLETOU O FINAL BOM";
        fs.writeFileSync('../Conquistas/GOOD_ENDING.txt', conteudo3, 'utf8');
    }
}

function SECRET_ENDING() {
    if (SECRET_ENDINGfile) {
        const conteudo2 = "VOCÊ COMPLETOU O FINAL SECRETO \r\n" + "PARABENS!!";
        fs.writeFileSync('../Conquistas/SECRET_ENDING.txt', conteudo2, 'utf8');
    }
}



function Finais() {
    const folderPath = '../conquistas';
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.txt')).length;
const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.txt'));
console.log(`-> Finais completados: ${count}/5`);
console.log('-> Lista de finais:', finais);
}

function inventario() {
    while (true) {
        console.clear();
        console.log("---------------------------------------------------------------------------");
        console.log("-> Você tem no seu inventário as seguintes coisas:");
        console.log("---------------------------------------------------------------------------");

        let itensNoInventario = 0;

        if (lanterna) {
            console.log("-> LANTERNA");
            itensNoInventario++;
        }
        if (temChave) {
            console.log("-> CHAVE DA ESCRIVANINHA");
            itensNoInventario++;
        }
        if (chavedois) {
            console.log("-> CHAVE DA PORTA DO QUARTO");
            itensNoInventario++;
        }
        if (corda) {
            console.log ("-> CORDA")
            itensNoInventario++;
        }
        if (medalhaprata) {
            console.log("-> MEDALHA DE PRATA")
            itensNoInventario++; // Corrigido: adiciona ao contador
        }
        if (diarioAntigo) {
            console.log("-> DIÁRIO ANTIGO")
            itensNoInventario++; // Corrigido: adiciona ao contador
        }

        if (itensNoInventario === 0) {
            console.log("-> Você ainda não pegou nenhum item!");
        }

        console.log("---------------------------------------------------------------------------");
        console.log("-> Você quer voltar?");
        console.log("1. SIM");
        console.log("2. NÃO");
        console.log("---------------------------------------------------------------------------");
        
        let escolha = Number(prompt("> "));

        if (escolha === 1) {
            console.clear();
            break;
        }
    }
}

function menosSanidade() {
    if (valorsanidade <= 10) {
        console.clear()
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Você chegou em um nivel muito baixo de sanidade durante o jogo!")
        console.log ("-> Você enlouqueceu e se perdeu na floresta para sempre!")
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Fim de jogo")
        console.log("---------------------------------------------------------------------------");
        process.exit(1)
    } else {
        valorsanidade-=10
        let s2 = 0; // Inicializado para evitar loop infinito
        while (s2 != 1) {
            console.clear()
            console.log("---------------------------------------------------------------------------");
            console.log ("-> AVISO: SUA SANIDADE CAIU!")
            console.log ("-> Você agora tem " ,valorsanidade, "% de sanidade")
            console.log("---------------------------------------------------------------------------");
            console.log ("-> Você quer continuar?")
            console.log ("1. SIM")
            console.log ("2. NÃO")
            console.log("---------------------------------------------------------------------------");
            s2 = Number(prompt("> ")); // s2 é atribuído aqui
    
            if (s2 == 1) {
                console.log ("")
                console.clear()
                break;
            } 
        }
    }
}
function maisSanidade() {

    valorsanidade+=10
    let s3 = 0; // Inicializado para evitar loop infinito
    while (s3 != 1) {
        console.clear()
        console.log("---------------------------------------------------------------------------");
        console.log ("-> AVISO: SUA SANIDADE SUBIU!")
        console.log ("-> Você agora tem " ,valorsanidade, "% de sanidade")
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Você quer continuar?")
        console.log ("1. SIM")
        console.log ("2. NÃO")
        console.log("---------------------------------------------------------------------------");
        s3 = Number(prompt("> ")); // s3 é atribuído aqui
            
        if (s3 == 1) {
            console.log ("")
            console.clear()
            break;
        }
    }
}


function sanidade() {
    let s1 = 0; // Inicializado para evitar loop infinito
    while (s1 != 1) {
        console.clear()
        contagemS++
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Sua sanidade está em ",valorsanidade, "%")
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Você quer voltar as opções anteriores?")
        console.log ("1. SIM")
        console.log ("2. NÃO")
        console.log("---------------------------------------------------------------------------");
        s1 = Number(prompt("> ")); // s1 é atribuído aqui
    
        if (s1 == 1) {
            console.log ("")
            console.clear()
            break;
        }
    }
}

function menosVidaG() {

    if(Vida <20){
        console.clear();
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Você perdeu muita vida!")
        console.log("---------------------------------------------------------------------------");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log("---------------------------------------------------------------------------");
        process.exit(1);
    }
Vida-= 50
let v1 = 0; // Inicializado para evitar loop infinito
while (v1 != 1) {
    console.clear();
    console.log("---------------------------------------------------------------------------");
    console.log ("-> AVISO: SUA VIDA CAIU GRAVIMENTE!")
    console.log ("-> Você agora tem " ,Vida, "% de vida")
    console.log("---------------------------------------------------------------------------");
    console.log ("-> Você quer continuar?")
            console.log ("1. SIM")
            console.log ("2. NÃO")
            console.log("---------------------------------------------------------------------------");
            v1 = Number(prompt("> ")); // v1 é atribuído aqui
    
            if (v1 == 1) {
                console.log ("")
                console.clear();
                break;
            }
}
if(Vida <20){
    console.clear();
    console.log("---------------------------------------------------------------------------");
    console.log ("-> Você perdeu muita vida!")
    console.log("---------------------------------------------------------------------------");
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    console.log("---------------------------------------------------------------------------");
    process.exit(1);
}
}

function menosVidaM() {
    if(Vida <20){
        console.clear();
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Você perdeu muita vida!")
        console.log("---------------------------------------------------------------------------");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log("---------------------------------------------------------------------------");
        process.exit(1);
    }
    Vida-= 20
    let v2 = 0; // Inicializado para evitar loop infinito
    while (v2 != 1) {
        console.clear();
        console.log("---------------------------------------------------------------------------");
        console.log ("-> AVISO: SUA VIDA CAIU EM NIVEL MEDIO!")
        console.log ("-> Você agora tem " ,Vida, "% de vida")
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Você quer continuar?")
                console.log ("1. SIM")
                console.log ("2. NÃO")
                console.log("---------------------------------------------------------------------------");
                v2 = Number(prompt("> ")); // v2 é atribuído aqui
        
                if (v2 == 1) {
                    console.log ("")
                    console.clear();
                    break;
                }
    }
    if(Vida <20){
        console.clear();
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Você perdeu muita vida!")
        console.log("---------------------------------------------------------------------------");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log("---------------------------------------------------------------------------");
        process.exit(1);
    }
    }

    function menosVidaP() {
        if(Vida <20){
            console.clear();
            console.log("---------------------------------------------------------------------------");
            console.log ("-> Você perdeu muita vida!")
            console.log("---------------------------------------------------------------------------");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log("---------------------------------------------------------------------------");
            process.exit(1);
        }
        Vida-= 10
        let v3 = 0; // Inicializado para evitar loop infinito
        while (v3 != 1) {
            console.clear();
            console.log("---------------------------------------------------------------------------");
            console.log ("-> AVISO: SUA VIDA CAIU!")
            console.log ("-> Você agora tem " ,Vida, "% de vida")
            console.log("---------------------------------------------------------------------------");
            console.log ("-> Você quer continuar?")
                    console.log ("1. SIM")
                    console.log ("2. NÃO")
                    console.log("---------------------------------------------------------------------------");
                    v3 = Number(prompt("> ")); // v3 é atribuído aqui
            
                    if (v3 == 1) {
                        console.log ("")
                        console.clear();
                        break;
                    }
        }
        if(Vida <20){
            console.clear();
            console.log("---------------------------------------------------------------------------");
            console.log ("-> Você perdeu muita vida!")
            console.log("---------------------------------------------------------------------------");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log("---------------------------------------------------------------------------");
            process.exit(1);
        }
    }

    function mostrarVida() {
        let v4 = 0; // Inicializado para evitar loop infinito
        while (v4 != 1) {
            console.clear();
            console.log("---------------------------------------------------------------------------");
            console.log ("-> Você agora tem " ,Vida, "% de vida")
            console.log("---------------------------------------------------------------------------");
            console.log ("-> Você quer continuar?")
                    console.log ("1. SIM")
                    console.log ("2. NÃO")
                    console.log("---------------------------------------------------------------------------");
                    v4 = Number(prompt("> ")); // v4 é atribuído aqui
            
                    if (v4 == 1) {
                        console.log ("")
                        console.clear();
                        break;
                    }
        }
    }

    function menosVidaMG() {
        if(Vida <20){
            console.clear();
            console.log("---------------------------------------------------------------------------");
            console.log ("-> Você perdeu muita vida!")
            console.log("---------------------------------------------------------------------------");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log("---------------------------------------------------------------------------");
            process.exit(1);
        }
        Vida-= 70
        let v5 = 0; // Inicializado para evitar loop infinito
        while (v5 != 1) {
            console.clear();
            console.log("---------------------------------------------------------------------------");
            console.log ("-> AVISO: SUA VIDA CAIU EXTREMAMENTE!")
            console.log ("-> Você agora tem " ,Vida, "% de vida")
            console.log("---------------------------------------------------------------------------");
            console.log ("-> Você quer continuar?")
                    console.log ("1. SIM")
                    console.log ("2. NÃO")
                    console.log("---------------------------------------------------------------------------");
                    v5 = Number(prompt("> ")); // v5 é atribuído aqui
            
                    if (v5 == 1) {
                        console.log ("")
                        console.clear();
                        break;
                    }
        }
    }

    function Opcãoinvalida() {
        console.clear()
        console.log("---------------------------------------------------------------------------");
        console.log ("-> Opção invalida!")
        console.log("---------------------------------------------------------------------------");
        console.log("-> Pressione 1 para fechar...");
        console.log("---------------------------------------------------------------------------");
        let input = prompt("> ");
        while (input !== '1') {
            input = prompt("> ");
        }
        process.exit(90)
    }



// AREA DE VARIAVEIS
let Login;
let Usuario;
let Senha;
const accountFilePath = '../Conta/Containfo.txt';
let overwrite = "S"
let temChave = false;
let jogoAtivo = true; // Loop do quarto
let jogoAtivo1 = true; // Loop do corredor principal (para o mapa) - Renomeado para jogocorredorPrincipal
let iniciofalha = false;
let papega = false;
let tentanovamente = true;
let floresta1 = ("");
let atalho = false;
let saiudafloresta = false;
let floresta2 = ("");
let jogoAtivo2 = true; // Não alterado, conforme pedido
let cabana = ("");
let mapaachado = false;
let tentanovamente1 = true;
let cabana1 = ("");
let kitm = false
let cabana2 = ("");
let saiudacasa = false;
let saiudafloresta1 = false;
let floresta3 = ("");
let jogoAtivo3 = true
let mapa = ("");
let objeto = ("");
let foto = ("");
let decisão1 = ("");
let decisão2 = ("");
let barco = ("");
let ponte = ("");
let tentanovamente2 = true;
let jogoAtivo4 = true;
let floresta4 = ("");
let fotopega = false
let leufoto = false
let casafora =false
let N = false
let L = false
let O = false
let S = false
let back = true
let conquistas
let s1 = 0; // Inicializado
let s2 = 0; // Inicializado
let s3 = 0; // Inicializado
let contagemS = 0; // Inicializado
let Vida = 100;
let v1 = 0; // Inicializado
let v2 = 0; // Inicializado
let v3 = 0; // Inicializado
let v4 = 0; // Inicializado
let v5 = 0; // Inicializado
let v6 = 0; // Inicializado
let chavedois = false; // Inicializado
let teste;
let teste2;
let valorsanidade = 100
let destruir = false
let REAL_ENDINGfile = false
let SECRET_ENDINGfile = false
let GOOD_ENDINGfile = false
let BAD_ENDINGfile = false
let escrivaninha = false
let lanterna = false
let corda = false
let cozinha = false // Estado da cozinha (visitada ou não)
let sala = false     // Estado da sala (visitada ou não)
let banheiro = false // Estado do banheiro (visitado ou não)
let jogocorredorPrincipal = true; // Variável principal para o loop do corredor
let medalhaprata = false;
let diarioAntigo = false;


// INICIO DO JOGO PARA O USUARIO
console.clear();
logo();
console.log("-> Você gostaria de criar uma conta?");
console.log("-> (Apenas para salvamento local!)");
espaço();
console.log ("-> Opções");
espaço();
console.log ("(1) Criar Conta");
console.log ("(2) Ignorar");
espaço();
Login = Number(prompt("> "));

if (Login == 1) {
    console.clear();
    logo();

    if (fs.existsSync(accountFilePath)) {
        console.log("-> Um arquivo de conta já existe!");
        console.log("-> Você gostaria de sobrescrevê-lo? (S/N)");
        espaço();
        overwrite = prompt("> ").toUpperCase();

        if (overwrite !== 'S') {
            console.clear();
            logo();
            console.log("-> Criação de conta cancelada. Arquivo existente não foi sobrescrito.");
            espaço();

        }
    }
    if (overwrite == "S") {
    Usuario = prompt("Digite o nome de usuário: ");
    Senha = prompt("Digite a sua senha: ");
    espaço();

    const conteudo =
                     "Nome: " + Usuario + "\r\n" +
                     "Senha: " + Senha + "\r\n";

    fs.writeFileSync(accountFilePath, conteudo, 'utf8');

    console.log("-> Conta criada e salva com sucesso!");
}
} else {
    console.clear();
    logo();
    console.log("-> Criação de conta ignorada!");
}

pausarParaContinuar()
logo()
Finais()
espaço()
Regras()

// Loop principal do QUARTO
while (jogoAtivo == true) {
    
    if (!temChave && !escrivaninha){
    console.log (" ")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("██                                                               ██")
    console.log ("██                                                               ██")
    console.log ("██                                                               ██")
    console.log ("██                                                               ██")
    console.log ("██                                                               ██")
    console.log ("██                                                            █████")
    console.log ("██                 (CHAVE)                                    █  ██")
    console.log ("██               ██████████        ██                         █  ██")
    console.log ("██               █        █      ██████                     ███  ██")
    console.log ("██    (CAMA)     ██████████     █  ██  █                    █ █  ██")
    console.log ("██   █████████   █        █        ██                         █  ██")
    console.log ("██   ██     ██   ██████████     ██    ██                      █  ██")                                            
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("")
    } else if (temChave && escrivaninha) {
        console.log (" ")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                            █████")
        console.log ("██                                                            █  ██")
        console.log ("██               ██████████               ██                  █  ██")
        console.log ("██               █(ABERTO)█             ██████              ███  ██")
        console.log ("██    (CAMA)     ██████████            █  ██  █             █ █  ██")
        console.log ("██   █████████   █(ABERTO)█               ██                  █  ██")
        console.log ("██   ██     ██   ██████████            ██    ██               █  ██")                                            
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("")
    } else if (!temChave && escrivaninha) { 
        console.log (" ")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                            █████")
        console.log ("██                 (CHAVE)                                    █  ██")
        console.log ("██               ██████████               ██                  █  ██")
        console.log ("██               █(ABERTO)█             ██████              ███  ██")
        console.log ("██    (CAMA)     ██████████            █  ██  █             █ █  ██")
        console.log ("██   █████████   █(ABERTO)█               ██                  █  ██")
        console.log ("██   ██     ██   ██████████            ██    ██               █  ██")                                            
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("")
    } else if (temChave && !escrivaninha) {
        console.log (" ")
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                               ██")
        console.log ("██                                                            █████")
        console.log ("██                                                            █  ██")
        console.log ("██               ██████████               ██                  █  ██")
        console.log ("██               █        █             ██████              ███  ██")
        console.log ("██    (CAMA)     ██████████            █  ██  █             █ █  ██")
        console.log ("██   █████████   █        █               ██                  █  ██")
        console.log ("██   ██     ██   ██████████            ██    ██               █  ██")                                            
        console.log ("███████████████████████████████████████████████████████████████████")
        console.log ("")
    }
    espaço()
    console.log ("-> Você está dentro de um quarto, deitado em uma cama.")
    console.log ("-> Você não se lembra muito bem, o que aconteceu antes de você dormir.")
    console.log ("-> Mas uma coisa é certa... Você não está na sua casa...")
    espaço()
    console.log ("'Hã, onde eu estou?'")
    if (!temChave){
    espaço()
    console.log ("-> Há sua frente você vê uma escrivaninha, emcima dela tem chave com uma etiquete.")
    console.log ("-> A ETIQUETA DIZ: CHAVE DA ESCRIVANINHA.")
    }
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) PEGAR CHAVE")
    console.log ("(02) OLHAR ESCRIVANINHA")
    console.log ("(03) PORTA")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()

    let quarto = Number(prompt("> "));

    if (quarto == 1) {
        console.clear()
        if (temChave) {
            espaço()
            console.log ("-> Você ja pegou essa chave!")
            espaço()
        } else {
        espaço()
        console.log ("-> CHAVE DA ESCRIVANINHA PEGA!")
        pausarParaContinuar()
        temChave = true
        }
    } else if (quarto == 2) {
        if (temChave == true && !chavedois) {
            console.clear()
            espaço()
            console.log ("-> Você abre as duas gavetas da escravaninha!")
            console.log ("-> Dentro de uma delas você acha uma laterna e uma corda.")
            console.log ("-> Na segunda gaveta, por baixo das roupas você acha a chave da porta.")
            pausarParaContinuar()
            console.clear()
            espaço()
            console.log ("-> CHAVE DA PORTA PEGA!")
            chavedois = true
            pausarParaContinuar()
            espaço()
            console.log ("-> LANTERNA PEGA!")
            lanterna = true
            pausarParaContinuar()
            espaço()
            console.log ("-> CORDA PEGA!")
            pausarParaContinuar()
            corda = true
            escrivaninha = true; // Adiciona esta flag para indicar que a escrivaninha foi explorada
        } else if (temChave == true && chavedois) {
            espaço()
            console.log ("-> Você já verificou a escrivaninha!")
            espaço()
        } else {
            console.clear()
            espaço()
            console.log ("-> Você não consegue abrir a escrivaninha, por que você não tem a chave!")
            pausarParaContinuar()
        }
    } else if (quarto == 3) {
        if (chavedois) {
            jogoAtivo = false
        } else {
            console.clear()
            espaço()
            console.log ("-> Você não pode abrir a porta ainda, por que você não tem a chave!")
            pausarParaContinuar()
        }
    } else if (quarto == 4) {
        inventario()
    } else if (quarto == 5) {
        sanidade()
    } else if (quarto == 6) {
        mostrarVida()
    } else {
        Opcãoinvalida()
    }
}

console.clear()
espaço()
console.log ("-> Você abre a porta do quarto, e se depara com o resto da casa")
espaço()

// Loop principal do CORREDOR
while (jogocorredorPrincipal) {
    if (cozinha && sala && banheiro) {
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("██                                                        ^        ")
        console.log ("██                                                        |        ")
        console.log ("██                                                    (ESQUERDA)            ")
        console.log ("██                                                     (JÁ FOI)          ")
        console.log ("██                                                                 ")
        console.log ("█████                                                              ")
        console.log ("██  █                                       (JÁ FOI) (Á FRENTE -> )                ")
        console.log ("██  █                       ██                                       ")
        console.log ("██  ███                   ██████                       (JÁ FOI)               ")
        console.log ("██  █ █                  █  ██  █                     (DIREITA)                ")
        console.log ("██  █                       ██                            |           ")
        console.log ("██  █                    ██    ██                         v               ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
    espaço()
    console.log ("-> Na sua frente você vê um corredor, que tem sinalizações de locais da casa.")
    espaço()
    console.log ("-> A PLACA DIZ:")
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) DIREITA = COZINHA") 
    console.log ("(02) ESQUERDA = SALA DE ESTAR")
    console.log ("(03) Á FRENTE = BANHEIRO")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()
    } else if (!cozinha && !sala && !banheiro) {
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("██                                                        ^        ")
        console.log ("██                                                        |        ")
        console.log ("██                                                    (ESQUERDA)            ")
        console.log ("██                                                                 ")
        console.log ("██                                                                 ")
        console.log ("█████                                                              ")
        console.log ("██  █                                                (Á FRENTE -> )                ")
        console.log ("██  █                       ██                                       ")
        console.log ("██  ███                   ██████                                        ")
        console.log ("██  █ █                  █  ██  █                     (DIREITA)                ")
        console.log ("██  █                       ██                            |           ")
        console.log ("██  █                    ██    ██                         v               ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
    espaço()
    console.log ("-> Na sua frente você vê um corredor, que tem sinalizações de locais da casa.")
    espaço()
    console.log ("-> A PLACA DIZ:")
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) DIREITA = COZINHA") 
    console.log ("(02) ESQUERDA = SALA DE ESTAR")
    console.log ("(03) Á FRENTE = BANHEIRO")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()
    } else if (!cozinha && !sala && banheiro) {
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("██                                                        ^        ")
        console.log ("██                                                        |        ")
        console.log ("██                                                    (ESQUERDA)            ")
        console.log ("██                                                                 ")
        console.log ("██                                                                 ")
        console.log ("█████                                                              ")
        console.log ("██  █                                       (JÁ FOI) (Á FRENTE -> )                ")
        console.log ("██  █                       ██                                       ")
        console.log ("██  ███                   ██████                                        ")
        console.log ("██  █ █                  █  ██  █                     (DIREITA)                ")
        console.log ("██  █                       ██                            |           ")
        console.log ("██  █                    ██    ██                         v               ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
        espaço()
        console.log ("-> Na sua frente você vê um corredor, que tem sinalizações de locais da casa.")
        espaço()
    console.log ("-> A PLACA DIZ:")
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) DIREITA = COZINHA") 
    console.log ("(02) ESQUERDA = SALA DE ESTAR")
    console.log ("(03) Á FRENTE = BANHEIRO")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()
    } else if (!cozinha && sala && banheiro) {
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("██                                                        ^        ")
        console.log ("██                                                        |        ")
        console.log ("██                                                    (ESQUERDA)            ")
        console.log ("██                                                     (JÁ FOI)          ")
        console.log ("██                                                                 ")
        console.log ("█████                                                              ")
        console.log ("██  █                                       (JÁ FOI) (Á FRENTE -> )                ")
        console.log ("██  █                       ██                                       ")
        console.log ("██  ███                   ██████                                        ")
        console.log ("██  █ █                  █  ██  █                     (DIREITA)                ")
        console.log ("██  █                       ██                            |           ")
        console.log ("██  █                    ██    ██                         v               ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
        espaço()
        console.log ("-> Na sua frente você vê um corredor, que tem sinalizações de locais da casa.")
        espaço()
    console.log ("-> A PLACA DIZ:")
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) DIREITA = COZINHA") 
    console.log ("(02) ESQUERDA = SALA DE ESTAR")
    console.log ("(03) Á FRENTE = BANHEIRO")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()
    } else if (cozinha && !sala && !banheiro) {
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("██                                                        ^        ")
        console.log ("██                                                        |        ")
        console.log ("██                                                    (ESQUERDA)            ")
        console.log ("██                                                                 ")
        console.log ("██                                                                 ")
        console.log ("█████                                                              ")
        console.log ("██  █                                              (Á FRENTE -> )                ")
        console.log ("██  █                       ██                                       ")
        console.log ("██  ███                   ██████                       (JÁ FOI)               ")
        console.log ("██  █ █                  █  ██  █                     (DIREITA)                ")
        console.log ("██  █                       ██                            |           ")
        console.log ("██  █                    ██    ██                         v               ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
        espaço()
        console.log ("-> Na sua frente você vê um corredor, que tem sinalizações de locais da casa.")
        espaço()
    console.log ("-> A PLACA DIZ:")
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) DIREITA = COZINHA") 
    console.log ("(02) ESQUERDA = SALA DE ESTAR")
    console.log ("(03) Á FRENTE = BANHEIRO")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()
    } else if (!cozinha && sala && !banheiro) {
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("██                                                        ^        ")
        console.log ("██                                                        |        ")
        console.log ("██                                                    (ESQUERDA)            ")
        console.log ("██                                                     (JÁ FOI)          ")
        console.log ("██                                                                 ")
        console.log ("█████                                                              ")
        console.log ("██  █                                              (Á FRENTE -> )                ")
        console.log ("██  █                       ██                                       ")
        console.log ("██  ███                   ██████                                        ")
        console.log ("██  █ █                  █  ██  █                     (DIREITA)                ")
        console.log ("██  █                       ██                            |           ")
        console.log ("██  █                    ██    ██                         v               ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
        espaço()
        console.log ("-> Na sua frente você vê um corredor, que tem sinalizações de locais da casa.")
        espaço()
    console.log ("-> A PLACA DIZ:")
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) DIREITA = COZINHA") 
    console.log ("(02) ESQUERDA = SALA DE ESTAR")
    console.log ("(03) Á FRENTE = BANHEIRO")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()
    } else if (cozinha && sala && !banheiro) {
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("██                                                        ^        ")
        console.log ("██                                                        |        ")
        console.log ("██                                                    (ESQUERDA)            ")
        console.log ("██                                                     (JÁ FOI)          ")
        console.log ("██                                                                 ")
        console.log ("█████                                                              ")
        console.log ("██  █                                              (Á FRENTE -> )                ")
        console.log ("██  █                       ██                                       ")
        console.log ("██  ███                   ██████                       (JÁ FOI)               ")
        console.log ("██  █ █                  █  ██  █                     (DIREITA)                ")
        console.log ("██  █                       ██                            |           ")
        console.log ("██  █                    ██    ██                         v               ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
        espaço()
        console.log ("-> Na sua frente você vê um corredor, que tem sinalizações de locais da casa.")
        espaço()
    console.log ("-> A PLACA DIZ:")
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) DIREITA = COZINHA") 
    console.log ("(02) ESQUERDA = SALA DE ESTAR")
    console.log ("(03) Á FRENTE = BANHEIRO")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()
    } else if (cozinha && !sala && banheiro) {
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("██                                                        ^        ")
        console.log ("██                                                        |        ")
        console.log ("██                                                    (ESQUERDA)            ")
        console.log ("██                                                                 ")
        console.log ("██                                                                 ")
        console.log ("█████                                                              ")
        console.log ("██  █                                       (JÁ FOI) (Á FRENTE -> )                ")
        console.log ("██  █                       ██                                       ")
        console.log ("██  ███                   ██████                       (JÁ FOI)               ")
        console.log ("██  █ █                  █  ██  █                     (DIREITA)                ")
        console.log ("██  █                       ██                            |           ")
        console.log ("██  █                    ██    ██                         v               ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
        espaço()
        console.log ("-> Na sua frente você vê um corredor, que tem sinalizações de locais da casa.")
        espaço()
    console.log ("-> A PLACA DIZ:")
    espaço()
    console.log ("OPÇÕES")
    espaço()
    console.log ("(01) DIREITA = COZINHA") 
    console.log ("(02) ESQUERDA = SALA DE ESTAR")
    console.log ("(03) Á FRENTE = BANHEIRO")
    espaço()
    console.log ("(04) INVENTARIO")
    console.log ("(05) SANIDADE")
    console.log ("(06) VIDA")
    espaço()
    }


    let corredor = Number(prompt("> "))


    if (corredor == 1) {
        if (cozinha) {
            console.clear()
            espaço()
            console.log ("-> Você já tentou por ai!")
            pausarParaContinuar()
        } else {
        cozinha = true
        console.clear();
        espaço()
        console.log("-> Ao entrar na cozinha, algo te chama a atenção: talheres estão fora do lugar.")
        console.log("-> Imediatamente, você redobra o cuidado para não fazer barulho.")
        console.log("-> Uma busca rápida pela cozinha não revela nada de útil.")
        console.log("-> Sem mais o que fazer, você decide voltar ao corredor e tentar outra direção.")
        console.log("-> No caminho de volta, um talher escorrega e cai no chão, produzindo um ruído alto e inesperado!")
        espaço()
        console.log("-> Em pânico, você procura desesperadamente por um esconderijo.")
        console.log("-> Seus olhos encontram um armário grande, talvez o suficiente para te abrigar.")
        espaço()        
        console.log ("OPÇÕES")        
        espaço()
        console.log ("(01) ENTRAR NO ARMÁRIO") 
        console.log ("(02) TENTAR SE ESCONDER EM OUTRO LUGAR")
        espaço()
        
        let esconderijo = Number(prompt("> "))

        if (esconderijo == 1){
            console.clear()
            espaço()
            console.log("-> Sem pensar duas vezes, você mergulha no escuro do armário!")
            console.log("-> Lá dentro, o ar parece rarear. Você prende a respiração, temendo que o menor som revele seu esconderijo.")
            pausarParaContinuar()
            console.clear()
            espaço()
            console.log("-> Os minutos se arrastam na escuridão e no silêncio sufocante do armário...")
            console.log("-> De repente, passos pesados. Uma figura corpulenta, que lembra um lenhador, surge na cozinha.")
            console.log("-> Ele se serve de um gole d'água, joga uma mochila gasta na mesa, e então se vira para sair, desaparecendo novamente.")
            espaço()
            console.log ("OPÇÕES")        
            espaço()
            console.log ("(01) PEGAR A MOCHILA E VOLTAR PARA O CORREDOR") 
            console.log ("(02) APENAS VOLTAR PARA O CORREDOR")
            espaço()

            let mochila = Number(prompt("> ")) 

            if (mochila == 1) {
                console.clear()
                espaço()
                console.log("-> Com um alívio súbito, você abre o armário, pega a mochila às pressas, e corre de volta ao corredor.")
                console.log("-> Nenhum sinal do homem. Ele não voltou e, aparentemente, não percebeu nada fora do lugar.")
                pausarParaContinuar()
            } else if (mochila == 2) {
                console.clear()
                espaço()
                console.log("-> Com um alívio urgente, você se arrasta para fora do armário. ")
                console.log ("-> Seus olhos rapidamente veem a mochila ainda na mesa, mas a prioridade era uma só: escapar.")
                console.log ("-> Você dispara de volta para o corredor.")
                console.log("-> O homem não retorna. A cozinha permanece em silêncio, sem qualquer indício de que sua presença ou a mochila intocada tenham sido notadas. Você está a salvo... por enquanto.")
                pausarParaContinuar()
            } else {
                Opcãoinvalida()
            }

        } else if (esconderijo == 2) {
            console.clear()
            espaço()
            console.log ("-> Desesperado, você varre a cozinha com os olhos. Um balcão, uma pilha de caixas...")
            console.log ("-> Você decide se espremer atrás da geladeira velha, torcendo para ser invisível.")
            console.log("-> O espaço é apertado, empoeirado. Você prende a respiração, o coração batendo forte contra as costelas.")
            console.log("-> Esperando que o ranger da geladeira não te entregue.")
            pausarParaContinuar()
            console.clear()
            espaço()
            console.log("-> Um erro fatal. O esconderijo não era seguro.")
            console.log("-> A sombra do lenhador se curvou sobre você.")
            console.log("-> Seus olhos encontraram os dele.")
            console.log("-> Não houve tempo para mais nada.")
            pausarParaContinuar()
            gameoverlenhador()
        } else {
            Opcãoinvalida()
        }
    }
    } else if (corredor == 2) {
        sala = true // Marca a sala como visitada
        let salaDeEstarAtiva = true; // Inicia o loop da sala de estar

        console.clear();
        espaço();
        console.log("-> Você decide virar à esquerda, entrando em uma **Sala de Estar** escura e empoeirada.");
        espaço()
        while(salaDeEstarAtiva) {
            console.log("-> O ar aqui é pesado, com cheiro de mofo e algo indefinível, quase esquecido.");
            console.log("-> Móveis cobertos por lençóis brancos parecem fantasmas no crepúsculo do ambiente.");
            console.log("-> Uma lareira imponente domina uma das paredes, fria e apagada há muito tempo.");
            console.log("-> Você ouve um rangido distante vindo de algum lugar mais fundo na casa...");
            espaço();
            console.log("OPÇÕES:");
            espaço();

            console.log("(01) INVESTIGAR O SOFÁ");
            console.log("(02) EXAMINAR A LAREIRA");
            console.log("(03) PROCURAR ALGO POR PERTO");
            console.log("(04) VOLTAR PARA O CORREDOR");

            espaço();
            let escolhaSala = Number(prompt("> "));

            if (escolhaSala === 1) {
                console.clear();
                espaço();
                console.log ("-> Você se aproxima do sofá, um móvel antigo coberto por um lençol branco que esconde suas verdadeiras cores.");
                console.log ("-> Ao puxar o tecido empoeirado, a madeira range e um cheiro abafado de velhice paira no ar.");

                if (!medalhaprata) {
                    console.log("-> Debaixo de uma das almofadas, seus dedos encontram algo duro. É um pequeno medalhâo de prata.");
                    console.log("-> Frio ao toque, com um símbolo estranho gravado.");
                    medalhaprata = true;
                    pausarParaContinuar()
                    console.clear()
                    espaço()
                    console.log ("-> MEDALHA DE PRATA PEGA!")
                    pausarParaContinuar()
                    espaço()
                    console.log("-> Você sente que há algo a mais para explorar ou seguir em frente?");
                } else {
                    espaço()
                    console.log("-> Você já examinou o sofá. Não há mais nada de novo aqui.");
                }
                espaço();

            } else if (escolhaSala === 2) {
                console.clear();
                espaço();
                console.log("-> Você se dirige à lareira, sentindo o ar ficar mais frio à medida que se aproxima.");
                console.log("-> A fuligem no fundo indica que ela não é usada há muito tempo.");
                console.log("-> Ao passar a mão sobre o mármore, seus dedos se sujam.");
                console.log("-> No entanto, nada parece fora do lugar ou escondido à primeira vista. Apenas o vazio de um fogo que se apagou há décadas.");
                pausarParaContinuar()

            } else if (escolhaSala === 3) {
                console.clear();
                espaço();
                console.log("-> Você decide fazer uma varredura geral na sala, movendo-se com cautela entre os móveis empoeirados.");
                console.log("-> Seus olhos vasculham os cantos, procurando por qualquer indício de algo útil ou incomum.");

                if (!diarioAntigo) {
                    pausarParaContinuar()
                    espaço()
                    console.log("-> Em uma estante quase invisível, sob uma camada grossa de poeira, você encontra um diário antigo.");
                    console.log("-> Suas páginas estão amareladas, e a capa de couro está gasta pelo tempo.");
                    diarioAntigo = true;
                    pausarParaContinuar()
                    espaço()
                    console.log("-> DIARIO ANTIGO PEGO!")
                    pausarParaContinuar()
                    console.log("-> Você sente que há algo a mais para explorar ou seguir em frente?");
                } else {
                    console.log("-> Você já vasculhou a sala. Não há mais nada de novo a ser encontrado por aqui.");
                    console.clear()
                }
                espaço();

            } else if (escolhaSala === 4) {
                console.clear();
                espaço();
                console.log("-> Você decide que já explorou o suficiente na Sala de Estar por enquanto.");
                console.log("-> Com cautela, você se vira e volta para o corredor principal.");
                salaDeEstarAtiva = false; // Sai do loop da Sala de Estar
                // `jogocorredor` não é mais a variável de controle do corredor principal
                espaço();

            } else {
                Opcãoinvalida();
            }
        }

    } else if (corredor == 3) { // Opção 03: Á FRENTE = BANHEIRO
        banheiro = true; // Marca o banheiro como visitado
        let banheiroAtivo = true; // Loop para o banheiro

        while(banheiroAtivo) {
            console.clear();
            espaço();
            console.log("-> Você avança pelo corredor até chegar ao banheiro. A porta está entreaberta, revelando um cômodo úmido e escuro.");
            console.log("-> O espelho sobre a pia está trincado, e uma torneira goteja incessantemente, quebrando o silêncio.");
            console.log("-> Há uma sensação estranha no ar, como se algo tivesse acontecido ali recentemente.");
            espaço();
            console.log("OPÇÕES:");
            espaço();
            console.log("(01) EXAMINAR O ESPELHO");
            console.log("(02) ABRIR O ARMÁRIO DO BANHEIRO");
            console.log("(03) VERIFICAR A BANHEIRA");
            console.log("(04) VOLTAR PARA O CORREDOR");
            console.log("(05) FUGIR PELA JANELA")
            espaço();

            let escolhaBanheiro = Number(prompt("> "));

            if (escolhaBanheiro === 1) { // EXAMINAR O ESPELHO
                console.clear();
                espaço();
                console.log("-> Você se aproxima do espelho quebrado. Os cacos refletem sua imagem distorcida, quase como um monstro.");
                console.log("-> Ao olhar mais de perto, você nota um risco profundo que parece ter sido feito por uma unha, ou algo pior...");
                console.log("-> Nada além do seu próprio reflexo aterrorizado é visível.");
                pausarParaContinuar()
            } else if (escolhaBanheiro === 2) { // ABRIR O ARMÁRIO DO BANHEIRO
                console.clear();
                espaço();
                console.log("-> Você puxa a porta enferrujada do pequeno armário acima da pia. Ele range, revelando um interior vazio, salvo por algumas teias de aranha.");
                console.log("-> Nenhuma pista, nenhum item útil. Apenas o eco da sua própria desilusão.");
                pausarParaContinuar()
            } else if (escolhaBanheiro === 3) { // VERIFICAR A BANHEIRA
                console.clear();
                espaço();
                console.log("-> Você se arrasta até a banheira suja. A porcelana está rachada e descolorida. Uma mancha escura no fundo da banheira chama sua atenção.");
                console.log("-> Não é sujeira comum. É um tom de ferrugem muito forte. Você decide não tocar.");
                console.log("-> A água que goteja da torneira ecoa, tornando o ambiente ainda mais perturbador.");
                pausarParaContinuar()
            } else if (escolhaBanheiro === 4) { // VOLTAR PARA O CORREDOR
                console.clear();
                espaço();
                console.log("-> O ambiente do banheiro te deixa inquieto. Você decide que é melhor voltar para o corredor.");
                banheiroAtivo = false; // Sai do loop do banheiro
                espaço();
            } else if (escolhaBanheiro === 5) { // FUGIR PELA JANELA
                console.clear();
                espaço();
                console.log("-> Você não pensa duas vezes. Seus olhos se fixam na pequena janela acima do vaso sanitário.");
                console.log("-> Com um empurrão desesperado, o vidro se estilhaça e você se espreme pela abertura, caindo de barriga na lama lá fora.");
                pausarParaContinuar()
                menosVidaM();
                espaço()
                console.log("-> A adrenalina te faz levantar. Os gritos do lenhador ecoam da casa, mas você já está correndo.");
                console.log("-> A escuridão da cidade te abraça. Você conseguiu fugir da casa, por pouco!");
                pausarParaContinuar();
                banheiroAtivo = false;
                jogocorredorPrincipal = false; // Sai do loop principal do corredor também
            } else {
                Opcãoinvalida();
            }
        }

    } else if (corredor == 4) { // INVENTARIO
        inventario()
    } else if (corredor == 5) { // SANIDADE
        sanidade()
    } else if (corredor == 6) { // VIDA
        mostrarVida()
    } else {
        Opcãoinvalida()
    }
}
// Este loop permanece, conforme solicitado, mesmo que o fluxo não chegue aqui após o 'process.exit' ou a fuga.
while (jogoAtivo2) {

}