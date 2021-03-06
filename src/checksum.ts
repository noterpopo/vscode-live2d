import vscode = require('vscode')
import fs = require('fs')
import path = require('path')
import crypto = require('crypto')


const appDir = path.dirname(require.main.filename)
const rootDir = path.join(appDir, '..')

const productFile = path.join(rootDir, 'product.json')
const origFile = `${productFile}.orig.${vscode.version}`



export function apply() {
  const product = require(productFile)
  let changed = false
  for (const [filePath, curChecksum] of (<any>Object).entries(product.checksums)) {
    const checksum = computeChecksum(path.join(appDir, ...filePath.split('/')))
    if (checksum !== curChecksum) {
      product.checksums[filePath] = checksum
      changed = true
    }
  }
  if (changed) {
    const json = JSON.stringify(product, null, '\t')
    try {
      if (!fs.existsSync(origFile)) {
        fs.renameSync(productFile, origFile)
      }
      fs.writeFileSync(productFile, json, { encoding: 'utf8' })
    } catch (err) {
      console.error(err)
    }
  }
}

export function restore() {
  try {
    if (fs.existsSync(origFile)) {
      fs.unlinkSync(productFile)
      fs.renameSync(origFile, productFile)
    }
  } catch (err) {
    console.error(err)
  }
}

function computeChecksum(file) {
  var contents = fs.readFileSync(file)
  return crypto
    .createHash('md5')
    .update(contents)
    .digest('base64')
    .replace(/=+$/, '')
}

export function cleanupOrigFiles() {
  // Remove all old backup files that aren't related to the current version
  // of VSCode anymore.
  const oldOrigFiles = fs.readdirSync(rootDir)
    .filter(file => /\.orig\./.test(file))
    .filter(file => !file.endsWith(vscode.version))
  for (const file of oldOrigFiles) {
    fs.unlinkSync(path.join(rootDir, file))
  }
}