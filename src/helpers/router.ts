import router from '@/router';

export function getCurrentRoute(): string {
  return (router.currentRoute.value.name as string) || '';
}

export function getRouteComponent(): string {
  return getCurrentRoute() || 'home';
}
