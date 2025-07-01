import { redirect } from 'next/navigation';

export default function RootPage() {
    // Immediately redirect to Turkish locale
    redirect('/tr');
} 