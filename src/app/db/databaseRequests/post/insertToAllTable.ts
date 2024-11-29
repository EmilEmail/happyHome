import Database from 'better-sqlite3';
import { TableProperties } from './createTableObj';
const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

export const InsertToAllTables = (
  tableName: string,
  tableProperties: TableProperties[]
) => {
  const stringifiedProperties = JSON.stringify(tableProperties);

  const sql = `
    INSERT INTO allTables (name, properties)
    VALUES (?,?)
    `;

  db.prepare(sql).run(tableName, stringifiedProperties);
};
