enum KnownTags {
    Finite = 'finite',          // Requires resources that cannot be automatically created.
    Manual = 'manual',          // Cannot be automated
    Pure = 'pure',              // Recipe that extracts from a pure resource node.
    Normal = 'normal',          // Recipe that extracts from a normal resource node.
    Impure = 'impure',          // Recipe that extracts from a impure resource node.
    Generator = 'generator',    // Generates power
    Extractor = 'extractor',    // Extracts resources from resource nodes
    Ficsmas = 'ficsmas',        // FICSMAS Recipe
    Preferred = 'preferred',    // Prioritize this recipe over others
    Terminal = 'terminal',      // Recipe produces items that no other recipe consumes
    Original = 'original',      // Recipe requires items that no other recipes produce
    Goal = 'goal'               // Space Elevator Goal Part
};

export default KnownTags;

export function getTagValues() {
    return Object.values(KnownTags);
}