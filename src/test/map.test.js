import ErrorRepository from '../map.js';

describe('ErrorRepository', () => {
    let repo;

    beforeEach(() => {
        repo = new ErrorRepository();
    });

    test('должен создавать экземпляр класса', () => {
        expect(repo).toBeInstanceOf(ErrorRepository);
    });

    test('должен возвращать описание для существующего кода 400', () => {
        expect(repo.translate(400)).toBe('Bad Request');
    });

    test('должен возвращать описание для существующего кода 401', () => {
        expect(repo.translate(401)).toBe('Unauthorized');
    });

    test('должен возвращать описание для существующего кода 403', () => {
        expect(repo.translate(403)).toBe('Forbidden');
    });

    test('должен возвращать описание для существующего кода 404', () => {
        expect(repo.translate(404)).toBe('Not Found');
    });

    test('должен возвращать описание для существующего кода 500', () => {
        expect(repo.translate(500)).toBe('Internal Server Error');
    });

    test('должен возвращать "Unknown error"', () => {
        expect(repo.translate(999)).toBe('Unknown error');
        expect(repo.translate(200)).toBe('Unknown error');
        expect(repo.translate(418)).toBe('Unknown error');
    });
});