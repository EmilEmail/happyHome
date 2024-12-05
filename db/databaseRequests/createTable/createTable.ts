import Database from 'better-sqlite3';
const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

interface TableProperties {
  property: string;
  type: 'TEXT' | 'INTEGER';
}

export const createTable = async (
  tableName: string,
  tableProperties: TableProperties[]
) => {
  try {
    const sql = `
              CREATE TABLE IF NOT EXISTS ${tableName}
              (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  ${tableProperties.map((item) => {
                    return `${item.property} ${item.type} NOT NULL`;
                  })}
              )
          `;

    db.prepare(sql).run();
  } catch (error) {
    console.log('createTable: ', error);
  }
};
