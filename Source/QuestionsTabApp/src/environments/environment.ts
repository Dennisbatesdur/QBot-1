export const environment = {
    production: false,
    apiBaseUrl: "https://questionmbcd.azurewebsites.net/api/Request/",
    selfUrl: "https://questionmbcd.azurewebsites.net",
    
    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "99eabd41-11a3-4fd4-8fc8-b05e4ab73240",
        clientId: "d82b0e29-9359-4e0a-be93-433b28ed2cd3",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
