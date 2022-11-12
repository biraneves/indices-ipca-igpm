import config from '../../config.json';

const getSlackInfo = () => {
    const url = config.urlIndices;
    const data = fetch(url).then((res) => res.json());

    const resposta = {
        response_type: 'in_channel',
        blocks: [
            {
                type: 'header',
                text: {
                    type: 'plain_text',
                    text: 'Índices para reajuste',
                    emoji: true,
                },
            },
            {
                type: 'section',
                text: {
                    type: 'plain_text',
                    text: '📈 Valores acumulados para 12 meses:',
                    emoji: true,
                },
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '- *IPCA:* ' + data.indices[0].valor + '%',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '- *IGP-M:* ' + data.indices[1].valor + '%',
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '*Fontes:* IBGE e FGV.',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '_(Este é um recurso experimental. Em caso de dúvida, procure seu líder!)_',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text:
                        '_(Última atualização: ' + data.timestamp + ' (GMT))_',
                },
            },
        ],
    };

    return resposta;
};

export default getSlackInfo;