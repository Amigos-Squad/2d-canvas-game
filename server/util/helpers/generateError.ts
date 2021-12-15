export enum ERRORS {
  BadRequest = 'BadRequest',
}

export const generateError = (text?: string | number | unknown) => {
  const data: Record<string, string | number | unknown> = {
    reason: ERRORS.BadRequest,
  };

  if (text) {
    data.reason = text;
  }

  return data;
};
