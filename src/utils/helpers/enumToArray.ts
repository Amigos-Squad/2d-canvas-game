export const enumToArray = (parsedEnum: any) =>
  Object.keys(parsedEnum).map((key) => parsedEnum[key]);
