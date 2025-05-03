
'use client';

import { useState, useEffect } from 'react';

export function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    // Return a placeholder or null while waiting for client-side rendering
    // Returning the current server year might be okay if mismatch is acceptable initially
    // but setting via effect ensures client-side value is used post-hydration.
     // For simplicity, return placeholder, could also calculate server year and show it initially.
     // Let's return the server's year initially and let useEffect update it.
     return new Date().getFullYear();
  }

  return <>{year}</>;
}
