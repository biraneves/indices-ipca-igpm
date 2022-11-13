<div align=center>

# Indicadores - IPCA & IGPM

</div>
    
<p align="center">
    <img src="https://badgen.net/badge/node.js/next/blue?icon=vercel" />&nbsp;&nbsp;&nbsp;
    <img src="https://badgen.net/badge/git/github/orange?icon=github" />
</p>

## Objetivos do projeto

O objetivo deste projeto foi o desenvolvimento de uma **API _Restful_** em node.js sobre o _framework_ **Next.js**. A escolha por esse _framework_ deu-se pela facilidade de desenvolvimento dos _endpoints_, bem como pela hospedagem e _deploy_ simplificados na [Vercel](https://vercel.com).

Outro motivador para a escolha do Next.js foi a intenção de desenvolver também uma página simples como _front end_ para consumo da API em questão.

## Requisitos funcionais

🗸 _Middleware_ para o consumo da API disponibilizada pelo IBGE para a obtenção do IPCA acumulado nos últimos 12 meses.

🗸 Uma função de _web scraping_ para obtenção do IGP-m acumulado da página de divulgação da FGV.

🗸 Um _endpoint_ para servir os dados para um _bot_ do Slack.

🗸 Uma página _front end_ para exibição dos indicadores citados.

## _Endpoints_ da API

### GET /indices

Retorna um JSON contendo os valores dos índices IPCA e IGP-M, além do _timestamp_ em que os valores foram obtidos pela última vez, antes de armazenar em _cache_. Disponível em [https://indices-ipca-igpm.vercel.app/api/indices](https://indices-ipca-igpm.vercel.app/api/indices).

### GET /slack

Retorna um JSON com uma mensagem formatada para uso no Slack contendo as informações. Disponível em [https://indices-ipca-igpm.vercel.app/api/slack](https://indices-ipca-igpm.vercel.app/api/slack).

## _Front end_

Foi desenvolvida uma página muito simples com React, com o único objetivo de ser um MVP de consumo da API. Disponível em [https://indices-ipca-igpm.vercel.app](https://indices-ipca-igpm.vercel.app).
