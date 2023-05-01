import { 
    ClockIcon, 
    RocketLaunchIcon, 
    ArrowTrendingUpIcon 
} from '@heroicons/vue/24/outline';

export const PAGE_TIMELINE = 'timeline';
export const PAGE_ACTIVITIES = 'activities';
export const PAGE_PROGRESS = 'progress';
export const HOURS_IN_DAY = 24;  
export const MIDNIGHT_HOUR = 0;     


export const NAV_ITEMS = {
    [PAGE_TIMELINE]: ClockIcon,
    [PAGE_ACTIVITIES]: RocketLaunchIcon,
    [PAGE_PROGRESS]: ArrowTrendingUpIcon
  }