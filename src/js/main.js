//Código menos eficiente para checar quando um botão é apertado
//Favor checar Better-main.js para ver o código mais eficiente - Guilherme

var titleElement = document.getElementById('page-title');
var textElement = document.getElementById('page-text');

function IPTab(){
    titleElement.innerHTML = 'IP';
    textElement.innerHTML = 'Endereço IP é um endereço exclusivo que identifica um dispositivo na Internet ou em uma rede local.<br><br>IP vem do inglês "Internet Protocol" (protocolo de rede) que consiste em um conjunto de regras que regem o formato de dados enviados pela Internet ou por uma rede local.<br><br>Endereços IP geralmente consistem em quatro números que variam de 0 a 255, separados por pontos.<br> Em cada endereço IP, você pode ver o ID da rede, atribuído à sua rede pelo seu provedor de internet, e o ID do host, o identificador exclusivo atribuído a cada dispositivo conectado a essa rede específica.';
}

function PingTab(){
    titleElement.innerHTML = 'Ping';
    textElement.innerHTML = '<h2>O que é?</h2> <br>Ping é uma ferramenta de diagnóstico usada para testar a conectividade entre dois dispositivos em uma rede.<br>O nome vem do som que um sonar faz, que é uma analogia para enviar um sinal e esperar uma resposta.<br><br><h2>Como funciona?</h2><br>Quando você usa o comando ping, ele envia pacotes de dados ICMP (Internet Control Message Protocol) para o endereço IP de destino.<br>Se o destino estiver acessível, ele responde com um pacote de volta. O tempo que leva para a resposta voltar é chamado de "latência" ou "tempo de resposta", medido em milissegundos (ms).<br><br><h2>Para que serve?</h2><br>É útil para verificar se um dispositivo está acessível na rede e para medir a rapidez com que a comunicação ocorre. Problemas de alta latência ou pacotes perdidos podem indicar problemas de rede.';
}

function TracerouteTab(){
    titleElement.innerHTML = 'Traceroute';
    textElement.innerHTML = 'O TRACERT (Trace Route), um utilitário de linha de comando que pode ser usado para rastrear o caminho que um pacote IP (Internet Protocol) faz até o seu destino.<br><br>O TRACERT imprime uma lista ordenada dos roteadores intermediários que devolvem mensagens de "Tempo Excedido" de ICMP.<br><br>Usar a opção -d com o comando tracert instrui o TRACERT a não realizar uma consulta de DNS em cada endereço IP, a fim de que o TRACERT reporte o endereço IP da interface próxima dos roteadores.';
}

function DNSTab(){
    titleElement.innerHTML = 'DNS';
    textElement.innerHTML = '<h2>Definição</h2><br>DNS é como uma agenda telefônica para a internet. Ele traduz nomes de domínio legíveis por humanos (como www.google.com) em endereços IP numéricos (como 172.217.15.78) que os computadores usam para se comunicar entre si.<br><br><h2>Função Principal</h2><br>Sem o DNS, você teria que lembrar e digitar endereços IP de cada site que deseja visitar, o que seria bastante complicado. O DNS facilita a navegação ao permitir que você use nomes de domínio mais simples e memoráveis.';
}

function HubsTab(){
    titleElement.innerHTML = 'Hubs';
    textElement.innerHTML = 'Os Hubs são espaços físicos e/ou virtuais nos quais empresas e startups podem trabalhar e ter acesso a contatos, investidores, mentores e fornecedores.<br><br>Um hub funciona basicamente com a retransmissão de pacotes na largura de banda compartilhada, possui apenas um domínio de colisão e um único domínio de broadcast. Isso significa que o equipamento não permite a criação de segmentos de rede (VLAN) e tão pouco suporta protocolos como SNMP ou STP.<br><br>Pouca gente sabe, mas o HUB é um equipamento muito presente em lugares onde tem vários computadores. É que a principal função dele é interligar os aparelhos em uma só rede. Ou seja, é ele quem distribui dados entre todos os computadores que estão ligados nele.';
}

function SwitchesTab(){
    titleElement.innerHTML = 'Switches';
    textElement.innerHTML = 'O que é um Switch?<br>Um switch é um dispositivo de rede usado para conectar vários dispositivos em uma rede local (LAN). Ele é responsável por receber, processar e encaminhar dados entre esses dispositivos.<br>Oferecem controle e configuração avançados, como VLANs (Redes Locais Virtuais), monitoramento de rede e segurança. Adequados para redes maiores e mais complexas.<br><br>Um switch conecta dispositivos em uma rede local e melhora a eficiência ao encaminhar dados apenas para o dispositivo de destino, usando endereços MAC. Ele recebe dados, identifica o destino através de uma tabela de endereços MAC e os envia somente para a porta correspondente, reduzindo o tráfego desnecessário.';
}

function checkData(data){
    if (data == "ip") {
        return IPTab()
    }
    if (data == "ping") {
        return PingTab()
    }
    if (data == "traceroute") {
        return TracerouteTab()
    }
    if (data == "dns") {
        return DNSTab()
    }
    if (data == "hubs") {
        return HubsTab()
    }
    if (data == "switches") {
        return SwitchesTab()
    }

}

//
//Esse código é executado quando o HTML é carregado.
//Ele extrai os parâmetros da URL atual e os armazena em um dentro de uma variavel chamado data.
//- Guilherme
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    checkData(data.name);
}
