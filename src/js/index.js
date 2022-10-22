// passo 1 - dar um jeitp de pegar os elementos que representam as abas no HTML

// com QuerySelectorAll seleciono a classe no HTML que quero trabalhar
const abas = document.querySelectorAll(".aba")

//passo 2 - dar um jeito de identificar o clique no elemento da aba

//com o forEach ele percorre os elementos criando um array de todos os encontrados
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return
        }
       
        // passo 3 - quando o usuario clicar, desmarcar a aba selecionada
        const abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado")

        // passo 4  - marcar a aba clicada como selecionado
        aba.classList.add("selecionado")

        // passo 5 econder o conteudo anteriot

        const informacaoSelecionada = document.querySelector(".informacao.selecionado")

        informacaoSelecionada.classList.remove("selecionado")

        

        // passo 6 mostrar o conteudo da aba selecionada

        
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)

        informacaoASerMostrada.classList.add("selecionado")



    })
})