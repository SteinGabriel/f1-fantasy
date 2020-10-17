const fs = require('fs')
const join = require('path').join
const cp = require('child_process')
const os = require('os')

const yarn = os.platform().startsWith('win') ? 'yarn.cmd' : 'yarn'

const installYarn = path => {
  if (fs.existsSync(join(path, 'package.json'))) {
    if (process.argv.some(arg => arg === '--clean') && fs.existsSync(join(path, 'node_modules'))) {
      console.log('Going to delete node_modules for', path)
      fs.rmdirSync(join(path, 'node_modules'), { recursive: true })
    }
    console.log('Starting yarn in', path)
    cp.spawn(yarn, ['install'], {
      env: process.env,
      cwd: path,
      stdio: 'inherit'
    })
  }
  fs.readdirSync(path).forEach(child => {
    if (child === 'node_modules') return
    if (child === '.aws-sam') return
    const childPath = join(path, child)
    if (fs.statSync(childPath).isDirectory()) {
      installYarn(childPath)
    }
  })
}

installYarn(__dirname)
