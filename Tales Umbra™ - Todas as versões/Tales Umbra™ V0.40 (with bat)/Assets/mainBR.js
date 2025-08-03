const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

//Mensagem para o usuario final: Se você esta vendo isso saiba que essa é uma mensagem escrita pelo criador do jogo
//MoonChildFi (Lukz) e que eu agradeço muito por estar tendo a autonomia de ver o codigo para aprender, a unica
//coisa que peço é não copiar e colar o meu codigo e reelançar o meu jogo so pra vc, pq como pode ver ele não usa nenhuma
//criptorafia. É apena isso que eu peço.





//fduncoes
function Opcãoinvalida() {
    console.clear()
    console.log("---------------------------------------------------------------");
    console.log ("-> Opção invalida!")
    console.log("---------------------------------------------------------------");
    console.log("-> Pressione 1 para fechar...");
    console.log("---------------------------------------------------------------");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    process.exit(90)
}

function pausarParaFechar() {
    console.clear()
    console.log("---------------------------------------------------------------");
    console.log("-> Pressione 1 para fechar...");
    console.log("---------------------------------------------------------------");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    process.exit(90)
}

function pausarParaContinuar() {
    console.log("---------------------------------------------------------------");
    console.log("-> Pressione 1 para continuar...");
    console.log("---------------------------------------------------------------");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    console.clear();
}

