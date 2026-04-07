// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

Cypress.on('fail', (error) => {
  const message = error.message || ''

  if (message.includes('Timed out retrying')) {
    throw new Error(`KO personalizado: Timeout. No se encontró el elemento o no llegó al estado esperado a tiempo.`)
  }

  if (message.includes('be disabled')) {
    throw new Error(`KO personalizado: El elemento fue encontrado, pero está deshabilitado y no se pudo interactuar con él.`)
  }

  if (message.includes('being covered by another element')) {
    throw new Error(`KO personalizado: El elemento existe, pero está cubierto por otro y Cypress no puede hacer click.`)
  }

  if (message.includes('not visible')) {
    throw new Error(`KO personalizado: El elemento fue encontrado, pero no es visible para poder interactuar.`)
  }

  if (message.includes('to have text')) {
    throw new Error('KO personalizado: El elemento se encontro, pero el texto esperado no coincide con el real.')
  }

  throw error
})
