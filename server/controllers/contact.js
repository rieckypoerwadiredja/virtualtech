module.exports = {
  postContact: async (req, res, next) => {
    try {
      if (!req.body) {
        return res.status(400).send("Bad Request: request body is empty");
      }
      console.log(req.body);
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzNhot1efD4TJTXRJcYCChTxtB7iGu2aFgbUkPC-pv1gtjPw1xThlQVbDxjoFxZV-4WDg/exec";

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log("Success!");
          res.status(200).send("Success");
          // TODO: Buat validasi input!!
          // TODO: Buat alert suskses dan gagal!
        })
        .catch((error) => console.error("Error!", error.message));
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  },
};
