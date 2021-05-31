import * as ipModel from "../model/ip.js";
import * as ipService from "../service/ip.js";

export const addIp = (req, res) => {
  const query = req.query;

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const data = query.data && query.data.trim();

  const errMessage = [];
  if (!ip) {
    errMessage.push("can not get ip");
  }

  if (!data) {
    errMessage.push("missing data");
  }

  if (errMessage.length > 0) {
    return res.status(400).json({ error: errMessage.join(", ") });
  }

  return ipService
    .addIp(ip, data)
    .then(() => res.status(201).send(ip))
    .catch((error) => res.status(400).json({ error }));
};

export const getIps = (req, res) => {
  const query = req.query;

  const data = query.data && query.data.trim();

  return ipService
    .getIps(data)
    .then((result) => res.send(result))
    .catch((error) => res.status(500).json({ error }));
};
