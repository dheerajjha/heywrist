import { MongoClient, type Db } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  return new MongoClient(uri).connect();
}

export async function getDb(): Promise<Db> {
  const promise =
    global._mongoClientPromise ??
    (global._mongoClientPromise = createClientPromise());
  const client = await promise;
  return client.db(process.env.MONGODB_DB || "heywrist");
}
