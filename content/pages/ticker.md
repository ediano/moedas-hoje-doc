---
title: Ticker
versions: 'v1'
patchUrl: 'coins/ticker'
symbol: 'symbol=BTC_BRL'
symbolSource: 'source=novadax.com'
---

É possível listar um par de moeda especifico ou a fonte de onde este par é listado.

## Symbol

O endpoint espera um parametro obrigatório `symbol` que inclui os pares de moedas exemplo: `BTC_BRL`; neste caso será listado **Bitcoin/Real Brasil**.

> https://api.moedashoje.com.br/v1/coins/ticker?symbol=BTC_BRL


## Source

Também é possível listar um par de moeda de uma fonte em especifico passando `source` como parametro.

> https://api.moedashoje.com.br/v1/coins/ticker?symbol=BTC_BRL&source=novadax.com
