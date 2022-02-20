import { weekDayLabels } from '../utils/weekDays';

export default function Month() {
  return (
    <table class="table table-bordered h-100">
      <thead class="table-light">
        <tr>
          <For each={weekDayLabels()} fallback={<div>Loading...</div>}>
            {(item) => <th>{item}</th>}
          </For>
        </tr>
      </thead>
      <tbody>
        <For each={new Array(6)} fallback={<div>Loading...</div>}>
          {() => (
            <tr>
              <For each={new Array(7)} fallback={<div>Loading...</div>}>
                {() => <td></td>}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
}
