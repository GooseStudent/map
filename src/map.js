export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
        this.errors.set(400, 'Bad Request');
        this.errors.set(401, 'Unauthorized');
        this.errors.set(403, 'Forbidden');
        this.errors.set(404, 'Not Found');
        this.errors.set(500, 'Internal Server Error');
    }

    translate(code) {
        if (this.errors.has(code)) { 
            return this.errors.get(code);
        }
        return 'Unknown error';
    }
}
