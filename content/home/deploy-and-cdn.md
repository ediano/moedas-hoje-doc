---
title: Deploy and CDN
catchphrase: 'Deploy e CDN'
description: 'Construído com Next.js e servido pela Vercel, podemos dizer que temos superpoder, realizando entregas contínua e revalidando o cache, evitando que as APIs externas sejam sobrecarregadas.'
links:
  - title: 'Vercel'
    link: 'https://bit.ly/3i75FUM'
    icon: 'IoLogoVercel'
  - title: 'Next.js'
    link: 'https://bit.ly/3vJ9BPq'
---

Esta API possui um recurso principal onde faz toda a mágica acontecer. Disponibilizamos um controle capaz de fazer as requisições em todas as APIs externas cadastradas de uma única vez, depois de concluir a requisição é feito a serialização das informações recuperadas, desta forma podemos garantir um retorno único e padronizado.

Para cada rota é adicionado um time que é enviado para a CDN da Vercel, este time se faz necessário para garantir que não haja abuso de requisições para as APIs externas, sendo assim, toda vez que o time expirar, a Vercel se encarrega por validar e carregar novos dados em cache.
