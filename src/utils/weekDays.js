import { createSignal } from 'solid-js';

export const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const weekDaysSundayFirst = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const [isSundayFirst, setIsSundayFirst] = createSignal(false);

export const weekDayLabels = () => (isSundayFirst() ? weekDaysSundayFirst : weekDays);
