'use client';

import { useEffect } from 'react';

export default function DocsRedirect() {
  useEffect(() => {
    window.location.href = 'https://docs.eventkarma.ai';
  }, []);

  return null;
}
