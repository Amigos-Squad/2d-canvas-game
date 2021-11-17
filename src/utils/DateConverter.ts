class DateConverter {
  convertISOtoLocal = (date: string) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };

  convertISOtoLocalTime = (date: string) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      minute: 'numeric',
      hour: 'numeric',
    });
  };
}

export const dateConverter = new DateConverter();
