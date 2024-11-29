import Database from 'better-sqlite3';
import { validateTableInsert } from './utils/validateTableInsert';
const db = new Database('../../database.db');
db.pragma('journal_mode = WAL');

export interface TableProperties {
  property: string;
  value: string | number;
}

export const createTableObj = async (
  tableName: string,
  tableProperties: TableProperties[]
) => {
  const sql = `
        INSERT INTO ${tableName} (${tableProperties.map(
    (property) => property.property
  )})
        VALUES
        (${tableProperties.map(() => '?')});
    `;

  const isValid = await validateTableInsert(
    tableName,
    tableProperties
  );
  if (!isValid) {
  }
  const tablePropertiesInsert = tableProperties.map(
    (property) => property.value
  );

  db.prepare(sql).run(...tablePropertiesInsert);
};
