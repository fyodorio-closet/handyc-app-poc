import HourDivider from '../components/HourDivider';
import HourContent from '../components/HourContent';
import { hourLabels } from '../utils/hourLabels';

export default function Home() {
  return (
    <section>
      <ul class="list-unstyled">
        <For each={hourLabels()} fallback={<div>Loading...</div>}>
          {(item) => (
            <li class="py-3">
              <HourDivider label={item} />
              <HourContent />
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
