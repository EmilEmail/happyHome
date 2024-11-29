import { getAllFromDB } from '../../get/AllFromDB';
import { TableProperties } from '../createTableObj';

export const validateTableInsert = async (
  tableName: string,
  tableProperties: TableProperties[]
) => {
  const tables = await getAllFromDB(tableName);
  if (tables.find((table) => table.name === tableName)) {
    return false;
  } else {
    return true;
  }
  //More validations...
};
