import express from "express";

const app = express();

app.get("/testar", async (req, res) => {

  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mensagem: "POST saindo do Render"
    })
  });

  const data = await response.json();

  res.json({
    sucesso: true,
    destino: data
  });
});

app.listen(10000, () => {
  console.log("Servidor rodando");
});
