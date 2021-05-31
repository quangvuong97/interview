export const auth = (req, res, next) => {
  if (req.headers.authorization !== process.env.token)
    return res.status(400).json({ error: "No credentials sent!" });

  next();
};
