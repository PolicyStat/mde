var p = require('auto-package')
var policystat = require('policystat')
var mightyiam = require('mightyiam')

p.name = 'mde'
p.description = 'Modern document editor for the web'
p.versionFile()
p.githubRepo('PolicyStat/mde')
p.author = mightyiam.person

p.devDependencies = {
  'auto-package': '^1.0.0',
  policystat: '^1.3.0',
  mightyiam: '^1.2.0'
}

p.keywords = [
  'web',
  'document',
  'editor',
]

p.license = policystat.openSource.license.pretty

p.contributors = [
  // https://docs.npmjs.com/files/package.json#people-fields-author-contributors
]

p.scripts = {
}
