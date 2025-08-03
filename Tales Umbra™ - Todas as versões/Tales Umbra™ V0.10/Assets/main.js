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
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
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
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
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
    // Usamos um loop infinito que só será quebrado quando o jogador escolher sair.
    while (true) {
        console.clear();
        console.log("---------------------------------------------------------------------------");
        console.log("-> Você tem no seu inventário as seguintes coisas:");
        console.log("---------------------------------------------------------------------------");

        // Criamos um contador para saber se algum item foi exibido.
        let itensNoInventario = 0;

        // Agora, verificamos cada item separadamente.
        if (lanterna) {
            console.log("-> LANTERNA");
            itensNoInventario++; // Aumenta o contador se o item existe.
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
        // Se você quiser adicionar um novo item, basta adicionar um novo `if` aqui!

        // Se o contador for 0, significa que o inventário está vazio.
        if (itensNoInventario === 0) {
            console.log("-> Você ainda não pegou nenhum item!");
        }

        console.log("---------------------------------------------------------------------------");
        console.log("-> Você quer voltar?");
        console.log("1. SIM");
        console.log("2. NÃO");
        console.log("---------------------------------------------------------------------------");
        
        // Renomeei a variável para não ter o mesmo nome da função.
        let escolha = Number(prompt("> "));

        if (escolha === 1) {
            console.clear();
            break; // Quebra o loop e sai da função de inventário.
        }
        // Se a escolha for 2 (ou qualquer outra coisa), o loop continua e o inventário é mostrado de novo.
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
            let s2 = Number(prompt("> "))
    
            if (s2 == 1) {
                console.log ("")
                console.clear()
                break;
            } 
            if (s2 == 2) {
            }
}
}
}
function maisSanidade() {

        valorsanidade+=10
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
                    let s3 = Number(prompt("> "))
            
                    if (s3 == 1) {
                        console.log ("")
                        console.clear()
                        break;
                    } 
                    if (s3 == 2) {
                    }
                    
        }
    }


function sanidade() {
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
            let s1 = Number(prompt("> "))
    
            if (s1 == 1) {
                console.log ("")
                console.clear()
                break;
            } 
            if (s1 == 2) {
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
            let v1 = Number(prompt("> "))
    
            if (v1 == 1) {
                console.log ("")
                console.clear();
                break;
            } 
            if (v1 == 2) {
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
                let v2 = Number(prompt("> "))
        
                if (v2 == 1) {
                    console.log ("")
                    console.clear();
                    break;
                } 
                if (v2 == 2) {
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
                    let v3 = Number(prompt("> "))
            
                    if (v3 == 1) {
                        console.log ("")
                        console.clear();
                        break;
                    } 
                    if (v3 == 2) {
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
            while (v4 != 1) {
                console.clear();
                console.log("---------------------------------------------------------------------------");
                console.log ("-> Você agora tem " ,Vida, "% de vida")
                console.log("---------------------------------------------------------------------------");
                console.log ("-> Você quer continuar?")
                        console.log ("1. SIM")
                        console.log ("2. NÃO")
                        console.log("---------------------------------------------------------------------------");
                        let v4 = Number(prompt("> "))
                
                        if (v4 == 1) {
                            console.log ("")
                            console.clear();
                            break;
                        } 
                        if (v4 == 2) {
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
                        let v5 = Number(prompt("> "))
                
                        if (v5 == 1) {
                            console.log ("")
                            console.clear();
                            break;
                        } 
                        if (v5 == 2) {
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
            while (prompt("> ") !== '1') {
                // Fica em loop até o jogador pressionar 1
            }
            process.exit(90)
        }











// AREA DE VARIAVEIS
let Login;
let Usuario;
let Senha;
const accountFilePath = '../Conta/Containfo.txt';
let overwrite = "S"
let temChave = false; // Controle de posse da chave
let jogoAtivo = true; // Flag para continuar o jogo
let jogoAtivo1 = true;
let iniciofalha = false;
let papega = false;
let tentanovamente = true;
let floresta1 = ("");
let atalho = false;
let gameover = false;
let saiudafloresta = false;
let floresta2 = ("");
let jogoAtivo2 = true
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
let s1
let s2
let s3
let contagemS
let Vida = 100;
let v1
let v2
let v3
let v4
let v5
let v6
let chavedois
let teste
let teste2
let valorsanidade = 100
let destruir = false
let REAL_ENDINGfile = false
let SECRET_ENDINGfile = false
let GOOD_ENDINGfile = false
let BAD_ENDINGfile = false
let escrivaninha = false
let lanterna = false
let corda = false
let cozinha = false
let sala = false
let banheiro = false













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
while (jogoAtivo1) {
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
        
    } else if (corredor == 2) {

    } else if (corredor == 3) {
        
    } else if (corredor == 4) {
        inventario()
    } else if (corredor == 5) {
        sanidade()
    } else if (corredor == 6) {
        mostrarVida()
    } else {
        Opcãoinvalida()
    }
}


