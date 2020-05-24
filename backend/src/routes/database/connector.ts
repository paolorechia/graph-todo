import { MongoClient, Db } from 'mongodb';
import assert from 'assert';

class Database {
  client: MongoClient;
  url: string;
  dbName: string;
  db: Db;

  constructor(url = 'mongodb://localhost:27017',
    dbName = 'example') {
    this.url = url;
    this.dbName = dbName;
    this.client = new MongoClient(url);
  } 
  connect = (): void => {
    this.client.connect( (err) => {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      this.db = this.client.db(this.dbName);
    });
  }
}

const db: Database =  new Database();

export { db, Database }