function pistas() {
    // Usamos um loop infinito que só será quebrado quando o jogador escolher sair.
    while (true) {
        // Criamos um contador para saber se algum item foi exibido.
        let itensNoInventario = 0;
        console.clear();
        console.log ("---------------------------------------------------------------------------")
        console.log("-> Você tem", itensNoInventario,"pistas:");
        console.log ("---------------------------------------------------------------------------")

        // Criamos um contador para saber se algum item foi exibido.

        // Agora, verificamos cada item separadamente.
        if (pistadelegado) {
            console.log ("-> Desaparecimentos após as 22 horas")
            console.log ("---------------------------------------------------------------------------")
            console.log ("-> Crianças entre 6 a 10 anos")
            console.log ("---------------------------------------------------------------------------")
            console.log ("-> Desaparecem proximo á RAVENHILL FLOREST")
            console.log ("---------------------------------------------------------------------------")
            itensNoInventario++; // Aumenta o contador se o item existe.
            itensNoInventario++
            itensNoInventario++
        }

        // Se quiser adicionar um novo item, basta adicionar um novo `if` aqui!

        // Se o contador for 0, significa que o inventário está vazio.
        if (itensNoInventario === 0) {
            console.log("-> Você ainda não achou nenhuma pista!");
        }

        console.log ("---------------------------------------------------------------------------")
        console.log("-> Você quer voltar?");
        console.log ("---------------------------------------------------------------------------")
        console.log("[01] SIM");
        console.log("[02] NÃO");
        console.log ("---------------------------------------------------------------------------")
        
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
        console.log("---------------------------------------------------------------");
        console.log ("-> Você chegou em um nivel muito baixo de sanidade durante o jogo!")
        console.log ("-> Você enlouqueceu e se perdeu na floresta para sempre!")
        console.log("---------------------------------------------------------------");
        console.log ("-> Fim de jogo")
        console.log("---------------------------------------------------------------");
        process.exit(1)
    } else {
        valorsanidade-=10
    while (s2 != 1) {
        console.clear()
    console.log("---------------------------------------------------------------");
    console.log ("-> AVISO: SUA SANIDADE CAIU!")
    console.log ("-> Você agora tem " ,valorsanidade, "% de sanidade")
    console.log("---------------------------------------------------------------");
    console.log ("-> Você quer continuar?")
            console.log ("[01] SIM")
            console.log ("[02] NÃO")
            console.log("---------------------------------------------------------------");
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
            console.log("---------------------------------------------------------------");
            console.log ("-> AVISO: SUA SANIDADE SUBIU!")
            console.log ("-> Você agora tem " ,valorsanidade, "% de sanidade")
            console.log("---------------------------------------------------------------");
            console.log ("-> Você quer continuar?")
                    console.log ("[01] SIM")
                    console.log ("[02] NÃO")
                    console.log("---------------------------------------------------------------");
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
    console.log("---------------------------------------------------------------");
    console.log ("-> Sua sanidade está em ",valorsanidade, "%")
    console.log("---------------------------------------------------------------");
            console.log ("-> Você quer voltar as opções anteriores?")
            console.log ("[01] SIM")
            console.log ("[02] NÃO")
            console.log("---------------------------------------------------------------");
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
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você perdeu muita vida!")
        console.log ("---------------------------------------------------------------");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log ("---------------------------------------------------------------");
        process.exit(1);
    }
Vida-= 50
while (v1 != 1) {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log ("-> AVISO: SUA VIDA CAIU GRAVIMENTE!")
    console.log ("-> Você agora tem " ,Vida, "% de vida")
    console.log("---------------------------------------------------------------");
    console.log ("-> Você quer continuar?")
            console.log ("[01] SIM")
            console.log ("[02] NÃO")
            console.log("---------------------------------------------------------------");
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
    console.log ("---------------------------------------------------------------");
    console.log ("-> Você perdeu muita vida!")
    console.log ("---------------------------------------------------------------");
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    console.log ("---------------------------------------------------------------");
    process.exit(1);
}
}

function menosVidaM() {
    if(Vida <20){
        console.clear();
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você perdeu muita vida!")
        console.log ("---------------------------------------------------------------");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log ("---------------------------------------------------------------");
        process.exit(1);
    }
    Vida-= 20
    while (v2 != 1) {
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log ("-> AVISO: SUA VIDA CAIU EM NIVEL MEDIO!")
        console.log ("-> Você agora tem " ,Vida, "% de vida")
        console.log("---------------------------------------------------------------");
        console.log ("-> Você quer continuar?")
                console.log ("[01] SIM")
                console.log ("[02] NÃO")
                console.log("---------------------------------------------------------------");
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
        console.log ("---------------------------------------------------------------");
        console.log ("-> Você perdeu muita vida!")
        console.log ("---------------------------------------------------------------");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log ("---------------------------------------------------------------");
        process.exit(1);
    }
    }

    function menosVidaP() {
        if(Vida <20){
            console.clear();
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você perdeu muita vida!")
            console.log ("---------------------------------------------------------------");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("---------------------------------------------------------------");
            process.exit(1);
        }
        Vida-= 10
        while (v3 != 1) {
            console.clear();
            console.log("---------------------------------------------------------------");
            console.log ("-> AVISO: SUA VIDA CAIU!")
            console.log ("-> Você agora tem " ,Vida, "% de vida")
            console.log("---------------------------------------------------------------");
            console.log ("-> Você quer continuar?")
                    console.log ("[01] SIM")
                    console.log ("[02] NÃO")
                    console.log("---------------------------------------------------------------");
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
            console.log ("---------------------------------------------------------------");
            console.log ("-> Você perdeu muita vida!")
            console.log ("---------------------------------------------------------------");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("---------------------------------------------------------------");
            process.exit(1);
        }
        }

        function mostrarVida() {
            while (v4 != 1) {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log ("-> Você agora tem " ,Vida, "% de vida")
                console.log("---------------------------------------------------------------");
                console.log ("-> Você quer continuar?")
                        console.log ("[01] SIM")
                        console.log ("[02] NÃO")
                        console.log("---------------------------------------------------------------");
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
                console.log ("---------------------------------------------------------------");
                console.log ("-> Você perdeu muita vida!")
                console.log ("---------------------------------------------------------------");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("---------------------------------------------------------------");
                process.exit(1);
            }
            Vida-= 70
            while (v5 != 1) {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log ("-> AVISO: SUA VIDA CAIU EXTREMAMENTE!")
                console.log ("-> Você agora tem " ,Vida, "% de vida")
                console.log("---------------------------------------------------------------");
                console.log ("-> Você quer continuar?")
                        console.log ("[01] SIM")
                        console.log ("[02] NÃO")
                        console.log("---------------------------------------------------------------");
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


function conquistaannoying(nomeArquivo){
    const Achievementspasta = '../Achievements'
    const caminhocompleto = path.join(Achievementspasta, nomeArquivo)

    return fs.existsSync(caminhocompleto)
}

const arquivoconquistasecreta = 'ANNOYING_ENDING.bin'
let jogadortem = false


//variaveis
let inicio = false
let jogoativo1 = true
let jogoativo2 = true
let jogoativo3 = true
let jogoativo4 = true
let atender
let contexto = false
let contador = 0
let hos = false
let ANNOYING_ENDING = false
let delega1 =false
let poli = false
let pistadelegado = false


//jogo em si



if(conquistaannoying(arquivoconquistasecreta)){
    jogadortem = true
} else {

}

function lerNumeroDoArquivo(nomeDoArquivo) {
    const pastaDosArquivos = '../'; 
    const caminhoCompleto = path.join(pastaDosArquivos, nomeDoArquivo);
  
    try {
      const conteudoDoArquivo = fs.readFileSync(caminhoCompleto, 'utf8');
      
      const numeroLido = parseInt(conteudoDoArquivo.trim(), 10); 
  
      if (isNaN(numeroLido)) {
        return 0; 
      }
  
      return numeroLido;
      
    } catch (erro) {
      return 0; 
    }
  }

  const numero = lerNumeroDoArquivo('HAHAHAHAHAHAHA.txt')

/*if(jogadortem == true && numero == 0){
    console.clear()
    console.log ("---------------------------------------------------------------------------")
    console.log ("-> Serio? Você acha mesmo que é só fechar e abrir o jogo?")
    console.log ("---------------------------------------------------------------------------")
    if (jogadortem == true){
        const conteudo1000 = "1";
        fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo1000, 'utf8');
    }
    process.exit(01)
} else if (jogadortem == true && numero == 1){
    console.log ("?????????????")
}*/



if(numero == 3){
    exec('start cmd.exe /c goodbye.bat')
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHAHAHAHAHA")
    process.exit(01)
} else if (numero == 2){
console.clear()
console.log ("---------------------------------------------------------------------------")
console.log ("-> Eu acho que você não entendeu, né?")
console.log ("-> Você NUNCA teve controle neste mundo...")
console.log ("-> E agora eu irei te mostrar como as coisas são por aqui!")
console.log ("---------------------------------------------------------------------------")
exec('start cmd.exe /c goodbye.bat')
const conteudo10002 = "3";
    fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo10002, 'utf8');
    process.exit(01)
} else if (numero == 1) {
console.clear()
console.log ("---------------------------------------------------------------------------")
console.log ("-> Você acha mesmo que depois do que você fez eu irei te deixar em paz???")
console.log ("---------------------------------------------------------------------------")
    const conteudo10001 = "2";
    fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo10001, 'utf8');
    process.exit(01)
} else if (jogadortem == true) {
    console.clear()
    console.log ("---------------------------------------------------------------------------")
    console.log ("-> Serio? Você acha mesmo que é só fechar e abrir o jogo?")
    console.log ("---------------------------------------------------------------------------")
    if (jogadortem == true){
        const conteudo1000 = "1";
        fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo1000, 'utf8');
    }
    process.exit(01)
}

