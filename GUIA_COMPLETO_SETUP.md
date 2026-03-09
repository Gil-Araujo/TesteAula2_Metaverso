# GUIA COMPLETO — Aula 2: Metaverso VR Multiplayer

# PARTE A — O QUE OS ALUNOS FAZEM (passo a passo na aula)

Os alunos vão reproduzir TODO o processo: instalar, descarregar, correr.
Assim aprendem como funciona um projeto multiplayer do zero.

**Tempo estimado:** ~30 minutos para o setup completo.

---

## PASSO 1 — Instalar o Node.js (nos PCs dos alunos)

O Node.js é o programa que corre o servidor multiplayer.
Sem ele, o projeto não funciona.

### O que dizer aos alunos:

> "Antes de começarmos com o VR, precisamos de instalar uma ferramenta
> chamada Node.js. É o motor que vai correr o nosso servidor multiplayer.
> Vamos todos fazer isto juntos."

### Instruções para os alunos:

1. Abrir o browser (Chrome, Edge, Firefox — qualquer um)
2. Ir a: **https://nodejs.org**
3. Clicar no botão verde grande que diz **LTS** (ex: "20.x.x LTS")
   - **NÃO** clicar em "Current" — queremos a versão estável
4. Vai descarregar um ficheiro `.msi` — abrir esse ficheiro
5. No instalador que aparece:
   - Clicar **Next**
   - Marcar "I accept the terms" → **Next**
   - Deixar tudo como está → **Next**
   - Deixar tudo como está → **Next**
   - **NÃO** marcar "Automatically install the necessary tools" → **Next**
   - Clicar **Install** (pode pedir permissão de administrador — clicar **Sim**)
   - Esperar... → **Finish**

### Verificar que instalou (fazer TODOS juntos):

1. Pressionar **Win + R** no teclado (abre uma caixa "Executar")
2. Escrever **cmd** e pressionar **Enter** (abre uma janela preta — o terminal)
3. Escrever este comando e pressionar Enter:
   ```
   node --version
   ```
   - Deve aparecer algo como: `v20.11.0`
   - Se aparecer → Node.js instalado com sucesso!
   - Se aparecer erro → fechar o terminal, abrir de novo, e tentar outra vez

> **Dica para o formador:** Projetar o seu ecrã para que os alunos sigam.
> Esperar que TODOS tenham o Node.js instalado antes de avançar.

---

## PASSO 2 — Descarregar o projeto (sem Git — por ZIP)

Os alunos NÃO precisam de Git. Vamos descarregar o projeto como ficheiro ZIP.

### O que dizer aos alunos:

> "Agora vamos descarregar o projeto que eu preparei.
> Está no GitHub — um site onde programadores guardam código.
> Não precisam de conta nem de instalar nada extra."

### Instruções para os alunos:

1. No browser, ir a: **https://github.com/Gil-Araujo/TesteAula2_Metaverso**
2. Clicar no botão verde **< > Code** (está no lado direito, acima dos ficheiros)
3. No menu que aparece, clicar **Download ZIP**
4. Vai descarregar um ficheiro chamado `TesteAula2_Metaverso-master.zip`
5. Ir à pasta de **Downloads** e encontrar o ficheiro ZIP
6. **Clicar com o botão direito** no ficheiro ZIP → **Extrair Tudo...** → **Extrair**
7. Vai aparecer uma pasta chamada `TesteAula2_Metaverso-master`

### Resultado:

O aluno tem agora uma pasta com estes ficheiros:
```
TesteAula2_Metaverso-master/
├── server.js           ← O servidor (o "motor" do multiplayer)
├── package.json        ← Lista do que o servidor precisa
├── public/
│   ├── index.html      ← A cena VR (o que aparece no browser)
│   ├── *.jpg           ← Imagem panorâmica 360°
│   └── assets/heart/   ← Modelo 3D do coração
```

> **Dica para o formador:** Abrir o Explorador de Ficheiros e mostrar
> a estrutura da pasta. Explicar: "O `server.js` é o programa que corre
> no computador. A pasta `public` contém tudo o que o browser mostra."

