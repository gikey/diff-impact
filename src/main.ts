import * as core from '@actions/core'
// import { wait } from './wait.js'

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const diffFiles: string = core.getInput('diff_files')
    const changedFiles: string[] = JSON.parse(diffFiles)
    core.info(`Changed files: ${changedFiles.join(', ')}`)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