//jogo em si
    console.log (" ");
console.log (" ");
console.log (" ")
console.log (" ");
console.log (" ");
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
        console.log ("--- TALES UMBRA: A ORIGEM DA LUA PÁLIDA ---");
        console.log ("---------------------------------------------------------------------------")
        console.log ("--- Versão 0.30b ---")
        console.log ("---------------------------------------------------------------------------")
        const folderPath = '../Achievements';
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
console.log(`Finais completados: ${count}/5`);
console.log('Lista de finais:', finais);
        console.log ("---------------------------------------------------------------------------")
        console.log ("REGRAS:")
        console.log ("---------------------------------------------------------------------------")
        console.log ("[01] Não utilize caracteres especiais (ex:?:^}:{)")
        console.log ("[02] Não feche o jogo durante uma ação, isso pode afetar o seu progresso!")
        console.log ("[03] Se houver [->] narração, caso contrario [''] fala de personagem.")
        console.log ('[04] Para a melhor experiencia, por favor, evite redimensionar');
        console.log ('a janela do terminal. Recomenda-se o tamanho inicial. (se estiver no windows');
        console.log ("10/11, deixe em tela cheia!)")
        console.log ("---------------------------------------------------------------------------")
        console.log ("INICIAR?")
        console.log ("---------------------------------------------------------------------------")
        console.log ("[01] SIM")
        console.log ("[02] NÃO (Encerra o jogo)")
        console.log ("---------------------------------------------------------------------------")
        inicio = Number(prompt("> "))

        if (inicio == 2) {
            console.clear()
            console.log ("---------------------------------------------------------------------------")
            console.log ("-> Que Pena!!")
            console.log ("---------------------------------------------------------------------------")
            process.exit(02)
        } else if (inicio > 2 || inicio < 1){
            Opcãoinvalida()
            process.exit(01)
        }

        console.clear();
        const accountFilePath = '../Account/Containfo.txt';