---

## PASSO 3 — Instalar as dependências (`npm install`)

O projeto precisa de 3 bibliotecas (programas auxiliares) para funcionar.
O comando `npm install` descarrega-as automaticamente.

### O que dizer aos alunos:

> "O nosso projeto usa 3 bibliotecas: uma para o servidor web,
> uma para comunicação em tempo real, e uma para ligar os browsers
> entre si. Vamos descarregá-las com UM comando."

### Instruções para os alunos:

1. Abrir o terminal (se fechou): **Win + R** → escrever **cmd** → **Enter**
2. Navegar até à pasta do projeto. Escrever este comando:
   ```
   cd Downloads\TesteAula2_Metaverso-master
   ```
   (Se a pasta está noutro sítio, ajustar o caminho)

   **Como saber se estou no sítio certo?**
   Escrever `dir` e pressionar Enter. Deve aparecer `server.js` e `package.json` na lista.

3. Escrever este comando e pressionar Enter:
   ```
   npm install
   ```
4. **Esperar** — pode demorar 30 segundos a 2 minutos
5. Vai aparecer muita informação no terminal — **é normal**
6. Quando terminar, deve ver algo como:
   ```
   added 85 packages in 25s
   ```
7. Se aparecerem linhas amarelas ("warnings") — **ignorar**, é normal
8. Se aparecer "npm ERR!" vermelho — chamar o formador

### O que aconteceu?

> "O `npm install` leu o ficheiro `package.json` e descarregou 3 coisas:
> **express** (servidor web), **socket.io** (comunicação em tempo real),
> e **open-easyrtc** (ligação entre browsers).
> Ficaram numa pasta chamada `node_modules` — não precisam de mexer nela."

---

## PASSO 4 — Iniciar o servidor multiplayer

Agora vamos pôr o servidor a correr!

### O que dizer aos alunos:

> "Agora vem a parte emocionante. Vamos ligar o servidor.
> Quando estiver a correr, qualquer pessoa pode entrar no vosso
> mundo virtual através do browser."

### Instruções para os alunos:

1. No terminal (deve ainda estar na pasta do projeto), escrever:
   ```
   npm start
   ```
2. Deve aparecer isto:
   ```
   =============================================
     SERVIDOR MULTIPLAYER A CORRER!
   =============================================

     No SEU browser:   http://localhost:3001

     Para os ALUNOS:   http://SEU_IP:3001
   =============================================
   ```
3. **NÃO fechar o terminal!** O servidor só funciona enquanto o terminal está aberto.

### Abrir a cena VR:

4. Abrir o browser (Chrome recomendado)
5. Na barra de endereço, escrever: **http://localhost:3001**
6. Pressionar Enter
7. Deve aparecer:
   - Um cenário 3D com chão verde
   - Um céu com estrelas (panorama 360°)
   - Um coração 3D a rodar lentamente
   - Dois cubos e uma esfera ao fundo
   - Um painel de instruções no canto superior esquerdo
   - Um pequeno círculo branco no centro do ecrã (cursor)

### Se a cena apareceu → PARABÉNS! O servidor está a funcionar!

> **Dica para o formador:** Fazer uma pausa aqui. Confirmar que TODOS
> os alunos têm a cena a funcionar antes de avançar.

---

## PASSO 5 — Navegar na cena

### O que dizer aos alunos:

> "Agora vamos aprender a mexer-nos no mundo virtual."

### Controlos:

| Ação | Como fazer |
|------|------------|
| **Andar para a frente** | Tecla **W** |
| **Andar para trás** | Tecla **S** |
| **Andar para a esquerda** | Tecla **A** |
| **Andar para a direita** | Tecla **D** |
| **Olhar em volta** | Clicar e arrastar o rato |
| **Interagir com objeto** | Apontar o cursor (círculo branco) para o objeto e **clicar** |

### Exercício:

