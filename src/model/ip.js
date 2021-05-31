import { firestore } from "../helper/firebase.js";

const COLEECTION_IP = "ip";

export const addIp = (ip, data) => {
  return firestore.collection(COLEECTION_IP).add({
    ip,
    data,
  });
};

export const getIps = async (conditions = []) => {
  let collection = firestore.collection(COLEECTION_IP);

  conditions.forEach((condition) => {
    collection = collection.where(
      condition.key,
      condition.operator,
      condition.value
    );
  });

  const snapshot = await collection.get();

  if (snapshot.empty) return [];

  const ips = [];

  snapshot.forEach((doc) => ips.push(doc.data()));

  return ips;
};
