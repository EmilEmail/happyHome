import Database from 'better-sqlite3';
const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

interface TableProperties {
  property: string;
  type: 'TEXT' | 'NUMBER';
}

export const createTable = (
  tableName: string,
  tableProperties: TableProperties[]
) => {
  const sql = `
        CREATE TABLE ${tableName}
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ${tableProperties.map((item) => {
              return `${item.property} ${item.type} NOT NULL`;
            })}
        )
    `;

  db.prepare(sql).run();
};
