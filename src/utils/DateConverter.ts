class DateConverter {
  convertISOtoLocal = (date: string) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };
}

export const dateConverter = new DateConverter();
