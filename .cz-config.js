module.exports = {
  types: [
    { value: 'feat', name: 'feat: A new feature' },
    { value: 'fix', name: 'fix: A bug fix' },
    { value: 'docs', name: 'docs: Documentation only changes' },
    { value: 'test', name: 'test: Adding missing tests' },
    {
  value: 'chore',
  name: 'chore: Changes to the build process or auxiliary tools\n    and libraries such as documentation generation',
    },
    { value: 'revert', name: 'revert: Revert to a commit' },
  ],
  skipQuestions: ['scope', 'footer', 'body'],
  appendBranchNameToCommitMessage: false,
  allowTicketNumber: false,
}