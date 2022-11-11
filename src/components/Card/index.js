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
    .legenda {
        font-size: 12pt;
        line-height: 20pt;
        color: #888;
        text-transform: uppercase;
    }
`;

const Card = (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    let indice = '';
    let legenda = '';

    const url =
        props.type == 'ipca'
            ? 'https://indices-api.herokuapp.com/ipca'
            : 'https://indices-api.herokuapp.com/igpm';

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
    }

    if (data) {
        indice = data.valor;
        legenda = data.titulo;
    }

    return (
        <StyledCard>
            <div>
                <p className="indice">{indice}%</p>
                <p className="legenda">{legenda}</p>
            </div>
        </StyledCard>
    );
};

export default Card;
