'use client';

import { useEffect } from 'react';

export default function DocsRedirect() {
  useEffect(() => {
    window.location.href = 'https://docs.event.datakarma.ai';
  }, []);

  return null;
}
