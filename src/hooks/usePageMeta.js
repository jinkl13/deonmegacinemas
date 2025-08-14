import { useEffect } from 'react';

export function usePageMeta(title, faviconPath = '/deon-logo-1.png') {
  useEffect(() => {
    document.title = title;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconPath;
  }, [title, faviconPath]);
}