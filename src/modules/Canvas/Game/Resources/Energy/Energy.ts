import { EventBus } from '@/utils';
import { EVENT_BUS_EVENTS } from '../..';
import { IStatusPayload } from '../../Statuses.types';
import { IEnergyBased } from '../Resources.types';

export enum EnergizedChange {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export class Energy {
  eventBus: EventBus<EVENT_BUS_EVENTS>;

  energy: number;

  energyBlock: number | null = null;

  energySpend: number | null = null;

  energized: IEnergyBased[];

  lastTime: number = 0;

  constructor(eventBus: EventBus<EVENT_BUS_EVENTS>, energized: IEnergyBased[]) {
    this.eventBus = eventBus;
    this.energy = 50;
    this.energized = energized;
    this.registerateEvents();
  }

  addEnergy = (e: number) => {
    this.energy += e
  }

  registerateEvents() {
    this.eventBus.on(
      EVENT_BUS_EVENTS.ENERGIZED_CHANGE,
      this.handleEnergizedChange
    );
  }

  handleEnergizedChange = (item?: IEnergyBased, type?: EnergizedChange) => {
    if (item && type) {
      if (type === EnergizedChange.ADD) {
        this.energized.push(item);
      } else {
        this.energized = this.energized.filter(
          (i) => i.serialNumber !== item.serialNumber
        );
      }
    }

    this.energyBlock = null;
    this.energySpend = null;
  };

  checkFixed() {
    if (this.energyBlock === null || this.energySpend === null) {
      const { block, spend } = this.energized.reduce(
        (acc: { block: number; spend: number }, item: IEnergyBased) => {
          acc.block += item.energyBlock;
          acc.spend += -item.energySpend + item.energyGenerate;
          return acc;
        },
        { block: 0, spend: 0 }
      );

      this.energyBlock = block;
      this.energySpend = spend;
    }
  }

  update(time: number) {
    this.checkFixed();
    if (time - this.lastTime > 1) {
      this.energy += this.energySpend!;
      this.eventBus.emit(EVENT_BUS_EVENTS.ENERGY_CHANGE, {
        stateKey: 'energyState',
        payload: {
          energy: this.energy,
          block: this.energyBlock,
          spend: this.energySpend,
        },
      } as IStatusPayload);
      this.lastTime = time;
    }
  }
}
