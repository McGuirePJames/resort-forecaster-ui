import {FeedbackType} from '../enums/FeedbackType';

export const FeedbackTypeLabels = new Map<number, string>([
    [FeedbackType.Bug, 'Report a bug'],
    [FeedbackType.Feature, 'Suggest a feature'],
    [FeedbackType.General, 'Contact'],
]);
