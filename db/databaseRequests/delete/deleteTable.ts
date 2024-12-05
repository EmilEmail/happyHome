import Database from 'better-sqlite3';
const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

export const deleteTable = async (tableName: string) => {
  try {
    const sql = `
              DROP TABLE ${tableName}
          `;

    db.prepare(sql).run();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
