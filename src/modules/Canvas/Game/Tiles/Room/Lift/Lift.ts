import { Room } from '../Room';

export class Lift extends Room {
  key = '27829c7b-d86b-4c64-a09a-1181b8fff3bd';

  scheme = [
    [4.1, 4.2],
    [4.3, 4.4],
  ];

  horizontalCellCount = 2;

  data = {
    isAllowVertical: true,
  };
}
