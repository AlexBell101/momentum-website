'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FSSScoreRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/eventkarma/fss-score');
  }, [router]);

  return null;
}