1. Andar até ao coração (usa WASD)
2. Apontar o cursor para o coração — deve aparecer o texto "Heart"
3. Afastar o cursor — o texto desaparece
4. Andar até um dos cubos azuis e clicar nele — a cor muda!

---

## PASSO 6 — Testar o multiplayer (a parte mais fixe!)

### O que dizer aos alunos:

> "Até agora, cada um de vocês está sozinho na sua cena.
> Mas o servidor que estamos a correr suporta MULTIPLAYER.
> Vamos testar: abram a cena num segundo separador."

### Instruções para os alunos:

1. O servidor deve estar a correr (terminal aberto com `npm start`)
2. No browser, abrir um **novo separador** (Ctrl + T)
3. Escrever outra vez: **http://localhost:3001**
4. Agora têm 2 separadores com a mesma cena
5. No **separador 1**, mexer o rato para olhar em volta
6. Mudar para o **separador 2** — devem ver uma **esfera colorida**!
   - Essa esfera é o "avatar" do jogador do separador 1
7. No separador 2, clicar num cubo — a cor muda
8. Voltar ao separador 1 — a cor do cubo TAMBÉM mudou!

> "Viram? Quando um de vocês muda algo, TODOS os outros veem!
> É assim que funciona o multiplayer.
> Aquela esfera colorida é o vosso colega no mundo virtual."

---

## PASSO 7 — Ligar vários alunos ao MESMO servidor

Para que vários alunos entrem no MESMO mundo, todos devem ligar-se
ao MESMO servidor (o PC de UM aluno ou do formador).

### Opção A — Na rede local da sala (todos no mesmo Wi-Fi)

1. O aluno que corre o servidor (ou o formador) abre outro terminal:
   - **Win + R** → **cmd** → Enter
2. Escreve:
   ```
   ipconfig
   ```
3. Procura a linha **IPv4 Address** na secção **Wi-Fi**: ex: `192.168.1.42`
4. Diz o IP aos colegas
5. Os **outros alunos** abrem o browser e escrevem:
   ```
   http://192.168.1.42:3001
   ```
   (substituir pelo IP real)
6. Todos entram no mesmo mundo! Cada pessoa aparece como uma esfera colorida.

**Se não funcionar:** O firewall do Windows pode estar a bloquear.
O formador deve permitir o Node.js no firewall (ver secção de Troubleshooting).

### Opção B — Online (Render.com) — sem necessidade de rede local

O formador já publicou o servidor online. Todos abrem este URL:

```
https://testeaula2-metaverso.onrender.com
```

- Funciona em qualquer rede (Wi-Fi, dados móveis, casa)
- Funciona no PC, telemóvel, tablet e óculos Meta Quest
- Primeira visita pode demorar ~30-50 segundos (o servidor "acorda")

---

## PASSO 8 — Experimentar nos óculos Meta Quest (VR imersivo)

### O que dizer aos alunos:

> "Agora vamos experimentar a versão IMERSIVA — nos óculos de VR.
> É a mesma cena, mas à vossa volta a 360 graus."

### Instruções:

1. Colocar os óculos Meta Quest
2. Garantir que estão ligados ao Wi-Fi (mesmo Wi-Fi que o servidor, se local)
3. Abrir o **browser** no Quest (ícone de globo no menu principal)
4. Escrever o URL:
   - Rede local: `http://IP_DO_SERVIDOR:3001`
   - Online: `https://testeaula2-metaverso.onrender.com`
5. A cena carrega — agora estão DENTRO do mundo virtual!
6. Para interagir: olhar para um objeto e **esperar 1.5 segundos**
   (o cursor encolhe até ativar)

---

## PASSO 9 — Compreender o código (explicação guiada)

### O que dizer aos alunos:

> "Agora que viram o resultado, vamos perceber COMO funciona.
> Vou mostrar-vos o código e explicar cada parte."

### Abrir o ficheiro `public/index.html`:

O formador abre o ficheiro no VS Code (ou Notepad) e projeta no ecrã.

### Estrutura do ficheiro — as partes importantes:

