const groups = [
  {
    title: 'Coleta e operação offline',
    items: [
      [
        'Formulário guiado',
        'Identificação, rede, localização, usuário, acessórios, evidências e conferência final em 7 etapas, preservando o contrato de 36 campos do inventário.',
      ],
      [
        'Operação offline',
        'Cadastros e fotos ficam na fila local via IndexedDB. A sincronização idempotente acontece quando a conexão retorna.',
      ],
      [
        'Busca e exportação',
        'Busca por patrimônio, série, hostname, MAC, IP, usuário, fabricante, modelo e localização, com exportação CSV compatível com Excel brasileiro.',
      ],
      [
        'Evidências fotográficas',
        'Fotos são comprimidas no próprio dispositivo antes do armazenamento ou sincronização para reduzir consumo de banda e espaço.',
      ],
    ],
  },
  {
    title: 'Identificação, estrutura e Digital Twin',
    items: [
      [
        'QR Code e OCR local',
        'Geração e leitura de QR por ativo, além de OCR local para sugerir patrimônio, série, fabricante, modelo, P/N, MAC e IMEI com revisão humana.',
      ],
      [
        'Estrutura física',
        'Empresa, unidade, localidade, prédio, andar, setor e sala/área formam a hierarquia operacional dos equipamentos.',
      ],
      [
        'Digital Twin',
        'Modelos GLB privados podem representar ambientes e ativos em 3D, com navegação operacional, seleção, busca e fallback procedural quando não há modelo disponível.',
      ],
      [
        'Multiempresa e RBAC',
        'Organizações e papéis isolam dados e ações por contexto, apoiados por políticas de acesso no banco e regras específicas para evidências e modelos.',
      ],
    ],
  },
  {
    title: 'ITAM e CMDB',
    items: [
      [
        'Ciclo de vida',
        'O ativo ganha histórico de estados e eventos para acompanhar sua evolução desde entrada e uso até mudanças posteriores.',
      ],
      [
        'Custódia e movimentações',
        'Transferências, responsáveis e movimentações ficam registradas para manter rastreabilidade operacional.',
      ],
      [
        'Garantias e contratos',
        'Informações de garantia e contratos passam a compor o contexto do ativo e apoiar acompanhamento administrativo.',
      ],
      [
        'Relações CMDB',
        'Relações entre itens de configuração permitem representar dependências e contexto técnico entre ativos.',
      ],
      [
        'Qualidade cadastral',
        'Indicadores ajudam a identificar dados incompletos ou inconsistentes e orientar a revisão do inventário.',
      ],
    ],
  },
  {
    title: 'Segurança e estado do produto',
    items: [
      [
        'Controle de acesso e evidências',
        'RLS no banco, buckets privados e isolamento por organização protegem os dados e as evidências associadas aos equipamentos.',
      ],
      [
        'Processamento local',
        'O OCR não envia imagens a terceiros e o agente de coleta trabalha em modo somente leitura antes da importação assistida.',
      ],
      [
        'Agente Windows · Beta',
        'Coleta dados técnicos localmente, mostra um resumo e gera JSON para importação autenticada, sem sobrescrever campos automaticamente.',
      ],
      [
        'Implementado',
        'Offline-first, 36 campos, fotos, histórico, conflitos, estrutura física, mapa, QR, OCR, busca, RBAC, multiempresa, Digital Twin, ITAM e CMDB.',
      ],
      [
        'Próxima etapa — planejada',
        'Homologação de uso real, refinamento de experiência, preparação de demonstração e evolução comercial sem perder o foco operacional.',
      ],
    ],
  },
]

export default function Inventory() {
  return (
    <section id="inventario" className="container section inventory" aria-labelledby="inventory-title">
      <div className="projects-heading inventory-heading">
        <div>
          <p className="eyebrow">PRODUTO EM DETALHE / INVENTÁRIO TI</p>
          <h2 id="inventory-title">
            Do inventário em campo
            <br />
            ao ITAM e CMDB.
          </h2>
        </div>
        <a
          className="button primary"
          href="mailto:victor.hugofdantas@gmail.com?subject=Demonstra%C3%A7%C3%A3o%20do%20Invent%C3%A1rio%20TI"
        >
          Solicitar demonstração
        </a>
      </div>

      <p className="inventory-intro">
        A plataforma começou como uma PWA para coleta e rastreabilidade de ativos e evoluiu para
        uma base operacional com multiempresa, controle de acesso, Digital Twin e recursos de
        ITAM/CMDB. O foco continua sendo uso real em smartphone ou notebook, inclusive com conexão
        instável.
      </p>

      <div className="product-proof" aria-label="Resumo do produto">
        <div>
          <strong>36</strong>
          <span>campos preservados</span>
        </div>
        <div>
          <strong>7</strong>
          <span>etapas de coleta</span>
        </div>
        <div>
          <strong>3D</strong>
          <span>Digital Twin com GLB privado</span>
        </div>
        <div>
          <strong>P8</strong>
          <span>ITAM e CMDB concluídos</span>
        </div>
      </div>

      <div className="inventory-details">
        {groups.map((group) => (
          <details key={group.title}>
            <summary>{group.title}</summary>
            <div className="resource-grid">
              {group.items.map(([title, text]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
