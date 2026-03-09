# PLANO DE AULA 2 — Integração no Metaverso

## Informação geral

| Item | Detalhe |
|------|---------|
| Duração | 3 horas (com pausa) |
| Pré-requisito | Aula 1 concluída (os alunos já sabem HTML básico e A-Frame) |
| Resultado | Uma cena VR **multiplayer** onde todos se veem e interagem com os mesmos objetos |
| Novidade | Networked A-Frame (NAF) — ver outros utilizadores em tempo real |

---

## ANTES DA AULA — Setup do formador

1. **Instalar Node.js** no seu PC: https://nodejs.org (versão LTS)
2. Abrir terminal na pasta `TesteAula2_Metaverso`
3. Correr: `npm install` (instala as dependências — demora ~1 min)
4. Correr: `npm start` (inicia o servidor)
5. Verificar que aparece "SERVIDOR MULTIPLAYER A CORRER!" no terminal
6. Abrir `http://localhost:3000` no browser — deve aparecer a cena
7. Descobrir o seu IP: `ipconfig` → IPv4 Address (ex: `192.168.1.42`)
8. Testar noutro dispositivo: `http://192.168.1.42:3000`

**IMPORTANTE:** O servidor Node.js tem de ficar a correr durante toda a aula.
Não fechar o terminal.

---

## Visão geral dos blocos

| Bloco | Minutos | Tema |
|-------|---------|------|
| 1 | 0:00 – 0:15 | Recap da Aula 1 + O que é o Metaverso |
| 2 | 0:15 – 0:40 | Como funciona o multiplayer (explicação visual) |
| 3 | 0:40 – 1:10 | Construir o index.html passo a passo |
| 4 | 1:10 – 1:25 | **Pausa** |
| 5 | 1:25 – 1:55 | Templates e avatares (NAF) |
| 6 | 1:55 – 2:20 | Objetos partilhados — clicar e todos veem |
| 7 | 2:20 – 2:45 | Teste nos óculos Quest (multiplayer) |
| 8 | 2:45 – 3:00 | Wrap-up + o futuro do metaverso na medicina |

---

# PASSO 1 — Recap + O que é o Metaverso (15 min)

## Teacher script

> "Na aula passada, cada um de vocês criou uma cena VR no browser. Mas estavam sozinhos — não viam os colegas."
>
> "Hoje vamos transformar isso num **metaverso**: um espaço virtual partilhado onde vários utilizadores estão presentes ao mesmo tempo. Quando tu mexes a cabeça, os outros veem-te mexer."
>
> "Na medicina, isto tem aplicações reais: cirurgiões que praticam operações em equipa num ambiente virtual, aulas de anatomia onde o professor aponta para um órgão e todos os alunos veem em tempo real."

## O que muda em relação à Aula 1

| Aula 1 | Aula 2 |
|--------|--------|
| Ficheiro HTML aberto no Live Server | Ficheiro HTML servido pelo Node.js |
| Cada aluno vê a cena sozinho | Todos estão na mesma "sala" virtual |
| Interações são locais | Interações são partilhadas |
| Não há servidor | O PC do formador corre o servidor |

---

# PASSO 2 — Como funciona o multiplayer (25 min)

## Teacher script

> "Para o multiplayer funcionar, precisamos de 3 coisas novas:"
>
> **1. Um servidor (o meu PC):**
> "O meu computador corre um programa chamado Node.js que funciona como 'central'. Todos os browsers ligam-se a este servidor. Quando um de vocês mexe, o servidor avisa os outros."
>
> **2. Networked A-Frame (NAF):**
> "É uma extensão do A-Frame que adiciona multiplayer. Funciona com uma tag especial: `networked-scene` na cena, e `networked` nos objetos que queremos partilhar."
>
> **3. Templates:**
> "Um template é um 'molde'. Quando um novo aluno entra na sala, o NAF usa o molde do avatar para criar uma cópia no ecrã de todos os outros. Quando sai, desaparece."
>
> *(Desenhar no quadro: servidor no centro, browsers à volta, setas bidirecionais)*

## Conceitos-chave para explicar

| Conceito | Explicação simples |
|----------|--------------------|
| **Servidor** | O computador central que liga todos. Como o router do Wi-Fi, mas para a VR. |
| **NAF (Networked A-Frame)** | Extensão que adiciona multiplayer ao A-Frame. |
| **Template** | Um molde/modelo. Quando alguém entra, cria-se uma cópia do molde. |
| **Avatar** | A representação visual de cada pessoa. No nosso caso, uma esfera colorida. |
| **Persistente** | Objetos que existem mesmo quando ninguém os "possui". Ficam na sala. |
| **Ownership (posse)** | Para modificar um objeto em rede, é preciso "pedir posse" primeiro. |

---

# PASSO 3 — Construir o index.html (30 min)

