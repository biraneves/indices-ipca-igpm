import axios from 'axios';
import cheerio from 'cheerio';
import config from '../../config.json';

const getIpcaAcumulado12 = async () => {
    try {
        const url = config.urlIpca;

        const res = await axios.get(url);
        const dados = {
            titulo: 'ipca',
            valor: parseFloat(res.data[1].V),
        };

        return dados;
    } catch (err) {
        throw new Error(err.message);
    }
};

const getIgpmAcumulado12 = async () => {
    try {
        const url = config.urlIgpm;
        const res = await axios.get(url);
        const html = res.data;
        const $ = cheerio.load(html);
        const cards = $('p.card-indice-numero.text-center');

        const indices = [];

        cards.each((idx, el) => {
            indices.push(parseFloat($(el).text().trim().replace(',', '.')));
        });

        const dados = {
            titulo: 'igp-m',
            valor: indices[1],
        };

        return dados;
    } catch (err) {
        throw new Error(err.message);
    }
};

const getDolar = async () => {
    try {
        const url = config.urlMoedas;

        const res = await axios.get(url);
        const dados = {
            titulo: 'dólar',
            valor: parseFloat(res.data.USDBRL.ask),
        };

        return dados;
    } catch (error) {
        throw new Error(err.message);
    }
};

const indices = async (_request, response) => {
    const res = {
        indices: [],
        timestamp: '',
    };

    res.indices.push(await getIpcaAcumulado12());
    res.indices.push(await getIgpmAcumulado12());
    // res.indices.push(await getDolar());

    const date = new Date();
    res.timestamp = `${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()} - ${date.getHours() - 3}h ${date.getMinutes()}min`;

    response.setHeader(
        'Cache-Control',
        's-maxage=36000, stale-while-revalidate',
    );

    response.json(res);
};

export default indices;
