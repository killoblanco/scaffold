import * as fs from 'fs'
import path from 'path'
import chalk from 'chalk'

const log = {
  ok: (msg) => console.log(chalk.hex('#9ACD32')(msg)),
  warn: (msg) => console.log(chalk.hex('#FF8C00')(msg)),
  err: (msg) => console.log(chalk.hex('#DC143C')(msg)),
  info: (msg) => console.log(chalk.hex('#20B2AA')(msg)),
  text: (msg) => console.log(chalk.hex('#F5F5F5')(msg))
}

function addLocaleIgnores () {
  try {
    log.text('Adding locale ignores...')
    const _filePath = path.join('.git', 'info', 'exclude')
    let _contents = fs.readFileSync(_filePath, 'utf8')

    if ((_contents.match(/^dist\/$/gm) || []).length) {
      log.warn('Locale ignores already added')
    } else {
      _contents += 'dist/\n'
      fs.writeFileSync(_filePath, _contents)
      log.ok('Successfully added locale ignores')
    }
  } catch (e) {
    log.err(e)
  }
}

(() => {
  log.info('🪄\tGetting ready to start')
  addLocaleIgnores()
  log.ok('🎉\tDone')
})()