## Teacher script

> "O ficheiro da Aula 2 é parecido com o da Aula 1, mas com extras para o multiplayer. Vamos construí-lo juntos."

Os alunos NÃO precisam de instalar Node.js. Apenas abrem o URL que o formador fornece.

Para **editar** o código durante a aula, o formador pode:
- Editar `public/index.html` no VS Code
- Guardar (Ctrl+S)
- Os alunos recarregam a página (F5) para ver as mudanças

### Passo 3.1 — Estrutura base

Explicar as diferenças em relação à Aula 1:

```html
<!-- NOVO: Networked A-Frame -->
<script src="https://cdn.jsdelivr.net/gh/networked-aframe/networked-aframe@0.12.1/dist/networked-aframe.min.js"></script>

<!-- NOVO: Servidos pelo nosso servidor Node.js -->
<script src="/easyrtc/easyrtc.js"></script>
<script src="/socket.io/socket.io.js"></script>
```

> "Estas 3 linhas são a diferença fundamental. A primeira carrega o NAF. As outras duas são servidas automaticamente pelo nosso servidor — é por isso que precisamos do Node.js."

### Passo 3.2 — A tag `networked-scene`

```html
<a-scene networked-scene="
  room: aula-medicina;
  adapter: easyrtc;
  connectOnLoad: true;
">
```

> "`room: aula-medicina` é o nome da sala. Todos os que usam este nome estão juntos. Se quiserem salas separadas, mudam o nome."

### Passo 3.3 — Templates

Explicar o conceito de template com analogia:

> "Imaginem um carimbo. O template é o carimbo. Cada vez que um aluno entra, o NAF 'carimba' uma cópia do avatar no ecrã de todos."

```html
<template id="avatar-template">
  <a-entity class="avatar">
    <a-sphere class="head" position="0 1.3 0" scale="0.35 0.35 0.35"
              random-color></a-sphere>
    <a-entity text="value: Aluno; ..." position="0 1.8 0"
              billboard></a-entity>
  </a-entity>
</template>
```

> "O `billboard` é um componente nosso que faz o texto rodar sempre para a câmara.
> Assim, o nome 'Aluno' é legível de qualquer ângulo — nunca aparece ao contrário."

---

# PASSO 4 — Pausa (15 min)

---

# PASSO 5 — Avatares em rede (30 min)

## Teacher script

> "Agora vamos ver a magia. Cada um de vocês tem um jogador (player) com o componente `networked`."
>
> "Mas primeiro, preciso de explicar um truque importante chamado **Camera Rig**."

### O problema da altura em VR

> "No PC, o A-Frame inventa uma altura de 1.6 metros para simular os olhos de uma pessoa. Nos óculos VR (Quest), o headset já sabe a nossa altura REAL graças aos sensores."
>
> "Se metermos a câmara a 1.6m manualmente, no PC fica bem, mas nos óculos VR o sistema soma a altura real (~1.6m) com os 1.6m que escrevemos — ficamos a 3.2 metros, a flutuar no ar!"

### A solução: Camera Rig (duas camadas)

> "A solução é separar o jogador em duas camadas:"

| Camada | Nome | Posição | O que faz |
|--------|------|---------|-----------|
| Exterior | `#rig` | y = 0 (chão) | Trata do **movimento** (andar com WASD) |
| Interior | `#player` | y = 0 | Trata de **olhar** (rodar a cabeça / câmara) |

> "Assim, cada sistema adiciona a altura uma só vez:"
> - **PC:** 0 + 1.6m (inventado pelo A-Frame) = 1.6m
> - **Quest:** 0 + 1.6m (medido pelos sensores) = 1.6m
>
> "Resultado: a mesma altura nos dois! Sem flutuar."

```html
<!-- Camada exterior: "rig" — fica no chão, move com WASD -->
<a-entity
  id="rig"
  networked="template:#avatar-template; attachTemplateToLocal:false"
  wasd-controls
  position="0 0 0"
>
  <!-- Camada interior: câmara — olha à volta -->
  <a-entity
    id="player"
    camera
    look-controls
    position="0 0 0"
  >
    <!-- cursor aqui dentro -->
  </a-entity>
</a-entity>
```

> "`attachTemplateToLocal: false` — não mostra o avatar a NÓS. Nós vemos pela câmara. Os OUTROS é que veem a nossa esfera colorida."
>
> "Abram o URL em dois separadores ou dois dispositivos. Vão ver uma esfera colorida a representar o 'outro' utilizador!"

## O que os alunos fazem

1. Abrir `http://IP_DO_FORMADOR:3000` no browser
2. Abrir o mesmo URL noutro separador (ou pedir a um colega)
3. No segundo separador, mexer o rato — ver a esfera do "outro" mexer no primeiro

## Checkpoint ✓

