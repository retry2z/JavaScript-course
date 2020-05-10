class Data {
    fulfilled = false;
    response = undefined;
    constructor(method, uri, version, message, response) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}