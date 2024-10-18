import { PrayerInputClient } from './PrayerInputClient';
import { submitPrayer } from './actions';

export default function PrayerInputPage() {
  return <PrayerInputClient serverAction={submitPrayer} />;
}