**1. Carregar as bibliotecas (linhas 8-21)**
```html
<!-- Motor 3D -->
<script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>

<!-- Multiplayer -->
<script src="https://cdn.jsdelivr.net/.../networked-aframe.min.js"></script>

<!-- Comunicação em tempo real (servidos pelo nosso servidor) -->
<script src="/socket.io/socket.io.js"></script>
<script src="/easyrtc/easyrtc.js"></script>
```

> "O A-Frame cria o mundo 3D. O Networked A-Frame adiciona multiplayer.
> O socket.io e easyrtc são servidos pelo nosso servidor Node.js —
> é por isso que precisámos do `npm install` e `npm start`."

**2. A tag `networked-scene` (linha 122-128)**
```html
<a-scene networked-scene="
  room: aula-medicina;
  adapter: easyrtc;
  connectOnLoad: true;
">
```

> "`room: aula-medicina` é o nome da sala.
> Todos os que usam este nome estão juntos no mesmo mundo.
> Se mudarem o nome, criam uma sala diferente."

**3. Templates — os "moldes" (linhas 135-168)**
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

> "Um template é um 'carimbo'. Quando um novo aluno entra na sala,
> o sistema cria uma CÓPIA deste molde — uma esfera colorida com
> o texto 'Aluno'. É o avatar que os outros veem."
>
> "O `billboard` faz o texto rodar sempre para a câmara — assim o nome
> 'Aluno' é legível de qualquer ângulo. O label 'Heart' no coração
> também usa billboard."

**4. O jogador (linhas 294-315)**
```html
<a-entity
  id="player"
  networked="template:#avatar-template; attachTemplateToLocal:false"
  camera wasd-controls look-controls
  position="0 1.6 5"
>
```

> "`attachTemplateToLocal: false` — não mostra o avatar a NÓS.
> Nós vemos pela câmara. Os OUTROS é que veem a nossa esfera colorida."

**5. Objetos partilhados (linhas 207-224)**
```html
<a-entity
  networked="template:#shared-box-template; persistent:true; networkId:cubo-esq; owner:scene"
  position="-4 0.7 -5"
></a-entity>
```

> "`persistent: true` — o cubo existe sempre, mesmo sem ninguém ligado.
> `owner: scene` — ninguém é dono, pertence à cena.
> Quando clicam e mudam a cor, TODOS veem a mudança."

---

# PARTE B — GUIA DO FORMADOR (preparação prévia)

Tudo abaixo é para o formador preparar ANTES da aula.
Os alunos NÃO precisam de ver esta parte.

---

## Preparação — O que fazer antes da aula

### 1. No seu PC (uma vez):

```bash
# Instalar Node.js: https://nodejs.org (versão LTS)

# Descarregar o projeto
# (pode usar Git, GitHub Desktop, ou ZIP — como preferir)

# Instalar dependências
cd TesteAula2_Metaverso
npm install

# Testar
npm start
# Abrir http://localhost:3001 — deve funcionar
```

### 2. Publicar online no Render.com (já feito):

O projeto já está publicado em:
**https://testeaula2-metaverso.onrender.com**

Se precisar de republicar (após alterações):
1. Fazer commit e push no GitHub (via GitHub Desktop)
2. No Render.com: clicar **Manual Deploy** → **Deploy latest commit**
3. Esperar 2-3 minutos

### 3. Antes da aula (15 minutos antes):

- [ ] Abrir o URL do Render para "acordar" o servidor (demora ~50 seg)
- [ ] Testar em 2 separadores — confirmar que vê 2 avatares
- [ ] Preparar o URL no quadro ou no chat para os alunos copiarem
- [ ] Ter o VS Code aberto com `public/index.html` para mostrar o código
- [ ] Se usar rede local: confirmar que `npm start` funciona e descobrir o IP (`ipconfig`)

### 4. PCs dos alunos — o que precisam:

| Necessário | Porquê |
|------------|--------|
| Browser (Chrome/Edge/Firefox) | Para abrir a cena VR |
| Node.js instalado | Para correr o servidor localmente (instalam na aula) |
| Acesso à internet | Para descarregar Node.js e o projeto ZIP |
| Permissão para instalar software | Node.js precisa de instalação |

