const user= {
    nome: "Marco",
    email: "marco@teste.com.br",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()

const exibir = function(){
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()