let Login
let overwrite = "S"
        console.log("---------------------------------------------------------------");
            console.log("-> Você gostaria de criar uma conta?");
            console.log("-> (Apenas para salvamento local!)");
            console.log("---------------------------------------------------------------");
            console.log ("-> Opções");
            console.log("---------------------------------------------------------------");
            console.log ("(1) Criar Conta");
            console.log ("(2) Ignorar");
            console.log("---------------------------------------------------------------");
            Login = Number(prompt("> "));
            
            if (Login == 1) {
                console.clear();
            
                if (fs.existsSync(accountFilePath)) {
                    console.log("---------------------------------------------------------------");
                    console.log("-> Um arquivo de conta já existe!");
                    console.log("-> Você gostaria de sobrescrevê-lo? (S/N)");
                    console.log("---------------------------------------------------------------");
                    overwrite = prompt("> ").toUpperCase();
            
                    if (overwrite !== 'S') {
                        console.clear();
                        console.log("---------------------------------------------------------------");
                        console.log("-> Criação de conta cancelada. Arquivo existente não foi sobrescrito.");
                        console.log("---------------------------------------------------------------");
            
                    }
                }
                if (overwrite == "S") {
                console.log("---------------------------------------------------------------");
                Usuario = prompt("Digite o nome de usuário: ");
                Senha = prompt("Digite a sua senha: ");
                console.log("---------------------------------------------------------------");
            
                const conteudo =
                                 "Nome: " + Usuario + "\r\n" +
                                 "Senha: " + Senha + "\r\n";
            
                fs.writeFileSync(accountFilePath, conteudo, 'utf8');
            
                console.log("-> Conta criada e salva com sucesso!");
            }
            } else {
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log("-> Criação de conta ignorada!");

            }
            
            pausarParaContinuar()


while(jogoativo1 == true) {
    if (contexto == false) {
    console.log ("---------------------------------------------------------------------------")
console.log("[CONTEXTO]")
console.log ("---------------------------------------------------------------------------")
console.log("-> Você é Elias Paulsen, um detetive muito conhecido, você tem 2 filhas")
console.log("(Karen Paulsen e Ana Clara Paulsen), com o seu trabalho detetive tomando")
console.log("muito do seu tempo")
console.log("você não consegue passar muito tempo com suas duas filhas, mas-")
pausarParaContinuar()
    }
contexto  = true
console.log ("---------------------------------------------------------------------------")
console.log("-> Seu celular está vibrando...")
console.log("-> É a Laura sua colega e ajudante...")
console.log ("---------------------------------------------------------------------------")
console.log ("ATENDER?")
console.log ("---------------------------------------------------------------------------")
console.log ("[01] SIM")
console.log ("[02] NÃO")
console.log ("---------------------------------------------------------------------------")
atender = Number(prompt("> "))

if (atender == 2){
    console.clear()
    console.log ("---------------------------------------------------------------------------")
    console.log("-> Você não atende... depois de um tempo.")
} else if (atender != 1){
    Opcãoinvalida()
}

console.clear()
console.log ("---------------------------------------------------------------------------")
console.log ("-> LAURA: 'Eai Elias, queria te dizer que surgiu uma oporturnidade para nós dois!'")
console.log ("---------------------------------------------------------------------------")
console.log ("-> ELIAS: 'Oi Laura, que otimo do que se trata o caso?'")
console.log ("---------------------------------------------------------------------------")
console.log ("-> LAURA: 'Bom, pelos papeis que eu tenho na minha mesa hoje cedo se trata de viajar")
console.log ("para uma pequena cidade pra investigar sobre varios desaparecimentos de crianças")
console.log ("e como é um trabalho que não seria muito facil, ele ja vai ser custeado pela policia")
console.log ("local e ficariamos lá por 1 mes!'")
console.log ("---------------------------------------------------------------------------")
console.log ("-> ELIAS: 'Nossa, que otima oportunidade mas acho que não irei poder, pois'")
console.log ("não tenho ninguem pra ficar com minhas 2 fiilhas.")
console.log ("---------------------------------------------------------------------------")
console.log ("-> LAURA: 'Ah relaxa, pelo o que eu vi, é caso de nivel baixo então não precisa")
console.log ("se preocupar com suas filhas elas podem ir junto!'")
console.log ("---------------------------------------------------------------------------")
console.log ("-> ELIAS: 'Bom sendo assim, não vejo muito problema. que dia nós iremos?'")
console.log ("---------------------------------------------------------------------------")
console.log ("-> LAURA: 'Bom ainda não tenho certeza, mas acho que será na proxima semana!'")
console.log ("---------------------------------------------------------------------------")
console.log ("-> ELIAS: 'Ok, nos vemos no seu escritorio para falar mais sobre, Tchau!'")
console.log ("---------------------------------------------------------------------------")
console.log ("-> LAURA: 'Ok, Tchau!'")
pausarParaContinuar()






console.clear()
console.log ("---------------------------------------------------------------------------")
console.log ("-> 1 SEMANA SE PASSA...")
console.log ("-> VOCÊ, LAURA E SUAS FILHAS VIAJAM...")
pausarParaContinuar()
jogoativo1 = false

}// fim do loop jogo 1

