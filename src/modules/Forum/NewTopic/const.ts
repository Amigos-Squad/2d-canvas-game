import { VALIDATION_RULES } from '@/utils';

export const DEFAULT_TOPIC = {
  title: '',
  message: '',
};

export const DEFAULT_TOPIC_VALIDATION = {
  title: [VALIDATION_RULES.REQUIRED],
  message: [VALIDATION_RULES.REQUIRED],
};
