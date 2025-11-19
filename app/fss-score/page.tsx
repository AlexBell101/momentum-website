'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FSSScoreRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/momentum/fss-score');
  }, [router]);

  return null;
}
