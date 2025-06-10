
import { describe, it, expect } from 'vitest';
import { zegHallo } from './Functies.js';

describe('Functies', () => {
    it('zegHallo', () => {
        expect(zegHallo("Peter")).toBe("Hallo Peter");
    });
});