console.clear()

while (jogoativo2 == true) {
//inicio na cidade
console.log ("-------------------------------------------------------------------")
console.log ("-> CAPÍTULO 1 – A CIDADE SILENCIOSA")
console.log ("-------------------------------------------------------------------")
console.log ("-> A van policial passa pelos portões enferrujados de Ravenhill.")
console.log ("-> Elias mantém os olhos na estrada úmida, cercada por árvores")
console.log ("-> retorcidas, que parecem observá-los.")
console.log ("-> Suas filhas dormem no banco de trás, enroladas em cobertores.")
console.log ("-> Laura, ao lado, revisa papéis com expressão preocupada.")
console.log ("-> O rádio chia, sem sintonizar uma estação local, apenas estática.")
console.log ("-> Você sente que algo está errado. O silêncio da cidade parece")
console.log ("-> gritar, um som que não existe, mas oprime.")
console.log ("-> Laura suspira: 'Disseram que foi um desaparecimento... mas tem")
console.log ("-> coisa errada. Muito errada.'")
console.log ("-> Elias: 'Sempre tem, quando envolve crianças inocentes...'")
console.log ("-> A placa enferrujada de boas-vindas da cidade pisca, como se")
console.log ("-> avisasse em vez de acolher:")
console.log ("===================================================================")
console.log ("        ‘BEM-VINDO A RAVENHILL – Onde a Lua sempre brilha’")
console.log ("===================================================================")
console.log ("-> Você sente um calafrio percorrer sua espinha. As ruas estão")
console.log ("-> vazias. Postes piscam com luz amarelada. As casas estão fechadas")
console.log ("-> e parecem espiar.")
console.log ("-> No banco de trás, Karen murmura dormindo, com uma voz estranha,")
console.log ("-> quase sussurrante: 'A Lua vai me levar...'")
console.log ("-> Você se vira, o coração apertado de preocupação. Ana Clara")
console.log ("-> apenas dorme, agarrada à sua boneca favorita.")
console.log ("-> Laura te olha, percebendo sua angústia: 'Ela tá bem?'")
console.log ("-> Você força um sorriso fraco, tentando convencer a si mesmo:")
console.log ("-> 'Deve estar sonhando. É só um pesadelo.'")
console.log ("-------------------------------------------------------------------")
console.log ("OPÇÕES")
console.log ("-------------------------------------------------------------------")
console.log ("[01] Continuar para a Delegacia")
console.log ("[02] Olhar ao redor da hospedaria")
console.log ("-------------------------------------------------------------------")
console.log ("[03] Sair do jogo")
console.log ("-------------------------------------------------------------------")
console.log (contador)
let cidade = Number(prompt("> "))

if (cidade == 1) {
    if(contador == 1) {
    console.clear()
    console.log ("-------------------------------------------------------------------")
    console.log ("-> Depois de você olhar a hospedaria...")
    console.log ("-> você decidi ir para a delegacia!")
    pausarParaContinuar()
    jogoativo2 = false
    } else if (contador == 3) {
        console.clear()
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Depois de deixar a laura estressada...")
        console.log ("-> Você segue para a delegacia!")
        pausarParaContinuar()
        jogoativo2 = false
    } else {
        console.clear()
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Você sem nem pensar escolhe ir para a delegacia!")
        pausarParaContinuar()
        jogoativo2 = false
    }

} else if (cidade == 2){
    if (hos == false && contador == 0){
hos = true
contador++
console.clear()
console.log ("-------------------------------------------------------------------")
console.log("-> Você decidi olhar ao redor da hospedaria.")
console.log ("-------------------------------------------------------------------")
console.log ("-> ELIAS: 'Laura, você poderia dar uma volta na hospedaria'")
console.log ("-------------------------------------------------------------------")
console.log ("-> LAURA 'P-Por que Elias? você está bem? desde que chegamos")
console.log ("-> você anda meio estranho.'")
console.log ("-------------------------------------------------------------------")
console.log ("-> ELIAS: 'Não! não é nada não, é só porque eu quero que seja")
console.log ("-> rapido esse trabalho para eu poder aproveitar minhas filhas depois'")
console.log ("-------------------------------------------------------------------")
console.log ("-> LAURA: 'Ah, eu te entendo, esses ultimos dias deu pra notar")
console.log ("-> que você tava sentindo saudade de falar e brincar com elas.'")
console.log ("-------------------------------------------------------------------")
console.log ("-> ELIAS: Poisé! então só uma olhada pode ser?")
console.log ("-------------------------------------------------------------------")
console.log ("-> LAURA: Ok!")
console.log ("-------------------------------------------------------------------")
console.log ("")
console.log("")
console.log ("-------------------------------------------------------------------")
console.log ("-> Laura parece tensa e preocupada com algo depois da conversa entre vocês!")
console.log ("-> Vocês dão uma olhada na hospedaria, mas não acham nada de anormal")
console.log ("-> apenas uma corda que parece estar cortada. Mas você a ignora.")
pausarParaContinuar()
    } else  if (hos == true && contador < 4){
        console.clear()
        contador++
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Você já olhou a hospedaria!")
        console.log ("-> Se você tentar novamente, pode ser que a Laura perca a paciencia")
        pausarParaContinuar()
    } else if (hos = true && contador >= 4){
        console.clear()
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Laura perde a paciencia, com você enchendo o saco dela!")
        console.log ("-> ela decide que o trabalho não compensa a dor de cabeça")
        console.log ("-> que será ter que trabalhar com você.")
        console.log ("-------------------------------------------------------------------")
        console.log ("███████ ██  ██      ██  █████")
        console.log ("██          ████  ████ ██   ██")
        console.log ("█████   ██  ██  ██  ██     ██")
        console.log ("██      ██  ██      ██   ██")
        console.log ("██      ██  ██      ██   ██   ██  ██  ██")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Você conseguiu um dos finais! (ANNOYING_ENDING)")
        console.log ("-> ISSO IRÁ CAUSAR EFEITOS NO FUTURO!")
        console.log ("-------------------------------------------------------------------")
        ANNOYING_ENDING = true

        if (ANNOYING_ENDING == true){
            const conteudo = "VOCÊ COMPLETOU O FINAL CHATO";
            fs.writeFileSync('../Achievements/ANNOYING_ENDING.bin', conteudo, 'utf8');
        }
        process.exit()


    }



} else if (cidade == 3) {
console.clear()
console.log ("-------------------------------------------------------------------")
console.log ("-> Você escolheu sair, Tem certeza? (S/N)")
console.log ("-------------------------------------------------------------------")
let out = Number(prompt("> "))

if (out == "S" || "s") {
    console.log ("-------------------------------------------------------------------")
    console.log("-> SAINDO...")
    console.log ("-------------------------------------------------------------------")
    process.exit()
} else if (out == "N" || "n"){
    console.clear()
    pausarParaContinuar()
} else {
    Opcãoinvalida()
}

    
} else {
    Opcãoinvalida()
}




} // fim do loop jogo 2

