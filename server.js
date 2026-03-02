// =====================================================
//  SERVIDOR MULTIPLAYER — Aula 2: Integração no Metaverso
//  Este ficheiro corre no PC do formador.
//  Os alunos acedem pelo browser ao IP deste PC.
// =====================================================

var express = require("express");
var http    = require("http");
var easyrtc = require("open-easyrtc");
var io = require("socket.io");

// --- Criar a aplicação e o servidor ---
var app    = express();
var server = http.createServer(app);

// --- Servir os ficheiros da pasta "public" ---
// (index.html, imagens, modelos 3D)
app.use(express.static("public"));

// --- Configurar Socket.IO (comunicação em tempo real) ---
var socketServer = io.listen(server);

// --- Iniciar o EasyRTC (sinalização para ligações entre browsers) ---
easyrtc.listen(app, socketServer, null, function(err, rtcRef) {
  if (err) {
    console.error("ERRO ao iniciar EasyRTC:", err);
    return;
  }
  console.log("EasyRTC pronto.");
});

// --- Iniciar o servidor ---
// process.env.PORT é usado pelo Render.com (hosting online)
// 3001 é usado quando corre localmente no PC do formador
var PORT = process.env.PORT || 3001;
server.listen(PORT, "0.0.0.0", function() {
  console.log("");
  console.log("=============================================");
  console.log("  SERVIDOR MULTIPLAYER A CORRER!");
  console.log("=============================================");
  console.log("");
  console.log("  No SEU browser:   http://localhost:" + PORT);
  console.log("");
  console.log("  Para os ALUNOS:   http://SEU_IP:" + PORT);
  console.log("  (substituir SEU_IP pelo IP da sua rede Wi-Fi)");
  console.log("");
  console.log("  Descobrir IP:  ipconfig  (Windows)");
  console.log("=============================================");
  console.log("");
});