**NÃO precisam de:** Git, GitHub, VS Code, conta em nenhum site.

---

## Render.com — Setup (já feito, mas para referência)

### Criar o serviço:

1. Ir a: **https://render.com** → login com GitHub
2. **New +** → **Web Service**
3. **Build and deploy from a Git repository** → **Next**
4. Procurar **TesteAula2_Metaverso** → **Connect**
5. Preencher:

| Campo | Valor |
|-------|-------|
| Name | `testeaula2-metaverso` |
| Region | `Frankfurt (EU)` |
| Branch | `master` |
| Runtime | `Node` |
| Build Command | `npm install` |
| Start Command | `node server.js` |
| Instance Type | **Free** |

6. **Create Web Service** → esperar 2-5 min → fica "Live"

### Notas do plano gratuito:

- Servidor adormece após 15 min sem uso
- Demora ~30-50 segundos a acordar
- Não desaparece — fica ativo enquanto a conta existir
- Antes da aula: abrir o URL 2 min antes para acordar

---

## Troubleshooting — Problemas comuns

### Node.js não instala

| Erro | Solução |
|------|---------|
| Não tem permissão para instalar | Pedir ao técnico de IT da escola para instalar ou dar permissão de admin |
| Download não começa | Tentar outro browser. Ou descarregar diretamente: https://nodejs.org/dist/ |
| "node is not recognized" após instalar | Fechar TODOS os terminais e abrir um novo. Se não funcionar, reiniciar o PC |

### `npm install` falha

| Erro | Solução |
|------|---------|
| "npm is not recognized" | Node.js não está instalado ou o terminal não foi reaberto |
| "ENETUNREACH" / "network error" | Sem internet — ligar à rede |
| Erros com "gyp" | Ignorar — são warnings opcionais, o install normalmente completa |
| "EACCES" / permissões | Abrir CMD como Administrador (clicar direito → Executar como admin) |

Para limpar e tentar de novo:
```
rmdir /s /q node_modules
del package-lock.json
npm install
```

### `npm start` falha

| Erro | Solução |
|------|---------|
| "Cannot find module 'express'" | Não correu `npm install` — correr agora |
| "EADDRINUSE" | A porta 3001 está ocupada. Fechar outros terminais. Ou mudar porta em server.js |

### Multiplayer não funciona (rede local)

| Problema | Solução |
|----------|---------|
| "Página não encontrada" | Verificar IP e porta. URL deve ser `http://` (não `https://`) |
| Timeout / não carrega | Firewall do Windows a bloquear — ver abaixo |
| Carrega mas sem avatares | Todos devem estar na MESMA rede Wi-Fi |
| Consola mostra erros de easyrtc | Recarregar a página (F5) em todos os browsers |

### Firewall do Windows (se usar rede local)

Se os alunos não conseguem aceder ao servidor de outro PC:

1. No PC que corre o servidor: procurar **"Firewall"** no menu Iniciar
2. Clicar **"Permitir uma aplicação através do Firewall"**
3. Clicar **"Alterar definições"**
4. Procurar **"Node.js"** na lista
5. Marcar **Privada** e **Pública**
6. Se "Node.js" não aparecer: **"Permitir outra aplicação"** → navegar até `C:\Program Files\nodejs\node.exe`
7. Clicar **OK**

### Meta Quest

| Problema | Solução |
|----------|---------|
| Não carrega | Confirmar Wi-Fi. URL deve ser `http://` (não `https://`) |
| Sem VR imersivo | Clicar no ícone de óculos VR no canto inferior direito |
| Lento | Normal — o Quest tem hardware limitado |

### Render.com

| Problema | Solução |
|----------|---------|
| Erro 502 | Servidor a acordar — esperar 30-50 seg e recarregar |
| Alterações não aparecem | **Manual Deploy** → **Deploy latest commit** no painel do Render |
