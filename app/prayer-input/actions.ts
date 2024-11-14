'use server';

import { revalidatePath } from 'next/cache';

export async function submitPrayer(formData: FormData) {
  const prayer = formData.get('prayer') as string;

  if (prayer && prayer.trim()) {
    // Here you would typically save the prayer to a database
    console.log('Received prayer:', prayer);

    // Revalidate the dashboard page
    revalidatePath('/dashboard');

    return { success: true };
  }

  return { success: false, error: 'Prayer cannot be empty' };
}

export async function getPrayers() {
  return;
}
