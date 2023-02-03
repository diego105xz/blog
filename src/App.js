import './App.css';
import React, {useState} from 'react';

import lupa from './img/lupa.png';
import coracao from './img/coracao.png';

const artigos = [
  {
    data:'20 de janeiro 2023',
    titulo:'ChatGPT cresceu mais rápido que qualquer outro app',
    texto:'De acordo com um relatório do banco suíço UBS, o ChatGPT se tornou o app que cresceu mais rapidamente online, conquistando 100 milhões de usuários ativos em apenas dois meses. Para se ter uma ideia mais clara...',
  },

  {
    data:'1 de janeiro 2023',
    titulo:'Facebook alcança 2 bilhões de usuários ativos por dia',
    texto:'O crescimento do Facebook, ainda que mais lento do que um dia foi, é de extrema importância da Meta porque a rede social ainda é a maior fonte de renda de anúncios para a empresa. A plataforma é a segunda da companhia...',
  },

  {
    data: '3 de fevereiro 2023',
    titulo:'Windows 12 pode chegar com ferramentas de IA ao estilo ChatGPT',
    texto:'Algumas dessas melhorias aprimoradas por IA podem ser disponibilizadas até antes da estreia do Windows 12. Conforme o relatório, a Microsoft deve fornecer uma pequena amostra das ferramentas inteligentes em uma atualização...',
  },

  {
    data: '12 de dezembro 2022',
    titulo:'Carro movido a água',
    texto:'O sistema é composto de nanocélulas de fluxo e uma bateria química que possui duas soluções eletrolíticas que usam água salgada para produzir energia elétrica para movimentar os quatro motores do bólido...',
  },
  
  {
    data:'29 de janeiro 2023',
    titulo:'Telegram comunica pagamento de R$ 1,2 milhão ao STF',
    texto:'O Telegram pediu ainda novamente que, caso Moraes não revogue a multa, que ao menos o valor seja reduzido, pois a empresa teria cumprido o bloqueio de outros canais que também eram alvos da mesma decisão judicial...',
  },

  {
    data:'7 de novembro 2022',
    titulo:'5G traz novos alertas para 2023',
    texto:'O 5G traz novas possibilidades nas mais diversas esferas, mas também cria mais desafios de segurança cibernética. A nova tecnologia sempre vem com o risco de que os hackers encontrem maneiras de explorá-la...'
  }

];

function App() {

  const [busca, setBusca] = useState('');

  const artigosFiltro = 
  artigos.filter((artigo) => artigo.titulo.toLocaleLowerCase().includes(busca.toLocaleLowerCase()));

  return (
    <div className="App">
        <header>
            <div className="menu">
                <nav>
                    <p>Codelândia</p>
                    <p>blog</p>
                </nav>
                <div className='pesquisa'>
                  <img src={lupa} alt="lupa" className="lupa"/>

                  <input type="text" onChange={(ev) => setBusca(ev.target.value)} 
                  value={busca} placeholder="Pesquisar no blog" />
                </div>
            </div>
        </header>
        <main>
          <section>
            <div className='artigo'>
              <ul type="none">
                {artigosFiltro.map((artigo) => (
                  <li key={artigo.titulo}>
                    <div className='box-sz'>
                      <p className='data'>{artigo.data}</p>
                      <img src={coracao} alt="icone-coracao" className='icone-coracao'/>
                    </div>
                    <h1 className='titulo'>{artigo.titulo}</h1>
                    <p className='texto'>{artigo.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
    </div>
  );
}

export default App;
