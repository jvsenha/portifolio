import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ChevronDown, User, FileText, Briefcase, Calendar } from 'lucide-react';

const Cabecalho = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">JV</span>
          </div>
          <span className="font-semibold text-gray-900">João Vitor</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900">Desenvolvedor Back-End</h1>
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-gray-600">🔍</span>
        </div>
      </div>
    </header>
  );
};

const SecaoHashtag = () => {
  const etiquetas = ['#BackEnd', '#Desenvolvimento', '#Sistemas', '#Automação', '#JavaScript', '#Python', '#Springboot', '#ReactJS'];

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex flex-wrap gap-2 mb-6">
              {etiquetas.map((etiqueta, indice) => (
                <span key={indice} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {etiqueta}
                </span>
              ))}
            </div>
            <div className="text-6xl lg:text-8xl font-bold  opacity-30 text-black">
              PORTFÓLIO
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="text-8xl lg:text-9xl font-bold opacity-20">
              2025
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-sm opacity-75">
        Veja mais ↓
      </div>
    </section>
  );
};

const Navegacao = ({ secaoAtiva, definirSecaoAtiva }) => {
  const itensNav = [
    { id: 'about', rotulo: 'Sobre Mim', icone: User },
    { id: 'resume', rotulo: 'Currículo', icone: FileText },
    { id: 'work', rotulo: 'Projetos', icone: Briefcase }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-8">
          {itensNav.map(({ id, rotulo, icone: Icone }) => (
            <button
              key={id}
              onClick={() => definirSecaoAtiva(id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                secaoAtiva === id 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icone className="w-4 h-4" />
              <span className="font-medium">{rotulo}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const CartaoPerfil = () => {
    return (
    <div className="  bg-gray-800 text-white rounded-2xl p-6 overflow-hidden">
      <div className=" inset-0 bg-gradient-to-br from-gray-700 to-gray-900 z-0"></div>

      <div >
        <p className="text-sm mb-4 opacity-90">Olá,</p>
        <h2 className="text-3xl font-bold mb-6">Meu nome é João Vitor</h2>

        <div className="w-32 h-32 bg-gray-600 rounded-lg mb-4 flex items-center justify-center z-0">
          <User className="w-16 h-16 text-gray-400" />
        </div>

        <p className="text-sm opacity-90 leading-relaxed">
          Sou desenvolvedor Back-End, criativo e detalhista, com experiência em projetos autônomos e atuação profissional como técnico em informática no Sindicato dos Servidores Públicos de Fernandópolis. Tenho paixão por transformar ideias em sistemas funcionais.
        </p>
      </div>
    </div>
  );
};

const CartaoIntroducao = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">Sobre Mim</h3>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
      <div className="bg-blue-50 rounded-xl p-4 flex items-start space-x-4">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-2">Desenvolvedor Back-End e Técnico em Informática</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Sou de Fernandópolis, interior de São Paulo, e estou cursando Sistemas para Internet na FATEC Jales. Atuo como técnico em informática no Sindicato dos Servidores Públicos Municipais da minha cidade, onde realizo manutenções técnicas e desenvolvo relatórios automatizados com foco em dados e eficiência.
            Desenvolvo sistemas de forma autônoma, buscando sempre unir lógica, organização e criatividade. Fui aprovado em 1º lugar como técnico em informática, resultado do meu comprometimento com a área.
            Me identifico especialmente com o desenvolvimento Back-End, onde posso estruturar funcionalidades robustas e criar soluções que fazem os sistemas realmente funcionarem.
          </p>
        </div>
        <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">💻</span>
        </div>
      </div>
    </div>
  );
};

const CartaoContato = () => {
  const contatos = [
    { icone: Mail, rotulo: 'Email', valor: 'joaosenha0@gmail.com', fundo: 'bg-gray-800' },
    { icone: Linkedin, rotulo: 'LinkedIn', valor: 'linkedin.com/in/joao-senha-141676218', fundo: 'bg-blue-600' },
    { icone: Github, rotulo: 'GitHub', valor: 'https://github.com/jvsenha', fundo: 'bg-gray-400' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">Contato</h3>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contatos.map((contato, indice) => (
          <div key={indice} className={`${contato.fundo} text-white rounded-xl p-4 text-center`}>
            <contato.icone className="w-8 h-8 mx-auto mb-2" />
            <p className="text-xs font-medium">{contato.valor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SecaoProjetos = () => {
  const [projetos, definirProjetos] = useState([])

  useEffect(() => {
    const buscarRepositorios = async () => {
      try {
        const resposta = await fetch(
          'https://api.github.com/users/jvsenha/repos?per_page=100'
        )
        if (!resposta.ok) throw new Error(`Erro ${resposta.status}`)
        const dados = await resposta.json()

        const repositorios = dados.map(repo => ({
          titulo: repo.name,
          descricao: repo.description || 'Descrição não disponível',
          link: repo.html_url
        }))

        definirProjetos(repositorios)
      } catch (erro) {
        console.error('Falha ao buscar repositórios:', erro)
      }
    }

    buscarRepositorios()
  }, [])

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-4">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Projetos</h3>
      {projetos.map((projeto, i) => (
        <div key={i} className="border p-4 rounded hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-lg mb-2">{projeto.titulo}</h4>
          <p className="text-gray-700 mb-2">{projeto.descricao}</p>
          <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Ver no GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

const CartaoExperiencia = () => {
  const experiencia = {
    periodo: '2024 - Presente',
    titulo: 'Técnico em Informática',
    funcao: 'Manutenção de máquinas, automação de relatórios e suporte técnico',
    empresa: 'Sindicato dos Servidores Públicos Municipais de Fernandópolis'
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-2">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Experiência</h3>
      <div className="flex items-center space-x-3 text-gray-600 text-sm mb-1">
        <Calendar className="w-5 h-5" />
        <span>{experiencia.periodo}</span>
      </div>
      <div>
        <h4 className="font-semibold text-lg">{experiencia.titulo}</h4>
        <p className="text-gray-700">{experiencia.funcao}</p>
        <p className="text-gray-500 text-sm mt-1">{experiencia.empresa}</p>
      </div>
    </div>
  );
};

const CartaoEducacao = () => {
  const listaEducacao = [
    {
      periodo: '2023 - Atual',
      titulo: 'FATEC Jales',
      curso: 'Tecnólogo em Sistemas para Internet',
      nota: 'Aprovado em 3º lugar no vestibular'
    },
    {
      periodo: '2020 - 2023',
      titulo: 'ETEC Fernandópolis',
      curso: 'Informática para Internet',
      nota: 'Formado'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-4">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Educação</h3>
      {listaEducacao.map((edu, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center space-x-3 text-gray-600 text-sm mb-1">
            <Calendar className="w-5 h-5" />
            <span>{edu.periodo}</span>
          </div>
          <div>
            <h4 className="font-semibold text-lg">{edu.titulo}</h4>
            <p className="text-gray-700">{edu.curso}</p>
            <p className="text-gray-500 text-sm mt-1">{edu.nota}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [secaoAtiva, definirSecaoAtiva] = useState('about');

  return (
    <>
      <Cabecalho />
      <SecaoHashtag />
      <Navegacao secaoAtiva={secaoAtiva} definirSecaoAtiva={definirSecaoAtiva} />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        {secaoAtiva === 'about' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CartaoPerfil />
              <div className="md:col-span-2 space-y-6">
                <CartaoIntroducao />
                <CartaoContato />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <CartaoExperiencia />
              <CartaoEducacao />
            </div>
          </>
        )}

        {secaoAtiva === 'resume' && (
          <>
            <CartaoExperiencia />
            <CartaoEducacao />
          </>
        )}

        {secaoAtiva === 'work' && <SecaoProjetos />}
      </main>
    </>
  );
}