- [ ] Pelo menos 2 browsers ligados ao mesmo tempo
- [ ] Cada um vê a esfera do outro

---

# PASSO 6 — Objetos partilhados (25 min)

## Teacher script

> "Agora a parte mais impressionante: objetos que quando UM de vocês muda, TODOS veem."

```html
<a-entity
  networked="template:#shared-box-template; persistent:true; networkId:cubo-esq; owner:scene"
  position="-4 0.7 -5"
></a-entity>
```

> "O `persistent: true` significa que o cubo existe sempre, mesmo que ninguém o 'possua'."
>
> "O `owner: scene` significa que ninguém é dono — é da cena."
>
> "Quando clicam, o componente `shared-color` faz duas coisas:"
> 1. Pede 'posse' temporária (`takeOwnership`)
> 2. Muda a cor
> 3. O NAF sincroniza para todos

## O que os alunos fazem

1. Apontar para um cubo e clicar
2. Ver que a cor muda no SEU ecrã
3. Verificar no ecrã do colega — a cor mudou lá também!
4. Testar com os 3 objetos partilhados (2 cubos + 1 esfera)

## Checkpoint ✓

- [ ] Clicar num cubo muda a cor para TODOS
- [ ] Dois alunos diferentes conseguem mudar o mesmo objeto

---

# PASSO 7 — Teste nos óculos Quest (25 min)

## Procedimento

1. Confirmar que o servidor Node.js está a correr (`npm start`)
2. No Quest: abrir browser → `http://IP_DO_FORMADOR:3000`
3. Testar:
   - Ver os avatares dos colegas (esferas coloridas)
   - Olhar para um cubo, esperar 1.5s (fuse) → cor muda para todos
   - Olhar para o coração → "Heart" aparece

## Erros comuns

| Problema | Solução |
|----------|---------|
| Quest não carrega | Confirmar IP correto e porta 3000. URL deve ser `http://` (não `https://`). |
| Não vejo os outros | Todos devem estar ligados ao mesmo servidor. Verificar que o servidor mostra ligações no terminal. |
| Objetos partilhados não sincronizam | Verificar que `persistent: true` está nos objetos. Recarregar a página. |

---

# PASSO 8 — Wrap-up (15 min)

## Teacher script

> "Recapitulando a Aula 2:"
> 1. Aprendemos o que é um servidor e porquê o multiplayer precisa de um
> 2. Usámos Networked A-Frame para criar um espaço partilhado
> 3. Cada aluno aparece como avatar (esfera colorida)
> 4. Objetos partilhados — quando um muda, todos veem
> 5. Testámos em PC e nos óculos Quest
>
> "Na medicina, esta tecnologia permite:"
> - Aulas de anatomia imersivas em grupo
> - Simulações cirúrgicas colaborativas
> - Conferências médicas em VR
> - Reabilitação virtual supervisionada
>
> "O que construímos é um protótipo. Com mais tempo, podemos adicionar modelos anatómicos completos, voz (áudio), e mãos virtuais."

---

# CHECKLIST DE TROUBLESHOOTING

| # | Problema | Solução |
|---|----------|---------|
| 1 | `npm install` falha | Verificar internet. Tentar `npm cache clean --force` e repetir. |
| 2 | `npm start` dá erro | Verificar que Node.js está instalado: `node --version`. Deve ser v16+. |
| 3 | "EADDRINUSE" ao iniciar | A porta 3000 está ocupada. Mudar PORT no server.js para 3001. |
| 4 | Alunos não conseguem ligar | Firewall pode bloquear. No Windows: permitir Node.js nas regras de firewall. |
| 5 | Avatares não aparecem | Verificar consola (F12). Se há erro de EasyRTC, recarregar a página. |
| 6 | Objetos partilhados não mudam para todos | Verificar `persistent:true` e `owner:scene`. O `shared-color` precisa de `NAF.utils.takeOwnership`. |
| 7 | Muito lag/lentidão | Demasiados utilizadores. EasyRTC suporta ~20-25 por sala. |
| 8 | No Quest não funciona | Mesmo que Aula 1: mesma rede Wi-Fi, URL `http://`, porta correta. |
| 9 | No Quest estou a flutuar / muito alto | Verificar que o jogador usa o padrão **Camera Rig** (duas camadas: `#rig` + `#player`, ambos a y=0). Se a câmara tiver `position="0 1.6 0"` diretamente, o Quest soma a altura real e fica a ~3.2m. |

---

# GUIA RÁPIDO — Iniciar o servidor

```bash
# 1. Abrir terminal na pasta do projeto
cd TesteAula2_Metaverso

# 2. Instalar dependências (só na primeira vez)
npm install

# 3. Iniciar o servidor
npm start

# 4. Abrir no browser
# http://localhost:3000

# 5. Alunos acedem a:
# http://SEU_IP:3000
```
