import Database from 'better-sqlite3';
const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

export const getAllFromCategory = async (
  tableName: string,
  column: string
) => {
  try {
    const sql = `
              SELECT * FROM ${tableName}
              WHERE category = ?
          `;
    const response = await db.prepare(sql).all(column);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getAllFromHolder = async (
  tableName: string,
  column: string
) => {
  try {
    const sql = `
              SELECT * FROM ${tableName}
              WHERE holder = ?
          `;
    const response = await db.prepare(sql).all(column);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
