import * as ipModel from "../model/ip.js";

export const addIp = async (ip, data) => {
  try {
    const ipdb = await ipModel
      .getIps([
        { key: "ip", operator: "==", value: ip },
        { key: "data", operator: "==", value: data },
      ])
      .then((result) => result && result[0]);

    if (ipdb) throw "ip and data is exist";

    return await ipModel.addIp(ip, data);
  } catch (error) {
    throw error;
  }
};

export const getIps = async (data) => {
  try {
    const condition = [];

    // lọc theo data
    // if (data) condition.push({ key: "data", operator: "==", value: data });

    return await ipModel.getIps(condition);
  } catch (error) {
    throw error;
  }
};