console.clear()

while (jogoativo3 == true) {
    console.log ("-------------------------------------------------------------------")
    console.log ("-> Na delegacia, você vê três pessoas...")
    console.log ("-------------------------------------------------------------------")
    console.log ("OPÇÕES:")
    console.log ("-------------------------------------------------------------------")
    console.log ("[01] Delegado Local.")
    console.log ("[02] Policial.")
    console.log ("[03] Relator do caso.")
    console.log ("-------------------------------------------------------------------")
    console.log ("[04] Consultar Pistas")
    console.log ("-------------------------------------------------------------------")
    let dele = Number(prompt("> "))

console.clear()
    if (dele == 1){
        if (delega1 == true) {
            console.log ("-------------------------------------------------------------------")
            console.log ("-> Você ja falou com ele!")
            console.log ("-------------------------------------------------------------------")
            pausarParaContinuar()
        }
        delega1 = true
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Você inicia a conversa com o delegado!")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> ELIAS: 'Olá, sou o detetive Elias, estou encarregado do caso!'")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> DELEGADO: 'Olá, ouvi falar muito de você por aqui.")
        console.log ("Me chamo Lucio'!")
        console.log ("-------------------------------------------------------------------")
        console.log ("OPÇÕES:")
        console.log ("-------------------------------------------------------------------")
        console.log ("[01] 'Muito prazer!, Lucio! Você poderia me falar mais sobre o caso?'")
        console.log ("[02] 'Ah prazer, vamos direto ao ponto?'")
        console.log ("-------------------------------------------------------------------")

        let delega = Number(prompt("> "))
        console.clear()

        
        if(delega == 1) {
            console.log ("-------------------------------------------------------------------")
            console.log ("-> ELIAS: 'Muito prazer!, Lucio! Você poderia me falar mais sobre o caso?'")
            console.log ("-------------------------------------------------------------------")
        } else if (delega == 2) {
            console.log ("-------------------------------------------------------------------")
            console.log ("-> ELIAS: 'Ah prazer, vamos direto ao ponto?'")
            console.log ("-------------------------------------------------------------------")
            console.log ("-> Lucio olha pra você com uma expressão de como queria te mata!")
            console.log ("-------------------------------------------------------------------")
            console.log ("-> ATENÇÃO: Essa escolha poderá trazer consequencias")
            console.log ("-------------------------------------------------------------------")
        } else {
            Opcãoinvalida()
        }

        console.log ("-> LUCIO: 'Certo, o caso é o seguinte, nessa ultima semana varios pais")
        console.log ("tem relatado o desaparecimento de seus filhos.")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> ELIAS: 'Ta, mas vocês acharam mais alguma informação?")
        console.log ("Tipo: hora que desapareceu, local ou se tem alguma pista!")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> LUCIO: 'Bom pelo o que eu vi nos documentos, todos eles seguem um padrão!'")
        console.log ("-> Desaparecimentos após as 22 horas")
        console.log ("-> Crianças entre 6 a 10 anos")
        console.log ("-> Desaparecem proximo á RAVENHILL FLOREST")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> ELIAS: 'Ok vou anotar no meu caderno sobre isso, obrigado pelas informações!'")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Você anota as seguintes pistas em seu caderno:")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Desaparecimentos após as 22 horas")
        console.log ("-> Crianças entre 6 a 10 anos")
        console.log ("-> Desaparecem proximo á RAVENHILL FLOREST")
        pausarParaContinuar()
    

    } else if (dele == 2){
        if (poli == false) {
        poli = true
        console.log ("-------------------------------------------------------------------")
        console.log ("-> Você decidi falar com o policial primeiro!")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> ELIAS: 'Olá, bom dia!'")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> POLICIAL: 'Ah oi! Você deve ser o Elias?'")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> ELIAS: 'Sim, eu estou encarregado do caso sobre os desaparecimentos!'")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> POLICIAL: 'Ah estivemos coletando algumas informações, quem tava")
        console.log ("no comando é o delegado, por que você não fala com ele?'")
        console.log ("-------------------------------------------------------------------")
        console.log ("-> ELIAS: Ok, vou lá perguntar a ele! obrigado pela ajuda!")
        pausarParaContinuar()
    }
    } else if (dele == 3) {

    } else if (dele == 4) {
        pistas()
    } else {
        Opcãoinvalida()
    }
}

        
//comando do fs