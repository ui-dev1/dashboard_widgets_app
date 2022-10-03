export const IS_AUTH = `IS_AUTH`;

export function isAuthenticated(payload) {
    return {
        type: IS_AUTH,
        payload
    };
}
