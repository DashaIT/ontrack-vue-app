import { HOURS_IN_DAY, NAV_ITEMS, MIDNIGHT_HOUR } from "./constants";

export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimeLineItemValid({hour}) {
    return typeof hour === 'number' 
    && hour >=MIDNIGHT_HOUR 
    && hour <= HOURS_IN_DAY
}

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isTimeLineItemValid)
}

export function validateSelectOptions(options) {
    return options.every(isSelectOptionValid)
}

function isSelectOptionValid({value, label}) {
    return typeof value === 'number' && typeof label === 'string'
}