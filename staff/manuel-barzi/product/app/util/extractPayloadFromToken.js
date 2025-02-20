function extractPayloadFromToken(token) {
    const firstDotIndex = token.indexOf('.')
    const lastDotIndex = token.lastIndexOf('.')

    const payloadB64 = token.slice(firstDotIndex + 1, lastDotIndex)
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)

    return payload
}

export default extractPayloadFromToken