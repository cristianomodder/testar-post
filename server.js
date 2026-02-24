import express from "express";

const app = express();

app.get("/testar", async (req, res) => {
  try {
    const payload = {
      external_id: "UQSJRWJ12F",
      status: "AUTHORIZED",
      timestamp: "2026-02-24 14:39:33"
    };

    const response = await fetch("https://beefund.co/ipn/pix", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.text();

    res.json({
      enviado: payload,
      resposta: data
    });

  } catch (error) {
    res.status(500).json({
      erro: error.message
    });
  }
});

app.listen(10000, () => {
  console.log("Servidor rodando na porta 10000");
});
