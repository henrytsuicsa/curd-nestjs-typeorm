module.exports = {
  // Custom CHANGELOG.md header
  header: '# Changelog',
  // Custom release tag message
  releaseCommitMessageFormat: 'chore(release): v.{{currentTag}} :tada:',
  /**
   * Custom commit type
   * Can define custom commit type
   * section：Header of the commit type in CHANGELOG.md
   * hidden: Hide the commit in CHANGELOG.md
   */
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'feature', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'perf', section: 'Performance Improvements' },
    { type: 'revert', section: 'Reverts' },
    { type: 'docs', section: 'Documentation' },
    { type: 'style', section: 'Styles', hidden: true },
    { type: 'chore', section: 'Miscellaneous Chores', hidden: true },
    { type: 'refactor', section: 'Code Refactoring', hidden: true },
    { type: 'test', section: 'Tests', hidden: true },
    { type: 'build', section: 'Build System', hidden: true },
    { type: 'ci', section: 'Continuous Integration', hidden: true },
  ],
};
