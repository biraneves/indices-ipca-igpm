import styled from 'styled-components';
import { useState, useEffect } from 'react';

const StyledCard = styled.div`
    width: 160px;
    height: 120px;
    border: solid 3px #006600;
    border-radius: 10px;
    background-color: #fff;
    margin: 4px 32px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    .indice,
    .legenda {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }
    .indice {
        font-size: 24pt;
        font-weight: bold;
        line-height: 32pt;
        color: #030;
    }
    .legenda,
    .timestamp {
        font-size: 12pt;
        line-height: 20pt;
        color: #888;
        text-transform: uppercase;
    }
    .timestamp {
        font-size: 8pt;
        line-height: 12pt;
    }
`;

const Card = (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    let indice = '';
    let legenda = '';
    let timestamp = '';

    const url = 'https://indices-ipca-igpm.vercel.app/api/indices';

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        indice = '...';
        legenda = 'carregando';
        timestamp = '...';
    }

    if (data) {
        if (props.type == 'ipca') {
            indice = data.indices[0].valor;
            legenda = data.indices[0].titulo;
        } else {
            indice = data.indices[1].valor;
            legenda = data.indices[1].titulo;
        }
        timestamp = data.timestamp;
    }

    return (
        <StyledCard>
            <div>
                <p className="indice">{indice}%</p>
                <p className="legenda">{legenda}</p>
                <p className="timestamp">{timestamp}</p>
            </div>
        </StyledCard>
    );
};

export default Card;
