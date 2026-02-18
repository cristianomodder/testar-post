import express from "express";

const app = express();

app.get("/testar", async (req, res) => {
  try {

    const payload = {
      id: "5a40754d-5a2f-4345-b317-71e28553a408",
      external_id: "A7ECIQJ1BU",
      total_amount: "525",
      status: "AUTHORIZED",
      payment_method: "PIX"
    };

    const response = await fetch("https://gtex.beefund.co/ipn/pix", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();

    res.json({
      sucesso: true,
      resposta_destino: text
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
