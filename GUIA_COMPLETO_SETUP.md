# GUIA COMPLETO — Setup da Aula 2 (do zero ao funcionamento)

Este guia explica TUDO o que o formador precisa fazer, passo a passo,
para preparar e dar a Aula 2 (Metaverso VR Multiplayer).

Os alunos NÃO precisam de instalar nada. Só abrem um link no browser.

---

## ÍNDICE

1. [Instalar o Node.js](#1--instalar-o-nodejs)
2. [Instalar o Git](#2--instalar-o-git)
3. [Descarregar o projeto](#3--descarregar-o-projeto)
4. [Instalar as dependências](#4--instalar-as-dependências-npm-install)
5. [Testar localmente no PC](#5--testar-localmente-no-pc)
6. [Testar com dois browsers](#6--testar-multiplayer-com-dois-browsers)
7. [Opção A: Correr na rede local (sala de aula)](#7--opção-a-correr-na-rede-local-sala-de-aula)
8. [Opção B: Publicar online com Render.com](#8--opção-b-publicar-online-com-rendercom)
9. [No dia da aula](#9--no-dia-da-aula)
10. [Troubleshooting (problemas comuns)](#10--troubleshooting-problemas-comuns)

---

## 1 — Instalar o Node.js

O Node.js é o programa que corre o servidor multiplayer no seu PC.
Sem ele, nada funciona.

### Passos:

1. Abrir o browser e ir a: **https://nodejs.org**
2. Clicar no botão verde **LTS** (versão estável — ex: "20.x.x LTS")
   - NÃO clicar em "Current" — queremos a versão estável
3. O download começa automaticamente (ficheiro `.msi` no Windows)
4. Abrir o ficheiro descarregado (`node-v20.x.x-x64.msi`)
5. No instalador:
   - Clicar **Next**
   - Aceitar os termos → **Next**
   - Deixar o caminho padrão → **Next**
   - Deixar todos os componentes selecionados → **Next**
   - **NÃO** marcar "Automatically install the necessary tools" → **Next**
   - Clicar **Install**
   - Esperar... → **Finish**

### Verificar que instalou corretamente:

1. Abrir o **Prompt de Comando** (CMD):
   - Pressionar `Win + R`
   - Escrever `cmd` e pressionar Enter
2. Escrever:
   ```
   node --version
   ```
   Deve aparecer algo como: `v20.11.0` (ou superior)
3. Escrever:
   ```
   npm --version
   ```
   Deve aparecer algo como: `10.2.4` (ou superior)

Se ambos mostram versões, o Node.js está instalado. Pode fechar o CMD.

---

## 2 — Instalar o Git

O Git é necessário para descarregar o projeto do GitHub.
Se já tem o GitHub Desktop instalado, o Git já está incluído.

### Verificar se já tem:

1. Abrir o CMD (`Win + R` → `cmd` → Enter)
2. Escrever:
   ```
   git --version
   ```
   - Se aparecer `git version 2.x.x` → já tem, pode saltar para o passo 3
   - Se aparecer erro → precisa instalar

### Instalar o Git:

1. Ir a: **https://git-scm.com/download/win**
2. O download deve começar automaticamente
3. Abrir o ficheiro descarregado
4. No instalador, clicar **Next** em TUDO (deixar todas as opções padrão)
5. Clicar **Install** → esperar → **Finish**
6. **FECHAR** e **REABRIR** o CMD
7. Escrever `git --version` para confirmar

### Alternativa: GitHub Desktop

Se preferir interface gráfica em vez de terminal:
1. Ir a: **https://desktop.github.com**
2. Descarregar e instalar
3. Fazer login com a sua conta GitHub
4. Pode usar para clonar repositórios com cliques em vez de comandos

---

## 3 — Descarregar o projeto

### Opção A: Com o terminal (CMD)

1. Abrir o CMD
2. Navegar para onde quer guardar o projeto. Exemplo:
   ```
   cd C:\Users\SeuNome\Desktop
   ```
3. Clonar o repositório:
   ```
   git clone https://github.com/Gil-Araujo/TesteAula2_Metaverso.git
   ```
4. Entrar na pasta:
   ```
   cd TesteAula2_Metaverso
   ```

### Opção B: Com o GitHub Desktop

1. Abrir o GitHub Desktop
2. Clicar em **File** → **Clone Repository**
3. No separador **URL**, colar:
   ```
   https://github.com/Gil-Araujo/TesteAula2_Metaverso.git
   ```
4. Escolher onde guardar (ex: Desktop)
5. Clicar **Clone**

### Opção C: Download direto (sem Git)

1. Ir a: **https://github.com/Gil-Araujo/TesteAula2_Metaverso**
2. Clicar no botão verde **Code**
3. Clicar **Download ZIP**
4. Extrair o ZIP para uma pasta (ex: Desktop)
5. A pasta extraída chama-se `TesteAula2_Metaverso-master` — pode renomear para `TesteAula2_Metaverso`

---

## 4 — Instalar as dependências (`npm install`)

Este passo descarrega as bibliotecas que o servidor precisa.
Só precisa de fazer isto **UMA VEZ** (ou quando muda de computador).

### Passos:

1. Abrir o CMD
2. Navegar até à pasta do projeto:
   ```
   cd C:\Users\SeuNome\Desktop\TesteAula2_Metaverso
   ```
   (ajustar o caminho conforme onde guardou)
3. Escrever:
   ```
   npm install
   ```
4. Esperar (pode demorar 30 segundos a 2 minutos)
5. Vai aparecer muita informação no terminal — é normal
6. No final deve ver algo como:
   ```
   added 85 packages in 25s
   ```
7. Se aparecerem "warnings" amarelos — é normal, pode ignorar
8. Se aparecerem "ERRORS" vermelhos — ver a secção Troubleshooting

### O que aconteceu?

O `npm install` leu o ficheiro `package.json` e descarregou 3 bibliotecas:
- **express** — servidor web (serve os ficheiros HTML)
- **open-easyrtc** — sinalização WebRTC (liga os browsers entre si)
- **socket.io** — comunicação em tempo real

Estas bibliotecas ficam numa pasta chamada `node_modules/`.
Esta pasta é grande (~30MB) mas NÃO vai para o GitHub (está no `.gitignore`).

---

## 5 — Testar localmente no PC

### Passos:

1. No CMD, certificar que está na pasta do projeto:
   ```
   cd C:\Users\SeuNome\Desktop\TesteAula2_Metaverso
   ```
2. Iniciar o servidor:
   ```
   npm start
   ```
3. Deve aparecer:
   ```
   =============================================
     SERVIDOR MULTIPLAYER A CORRER!
   =============================================

     No SEU browser:   http://localhost:3001

     Para os ALUNOS:   http://SEU_IP:3001
     (substituir SEU_IP pelo IP da sua rede Wi-Fi)

     Descobrir IP:  ipconfig  (Windows)
   =============================================
   ```
4. Abrir o browser (Chrome recomendado)
5. Ir a: **http://localhost:3001**
6. Deve ver:
   - Um cenário 3D com chão verde e panorama no céu
   - Um coração 3D a rodar
   - Dois cubos e uma esfera (à distância)
   - Um painel de instruções no canto superior esquerdo
   - Um pequeno círculo branco no centro (cursor/retículo)

### Se a cena apareceu → o servidor está a funcionar!

Para **parar** o servidor: no CMD, pressionar `Ctrl + C`.

**IMPORTANTE:** O terminal com o servidor tem de ficar ABERTO durante
toda a utilização. Se fechar o terminal, o servidor para e ninguém
consegue aceder.

---

## 6 — Testar multiplayer com dois browsers

Para confirmar que o multiplayer funciona:

1. Ter o servidor a correr (`npm start`)
2. Abrir **http://localhost:3001** no Chrome
3. Abrir **http://localhost:3001** num segundo separador (ou outro browser)
4. Em cada separador, mexer o rato — deve ver:
   - No separador 1: uma esfera colorida a representar o "jogador" do separador 2
   - No separador 2: uma esfera colorida a representar o "jogador" do separador 1
5. Clicar num dos cubos coloridos num separador
   - A cor deve mudar nos DOIS separadores

Se isto funciona, o multiplayer está operacional!

---

## 7 — Opção A: Correr na rede local (sala de aula)

Se os alunos estão FISICAMENTE na mesma sala e na mesma rede Wi-Fi:

### Descobrir o seu IP:

1. No CMD (abrir outro, o do servidor tem de ficar a correr), escrever:
   ```
   ipconfig
   ```
2. Procurar a secção **"Wireless LAN adapter Wi-Fi"** (ou similar)
3. Encontrar a linha **"IPv4 Address"**: ex: `192.168.1.42`
4. Este é o seu IP local

### Os alunos acedem a:

```
http://192.168.1.42:3001
```
(substituir `192.168.1.42` pelo SEU IP real)

### Requisitos:
- O seu PC e os dispositivos dos alunos devem estar na **mesma rede Wi-Fi**
- O **firewall** do Windows pode bloquear. Se os alunos não conseguem ligar:
  1. No Windows, procurar "Firewall" nas definições
  2. Clicar "Permitir uma aplicação ou funcionalidade através do Firewall"
  3. Clicar "Alterar definições"
  4. Procurar "Node.js" na lista
  5. Marcar as caixas **Privada** e **Pública**
  6. Se "Node.js" não aparecer, clicar "Permitir outra aplicação" e navegar até `C:\Program Files\nodejs\node.exe`
  7. Clicar OK

### Nos óculos Meta Quest:
1. Garantir que o Quest está na mesma rede Wi-Fi
2. No Quest, abrir o **browser** (ícone de globo)
3. Escrever o URL: `http://192.168.1.42:3001`
4. A cena VR deve carregar — com imersão total!

---

## 8 — Opção B: Publicar online com Render.com

Se os alunos estão REMOTOS ou quer evitar problemas de rede local,
pode publicar o servidor online gratuitamente.

### 8.1 — Criar conta no GitHub (se não tem)

1. Ir a: **https://github.com**
2. Clicar **Sign up**
3. Preencher email, password, username
4. Verificar o email

### 8.2 — Publicar o projeto no GitHub

**Com GitHub Desktop:**
1. Abrir o GitHub Desktop
2. Clicar **File** → **Add Local Repository**
3. Escolher a pasta `TesteAula2_Metaverso`
4. Se pedir para criar repositório, clicar **Create Repository**
5. Clicar **Publish Repository** (botão azul no topo)
6. Desmarcar "Keep this code private" se quiser que seja público
7. Clicar **Publish Repository**

**Com terminal:**
```
cd C:\Users\SeuNome\Desktop\TesteAula2_Metaverso
git init
git add .
git commit -m "Aula 2 - Metaverso VR Multiplayer"
git remote add origin https://github.com/SEU_USERNAME/TesteAula2_Metaverso.git
git push -u origin master
```

### 8.3 — Criar conta no Render.com

1. Ir a: **https://render.com**
2. Clicar **Get Started for Free**
3. Clicar **GitHub** (fazer login com a conta do GitHub)
4. Autorizar o Render a aceder ao GitHub

### 8.4 — Criar o serviço no Render

1. No painel do Render, clicar **New +** → **Web Service**
2. Clicar **Build and deploy from a Git repository** → **Next**
3. Procurar **TesteAula2_Metaverso** na lista de repositórios
   - Se não aparece: clicar **Configure account** e dar acesso ao Render
4. Clicar **Connect** ao lado do repositório

### 8.5 — Configurar o serviço

Preencher os campos:

| Campo | Valor |
|-------|-------|
| **Name** | `testeaula2-metaverso` (ou outro nome à sua escolha) |
| **Region** | `Frankfurt (EU)` (ou a mais próxima de si) |
| **Branch** | `master` (ou `main`) |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node server.js` |
| **Instance Type** | **Free** |

5. Clicar **Create Web Service**
6. Esperar 2-5 minutos enquanto o Render instala tudo
7. O estado muda para **"Live"** com um ponto verde
8. O URL aparece no topo: algo como `https://testeaula2-metaverso.onrender.com`

### 8.6 — Testar o URL

1. Clicar no URL (ou copiar para o browser)
2. **Primeira vez demora ~30-50 segundos** (o servidor grátis "adormece" quando ninguém usa)
3. A cena VR deve aparecer igual à versão local

### 8.7 — Notas sobre o plano gratuito do Render

- O servidor **adormece** após 15 minutos sem ninguém ligado
- Quando alguém acede, demora **30-50 segundos a acordar**
- **Antes da aula:** abra o URL 2 minutos antes para "acordar" o servidor
- O serviço **não desaparece** — fica ativo enquanto a sua conta existir
- Se fizer alterações ao código:
  1. Fazer commit e push no GitHub
  2. No Render: clicar **Manual Deploy** → **Deploy latest commit**
  3. Esperar 2-3 minutos

---

## 9 — No dia da aula

### Lista de verificação (15 min antes da aula):

- [ ] **Servidor:** Está a correr? (local: `npm start` / online: URL do Render aberto)
- [ ] **Teste rápido:** Abrir o URL em 2 separadores, confirmar que vê 2 avatares
- [ ] **URL para alunos:** Escrever no quadro ou enviar por email/chat
- [ ] **Firewall:** Se local, confirmar que Node.js está permitido no firewall

### URL para dar aos alunos:

- **Se o servidor corre no seu PC (rede local):**
  ```
  http://SEU_IP:3001
  ```
  (ex: `http://192.168.1.42:3001`)

- **Se publicou no Render.com:**
  ```
  https://testeaula2-metaverso.onrender.com
  ```

### O que dizer aos alunos:

> "Abram o browser no telemóvel, tablet ou computador.
> Escrevam este endereço: [URL].
> Vão ver uma cena 3D. Usem WASD para andar e arrastem o rato para olhar.
> As esferas coloridas são os vossos colegas!"

### Nos óculos Meta Quest:

1. O aluno coloca os óculos
2. Abre o browser (ícone do globo no menu)
3. Escreve o URL
4. A cena aparece em VR imersivo
5. Para interagir: olha para um objeto e espera 1.5 segundos (o cursor encolhe)

---

## 10 — Troubleshooting (problemas comuns)

### `npm install` falha

| Erro | Solução |
|------|---------|
| "npm is not recognized" | Node.js não está instalado. Voltar ao passo 1. |
| "ENETUNREACH" ou "network error" | Sem internet. Ligar à rede e tentar de novo. |
| Erros vermelhos com "gyp" | Ignorar se o install completa. São warnings de módulos opcionais. |
| "EACCES" / permissões | Abrir o CMD como Administrador (clicar direito → Executar como admin). |

Para limpar e tentar de novo:
```
rmdir /s /q node_modules
del package-lock.json
npm install
```

### `npm start` falha

| Erro | Solução |
|------|---------|
| "Cannot find module 'express'" | Não correu `npm install`. Correr agora. |
| "EADDRINUSE" | A porta 3001 já está ocupada. Fechar outros terminais com servidor. Ou mudar a porta em `server.js` (linha 35). |
| "Error: listen EACCES" | A porta está bloqueada. Tentar porta 8080: mudar `3001` para `8080` em `server.js`. |

### Alunos não conseguem ligar (rede local)

| Problema | Solução |
|----------|---------|
| "Página não encontrada" | Verificar IP e porta. O URL deve ser `http://` (não `https://`). |
| Timeout / não carrega | Firewall do Windows está a bloquear. Ver passo 7 (firewall). |
| Carrega mas sem multiplayer | Todos devem estar na MESMA rede Wi-Fi. |

### Avatares não aparecem

| Problema | Solução |
|----------|---------|
| Não vejo os outros jogadores | Abrir a consola (F12 → Console). Se há erros vermelhos de "easyrtc", recarregar (F5). |
| Esfera do colega não mexe | Pode haver lag. Esperar uns segundos. Se persistir, ambos recarregarem. |

### Objetos partilhados não sincronizam

| Problema | Solução |
|----------|---------|
| Clico no cubo mas o colega não vê a mudança | Recarregar a página em ambos os browsers. |
| Cor muda localmente mas não nos outros | O NAF pode não estar ligado. Verificar consola (F12) por erros. |

### No Meta Quest

| Problema | Solução |
|----------|---------|
| Não carrega | Confirmar que o Quest está na mesma rede Wi-Fi. URL deve ser `http://` (não `https://`). |
| Cena aparece mas sem VR imersivo | Clicar no ícone de VR (óculos) no canto inferior direito da cena. |
| Muito lento / lag | O Quest tem hardware limitado. É normal algum lag com cenas complexas. |

### No Render.com

| Problema | Solução |
|----------|---------|
| URL mostra erro 502 | O servidor está a acordar. Esperar 30-50 segundos e recarregar. |
| Alterações não aparecem | Depois de push, clicar **Manual Deploy** → **Deploy latest commit** no painel do Render. |
| Build falha no Render | Verificar os logs no painel do Render. Geralmente é um erro no `package.json`. |

---

## Estrutura de ficheiros do projeto

```
TesteAula2_Metaverso/
├── server.js                    ← Servidor multiplayer (Node.js)
├── package.json                 ← Lista de dependências
├── .gitignore                   ← Ignora node_modules no Git
├── PLANO_AULA2.md              ← Plano pedagógico da aula
├── GUIA_COMPLETO_SETUP.md      ← Este guia
└── public/                      ← Ficheiros servidos aos browsers
    ├── index.html               ← A cena VR (HTML + A-Frame)
    ├── 2019_07_05_...jpg        ← Imagem panorâmica 360°
    └── assets/
        └── heart/               ← Modelo 3D do coração
            ├── HumanHeart_OBJ.obj
            ├── HumanHeart_OBJ.mtl
            └── *.png            ← Texturas do coração
```

---

## Resumo rápido (para quem já fez uma vez)

```bash
# Entrar na pasta
cd TesteAula2_Metaverso

# Instalar dependências (só 1ª vez)
npm install

# Iniciar servidor
npm start

# Abrir no browser
# http://localhost:3001

# IP para alunos (rede local)
ipconfig
# → usar IPv4 Address, ex: http://192.168.1.42:3001

# Ou usar o URL do Render.com
# https://testeaula2-metaverso.onrender.com
```
