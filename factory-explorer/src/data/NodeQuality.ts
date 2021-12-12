import KnownTags from "../model/KnownTags";

const enum NodeQuality {
    Impure = 0,
    Normal = 1,
    Pure = 2,
}

export default NodeQuality;



export const getTag = function getTag(quality: NodeQuality) {
    switch(quality) {
        case NodeQuality.Impure:  return KnownTags.Impure;
        case NodeQuality.Normal:  return KnownTags.Normal;
        case NodeQuality.Pure:    return KnownTags.Pure;
    }
}