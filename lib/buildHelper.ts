import * as path from 'node:path'
import * as fs from 'node:fs/promises'
import config from '../sentry.config.ts'

const configOutputPath = path.join(path.dirname(import.meta.dirname), 'static', 'config.json')
const configOutput = JSON.stringify(config)

try {
    if (config.version !== 1) {
        throw new Error(`version error: sentry.config.ts version ${config.version} is unsupported`)
    }

    await fs.writeFile(configOutputPath, configOutput)
    console.log('Saved')
} catch (error) {
    console.error('Failed to write config file:', error)
    process.exitCode = 1
}