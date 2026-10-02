document.addEventListener('DOMContentLoaded', () => {

    // 8 NOTÍCIAS COMPLETAS INICIAIS
    const initialNews = [
        {
            id: '1',
            title: 'Equipa de futebol da região vence final em jogo eletrizante',
            category: 'Esporte',
            date: '02/10/2026',
            summary: 'Com estádio cheio, a equipa conquistou o troféu no último minuto do segundo tempo.',
            content: `A equipa da nossa região viveu uma noite histórica neste último fim de semana ao conquistar o campeonato após uma partida altamente competitiva.<br><br>
            Com o estádio completamente lotado, os adeptos apoiaram o clube durante os 90 minutos. O golo da vitória foi marcado nos acréscimos, garantindo a festa e o troféu para os atletas e comissão técnica. O treinador destacou a garra do grupo e prometeu manter o ritmo para os próximos desafios da temporada.`,
            img: 'https://picsum.photos/800/450?random=101'
        },
        {
            id: '2',
            title: 'Novo espaço de leitura e biblioteca comunitária é inaugurado',
            category: 'Livros',
            date: '02/10/2026',
            summary: 'Espaço conta com acervo diversificado e oficinas literárias gratuitas para a população.',
            content: `Foi inaugurado hoje o novo Centro Literário Comunitário, um projeto dedicado a incentivar a leitura e a cultura em todos os bairros da cidade.<br><br>
            Com mais de 5.000 títulos disponíveis para empréstimo gratuito, o local conta com salas de estudo, computadores com acesso à internet e um espaço infantil preparado para contação de histórias. As inscrições para os clubes de leitura da próxima semana já estão abertas na receção.`,
            img: 'https://picsum.photos/800/450?random=102'
        },
        {
            id: '3',
            title: 'Estudantes desenvolvem portal inovador para a comunidade',
            category: 'Tecnologia',
            date: '01/10/2026',
            summary: 'Iniciativa apoia projetos locais utilizando desenvolvimento web e ferramentas modernas.',
            content: `Alunos do curso de TI criaram uma plataforma digital focada no fortalecimento da comunicação e do comércio local.<br><br>
            A ferramenta permite que pequenos empreendedores e produtores da região divulguem os seus serviços de forma simples e rápida. O projeto foi elogiado por professores e pela associação comercial da cidade devido ao seu grande impacto social e facilidade de utilização.`,
            img: 'https://picsum.photos/800/450?random=103'
        },
        {
            id: '4',
            title: 'Obras de infraestrutura e mobilidade avançam na cidade',
            category: 'Região',
            date: '01/10/2026',
            summary: 'Novas vias e ciclofaixas prometem melhorar o transporte público e reduzir o tráfego.',
            content: `As intervenções na infraestrutura rodoviária da zona central atingiram 70% de conclusão nesta semana.<br><br>
            Segundo a autarquia, o objetivo é modernizar o fluxo de veículos e oferecer alternativas seguras para ciclistas e peões. As novas rotas de autocarro entrarão em funcionamento no próximo mês, visando reduzir significativamente o tempo de deslocação nos horários de pico.`,
            img: 'https://picsum.photos/800/450?random=104'
        },
        {
            id: '5',
            title: 'Feira de Robótica reúne projetos criativos de jovens talentos',
            category: 'Tecnologia',
            date: '30/09/2026',
            summary: 'Protótipos automatizados e robôs de assistência foram os grandes destaques do evento.',
            content: `A Feira Anual de Robótica e Inovação atrai centenas de visitantes entusiasmados com as tecnologias apresentadas por estudantes da rede de ensino.<br><br>
            Entre os projetos de maior destaque, esteve um robô desenvolvido para auxiliar no transporte de materiais recicláveis e automação residencial sustentável. O evento premiou as três melhores ideias com bolsas de incentivo técnico.`,
            img: 'https://picsum.photos/800/450?random=105'
        },
        {
            id: '6',
            title: 'Mercado financeiro apresenta estabilidade e otimismo no trimestre',
            category: 'Economia',
            date: '30/09/2026',
            summary: 'Relatórios indicam crescimento no consumo interno e geração de novos postos de trabalho.',
            content: `Especialistas apontam que a economia regional tem apresentado sinais consistentes de recuperação e expansão.<br><br>
            O aumento nas vendas do comércio e os novos investimentos no setor de serviços impulsionaram a contratação de profissionais qualificados. A expectativa para os próximos meses permanece positiva de acordo com as análises divulgadas hoje.`,
            img: 'https://picsum.photos/800/450?random=106'
        },
        {
            id: '7',
            title: 'Parque ambiental ganha novas áreas de lazer e pistas de caminhada',
            category: 'Lazer',
            date: '29/09/2026',
            summary: 'Opção gratuita de contacto com a natureza passa a funcionar diariamente.',
            content: `O Parque Ecológico Municipal passou por uma grande revitalização e agora conta com quadras desportivas, playground e novas pistas de caminhada arborizadas.<br><br>
            Famílias inteiras aproveitaram o fim de semana para conhecer o local renovado. A administração reforçou a segurança e disponibilizou monitores ambientais para visitas guiadas aos jardins preservados.`,
            img: 'https://picsum.photos/800/450?random=107'
        },
        {
            id: '8',
            title: 'Programa de qualificação profissional abre vagas gratuitas',
            category: 'Educação',
            date: '28/09/2026',
            summary: 'Cursos abranjem áreas de tecnologia, gestão, atendimento e marketing digital.',
            content: `A Secretaria de Educação anunciou a abertura de inscrições para mais de 500 vagas em cursos de capacitação técnica profissional.<br><br>
            As aulas serão ministradas em formato presencial e online, permitindo que jovens e adultos aprimorem os seus currículos para atender às demandas atuais do mercado de trabalho. As candidaturas podem ser feitas online até ao próximo domingo.`,
            img: 'https://picsum.photos/800/450?random=108'
        }
    ];

    let articles = JSON.parse(localStorage.getItem('br_noticias_data')) || initialNews;

    function saveArticles() {
        localStorage.setItem('br_noticias_data', JSON.stringify(articles));
        renderArticles();
    }

    // NAVEGAÇÃO SPA
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    function navigateTo(targetId) {
        navLinks.forEach(l => l.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-link[data-target="${targetId}"]`);
        if (activeNav) activeNav.classList.add('active');

        pageSections.forEach(s => s.classList.remove('active-page'));
        document.getElementById(targetId)?.classList.add('active-page');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            navigateTo(target);
        });
    });

    document.getElementById('btn-back-to-list')?.addEventListener('click', () => {
        navigateTo('page-index');
    });

    // ABRIR PÁGINA DE NOTÍCIA COMPLETA (SINGLE PAGE)
    function openSingleNews(id) {
        const art = articles.find(a => a.id === id);
        if (!art) return;

        document.getElementById('single-news-category').textContent = art.category;
        document.getElementById('single-news-title').textContent = art.title;
        document.getElementById('single-news-date').textContent = art.date || 'Hoje';
        document.getElementById('single-news-img').src = art.img;
        document.getElementById('single-news-body').innerHTML = art.content || art.summary;

        navigateTo('page-single-news');
    }

    // RENDERIZAR NOTÍCIAS
    function renderArticles() {
        const mainGrid = document.getElementById('main-news-grid');
        const regiaoGrid = document.getElementById('regiao-news-grid');
        const tecGrid = document.getElementById('tecnologia-news-grid');
        const tableBody = document.getElementById('admin-table-body');

        const searchVal = document.getElementById('search-input')?.value.toLowerCase() || '';
        const catVal = document.getElementById('category-filter')?.value.toLowerCase() || 'todas';

        if (mainGrid) mainGrid.innerHTML = '';
        if (regiaoGrid) regiaoGrid.innerHTML = '';
        if (tecGrid) tecGrid.innerHTML = '';
        if (tableBody) tableBody.innerHTML = '';

        articles.forEach(art => {
            const matchSearch = art.title.toLowerCase().includes(searchVal) || (art.summary && art.summary.toLowerCase().includes(searchVal));
            const matchCat = catVal === 'todas' || art.category.toLowerCase() === catVal;

            if (matchSearch && matchCat && mainGrid) {
                mainGrid.appendChild(createCard(art));
            }

            if (art.category.toLowerCase() === 'região' && regiaoGrid) {
                regiaoGrid.appendChild(createCard(art));
            }

            if (art.category.toLowerCase() === 'tecnologia' && tecGrid) {
                tecGrid.appendChild(createCard(art));
            }

            // Tabela CMS Admin
            if (tableBody) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${art.title}</td>
                    <td><span class="news-category-tag">${art.category}</span></td>
                    <td>
                        <button class="btn-sm btn-edit" data-id="${art.id}">Editar</button>
                        <button class="btn-sm btn-del" data-id="${art.id}">Excluir</button>
                    </td>
                `;
                tableBody.appendChild(tr);
            }
        });
    }

    function createCard(art) {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.setAttribute('data-id', art.id);
        card.innerHTML = `
            <img src="${art.img}" alt="Notícia BR Notícias">
            <div class="news-card-body">
                <span class="news-category-tag">${art.category}</span>
                <h3 class="news-title">${art.title}</h3>
                <p class="news-summary">${art.summary || art.content.substring(0, 100) + '...'}</p>
                <span class="btn-read-more">Ler notícia completa &rarr;</span>
            </div>
        `;

        card.addEventListener('click', () => {
            openSingleNews(art.id);
        });

        return card;
    }

    // BUSCA EM TEMPO REAL
    document.getElementById('search-input')?.addEventListener('input', renderArticles);
    document.getElementById('category-filter')?.addEventListener('change', renderArticles);

    // CMS FORMULÁRIO (CRIAR E EDITAR)
    const cmsForm = document.getElementById('cms-form');
    const editIdInput = document.getElementById('edit-id');
    const titleInput = document.getElementById('news-title-input');
    const categorySelect = document.getElementById('news-category-select');
    const contentInput = document.getElementById('news-content-input');

    cmsForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = editIdInput.value;
        const now = new Date();
        const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

        if (editId) {
            const idx = articles.findIndex(a => a.id === editId);
            if (idx !== -1) {
                articles[idx].title = titleInput.value;
                articles[idx].category = categorySelect.value;
                articles[idx].content = contentInput.value;
                articles[idx].summary = contentInput.value.length > 120 ? contentInput.value.substring(0, 120) + '...' : contentInput.value;
            }
        } else {
            articles.unshift({
                id: Date.now().toString(),
                title: titleInput.value,
                category: categorySelect.value,
                date: formattedDate,
                summary: contentInput.value.length > 120 ? contentInput.value.substring(0, 120) + '...' : contentInput.value,
                content: contentInput.value,
                img: `https://picsum.photos/800/450?random=${Math.floor(Math.random() * 1000)}`
            });
        }

        resetForm();
        saveArticles();
        alert('Matéria salva e publicada no portal!');
    });

    document.getElementById('admin-table-body')?.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        if (!id) return;

        if (e.target.classList.contains('btn-del')) {
            if (confirm('Deseja realmente remover esta matéria do portal?')) {
                articles = articles.filter(a => a.id !== id);
                saveArticles();
            }
        } else if (e.target.classList.contains('btn-edit')) {
            const art = articles.find(a => a.id === id);
            if (art) {
                editIdInput.value = art.id;
                titleInput.value = art.title;
                categorySelect.value = art.category;
                contentInput.value = art.content;
                document.getElementById('form-title').textContent = 'Editar Matéria - BR NOTÍCIAS';
                document.getElementById('btn-save-news').textContent = 'Atualizar Matéria';
                document.getElementById('btn-cancel-edit').style.display = 'inline-block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });

    document.getElementById('btn-cancel-edit')?.addEventListener('click', resetForm);

    function resetForm() {
        editIdInput.value = '';
        cmsForm.reset();
        document.getElementById('form-title').textContent = 'Gestão de Conteúdo - BR NOTÍCIAS';
        document.getElementById('btn-save-news').textContent = 'Publicar Matéria';
        document.getElementById('btn-cancel-edit').style.display = 'none';
    }

    // FORMULÁRIOS DE CADASTRO E LOGIN
    document.getElementById('signup-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Conta criada com sucesso no BR NOTÍCIAS!');
    });

    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login efetuado com sucesso!');
    });

    renderArticles();
});